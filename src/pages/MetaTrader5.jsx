import { FaApple } from "react-icons/fa6";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import InstantAccount from "../components/InstantAccount";
import Header from "../components/Header";
import { handleRedirect } from "../lib/redirectLocationHandler";

function MetaTrader5() {
  const imagepath = "/dummyimage.png";
  const handleLinkClick = (event, isLogin) => {
    event.preventDefault();
    handleRedirect(isLogin);
  };

  const tradingGridData = [
    {
      imagepath: "/images/oneclick.png",
      title: "MetaTrader Market",
      description:
        "A big and reliable online shop, where you can find more that 1,500 expert advisors and technical indicators.",
    },
    {
      imagepath: "/images/AlgoTrading.png",
      title: "Algorithmic trading",
      description:
        "Using MQL5, a specialized programming environment, you can create, optimize, and test trading robots by yourself.",
    },
    {
      imagepath: "/images/metatradermarket.png",
      title: "Virtual hosting",
      description:
        "MetaTrader 5 may help you to rent a virtual hosting for 24/7 operation of trading robots and subscriptions for trading signals.",
    },
    {
      imagepath: "/images/fundamentalAnalyisi.png",
      title: "Flexible trading system",
      description:
        "MetaTrader 5 features netting and hedging systems, Market Depth, and segregation of orders and transactions.",
    },
  ];

  function TradingGrid({ imagepath, title, description }) {
    return (
      <div className="flex flex-col justify-center items-center text-white">
        <div className="mb-3">
          <img src={imagepath} alt="metatrading 4" />
        </div>
        <h3 className="mb-2">{title}</h3>
        <p className="text-center text-white/20 text-sm"> {description} </p>
      </div>
    );
  }

  return (
    <div className="relative">
      <img
        src="/images/bg-shadow.png"
        alt=""
        className="absolute top-0 left-0 "
      />
      <div className="bg-[#030B20] ">
        <Header mode={"light"} />
        <div className="bg-[#030B20] pt-16">
          <div className="container mx-auto  lg:pt-10  md:pb-5 relative">
            <div className="">
              <div className="flex flex-col lg:flex-row justify-center ">
                <div className="flex-1 flex flex-col py-6  pb-4 mb:pb-0 lg:py-10 text-white space-y-4">
                  <h2 className="font-bold text-2xl lg:text-left md:text-3xl lg:text-4xl lg:-mb-1">
                    MetaTrader 5
                  </h2>
                  <p className="text-lg font-light md:text-3xl lg:text-3xl">
                    Choose MT5 - one of the best and most advanced terminals on
                    the market
                  </p>
                  <p className="text-sm lg:text-base  font-light text-white/60">
                    MetaTrader 5 (MT5) trading terminal combines advanced
                    technologies of order execution and distributed computations
                    for implementing the most ambitious trading ideas.
                    MetaTrader 5 is one of the most advanced platforms for
                    creating and testing trading robots and strategies. If you
                    value speed and reliability while working with trading
                    robots, and want to use the most up-to-date modern
                    technologies, then MetaTrader 5 platform is the best choice
                    for you.
                  </p>
                  <div className="text-sm  lg:text-base font-light text-white/60">
                    <ul className="list-disc pl-5 lg:pl-0 lg:list-inside">
                      <li>4 types of order execution</li>
                      <li>Multi-currency tester</li>
                      <li>80 technical indicators and analytical tools</li>
                      <li>Transfer funds between accounts</li>
                    </ul>
                  </div>

                  <div>
                    <button className="text-[#112556] text-xs lg:text-base bg-gradient-to-r from-[#4575FF] to-[#92AEFF] px-5 py-3 capitalize font-medium">
                      {" "}
                      <a href="https://download.mql5.com/cdn/web/fastone.global.financial/mt5/fastoneglobal5setup.exe">
                        download meta trader 4 for pc
                      </a>
                    </button>
                  </div>
                </div>
                <div className="flex-1 flex justify-center items-center ">
                  <img src={imagepath} alt="dummy image " />
                </div>
              </div>

              {/* trading grid  */}
              <div className="my-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:justify-between lg:items-center gap-10 my-6 ">
                  {tradingGridData.map((data) => (
                    <div className="flex-1" key={data.title}>
                      <TradingGrid
                        title={data.title}
                        description={data.description}
                        imagepath={data.imagepath}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col md:flex-row md:gap-10 justify-center items-center mt-10 gap-4 lg:gap-4">
                  <button
                    onClick={(e) => handleLinkClick(e, false)}
                    className="text-[#112556] bg-gradient-to-r from-[#4575FF] to-[#92AEFF] px-5 py-3 lg:px-5 lg:py-3 capitalize font-medium"
                  >
                    {" "}
                    <a href="#">open trading account </a>
                  </button>
                  <button
                    onClick={(e) => handleLinkClick(e, false)}
                    className="text-white bg-gradient-to-r from-[#1378BF] to-[#1378BF] px-6.5 py-3 lg:px-5 lg:py-3 capitalize font-medium"
                  >
                    {" "}
                    <a href="#">open demo account </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#030B20] ">
          <div className="container mx-auto  lg:pt-10  md:pb-5 ">
            <div className="flex flex-col lg:flex-row gap-5 lg:gap-0 mb-10">
              <div className="flex-1 space-y-6">
                <h2 className="text-white text-3xl lg:text-4xl capitalize">
                  MetaTrader 5 mobile Terminal
                </h2>
                <p className="text-sm lg:text-base text-white/20">
                  You can trade through MetaTrader 5 using any portable device
                  from anywhere in the world at any moment. The application
                  supports both netting and hedging systems, includes all tools
                  and features necessary for work: Market Depth, all types of
                  trading operations, 30 technical indicators, 24 analytical
                  objects, and more. You will always keep track of the market
                  situation, be able to perform trading operations and monitor
                  the history. Download the portable version of MetaTrader 5 to
                  your mobile device and try trading from any convenient place -
                  the terminal will always be with you!
                </p>
                <div className="flex flex-col md:flex-row justify-start items-start lg:items-center gap-4">
                  <button className="text-white border border-[#4575FF] capitalize font-medium">
                    <a href="/app-coming-soon">
                      <div className="flex items-center bg-[#000A73]/50 px-10 py-1 gap-3">
                        <FaApple size={30} color="white" />
                        <div>
                          <p className="text-sm">Download on the</p>
                          <h3 className="text-lg">App Store</h3>
                        </div>
                      </div>
                    </a>
                  </button>
                  <button className="text-white border border-[#4575FF] capitalize font-medium">
                    <a href="/app-coming-soon">
                      <div className="flex  items-center bg-[#000A73]/50 px-12 lg:px-10 py-1 gap-3">
                        <IoLogoGooglePlaystore size={30} color="white" />
                        <div>
                          <p className="text-sm">Get it on</p>
                          <h3 className="text-lg">Google Play</h3>
                        </div>
                      </div>
                    </a>
                  </button>
                </div>
              </div>
              <div className="flex-1 flex justify-center ">
                <div className="">
                  <img src={imagepath} alt="dummy image" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#030B20] ">
          <div className="container mx-auto  lg:pt-10  md:pb-5">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-0  mb-10">
              <div className="flex-1 space-y-6">
                <h2 className="text-white text-3xl lg:text-4xl">
                  MetaTrader 5 web platform
                </h2>
                <p className="text-white/20">
                  Using MetaTrader 5 web terminal from MetaQuotes, you can trade
                  on any device directly from a browser. The web terminal
                  includes all features and options of the desktop version, so
                  you will always be able to keep track of your positions and
                  make quick trading decisions depending on the market situation
                  at the moment. All you have to do to use the web version of
                  MetaTrader 5 terminal is to have internet connection, a
                  browser, and the password to your FastOne trading account.
                </p>
                <div className="flex justify-start items-center gap-4">
                  <button className="text-white border border-[#4575FF] capitalize font-medium">
                    {" "}
                    <a href="#">
                      <div className="flex items-center bg-[#000A73]/50 px-10 py-1 gap-3">
                        <FaApple size={30} color="white" />
                        <div>
                          <p className="text-sm">open in</p>
                          <h3 className="text-lg">browser</h3>
                        </div>
                      </div>
                    </a>
                  </button>
                </div>
              </div>
              <div className="flex-1 flex justify-center ">
                <div className="">
                  <img src={imagepath} alt="dummy image" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="bg-[#030B20] py-10 flex items-center justify-center px-4">
          <div className="container mx-auto  flex justify-center">
            <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-10 text-white">
              {/* Left Side */}
              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl lg:text-3xl text-white font-semibold">
                  Why trade on MetaTrader 5 app with Fastone
                </h2>
                <p className="text-sm text-white/30 ">
                  Better-than-market conditions, unique features and
                  cutting-edge security, partnered with our dedication to
                  transparency and excellent customer service, are the reasons
                  traders continue to choose FastOne.
                </p>
              </div>

              {/* Right Side */}
              <div className="bg-[#1368A6]/20 rounded-xl p-8 space-y-6 shadow-md border border-[#4575FF]">
                <div className="flex items-start gap-4">
                  <div className="text-2xl font-bold text-white">1</div>
                  <div>
                    <h3 className="font-bold text-xl text-white">
                      Instant withdrawals
                    </h3>
                    <p className="text-sm ">
                      Remain in control of your funds. Simply choose your
                      preferred payment method, make a withdrawal request, and
                      enjoy instant automatic approval.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 border-t border-blue-300 pt-6">
                  <div className="text-2xl font-bold text-white">2</div>
                  <div>
                    <h3 className="font-semibold text-white">
                      Ultra-fast execution
                    </h3>
                    <p className="text-sm text-gray-200">
                      Stay ahead of trends with lightning-fast execution. Get
                      your orders executed in milliseconds on all available
                      platforms at Fastone.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 border-t border-blue-300 pt-6">
                  <div className="text-2xl font-bold text-white">3</div>
                  <div>
                    <h3 className="font-semibold text-white">
                      Stop Out Protection
                    </h3>
                    <p className="text-sm text-gray-200">
                      Enjoy unique Stop Out Protection while trading with
                      Fastone, strengthening your positions during increased
                      volatility.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <InstantAccount />
      </div>
    </div>
  );
}

export default MetaTrader5;
