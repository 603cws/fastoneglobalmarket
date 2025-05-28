import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { FaStar, FaRegCircle } from "react-icons/fa";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Header from "../components/Header";
import CryptoBubbles from "../pages/CryptoBubbles";
import { Link } from "react-router-dom";
import { handleRedirect } from "../lib/redirectLocationHandler";
import axios from "axios";
import Lottie from "lottie-react";
import LandingAnimation from "../assets/LandingAnimation.json";
import { useInView } from "react-intersection-observer";
import BitcoinAnimation from "../assets/BitcoinAnimation.json";
import BubbleLoader from "../components/animations/BubbleLoader";

const features = [
  {
    icon: "/icons/high_return.png",
    title: "High Returns",
    description: "Earn competitive APY on your staked assets.",
  },
  {
    icon: "/icons/secure.png",
    title: "Secure Staking",
    description: "Top-notch security protocols for peace of mind.",
  },
  {
    icon: "/icons/intant-rewards.png",
    title: "Instant Rewards",
    description: "No waiting—earn rewards instantly.",
  },
  {
    icon: "icons/Realtime-track.png",
    title: "Real-Time Tracking",
    description: "Keep track of earnings with live analytics.",
  },
  {
    icon: "icons/support.png",
    title: "24/7 Support",
    description: "Our team is here to help you anytime.",
  },
  // {
  //   icon: "🌐",
  //   title: "Global Access",
  //   description: "Stake from anywhere, anytime.",
  // },
];

const steps = [
  {
    number: "1",
    title: "Choose Your Crypto",
    description: "Select the cryptocurrency you want to stake.",
  },
  {
    number: "2",
    title: "Start Staking",
    description: "Initiate the staking process in just a few clicks.",
  },
  {
    number: "3",
    title: "Earn Rewards",
    description: "Sit back and watch your rewards grow automatically.",
  },
];

const testimonials = [
  {
    name: "Sarah L",
    rating: 5,
    comment:
      "I started staking with FastOne and have already earned 10% in rewards. It’s so easy to use! I love how transparent and secure the platform is.",
  },
  {
    name: "John D",
    rating: 4,
    comment:
      "Great experience overall. The staking rewards are consistent and support is quick to respond.",
  },
  {
    name: "Alex K",
    rating: 5,
    comment:
      "Using FastOne for staking has been a game changer. Super easy, secure, and rewarding!",
  },
  {
    name: "Emily R",
    rating: 5,
    comment:
      "Really impressed by how intuitive and sleek the platform is. And the returns are awesome!",
  },
  {
    name: "Sarah L",
    rating: 5,
    comment:
      "I started staking with FastOne and have already earned 10% in rewards. It’s so easy to use! I love how transparent and secure the platform is.",
  },
  {
    name: "John D",
    rating: 4,
    comment:
      "Great experience overall. The staking rewards are consistent and support is quick to respond.",
  },
  {
    name: "Alex K",
    rating: 5,
    comment:
      "Using FastOne for staking has been a game changer. Super easy, secure, and rewarding!",
  },
  {
    name: "Emily R",
    rating: 5,
    comment:
      "Really impressed by how intuitive and sleek the platform is. And the returns are awesome!",
  },
];

const faqs = [
  {
    question: "What is crypto staking?",
    answer:
      "Crypto staking is the process of locking up your cryptocurrency to support a blockchain network and earning rewards in return.",
  },
  {
    question: "How secure is staking on FastOne?",
    answer:
      "FastOne uses state-of-the-art encryption and multi-layered security systems to protect your assets.",
  },
  {
    question: "When do I start earning rewards?",
    answer:
      "Rewards start accumulating as soon as you begin staking, and you can track them in your dashboard.",
  },
  {
    question: "Can I unstake anytime?",
    answer:
      "Yes, you can unstake anytime depending on the specific token’s lock period or policy.",
  },
  {
    question: "Are there any hidden fees?",
    answer:
      "No hidden fees. All applicable charges are transparently mentioned before you stake.",
  },
];

const symbols = [
  "^NDX",
  "^DJI",
  "^GSPC",
  "^NSEI",
  "^HSI",
  "^N225",
  "BTC-USD",
  "ETH-USD",
  "SOL-USD",
  "ADA-USD",
  "XRP-USD",
  "GC=F",
  "SI=F",
  // "XAUUSD=K",
  // "XAGUSD=M",
  // "XAGUSD=N",
  "CL=F",
  "HG=F",
  "NG=F",
  "AAPL",
  "MSFT",
  "META",
  "NVDA",
  "GOOG",
  "EURUSD=X",
  "GBPUSD=X",
  "USDJPY=X",
  "AUDUSD=X",
  "USDCAD=X",
  "USDCHF=X",
  "NZDUSD=X",
];

function Landing() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const cardsPerSlide = 2;
  const totalSlides = Math.ceil(testimonials.length / cardsPerSlide);
  const [active, setActive] = useState(0);
  const start = currentSlide * cardsPerSlide;
  const visibleTestimonials = testimonials.slice(start, start + cardsPerSlide);
  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [loading, setLoading] = useState(true);

  const [timeRange, setTimeRange] = useState("1w"); //24h
  const [data, setData] = useState([]);
  // const [apiSource, setApiSource] = useState("public");
  const positionsRef = useRef(new Map());

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // const count = symbols.split(",").length;
  // console.log("Count of Symbols: ", count); // Output: 47

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000); // Auto-slide every 5 seconds

    return () => clearInterval(interval);
  }, [totalSlides]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       let response;

  //       // First attempt: Free public API (no API key required)
  //       try {
  //         response = await axios.get(
  //           "https://api.coingecko.com/api/v3/coins/markets",
  //           {
  //             params: {
  //               vs_currency: "usd",
  //               order: "market_cap_desc",
  //               per_page: 100,
  //               price_change_percentage: "24h,7d,30d,1y",
  //               sparkline: true,
  //             },
  //           }
  //         );
  //         console.log("Public API");
  //       } catch (primaryError) {
  //         console.warn(
  //           "Public API failed. Trying demo API...",
  //           primaryError.message
  //         );

  //         // Fallback: demo API with demo key
  //         response = await axios.get(
  //           "https://api.coingecko.com/api/v3/coins/markets",
  //           {
  //             params: {
  //               vs_currency: "usd",
  //               order: "market_cap_desc",
  //               per_page: 100,
  //               price_change_percentage: "24h,7d,30d,1y",
  //               x_cg_demo_api_key: "CG-7AbQRHEkb37BAAFt4qDVSE68",
  //               sparkline: true,
  //             },
  //           }
  //         );
  //         console.log("Demo API");
  //       }

  //       setData((prevData = []) => {
  //         const prevDataMap = new Map(prevData.map((coin) => [coin.id, coin]));

  //         const nodes = response.data.map((coin) => {
  //           const cached = positionsRef.current.get(coin.id);
  //           const existingCoin = prevDataMap.get(coin.id);

  //           return {
  //             id: coin.id,
  //             symbol: coin.symbol,
  //             name: coin.name,
  //             price: coin.current_price,
  //             market_cap: coin.market_cap,
  //             market_cap_rank: coin.market_cap_rank,
  //             price_change:
  //               coin[`price_change_percentage_${timeRange}_in_currency`],
  //             price_change_24h: coin.price_change_percentage_24h_in_currency,
  //             price_change_7d: coin.price_change_percentage_7d_in_currency,
  //             price_change_30d: coin.price_change_percentage_30d_in_currency,
  //             price_change_1y: coin.price_change_percentage_1y_in_currency,
  //             volume: coin.total_volume,
  //             sparkline: coin.sparkline_in_7d?.price,
  //             url: `https://www.coingecko.com/en/coins/${coin.id}`,
  //             image: coin.image,
  //             x: cached?.x ?? Math.random() * window.innerWidth,
  //             y: cached?.y ?? Math.random() * window.innerHeight,
  //             vx: cached?.vx ?? 0,
  //             vy: cached?.vy ?? 0,
  //             fx: null,
  //             fy: null,
  //             // Preserve existing sparkline_365d if available
  //             sparkline_365d: existingCoin?.sparkline_365d,
  //             sparkline_24h_hourly: existingCoin?.sparkline_24h_hourly,
  //           };
  //         });

  //         // Update positionsRef with new positions
  //         nodes.forEach((coin) => {
  //           positionsRef.current.set(coin.id, {
  //             x: coin.x,
  //             y: coin.y,
  //             vx: coin.vx,
  //             vy: coin.vy,
  //           });
  //         });

  //         return nodes;
  //       });
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  //   const interval = setInterval(fetchData, 30000);
  //   return () => clearInterval(interval);
  // }, [timeRange, windowSize]);

  function calculatePercentageDifference(oldPrice, newPrice) {
    if (oldPrice === 0) {
      throw new Error("Old price cannot be zero.");
    }
    const difference = newPrice - oldPrice;
    const percentageDifference = (difference / oldPrice) * 100;
    return percentageDifference;
  }

  function cleanName(name) {
    if (!name) return undefined;
    return name
      .replace(/,|\.\s*com/gi, "") // Remove "," and ".com" or ". com"
      .trim(); // Clean up extra spaces
  }

  useEffect(() => {
    const fetchMarketData = async () => {
      try {
        // Use the public URL or the signed URL here
        const url =
          "https://fastone-market-data-storage.s3.eu-north-1.amazonaws.com/market-data.json";
        const response = await axios.get(url);
        // setData(response.data);
        console.log(response.data);

        const result = response.data.map((symbol) => {
          const cached = positionsRef.current.get(symbol);

          const pricechanged = calculatePercentageDifference(
            symbol.meta.previousClose,
            symbol.price
          );

          const symbolName =
            cleanName(symbol.meta.longName)?.split(" ")[0] ||
            cleanName(symbol.meta.shortName)?.split(" ")[0] ||
            symbol.symbol;

          return {
            id: symbol.id,
            symbol: symbolName,
            name: symbol.name,
            price: symbol.price,
            // image: `./images/symbols/${symbolName}.png`, // e.g., BTC-USD => btc-usd.png
            image: `./images/symbols/${symbolName.replace(/\//g, "")}.png`,
            // image: `./images/symbols/NASDAQ.png`, // e.g., BTC-USD => btc-usd.png
            // market_cap: symbol.market_cap,
            // market_cap_rank: symbol.market_cap_rank,
            price_change: pricechanged,
            // price_change_24h: symbol.price_change_percentage_24h_in_currency,
            // price_change_7d: symbol.price_change_percentage_7d_in_currency,
            // price_change_30d: symbol.price_change_percentage_30d_in_currency,
            // price_change_1y: symbol.price_change_percentage_1y_in_currency,
            volume: symbol.meta.regularMarketVolume,
            // sparkline: symbol.sparkline_in_7d?.price,
            // url: `https://www.coingecko.com/en/coins/${symbol.id}`,
            // image: symbol.image,
            x: cached?.x ?? Math.random() * window.innerWidth,
            y: cached?.y ?? Math.random() * window.innerHeight,
            vx: cached?.vx ?? 0,
            vy: cached?.vy ?? 0,
            fx: null,
            fy: null,
            // Preserve existing sparkline_365d if available
            // sparkline_365d: existingCoin?.sparkline_365d,
            // sparkline_24h_hourly: existingCoin?.sparkline_24h_hourly,
          };
        });

        setData(result);
        // console.log(data);
        console.log(result);

        // return {
        //             id: symbol.id,
        //             symbol: coin.symbol,
        //             name: coin.name,
        //             price: coin.current_price,
        //             market_cap: coin.market_cap,
        //             market_cap_rank: coin.market_cap_rank,
        //             price_change:
        //               coin[`price_change_percentage_${timeRange}_in_currency`],
        //             price_change_24h: coin.price_change_percentage_24h_in_currency,
        //             price_change_7d: coin.price_change_percentage_7d_in_currency,
        //             price_change_30d: coin.price_change_percentage_30d_in_currency,
        //             price_change_1y: coin.price_change_percentage_1y_in_currency,
        //             volume: coin.total_volume,
        //             sparkline: coin.sparkline_in_7d?.price,
        //             url: `https://www.coingecko.com/en/coins/${coin.id}`,
        //             image: coin.image,
        //             x: cached?.x ?? Math.random() * window.innerWidth,
        //             y: cached?.y ?? Math.random() * window.innerHeight,
        //             vx: cached?.vx ?? 0,
        //             vy: cached?.vy ?? 0,
        //             fx: null,
        //             fy: null,
        //             // Preserve existing sparkline_365d if available
        //             sparkline_365d: existingCoin?.sparkline_365d,
        //             sparkline_24h_hourly: existingCoin?.sparkline_24h_hourly,
        //           };
      } catch (error) {
        console.error("Error fetching market data:", error);
      } finally {
        setLoading(false); // Hide loader
      }
    };

    fetchMarketData();
    const interval = setInterval(fetchMarketData, 100000); // Fetch every minute
    return () => clearInterval(interval);
  }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const results = await Promise.all(
  //         symbols.map(async (symbol) => {
  //           try {
  //             const res = await axios.get(
  //               `http://localhost:5000/api/market-data`
  //             );
  //             // const response = await axios.get("http://localhost:5000/api/market-data");

  //             const result = res.data.chart?.result?.[0]?.meta;
  //             console.log(res.data);
  //             const price = result?.regularMarketPrice;
  //             const changePercent = result?.regularMarketChangePercent;

  //             const cached = positionsRef.current.get(symbol);

  //             return {
  //               id: symbol,
  //               symbol,
  //               name: symbol,
  //               price: parseFloat(price),
  //               price_change: parseFloat(changePercent),
  //               image: null, // Add image if needed like in forex case
  //               url: `https://finance.yahoo.com/quote/${symbol}`,
  //               x: cached?.x ?? Math.random() * window.innerWidth,
  //               y: cached?.y ?? Math.random() * window.innerHeight,
  //               vx: cached?.vx ?? 0,
  //               vy: cached?.vy ?? 0,
  //               fx: null,
  //               fy: null,
  //             };
  //           } catch (err) {
  //             console.error(`Error fetching data for ${symbol}:`, err);
  //             return null;
  //           }
  //         })
  //       );

  //       // Filter out any null entries caused by failed requests
  //       const validData = results.filter((item) => item !== null);
  //       setData(validData);
  //     } catch (error) {
  //       console.error("Error fetching market data:", error);
  //     }
  //   };

  //   fetchData();
  //   const interval = setInterval(fetchData, 60000);
  //   return () => clearInterval(interval);
  // }, [timeRange]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         `https://fcsapi.com/api-v3/forex/latest?symbol=${symbols}`, //&period=${timeRange}
  //         {
  //           params: {
  //             access_key: "PW97M1pUEFTcjM0CrC2VyZI",
  //             period: timeRange,
  //             // symbols: "EUR/USD,USD/JPY", // Add desired currency pairs
  //           },
  //         }
  //       );

  //       console.log("API response:", response.data);

  //       const forexData = response.data.response.map((item) => {
  //         const [base, quote] = item.s.split("/"); // Correctly split the pair
  //         const cached = positionsRef.current.get(item.s);

  //         return {
  //           id: item.s,
  //           symbol: item.s,
  //           name: item.name || item.s,
  //           price: parseFloat(item.c),
  //           price_change: parseFloat(item.cp),
  //           image: {
  //             base: `https://flagcdn.com/224x168/${base
  //               .slice(0, 2)
  //               .toLowerCase()}.png`,
  //             quote: `https://flagcdn.com/224x168/${quote
  //               .slice(0, 2)
  //               .toLowerCase()}.png`,
  //           },
  //           url: `https://www.example.com/forex/${item.s}`,
  //           x: cached?.x ?? Math.random() * window.innerWidth,
  //           y: cached?.y ?? Math.random() * window.innerHeight,
  //           vx: cached?.vx ?? 0,
  //           vy: cached?.vy ?? 0,
  //           fx: null,
  //           fy: null,
  //         };
  //       });

  //       setData(forexData);
  //     } catch (error) {
  //       console.error("Error fetching forex data:", error);
  //     }
  //   };

  //   fetchData();
  //   const interval = setInterval(fetchData, 60000);
  //   return () => clearInterval(interval);
  // }, [timeRange]);

  // Use both resize observer and window resize

  useLayoutEffect(() => {
    const updateDimensions = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };

    // Initial measurement
    updateDimensions();

    // Set up listeners
    window.addEventListener("resize", updateDimensions);
    const resizeObserver = new ResizeObserver(updateDimensions);
    if (headerRef.current) {
      resizeObserver.observe(headerRef.current);
    }

    return () => {
      window.removeEventListener("resize", updateDimensions);
      resizeObserver.disconnect();
    };
  }, []);

  const handleLinkClick = (event, isLogin) => {
    event.preventDefault();
    handleRedirect(isLogin);
  };
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: false, // play once
    threshold: 0.5, // 50% of element should be visible
  });
  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: false, // play once
    threshold: 0.5, // 50% of element should be visible
  });

  return (
    <div className="scrollbar-hidden">
      <svg width="0" height="0">
        <defs>
          <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4575FF" />
            <stop offset="100%" stopColor="#92AEFF" />
          </linearGradient>
        </defs>
      </svg>

      <div className="max-h-screen bg-[#0A0F2C]">
        {/* <PriceTicker /> */}

        {/* Header */}
        <div ref={headerRef} className="">
          <Header />
        </div>
        {/* {import.meta.env.MODE === "development" && ( */}
        <div
          className="relative pt-20"
          style={{ height: `calc(95vh - ${headerHeight}px)` }}
        >
          {" "}
          <CryptoBubbles
            key={`${windowSize.width}-${windowSize.height}-${headerHeight}`} // Force re-render on dimension changes
            height={windowSize.height - headerHeight - 110}
            width={windowSize.width}
            data={data}
            setData={setData}
            timeRange={timeRange}
            setTimeRange={setTimeRange}
            positionsRef={positionsRef}
            // apiSource={apiSource}
          />
          {loading && <BubbleLoader />}
        </div>
        {/* )} */}
      </div>

      {/* Section 1 */}
      <section
        ref={ref1}
        className="relative min-h-screen bg-no-repeat bg-cover bg-center text-white flex flex-col md:flex-row items-center py-5 pt-15 sm:pt-0"
        style={{ backgroundImage: "url('/images/bg-landing1.png')" }}
      >
        <div className="flex-1 mx-auto flex flex-col md:flex-row justify-center items-center gap-8 sm:gap-10 px-4 sm:px-0 sm:pl-6 lg:pl-10 header-text">
          {/* Left Content */}
          <div className="space-y-4 text-left pl-4">
            <p className="text-md sm:text-xl tracking-wide uppercase flex justify-start items-center gap-2">
              <FaRegCircle
                className="w-5 h-5 icon-4k"
                style={{ fill: "url(#icon-gradient)" }}
              />
              <span className="bg-gradient-to-r from-[#4575FF] to-[#92AEFF] text-transparent bg-clip-text">
                Grow your assets effortlessly!
              </span>
            </p>

            <h1 className="text-2xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-snug sm:leading-tight ">
              <span className="whitespace-nowrap bg-gradient-to-r from-[#4575FF] to-[#92AEFF] text-transparent bg-clip-text">
                Empower Your Trade
              </span>
              <br />
              <span className="text-white">Master the Markets</span>
            </h1>

            <p className="text-gray-300 text-base sm:text-md lg:text-lg xl:text-2xl leading-relaxed text-wrap">
              Stake your cryptocurrencies and earn up to{" "}
              <span className="hidden md:inline">
                <br />
              </span>{" "}
              15% APY. Secure,
              <br className="hidden sm:block" />
              transparent, and beginner-friendly.
            </p>

            <div className="sm:flex gap-3 pt-4 w-full sm:justify-start md:justify-normal gap-4k">
              <Link to="#" onClick={(e) => handleLinkClick(e, true)}>
                <button className="text-sm sm:text-base whitespace-nowrap border border-blue-600 px-3 sm:px-6 py-2 rounded-lg font-semibold bg-gradient-to-r from-[#4575FF] to-[#92AEFF] text-transparent bg-clip-text transition-all duration-300 hover:bg-gradient-to-r hover:from-[#C6D5FF] hover:to-[#698FFF] hover:text-black hover:bg-clip-border cursor-pointer">
                  Start Staking Now
                </button>
              </Link>
              <Link to="#" onClick={(e) => handleLinkClick(e, true)}>
                <button className="text-sm sm:text-base whitespace-nowrap border border-blue-600 px-3 sm:px-6 py-2 rounded-lg font-semibold bg-gradient-to-r from-[#4575FF] to-[#92AEFF] text-transparent bg-clip-text transition-all duration-300 hover:bg-gradient-to-r hover:from-[#C6D5FF] hover:to-[#698FFF] hover:text-black hover:bg-clip-border cursor-pointer">
                  Learn How It Works
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Right-side Image Positioned Absolutely and Touching Right Edge */}
        <div className="h-full md:pt-0 pt-10 flex-1">
          {inView1 && <Lottie animationData={LandingAnimation} loop={false} />}
          {!inView1 && <img src="/images/home-page.png" alt="home-page" />}
        </div>
      </section>

      {/* Section 2 */}
      <section ref={ref2} className=" bg-[#0A0F2C] text-white py-32 px-10">
        <div className="container mx-auto grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Image Block */}
          <div className="sm:flex hidden justify-center items-center w-full h-[300px] md:h-[300px] lg:col-span-1 lg:row-span-2">
            {!inView2 && (
              <img
                src="./images/bitcoin.png" // Update this path to the correct location of your image
                alt="Bitcoin"
                className="w-full h-full object-contain rounded-xl img-4k"
              />
            )}
            {inView2 && (
              <Lottie animationData={BitcoinAnimation} loop={false} />
            )}
          </div>

          {/* Text Content with Heading + Paragraph */}
          <div className="lg:col-span-2">
            <div className="flex flex-col lg:flex-row items-start gap-6">
              {/* Heading */}
              <div className="flex-1 header-text-s2">
                <h2 className="text-4xl md:text-4xl xl:text-5xl font-bold leading-snug text-white">
                  Why{" "}
                  <span className="bg-gradient-to-r from-[#4575FF] to-[#92AEFF] text-transparent bg-clip-text">
                    Stake
                  </span>
                  <br />
                  with Us
                </h2>
              </div>

              {/* Vertical line for large screen only */}
              <div className="flex items-start gap-4 mt-4 sm:mt-0 header-text-s2">
                {/* Vertical Line */}
                <div
                  className="w-px self-stretch bg-gradient-to-b"
                  style={{
                    backgroundImage: `linear-gradient(to bottom, #000 0%, #92aeff 24%, #4575ff 77%, #000 98%)`,
                  }}
                />

                {/* Paragraph */}
                <div className="flex-1">
                  <p className="text-gray-300 text-base md:text-sm lg:text-lg">
                    Discover the advantages of staking with
                    <br /> FastOne—where security, simplicity, and
                    <br /> high rewards come together to help you
                    <br /> grow your crypto effortlessly.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Cards (5 items) */}
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-[2px] rounded-xl bg-gradient-to-br from-[#4575FF] to-[#92AEFF] header-text-s2"
            >
              <div className="rounded-xl p-4 bg-[#0A0F2C] hover:bg-blue-900/20 transition h-full">
                <img src={feature.icon} className="mb-2 h-10 w-10" />
                <h4 className="text-lg font-semibold">{feature.title}</h4>
                <p className="text-sm text-gray-300">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3 */}
      <section
        className="bg-no-repeat bg-cover bg-center py-24 px-6 text-white"
        style={{ backgroundImage: "url('/images/bg-landing3.png')" }}
      >
        <div className="container mx-auto space-y-20">
          {/* Staking Steps Section */}
          <div>
            <div className="text-center md:text-left mb-10 flex flex-col lg:flex-row justify-between lg:items-center gap-6 ">
              {/* Heading */}
              <div className="header-text-s2">
                <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-snug text-start">
                  How Crypto Staking <br /> Works in
                  <span className="bg-gradient-to-r from-[#4575FF] to-[#92AEFF] text-transparent bg-clip-text">
                    {" "}
                    3 Simple Steps
                  </span>
                </h2>
              </div>

              {/* Vertical line + Paragraph in flex row */}
              <div className="flex items-center gap-4">
                {/* Vertical line */}
                <div
                  className="w-px self-stretch bg-gradient-to-b line-h-4k"
                  style={{
                    backgroundImage: `linear-gradient(to bottom, #000 0%, #92aeff 24%, #4575ff 77%, #000 98%)`,
                  }}
                />

                {/* Paragraph */}
                <p className="text-gray-400 max-w-md text-start text-base lg:text-xl para-4k">
                  Staking your crypto has never been easier.
                  <br className="br-4k" /> Follow these three simple steps to
                  start
                  <br className="br-4k" /> earning rewards today!
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  className="rounded-xl bg-gradient-to-r from-[#4575FF] to-[#92AEFF] p-[1px]  w-auto sm:w-3/4 lg:w-auto"
                >
                  <div className="flex items-center rounded-xl bg-[#0b132e] p-6 h-full header-text-s2">
                    {/* Number */}
                    {/* <div className="text-5xl font-bold text-white mr-4 ">
                      {step.number}
                    </div> */}
                    <svg viewBox="0 0 200 200" className="w-[100px] h-[100px]">
                      <defs>
                        <linearGradient
                          id="gradient"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop offset="0%" stopColor="#4575FF" />
                          <stop offset="100%" stopColor="#92AEFF" />
                        </linearGradient>
                      </defs>
                      <text
                        x="50%"
                        y="50%"
                        dominantBaseline="middle"
                        textAnchor="middle"
                        fontSize="150"
                        fontFamily="inter"
                        fontWeight="bold"
                        fill="none"
                        stroke="url(#gradient)"
                        strokeWidth="3"
                      >
                        {step.number}
                      </text>
                    </svg>

                    {/* Content */}
                    <div className="space-y-3">
                      <h4 className="text-white text-lg font-semibold">
                        {step.title}
                      </h4>
                      <p className="text-gray-400 text-sm">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Favorite Crypto Section */}
          <div>
            <div className="text-center md:text-left mb-10 flex flex-col lg:flex-row justify-between items-start lg:items-center">
              <div className="header-text-s2">
                <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-snug">
                  Stake Your Favorite <br />
                  <span className="bg-gradient-to-r from-[#92AEFF] to-[#4575FF] text-transparent bg-clip-text">
                    Crypto Currencies
                  </span>
                </h2>
              </div>

              {/* Vertical line + Paragraph in flex row */}
              <div className="flex items-start gap-4">
                {/* Vertical line */}
                <div
                  className="w-px self-stretch bg-gradient-to-b line-h-4k"
                  style={{
                    backgroundImage: `linear-gradient(to bottom, #000 0%, #92aeff 24%, #4575ff 77%, #000 98%)`,
                  }}
                />

                {/* Paragraph */}
                <p className="text-gray-400 max-w-md mt-4 md:mt-0 text-start text-base lg:text-xl para-4k">
                  Choose from a wide range of trusted
                  <br className="br-4k" /> cryptocurrencies to stake and start
                  earning
                  <br className="br-4k" /> rewards today.
                </p>
              </div>
            </div>

            <div className="header-text-s2">
              <Swiper
                modules={[Pagination, Scrollbar, Autoplay]}
                scrollbar={{ draggable: true }}
                spaceBetween={20}
                autoplay={true}
                loop={false}
                breakpoints={{
                  0: {
                    slidesPerView: 2,
                  },
                  640: {
                    slidesPerView: 3,
                  },
                  1024: {
                    slidesPerView: 5,
                  },
                }}
              >
                {data.slice(0, 25).map((crypto, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="p-[2px] rounded-xl bg-gradient-to-r from-[#4575FF] to-[#92AEFF] h-full">
                      <div className="rounded-[10px] p-6 flex flex-col items-center text-center space-y-4 bg-[#0b132e] transition h-full">
                        <img
                          src={crypto?.image}
                          alt={crypto?.name}
                          className="w-12 h-12"
                        />
                        <h4 className="font-semibold min-h-[50px] flex items-center justify-center text-center !line-clamp-2 ">
                          {crypto?.name}
                        </h4>
                        <p className="text-2xl font-bold bg-gradient-to-r from-[#4575FF] to-[#92AEFF] text-transparent bg-clip-text">
                          {crypto.price_change?.toFixed(2)}%
                        </p>
                        <p className="text-sm text-gray-400">Weekly Rewards</p>
                        {/* <button className="bg-gradient-to-r from-[#C6D5FF] to-[#698FFF] hover:opacity-90 hover:text-white text-black px-4 py-2 rounded-lg text-sm transition">
                          Stake Now
                        </button> */}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 */}
      {/*
<section className="bg-[#060D27] text-white py-24 px-6">
  <div className="container mx-auto">
    
    <div className="flex flex-col lg:flex-row justify-between gap-6 mb-12">
      
      <div className="flex-1 header-text-s2">
        <h2 className="text-4xl md:text-5xl font-bold leading-snug">
          What Our{" "}
          <span className="bg-gradient-to-r from-[#4575FF] to-[#92AEFF] text-transparent bg-clip-text">
            Users Are
            <br className="hidden md:block" /> Saying
          </span>
        </h2>
      </div>

      <div className="flex items-center gap-4 flex-1 mt-4 lg:mt-0 gap-4k">
        
        <div
          className="w-1 h-24 lg:w-px lg:h-24 bg-gradient-to-b line-h-4k"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, #000 0%, #92aeff 24%, #4575ff 77%, #000 98%)",
          }}
        />

        <p className="text-gray-400 text-md sm:text-xl max-w-md para-4k">
          Join thousands of satisfied users who are growing their crypto
          portfolios with EPTY. Hear what they have to say about their
          staking experience!
        </p>
      </div>

    </div>

    <div className="bg-[#111827] p-6 rounded-2xl transition-all duration-500">
      
      <div className="flex flex-col gap-6 md:hidden">
        <div className="w-full bg-gradient-to-r from-[#4575FF] to-[#92AEFF] p-[1px] rounded-xl">
          <div className="rounded-xl p-6 flex flex-col sm:flex-row items-start gap-4 bg-[#111827] h-full">
            
            <div className="w-16 h-16 bg-gray-300 rounded-sm shrink-0" />
            
            {testimonials[currentSlide] && (
              <div>
                <h4 className="font-semibold text-lg">
                  {testimonials[currentSlide].name}
                </h4>
                <div className="flex text-blue-400 mb-2">
                  {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                    <FaStar key={i} size={16} />
                  ))}
                </div>
                <p className="text-sm text-gray-300">
                  {testimonials[currentSlide].comment}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="hidden md:flex flex-col lg:flex-row gap-6 gap-4k2">
        {visibleTestimonials.map((user, idx) => (
          <div
            key={idx}
            className="w-full bg-gradient-to-r from-[#4575FF] to-[#92AEFF] p-[1px] rounded-xl header-text-s2"
          >
            <div className="rounded-xl p-6 flex flex-col sm:flex-row items-start gap-4 bg-[#111827] h-full">
              
              <div className="w-16 h-16 bg-gray-300 rounded-sm shrink-0" />
              
              <div>
                <h4 className="font-semibold text-lg">{user.name}</h4>
                <div className="flex text-blue-400 mb-2">
                  {[...Array(user.rating)].map((_, i) => (
                    <FaStar key={i} className="icon-4k" />
                  ))}
                </div>
                <p className="text-sm text-gray-300">{user.comment}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>

    <div className="flex justify-center gap-2 mt-8 gap-4k">
      {Array.from({ length: totalSlides }).map((_, idx) => (
        <button
          key={idx}
          onClick={() => setCurrentSlide(idx)}
          className={`w-3 h-3 rounded-full transition-all duration-300 pagination-btn-4k ${
            idx === currentSlide
              ? "bg-gradient-to-r from-[#4575FF] to-[#92AEFF] scale-110"
              : "bg-gray-500 hover:bg-blue-400"
          }`}
        ></button>
      ))}
    </div>

  </div>
</section>
*/}

      {/* Section 5 */}
      <section
        className="lg:min-h-screen bg-no-repeat bg-cover bg-center text-white px-4 py-10 lg:py-20"
        style={{ backgroundImage: "url('/images/bg-landing5.png')" }}
      >
        <div className="container mx-auto">
          {/* FAQ container */}
          <div className="bg-[#111827] rounded-2xl p-10 hidden sm:flex flex-col lg:flex-row gap-6 mb-10 lg:mb-28">
            {/* Left side - FAQ intro */}
            <div className="flex-1 flex flex-col lg:justify-normal header-text-s2">
              <h2 className="text-4xl lg:text-5xl font-semibold leading-tight mb-4">
                Frequently Asked <br />
                <span className="bg-gradient-to-r from-[#4575FF] to-[#92AEFF] text-transparent bg-clip-text">
                  Questions
                </span>
              </h2>

              {/* Vertical line + Paragraph */}
              <div className="flex items-center lg:items-start gap-4">
                <div
                  className="w-px self-stretch line-h-4k"
                  style={{
                    backgroundImage: `linear-gradient(to bottom, #000 0%, #92aeff 24%, #4575ff 77%, #000 98%)`,
                  }}
                />
                <p className="text-[#fff] leading-relaxed text-sm lg:text-base">
                  Join thousands of satisfied users who are
                  <br /> growing their crypto portfolios with FastOne.
                  <br /> Hear what they have to say about their
                  <br /> staking experience!
                </p>
              </div>
            </div>

            {/* Right side - Accordion */}
            <div className="flex-1 space-y-4">
              {faqs.map((item, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-r from-[#4575FF] to-[#92AEFF] p-[1px] rounded-md transition-all duration-300`}
                >
                  <div
                    className="rounded-md px-6 py-4 transition-all duration-300 cursor-pointer bg-[#1f2937] header-text-s5"
                    onClick={() => setActive(index === active ? null : index)}
                  >
                    <div className="flex justify-between items-center">
                      <h4 className="text-white text-sm lg:text-base font-medium">
                        {item.question}
                      </h4>
                      {active === index ? (
                        <TiArrowSortedUp className="text-white" size={20} />
                      ) : (
                        <TiArrowSortedDown className="text-white" size={20} />
                      )}
                    </div>
                    {active === index && (
                      <p className="mt-3 text-sm text-gray-300 leading-relaxed">
                        {item.answer}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center lg:mb-28 header-text-s2">
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to{" "}
              <span className="bg-gradient-to-r from-[#4575FF] to-[#92AEFF] text-transparent bg-clip-text">
                Start Earning?
              </span>
            </h2>
            <p className="text-gray-300 mt-4 mb-8">
              Join thousands of users growing their crypto portfolios with
              staking.
            </p>
            <div className="flex justify-center gap-4 text-xs sm:text-base">
              <Link to="#" onClick={(e) => handleLinkClick(e, true)}>
                <button className="text-sm sm:text-base whitespace-nowrap border border-blue-600 px-3 sm:px-6 py-2 rounded-lg font-semibold bg-gradient-to-r from-[#4575FF] to-[#92AEFF] text-transparent bg-clip-text transition-all duration-300 hover:bg-gradient-to-r hover:from-[#C6D5FF] hover:to-[#698FFF] hover:text-black hover:bg-clip-border cursor-pointer">
                  Get Started Now
                </button>
              </Link>

              <Link to="/contact">
                <button className="text-sm sm:text-base whitespace-nowrap border border-blue-600 px-3 sm:px-6 py-2 rounded-lg font-semibold bg-gradient-to-r from-[#4575FF] to-[#92AEFF] text-transparent bg-clip-text transition-all duration-300 hover:bg-gradient-to-r hover:from-[#C6D5FF] hover:to-[#698FFF] hover:text-black hover:bg-clip-border cursor-pointer">
                  Contact Support
                </button>
              </Link>
            </div>
          </div>

          {/* Gradient Horizontal Line */}
          {/* <div className="relative my-10 lg:my-20">
            <div
              className="h-[2px] sm:w-1/2 mx-auto"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #0F2567 0%, #92AEFF 24%, #4575FF 77%, #0F2567 100%)",
              }}
            ></div>
          </div> */}

          {/* Footer */}
          {/* <div className="sm:pt-2 text-center text-sm text-gray-400">

            <div className="flex justify-center mb-6">
              <img
                src="./fastone-logo-text2.png"
                alt="FastOne"
                className="h-10 md:h-12 object-contain"
              />
            </div>

  
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 sm:mb-6 text-base sm:pt-12">
              <a href="#" className="hover:text-white transition">
                How It Works
              </a>
              <a href="#" className="hover:text-white transition">
                Supported Cryptos
              </a>
              <a href="#" className="hover:text-white transition">
                Staking Plans
              </a>
              <a href="#" className="hover:text-white transition">
                FAQ
              </a>
              <a href="#" className="hover:text-white transition">
                Blog
              </a>
              <a href="#" className="hover:text-white transition">
                Contact Us
              </a>
            </div>


            <div className="flex justify-center gap-5 text-white text-lg mb-6 pt-6">
        
              <img
                src="./icons/instagram.png"
                alt="Instagram"
                className="hover:brightness-125 transition"
              />
              <img
                src="./icons/facebook.png"
                alt="Facebook"
                className="hover:brightness-125 transition"
              />
              <img
                src="./icons/twitter.png"
                alt="Twitter"
                className="hover:brightness-125 transition"
              />
              <img
                src="./icons/youtube.png"
                alt="Youtube"
                className="hover:brightness-125 transition"
              />
              <img
                src="./icons/linkedin.png"
                alt="LinkedIn"
                className="hover:brightness-125 transition"
              />
            </div>


            <p className="text-white text-sm pt-4">
              &copy; 2019–2025 FastOne.com
            </p>
          </div> */}
        </div>
      </section>
    </div>
  );
}

export default Landing;
