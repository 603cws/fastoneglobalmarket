import React, { useState, useEffect, useRef } from "react";
import * as d3 from "d3";
import axios from "axios";
import "../pages/CryptoBubbles.css";
import {
  Sparklines,
  SparklinesBars,
  SparklinesCurve,
  SparklinesLine,
  SparklinesReferenceLine,
  SparklinesSpots,
} from "react-sparklines";
// import { clamp } from "three/src/math/MathUtils.js";

const getDaysFromRange = (range) => {
  console.log("range in getDaysFromRange", range);

  switch (range) {
    case "24h":
      return 1;
    case "7d":
      return 7;
    case "30d":
      return 30;
    case "1y":
      return 365;
    default:
      return 7;
  }
};

const CryptoBubbles = ({ height }) => {
  const svgRef = useRef(null);
  const positionsRef = useRef(new Map());
  const simulationRef = useRef(null);
  const repelPointRef = useRef(null);
  const sparklineRef = useRef(null);
  const graphRef = useRef(null);

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
  const [isRepelling, setIsRepelling] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(null);

  // const [sparklineData, setSparklineData] = useState([]);

  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     // const response = await axios.get(
    //     //   // `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&price_change_percentage=24h,7d,30d`
    //     //   `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&price_change_percentage=24h,7d,30d&x_cg_demo_api_key=CG-7AbQRHEkb37BAAFt4qDVSE68`
    //     // );
    //     let response;

    //     // First attempt: Free public API (no API key required)
    //     try {
    //       response = await axios.get(
    //         "https://api.coingecko.com/api/v3/coins/markets",
    //         {
    //           params: {
    //             vs_currency: "usd",
    //             order: "market_cap_desc",
    //             per_page: 100,
    //             price_change_percentage: "24h,7d,30d,1y",
    //             sparkline: true,
    //           },
    //         }
    //       );
    //     } catch (primaryError) {
    //       console.warn(
    //         "Public API failed. Trying demo API...",
    //         primaryError.message
    //       );

    //       // Fallback: demo API with demo key
    //       response = await axios.get(
    //         "https://api.coingecko.com/api/v3/coins/markets",
    //         {
    //           params: {
    //             vs_currency: "usd",
    //             order: "market_cap_desc",
    //             per_page: 100,
    //             price_change_percentage: "24h,7d,30d,1y",
    //             x_cg_demo_api_key: "CG-7AbQRHEkb37BAAFt4qDVSE68",
    //             sparkline: true,
    //           },
    //         }
    //       );
    //     }
    //     const nodes = response.data.map((coin) => {
    //       const cached = positionsRef.current.get(coin.id);
    //       return {
    //         id: coin.id,
    //         symbol: coin.symbol,
    //         name: coin.name,
    //         price: coin.current_price,
    //         market_cap: coin.market_cap,
    //         market_cap_rank: coin.market_cap_rank,
    //         price_change:
    //           coin[`price_change_percentage_${timeRange}_in_currency`],
    //         price_change_24h: coin.price_change_percentage_24h_in_currency,
    //         price_change_7d: coin.price_change_percentage_7d_in_currency,
    //         price_change_30d: coin.price_change_percentage_30d_in_currency,
    //         price_change_1y: coin.price_change_percentage_1y_in_currency,
    //         volume: coin.total_volume,
    //         sparkline: coin.sparkline_in_7d?.price,
    //         url: `https://www.coingecko.com/en/coins/${coin.id}`,
    //         image: coin.image,
    //         x: cached?.x ?? Math.random() * window.innerWidth,
    //         y: cached?.y ?? Math.random() * window.innerHeight,
    //         vx: cached?.vx ?? 0,
    //         vy: cached?.vy ?? 0,
    //         fx: null,
    //         fy: null,
    //       };
    //     });

    //     setData(nodes);

    //     nodes.forEach((coin) => {
    //       positionsRef.current.set(coin.id, {
    //         x: coin.x,
    //         y: coin.y,
    //         vx: coin.vx,
    //         vy: coin.vy,
    //       });
    //     });
    //   } catch (error) {
    //     console.error("Error fetching data:", error);
    //   }
    // };

    const fetchData = async () => {
      try {
        let response;

        // First attempt: Free public API (no API key required)
        try {
          response = await axios.get(
            "https://api.coingecko.com/api/v3/coins/markets",
            {
              params: {
                vs_currency: "usd",
                order: "market_cap_desc",
                per_page: 100,
                price_change_percentage: "24h,7d,30d,1y",
                sparkline: true,
              },
            }
          );
          console.log("Public API");
        } catch (primaryError) {
          console.warn(
            "Public API failed. Trying demo API...",
            primaryError.message
          );

          // Fallback: demo API with demo key
          response = await axios.get(
            "https://api.coingecko.com/api/v3/coins/markets",
            {
              params: {
                vs_currency: "usd",
                order: "market_cap_desc",
                per_page: 100,
                price_change_percentage: "24h,7d,30d,1y",
                x_cg_demo_api_key: "CG-7AbQRHEkb37BAAFt4qDVSE68",
                sparkline: true,
              },
            }
          );
          console.log("Demo API");
        }

        setData((prevData = []) => {
          const prevDataMap = new Map(prevData.map((coin) => [coin.id, coin]));

          const nodes = response.data.map((coin) => {
            const cached = positionsRef.current.get(coin.id);
            const existingCoin = prevDataMap.get(coin.id);

            return {
              id: coin.id,
              symbol: coin.symbol,
              name: coin.name,
              price: coin.current_price,
              market_cap: coin.market_cap,
              market_cap_rank: coin.market_cap_rank,
              price_change:
                coin[`price_change_percentage_${timeRange}_in_currency`],
              price_change_24h: coin.price_change_percentage_24h_in_currency,
              price_change_7d: coin.price_change_percentage_7d_in_currency,
              price_change_30d: coin.price_change_percentage_30d_in_currency,
              price_change_1y: coin.price_change_percentage_1y_in_currency,
              volume: coin.total_volume,
              sparkline: coin.sparkline_in_7d?.price,
              url: `https://www.coingecko.com/en/coins/${coin.id}`,
              image: coin.image,
              x: cached?.x ?? Math.random() * window.innerWidth,
              y: cached?.y ?? Math.random() * window.innerHeight,
              vx: cached?.vx ?? 0,
              vy: cached?.vy ?? 0,
              fx: null,
              fy: null,
              // Preserve existing sparkline_365d if available
              sparkline_365d: existingCoin?.sparkline_365d,
            };
          });

          // Update positionsRef with new positions
          nodes.forEach((coin) => {
            positionsRef.current.set(coin.id, {
              x: coin.x,
              y: coin.y,
              vx: coin.vx,
              vy: coin.vy,
            });
          });

          return nodes;
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
    // const height = window.innerHeight;
    const svg = d3.select(svgRef.current);

    svg.selectAll("defs").remove();
    const defs = svg.append("defs");

    data.forEach((d) => {
      const change = Math.abs(d.price_change || 0);
      const blur = Math.min(12, 2 + change * 0.5); // adjust glow intensity

      const glow = defs
        .append("filter")
        .attr("id", `glow-${d.id}`)
        .attr("x", "-50%")
        .attr("y", "-50%")
        .attr("width", "200%")
        .attr("height", "200%");

      glow
        .append("feGaussianBlur")
        .attr("in", "SourceGraphic")
        .attr("stdDeviation", blur)
        .attr("result", "blur");

      glow.append("feMerge").html(`
          <feMergeNode in="blur"/>
          <feMergeNode in="SourceGraphic"/>
        `);
    });

    svg
      .attr("viewBox", [0, 0, width, height])
      .attr("preserveAspectRatio", "xMidYMid meet")
      .on("click", function (event) {
        const [clickX, clickY] = d3.pointer(event);

        // Remove any existing repel force first
        simulationRef.current.force("repel", null);

        // Add a new force that pushes nodes away from the clicked point
        simulationRef.current.force(
          "repel",
          d3
            .forceManyBody()
            .strength(-300) // More negative = stronger repel
            .distanceMin(50)
            .distanceMax(100)
        );

        simulationRef.current.force(
          "x_repel",
          d3
            .forceX((d) => {
              const dx = d.x - clickX;
              return d.x + (dx || Math.random() - 0.5); // small random nudge if 0
            })
            .strength(0.1)
        );

        simulationRef.current.force(
          "y_repel",
          d3
            .forceY((d) => {
              const dy = d.y - clickY;
              return d.y + (dy || Math.random() - 0.5);
            })
            .strength(0.1)
        );

        simulationRef.current.alpha(0.7).restart();

        // Optionally after 2 seconds, remove repel forces to let bubbles settle again
        setTimeout(() => {
          simulationRef.current.force("repel", null);
          simulationRef.current.force("x_repel", null);
          simulationRef.current.force("y_repel", null);
          simulationRef.current.alpha(0.3).restart();
        }, 2000);
      });

    // const maxChange = d3.max(data, (d) => Math.abs(d.price_change || 0));
    // const cappedMax = Math.min(maxChange, 30);
    let forceStrength;
    // let minRadius, maxRadius;
    const collisionStrength = timeRange === "30d" ? 1 : 0.7;
    // let jiggle = () => (Math.random() - 1) * (timeRange === "30d" ? 2 : 5);
    let jiggle;
    if (timeRange === "30d") {
      jiggle = () => 0; // 🔥 turn off jiggle completely
    } else {
      jiggle = () => (Math.random() - 0.5) * 3;
    }

    if (timeRange === "24h") forceStrength = 0.015;
    else if (timeRange === "7d") forceStrength = 0.02;
    else if (timeRange === "30d") forceStrength = 0.008;

    // if (window.innerWidth < 600) {
    //   minRadius = 15;
    //   maxRadius = 50;
    // } else if (window.innerWidth < 1024) {
    //   minRadius = 20;
    //   maxRadius = 70;
    // } else {
    //   minRadius = 25;
    //   maxRadius = 115;
    // }

    // // 🔁 Adjust based on timeRange
    // if (timeRange === "30d") {
    //   minRadius -= 2;
    //   maxRadius -= 10;
    // }
    // const priceChanges = data.map((d) =>
    //   Math.abs(d.price_change_percentage_24h || 0)
    // );
    // const highChangeCount = priceChanges.filter(
    //   (change) => change >= 10
    // ).length;
    // const totalCoins = data.length;
    // const highChangeRatio = highChangeCount / totalCoins;
    // let domainMax;
    // if (timeRange === "24h") domainMax = 10;
    // else if (timeRange === "7d") domainMax = 30;
    // else if (timeRange === "30d") domainMax = 50;
    // if (highChangeRatio > 0.5) {
    //   // Too many high changes, keep bubbles tighter
    //   domainMax = 10;
    // } else if (highChangeRatio > 0.2) {
    //   domainMax = 20;
    // } else {
    //   // Only a few coins are spiking — we can show more range
    //   // domainMax = d3.max(priceChanges);
    //   domainMax = 30;
    // }

    // const radiusScale = d3
    //   .scalePow()
    //   .exponent(1.3)
    //   .domain([0, domainMax])
    //   .range([minRadius, maxRadius])
    //   .clamp(true);

    // 1. Set radius bounds based on screen size
    let minRadius, maxRadius;
    if (window.innerWidth < 600) {
      minRadius = 15;
      maxRadius = 50;
    } else if (window.innerWidth < 1024) {
      minRadius = 20;
      maxRadius = 70;
    } else if (window.innerWidth <= 1536) {
      minRadius = 25;
      maxRadius = 100;
    } else if (window.innerWidth <= 1920) {
      minRadius = 28;
      maxRadius = 110;
    } else {
      minRadius = 35;
      maxRadius = 120;
    }

    // 2. Extract price changes from data
    const priceChanges = data.map((d) =>
      Math.abs(d.price_change_percentage_24h || 0)
    );

    // 3. Base domainMax on timeRange
    let baseDomainMax;
    if (timeRange === "24h") baseDomainMax = 10;
    else if (timeRange === "7d") baseDomainMax = 50;
    else if (timeRange === "30d") baseDomainMax = 40;
    else if (timeRange === "1y") baseDomainMax = 150;

    // 4. Adjust domainMax based on market-wide volatility
    const highChangeCount = priceChanges.filter(
      (change) => change >= 10
    ).length;
    const totalCoins = data.length;
    const highChangeRatio = highChangeCount / totalCoins;

    let domainMax;
    if (highChangeRatio > 0.6) {
      domainMax = baseDomainMax * 0.1; // super tight if most coins are pumping
    } else if (highChangeRatio > 0.3) {
      domainMax = baseDomainMax * 0.75;
    } else {
      domainMax = baseDomainMax;
    }

    // Enforce minimum domainMax (avoid all small bubbles)
    domainMax = Math.max(domainMax, 5);

    // 5. Build the radius scale
    const radiusScale = d3
      .scalePow()
      .exponent(1.3)
      .domain([0, domainMax])
      .range([minRadius, maxRadius])
      .clamp(true);

    let collisionRadius = (d) => {
      const base = radiusScale(Math.abs(d.price_change || 0));
      const buffer = 8; // Add consistent spacing around all bubbles
      return base + buffer;
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
            // .style("stroke", (d) =>
            //   d.price_change >= 0 ? "#4CA94E" : "#C34646"
            // )
            .style("stroke", (d) => {
              const change = Math.abs(d.price_change || 0);
              const isGainer = d.price_change >= 0;

              if (change < 1) return isGainer ? "#234F23" : "#4A1E1E"; // low change
              if (change < 5) return isGainer ? "#379E3C" : "#ad3333"; // moderate
              if (change < 10) return isGainer ? "#4CA94E" : "#f00f0f"; // strong
              return isGainer ? "#00FF00" : "#FF0000"; // very strong
            })

            .style("stroke-width", 3)
            .style("filter", (d) => `url(#glow-${d.id})`);

          g.append("image")
            .attr("xlink:href", (d) => d.image)
            .attr("width", (d) =>
              radiusScale(Math.abs(d.price_change / 4 || 0))
            )
            .attr("height", (d) =>
              radiusScale(Math.abs(d.price_change / 4 || 0))
            )
            .attr("class", (d) => {
              return Math.abs(d.price_change) <= 1
                ? "bubble-logo center"
                : "bubble-logo top";
            })

            .attr("clip-path", "circle()")
            .style("pointer-events", "none");

          // SYMBOL — only if price_change > ±1%
          g.append("text")
            .attr("class", "symbol")
            .attr("text-anchor", "middle")
            .attr("dy", ".3em")
            .style("fill", "#fff")
            .style("font-weight", "bold")
            .style(
              "font-size",
              (d) =>
                `${Math.min(
                  radiusScale(Math.abs(d.price_change || 0)) / 2.5,
                  15
                )}px`
            )
            .style("pointer-events", "none")
            .text((d) => d.symbol.toUpperCase())
            .style("display", (d) =>
              Math.abs(d.price_change) <= 1 ? "none" : "block"
            );

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
            // .text((d) => `${d.price_change?.toFixed(1)}%`);
            .text((d) => {
              const change = d.price_change;
              return change !== undefined && change !== null
                ? `${change.toFixed(1)}%`
                : "–";
            });

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
            .style("stroke", (d) => {
              const change = Math.abs(d.price_change || 0);
              const isGainer = d.price_change >= 0;

              if (change < 1) return isGainer ? "#234F23" : "#4A1E1E"; // low change
              if (change < 5) return isGainer ? "#379E3C" : "#ad3333"; // moderate
              if (change < 10) return isGainer ? "#4CA94E" : "#f00f0f"; // strong
              return isGainer ? "#00FF00" : "#FF0000"; // very strong
            })
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
            // .select("text.change")
            // .text((d) => `${d.price_change?.toFixed(1)}%`);
            .select("text.change")
            .text((d) => {
              const change = d.price_change;
              return change !== undefined && change !== null
                ? `${change.toFixed(1)}%`
                : "–";
            });

          update
            .select("image")
            .transition()
            .duration(500)
            .attr("width", (d) =>
              radiusScale(Math.abs(d.price_change / 4 || 0))
            )
            .attr("height", (d) =>
              radiusScale(Math.abs(d.price_change / 4 || 0))
            )
            .attr("class", (d) => {
              return Math.abs(d.price_change) <= 1
                ? "bubble-logo center"
                : "bubble-logo top";
            });

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

    node.on("click", async (event, d) => {
      event.stopPropagation();
      setSelectedCoin(d);
      // setTooltipData({
      //   visible: true,
      //   x: event.pageX,
      //   y: event.pageY - 100,
      //   coinId: d.id,
      // });

      // Remove blink from all circles
      // svg.selectAll("circle").classed("blink", false);

      // Add blink to selected
      d3.select(event.currentTarget).select("circle").classed("blink", true);
      // const prices = await fetchSparklineForCoin(d.id, tooltipTimeRange);
      // setSparklineData(prices);
      const svg = d3.select(svgRef.current);
      svg.selectAll("circle").classed("blink", false);
      d3.select(event.currentTarget).select("circle").classed("blink", true);

      const coin = data.find((c) => c.id === d.id);

      // Only fetch sparkline if not already stored
      if (!coin.sparkline_365d) {
        try {
          const res = await axios.get(
            `https://api.coingecko.com/api/v3/coins/${coin.id}/market_chart`,
            {
              params: {
                vs_currency: "usd",
                days: 365,
                interval: "daily",
              },
            }
          );
          // const prices = res.data.prices.map((p) => p[1]);
          const prices = res.data.prices;

          // Update that coin's data
          setData((prev) =>
            prev.map((c) =>
              c.id === coin.id ? { ...c, sparkline_365d: prices } : c
            )
          );
        } catch (err) {
          console.warn(`Sparkline fetch failed for ${coin.id}:`, err.message);
        }
      }

      setTooltipData({
        visible: true,
        x: event.pageX,
        y: event.pageY - 100,
        coinId: coin.id,
      });
    });

    if (!simulationRef.current) {
      simulationRef.current = d3
        .forceSimulation(data)
        .force("x", d3.forceX(width / 2).strength(forceStrength))
        .force("y", d3.forceY(height / 2).strength(forceStrength))
        .force(
          "collision",
          d3.forceCollide(collisionRadius).strength(collisionStrength)
        )
        // .force("jiggle", d3.forceManyBody().strength(jiggle))
        .force("charge", d3.forceManyBody().strength(-5))
        .velocityDecay(0.92)
        .alpha(0.4)
        .alphaMin(0.001)
        .alphaDecay(0.012)
        .on("tick", ticked);
    } else {
      simulationRef.current.nodes(data);
      // simulationRef.current.alphaTarget(0.3).restart();
      simulationRef.current
        // .alphaTarget(timeRange === "30d" ? 0.05 : 0.1)
        .alphaTarget(0.02)
        .restart();
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

      // Custom repel logic inside tick
      if (isRepelling && repelPointRef.current) {
        const { x, y } = repelPointRef.current;
        const repelRadius = 200;
        const repelStrength = 8;

        data.forEach((d) => {
          const dx = d.x - x;
          const dy = d.y - y;
          const distSq = dx * dx + dy * dy;
          const dist = Math.sqrt(distSq);

          if (dist < repelRadius && dist > 0) {
            const force = repelStrength * (1 - dist / repelRadius);
            d.vx += (dx / dist) * force;
            d.vy += (dy / dist) * force;
          }
        });
      }

      node.attr("transform", (d) => `translate(${d.x},${d.y})`);
    }
  }, [data]);

  useEffect(() => {
    const handleClickOutside = () => {
      setTooltipData({ ...tooltipData, visible: false });
      // Remove blinking effect from all bubbles
      d3.select(svgRef.current).selectAll("circle").classed("blink", false);
    };
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

  // const fetchSparklineForCoin = async (coinId, range) => {
  //   // 🛠️ override 24h request with 2d to avoid 401
  //   const actualRange = range === "24h" ? 2 : getDaysFromRange(range);
  //   const interval = actualRange <= 2 ? "hourly" : "daily";

  //   try {
  //     const response = await axios.get(
  //       `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart`,
  //       {
  //         params: {
  //           vs_currency: "usd",
  //           days: actualRange,
  //           interval,
  //         },
  //       }
  //     );

  //     const prices = response.data.prices.map((p) => p[1]);

  //     // 🧠 if original request was "24h", simulate it from last 24 hourly points
  //     if (range === "24h") {
  //       return prices.slice(-24);
  //     }

  //     return prices;
  //   } catch (error) {
  //     console.warn(
  //       `Sparkline fetch failed for ${coinId} (${range}) — ${error.message}`
  //     );
  //     return [];
  //   }
  // };

  // useEffect(() => {
  //   if (!tooltipData.visible) {
  //     setSparklineData([]);
  //   }
  // }, [tooltipData.visible]);
  // console.log("sparkline", sparklineData);

  // const displayPoints =
  //   tooltipTimeRange === "1y"
  //     ? sparklineData.slice(-90) // last ~3 months
  //     : tooltipTimeRange === "24h"
  //     ? sparklineData.slice(-48) // last 48 hourly points
  //     : sparklineData.slice(-30); // default

  return (
    <div className="bg-[#030B20] relative">
      <svg ref={svgRef} className="bubbles-canvas w-full" />

      <div className="controls">
        {/* <h1>Crypto Bubbles</h1> */}
        <div className="time-range">
          {["24h", "7d", "30d", "1y"].map((range) => (
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
          // const maxPrice = Math.max(...sparklineData);
          // const maxIndex = sparklineData.indexOf(maxPrice);
          // const graphHeight = 120;
          // const graphWidth = sparklineRef.current?.offsetWidth || 120;
          // const minPrice = Math.min(...sparklineData);

          // // X position
          // const maxX = (maxIndex / (sparklineData.length - 1)) * graphWidth;

          // // Y position (invert because higher value = lower y)
          // const maxY =
          //   ((maxPrice - minPrice) / (maxPrice - minPrice || 1)) * graphHeight;
          const fullSparkline = currentCoin.sparkline_365d || [];
          let slicedSparkline = [];

          if (tooltipTimeRange === "1y") slicedSparkline = fullSparkline;
          else if (tooltipTimeRange === "30d")
            slicedSparkline = fullSparkline.slice(-30);
          else if (tooltipTimeRange === "7d")
            slicedSparkline = fullSparkline.slice(-14);
          else if (tooltipTimeRange === "24h")
            slicedSparkline = fullSparkline.slice(-24);

          // const timestamp = slicedSparkline[hoverIndex]?.[0];
          // const is24h = tooltipTimeRange === "24h";
          // const formatted = is24h
          //   ? new Date(timestamp).toLocaleTimeString([], {
          //       hour: "2-digit",
          //       minute: "2-digit",
          //     })
          //   : new Date(timestamp).toLocaleDateString();

          const timestamp = slicedSparkline[hoverIndex]?.[0];
          const date = new Date(timestamp);
          console.log("timestamp", timestamp);
          console.log("date", date);

          const formatted =
            tooltipTimeRange === "24h"
              ? date.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true, // Keeps 12-hour format
                  timeZone: "UTC", // If you need UTC time
                })
              : date.toLocaleDateString(undefined, {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                });

          console.log("formatted", formatted);

          return (
            <div
              onClick={(e) => e.stopPropagation()}
              className="absolute z-50 bg-[#1a1c1f] text-white shadow-2xl rounded-2xl p-6 max-w-lg w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all fade-slide-in"
            >
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-3">
                  <img
                    src={currentCoin.image}
                    alt={currentCoin.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="text-lg font-bold">{currentCoin.name}</div>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setTooltipData({ ...tooltipData, visible: false });
                    d3.select(svgRef.current)
                      .selectAll("circle")
                      .classed("blink", false);
                  }}
                  className="text-gray-400 hover:text-red-500 text-xl cursor-pointer"
                >
                  ×
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                <div>
                  <p className="text-gray-400">Rank</p>
                  <p className="font-semibold">
                    #{currentCoin.market_cap_rank}
                  </p>
                </div>
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
                <div>
                  <p className="text-gray-400">Price</p>
                  <p className="font-semibold text-green-400">
                    ${currentCoin.price.toFixed(4)}
                  </p>
                </div>
              </div>

              <div className="text-sm mb-3">
                <p className="text-gray-400">Change ({tooltipTimeRange})</p>
                <p
                  className={`font-semibold ${
                    currentCoin[`price_change_${tooltipTimeRange}`] >= 0
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {typeof currentCoin[`price_change_${tooltipTimeRange}`] ===
                  "number"
                    ? `${currentCoin[
                        `price_change_${tooltipTimeRange}`
                      ].toFixed(2)}%`
                    : "–"}
                </p>
              </div>
              {slicedSparkline.length > 0 && (
                <div className="relative w-full" ref={sparklineRef}>
                  <Sparklines
                    data={slicedSparkline.map((p) => p[1])}
                    width={120}
                    height={40}
                  >
                    <SparklinesLine
                      color={
                        currentCoin[`price_change_${tooltipTimeRange}`] >= 0
                          ? "#00ff00"
                          : "#ff4444"
                      }
                      style={{ fill: "none", strokeWidth: 1 }}
                    />
                    <SparklinesSpots size={2} />
                    <SparklinesCurve />
                  </Sparklines>

                  {/* Overlay for hover interaction */}
                  <svg
                    ref={graphRef}
                    width="100%"
                    height="100%"
                    style={{ position: "absolute", top: 0, left: 0 }}
                    onMouseMove={(e) => {
                      const rect = graphRef.current.getBoundingClientRect();
                      const mouseX = e.clientX - rect.left;
                      const width = rect.width;

                      const index = Math.round(
                        (mouseX / width) * (slicedSparkline.length - 1)
                      );
                      setHoverIndex(
                        Math.max(0, Math.min(index, slicedSparkline.length - 1))
                      );
                    }}
                    onMouseLeave={() => setHoverIndex(null)}
                  >
                    <rect
                      x="0"
                      y="0"
                      width="100%"
                      height="100%"
                      fill="transparent"
                    />

                    {hoverIndex !== null && (
                      <>
                        {/* Vertical line */}
                        <line
                          x1={
                            (hoverIndex / (slicedSparkline.length - 1)) *
                            graphRef.current?.getBoundingClientRect().width
                          }
                          x2={
                            (hoverIndex / (slicedSparkline.length - 1)) *
                            graphRef.current?.getBoundingClientRect().width
                          }
                          y1={0}
                          y2={40}
                          stroke="white"
                          strokeWidth="1"
                          strokeDasharray="3,2"
                        />
                      </>
                    )}
                  </svg>

                  {/* Floating price label */}
                  {hoverIndex !== null && (
                    <div
                      className="absolute text-sm text-white bg-black/80 px-2 py-1 rounded pointer-events-none"
                      style={{
                        left: `${
                          (hoverIndex / (slicedSparkline.length - 1)) *
                          (graphRef.current?.getBoundingClientRect().width || 0)
                        }px`,
                        top: "-1.75rem",
                        transform: "translateX(-50%)",
                      }}
                    >
                      ${slicedSparkline[hoverIndex]?.[1].toFixed(4)}
                      <br />
                      {formatted}
                    </div>
                  )}
                </div>
              )}

              <div className="flex justify-between mt-3 text-xs">
                {["24h", "7d", "30d", "1y"].map((label) => (
                  <button
                    key={label}
                    className={`px-3 py-1 rounded-md cursor-pointer ${
                      tooltipTimeRange === label
                        ? "bg-green-500 text-white"
                        : "bg-gray-800 text-gray-300"
                    }`}
                    onClick={async (e) => {
                      e.stopPropagation();
                      setTooltipTimeRange(label);
                      // if (tooltipData.coinId) {
                      //   const prices = await fetchSparklineForCoin(
                      //     tooltipData.coinId,
                      //     label
                      //   );
                      //   setSparklineData(prices);
                      // }
                    }}
                  >
                    {label.toUpperCase()}
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
