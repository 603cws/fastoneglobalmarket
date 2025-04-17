import React, { useState, useEffect, useRef } from "react";
import * as d3 from "d3";
import axios from "axios";
import "../pages/CryptoBubbles.css";
// import { clamp } from "three/src/math/MathUtils.js";

const CryptoBubbles = () => {
  const svgRef = useRef(null);
  const positionsRef = useRef(new Map());
  const simulationRef = useRef(null);

  const [data, setData] = useState([]);
  const [selectedCoin, setSelectedCoin] = useState(null);
  const [timeRange, setTimeRange] = useState("24h");
  const [tooltipData, setTooltipData] = useState({
    visible: false,
    x: 0,
    y: 0,
    coinId: null,
  });
  const [tooltipTimeRange, setTooltipTimeRange] = useState("24h");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&price_change_percentage=24h,7d,30d`
        );

        const nodes = response.data.map((coin) => {
          const cached = positionsRef.current.get(coin.id);
          return {
            id: coin.id,
            symbol: coin.symbol,
            name: coin.name,
            price: coin.current_price,
            market_cap: coin.market_cap,
            price_change:
              coin[`price_change_percentage_${timeRange}_in_currency`],
            price_change_24h: coin.price_change_percentage_24h_in_currency,
            price_change_7d: coin.price_change_percentage_7d_in_currency,
            price_change_30d: coin.price_change_percentage_30d_in_currency,
            volume: coin.total_volume,
            url: `https://www.coingecko.com/en/coins/${coin.id}`,
            image: coin.image,
            x: cached?.x ?? Math.random() * window.innerWidth,
            y: cached?.y ?? Math.random() * window.innerHeight,
            vx: cached?.vx ?? 0,
            vy: cached?.vy ?? 0,
            fx: null,
            fy: null,
          };
        });

        setData(nodes);

        nodes.forEach((coin) => {
          positionsRef.current.set(coin.id, {
            x: coin.x,
            y: coin.y,
            vx: coin.vx,
            vy: coin.vy,
          });
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 30000);
    return () => clearInterval(interval);
  }, [timeRange]);

  useEffect(() => {
    if (!data.length || !svgRef.current) return;

    const width = window.innerWidth;
    const height = window.innerHeight;
    const svg = d3.select(svgRef.current);

    svg.selectAll("defs").remove();
    const defs = svg.append("defs");
    defs
      .append("filter")
      .attr("id", "shadow")
      .html(
        `<feDropShadow dx="0" dy="2" stdDeviation="4" flood-color="black" flood-opacity="0.3"/>`
      );

    svg
      .attr("viewBox", [0, 0, width, height])
      .attr("preserveAspectRatio", "xMidYMid meet")
      .on("click", function (event) {
        const [clickX, clickY] = d3.pointer(event);
        repelBubbles(clickX, clickY);
      });

    // const maxChange = d3.max(data, (d) => Math.abs(d.price_change || 0));
    // const cappedMax = Math.min(maxChange, 30);
    let forceStrength;
    let minRadius, maxRadius;
    let jiggle = () => (Math.random() - 1) * (timeRange === "30d" ? 2 : 5);

    if (timeRange === "24h") forceStrength = 0.03;
    else if (timeRange === "7d") forceStrength = 0.02;
    else if (timeRange === "30d") forceStrength = 0.045;

    if (window.innerWidth < 600) {
      minRadius = 15;
      maxRadius = 50;
    } else if (window.innerWidth < 1024) {
      minRadius = 20;
      maxRadius = 70;
    } else {
      minRadius = 30;
      maxRadius = 120;
    }

    // 🔁 Adjust based on timeRange
    if (timeRange === "7d") {
      minRadius -= 2;
      maxRadius -= 2;
    } else if (timeRange === "30d") {
      minRadius -= 7;
      maxRadius -= 30;
    }
    let domainMax;
    if (timeRange === "24h") domainMax = 10;
    else if (timeRange === "7d") domainMax = 30;
    else if (timeRange === "30d") domainMax = 50;

    const radiusScale = d3
      .scalePow()
      .exponent(1.3)
      .domain([0, domainMax])
      .range([minRadius, maxRadius])
      .clamp(true);

    let collisionRadius = (d) => {
      const base = radiusScale(Math.abs(d.price_change || 0));
      const cap = timeRange === "30d" ? 70 : 100;
      return Math.min(base, cap) + (timeRange === "30d" ? 0 : 10);
    };

    const node = svg
      .selectAll(".node")
      .data(data, (d) => d.id)
      .join(
        (enter) => {
          const g = enter.append("g").attr("class", "node");

          g.append("circle")
            .attr("r", (d) => {
              const base = radiusScale(Math.abs(d.price_change || 0));
              return Math.abs(d.price_change) <= 1 ? base * 0.7 : base; // 🔍 Small for flat coins
            })
            .style("fill", (d) =>
              d.price_change >= 0 ? "rgba(0,255,0,0.1)" : "rgba(255,0,0,0.1)"
            )
            .style("stroke", (d) =>
              d.price_change >= 0 ? "#00ff00" : "#ff0000"
            )
            .style("stroke-width", 2)
            .style("filter", "url(#shadow)");

          g.append("image")
            .attr("xlink:href", (d) => d.image)
            .attr("width", (d) =>
              radiusScale(Math.abs(d.price_change / 4 || 0))
            )
            .attr("height", (d) =>
              radiusScale(Math.abs(d.price_change / 4 || 0))
            )
            .attr("x", (d) => {
              const r = radiusScale(Math.abs(d.price_change / 4 || 0));
              return -r / 2;
            })
            .attr("y", (d) => {
              const r = radiusScale(Math.abs(d.price_change / 4 || 0));
              return Math.abs(d.price_change) <= 1 ? -r / 2 : -r / 2 + 10; // Shift up if symbol shown
            })
            .attr("clip-path", "circle()")
            .style("pointer-events", "none");

          // SYMBOL — only if price_change > ±1%
          g.append("text")
            .attr("class", "symbol")
            .attr("text-anchor", "middle")
            .attr("dy", ".2em")
            .style("fill", "#fff")
            .style("font-weight", "bold")
            .style(
              "font-size",
              (d) =>
                `${Math.min(
                  radiusScale(Math.abs(d.price_change || 0)) / 2.5,
                  20
                )}px`
            )
            .style("pointer-events", "none")
            .text((d) => d.symbol.toUpperCase())
            .style("display", (d) =>
              Math.abs(d.price_change) <= 1 ? "none" : "block"
            ); // 👈 KEY LINE

          // ALWAYS SHOW % CHANGE
          g.append("text")
            .attr("class", "change")
            .attr("text-anchor", "middle")
            .attr("dy", "1.8em")
            .style("fill", "#fff")
            .style(
              "font-size",
              (d) =>
                `${Math.min(
                  radiusScale(Math.abs(d.price_change || 0)) / 4,
                  16
                )}px`
            )
            .style("pointer-events", "none")
            .text((d) => `${d.price_change?.toFixed(1)}%`);

          return g;
        },
        (update) => {
          update
            .select("circle")
            .transition()
            .duration(500)
            .attr("r", (d) => {
              const base = radiusScale(Math.abs(d.price_change || 0));
              return Math.abs(d.price_change) <= 1 ? base * 0.7 : base;
            })
            .style("stroke", (d) =>
              d.price_change >= 0 ? "#00ff00" : "#ff0000"
            )
            .style("fill", (d) =>
              d.price_change >= 0 ? "rgba(0,255,0,0.1)" : "rgba(255,0,0,0.1)"
            );

          update
            .select("text.symbol")
            .text((d) => d.symbol.toUpperCase())
            .style("display", (d) =>
              Math.abs(d.price_change) <= 1 ? "none" : "block"
            );

          update
            .select("text.change")
            .text((d) => `${d.price_change?.toFixed(1)}%`);

          return update;
        },
        (exit) => exit.remove()
      );

    const drag = d3
      .drag()
      .on("start", (event, d) => {
        if (!event.active) simulationRef.current.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
      })
      .on("drag", (event, d) => {
        d.fx = event.x;
        d.fy = event.y;
      })
      .on("end", (event, d) => {
        if (!event.active) simulationRef.current.alphaTarget(0);
        d.fx = null;
        d.fy = null;
      });

    node.call(drag);

    node.on("click", (event, d) => {
      event.stopPropagation();
      setSelectedCoin(d);
      setTooltipData({
        visible: true,
        x: event.pageX,
        y: event.pageY - 100,
        coinId: d.id,
      });
    });

    if (!simulationRef.current) {
      simulationRef.current = d3
        .forceSimulation(data)
        .force("x", d3.forceX(width / 2).strength(forceStrength))
        .force("y", d3.forceY(height / 2).strength(forceStrength))
        .force("collision", d3.forceCollide(collisionRadius))
        .force("jiggle", d3.forceManyBody().strength(jiggle))
        .velocityDecay(0.92)
        .alpha(0.4)
        .alphaMin(0.001)
        .alphaDecay(0.002)
        .on("tick", ticked);
    } else {
      simulationRef.current.nodes(data);
      simulationRef.current.alphaTarget(0.3).restart();
    }

    function repelBubbles(x, y) {
      const repelRadius = 500;
      const repelStrength = 0.3;

      function localizedRepel(alpha) {
        data.forEach((d) => {
          const dx = d.x - x;
          const dy = d.y - y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < repelRadius) {
            const force = repelStrength * (1 - distance / repelRadius);
            d.vx += (dx / distance) * force;
            d.vy += (dy / distance) * force;
          }
        });
      }

      simulationRef.current.force("repel", localizedRepel);
      simulationRef.current.alpha(0.7).restart();

      setTimeout(() => {
        simulationRef.current.force("repel", null);
      }, 1500);
    }

    function ticked() {
      node.each(function (d) {
        const r = radiusScale(Math.abs(d.price_change || 0));

        if (d.x - r <= 0 || d.x + r >= width) {
          d.vx *= -1;
          d.x = Math.max(r, Math.min(width - r, d.x));
        }
        if (d.y - r <= 0 || d.y + r >= height) {
          d.vy *= -1;
          d.y = Math.max(r, Math.min(height - r, d.y));
        }

        positionsRef.current.set(d.id, {
          x: d.x,
          y: d.y,
          vx: d.vx,
          vy: d.vy,
        });
      });

      node.attr("transform", (d) => `translate(${d.x},${d.y})`);
    }
  }, [data]);

  useEffect(() => {
    const handleClickOutside = () =>
      setTooltipData({ ...tooltipData, visible: false });
    if (tooltipData.visible)
      window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, [tooltipData.visible]);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      d3.select(svgRef.current)
        .attr("viewBox", [0, 0, width, height])
        .attr("preserveAspectRatio", "xMidYMid slice");
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-[#030B20] relative">
      <svg ref={svgRef} className="bubbles-canvas w-full h-full" />

      <div className="controls">
        {/* <h1>Crypto Bubbles</h1> */}
        <div className="time-range">
          {["24h", "7d", "30d"].map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={timeRange === range ? "active" : ""}
            >
              {range.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {tooltipData.visible &&
        tooltipData.coinId &&
        (() => {
          const currentCoin = data.find((c) => c.id === tooltipData.coinId);
          if (!currentCoin) return null;

          return (
            <div
              onClick={(e) => e.stopPropagation()}
              className="absolute z-50 bg-gray-900 text-white shadow-xl rounded-2xl p-4 max-w-lg w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fade-slide-in"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">
                      {currentCoin.symbol.toUpperCase().charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold">{currentCoin.name}</h3>
                </div>
                <button
                  className="text-gray-400 hover:text-red-500 text-xl"
                  onClick={(e) => {
                    e.stopPropagation();
                    setTooltipData({ ...tooltipData, visible: false });
                  }}
                >
                  ×
                </button>
              </div>

              <div className="grid grid-cols-2 text-sm gap-y-2 mb-4">
                <div>
                  <p className="text-gray-400">Market Cap</p>
                  <p className="font-semibold">
                    ${currentCoin.market_cap.toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-gray-400">24h Volume</p>
                  <p className="font-semibold">
                    ${currentCoin.volume.toLocaleString()}
                  </p>
                </div>
              </div>

              <div className="text-sm mb-4">
                <p className="text-gray-400">Price</p>
                <p className="text-xl font-bold text-green-400">
                  ${currentCoin.price.toLocaleString()}
                </p>
              </div>

              <div className="text-sm mb-4">
                <p className="text-gray-400">Change ({tooltipTimeRange})</p>
                <p
                  className={`font-semibold ${
                    currentCoin[`price_change_${tooltipTimeRange}`] >= 0
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {currentCoin[`price_change_${tooltipTimeRange}`]}%
                </p>
              </div>

              <div className="flex justify-between mt-4 text-xs">
                {["24h", "7d", "30d"].map((label) => (
                  <button
                    key={label}
                    className={`px-2 py-1 rounded-md ${
                      tooltipTimeRange === label
                        ? "bg-green-500 text-white"
                        : "bg-gray-700 text-gray-300"
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setTooltipTimeRange(label);
                    }}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          );
        })()}
    </div>
  );
};

export default CryptoBubbles;
