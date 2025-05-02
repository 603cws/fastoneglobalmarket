import { FaApple } from "react-icons/fa6";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import InstantAccount from "../components/InstantAccount";
import Header from "../components/Header";
import { handleRedirect } from "../lib/redirectLocationHandler";
import MetaTraderPlatform from "../components/MetaTraderPlatform";
import Meta4HeroAnimation from "../assets/Meta4HeroAnimation.json";
import Meta4MobileAnimation from "../assets/Meta4MobileAnimation.json";
import Lottie from "lottie-react";
import { useInView } from "react-intersection-observer";
function MetaTrader4() {
  const imagepath = "/images/newmetatrader4.png";
  const handleLinkClick = (event, isLogin) => {
    event.preventDefault();
    handleRedirect(isLogin);
  };

  const tradingGridData = [
    {
      imagepath: "/images/oneclick.png",
      title: "one-click Trading",
      description: "Enter the market and close positions with just one click.",
    },
    {
      imagepath: "/images/AlgoTrading.png",
      title: "Algorithmic trading",
      description:
        "Create your own trading robots in MQL4 programming language and run them in your terminal.",
    },
    {
      imagepath: "/images/metatradermarket.png",
      title: "MetaTrader Market",
      description:
        "Buy Expert Advisors and indicators directly in MetaTrader 4.",
    },
    {
      imagepath: "/images/fundamentalAnalyisi.png",
      title: "Fundamental analysis",
      description:
        "News and signals in your terminal will allow you to keep track of all financial market events.",
    },
  ];

  const { ref: ref, inView: inView } = useInView({
    triggerOnce: false, // play once
    threshold: 0.5, // 50% of element should be visible
  });

  function TradingGrid({ imagepath, title, description }) {
    return (
      <div className="flex flex-col justify-start items-center text-white text-center w-full h-full">
        <div className="mb-3">
          <img src={imagepath} alt="metatrading 4" />
        </div>
        <h3 className="mb-2 text-base capitalize min-h-[2.5rem]">{title}</h3>
        <p className="text-white/80 text-sm">{description}</p>
      </div>
    );
  }

  return (
    <div className="relative">
      <img
        src="/images/bg-shadow.png"
        alt=""
        className="absolute top-0 left-0 w-full"
      />
      <div className="bg-[#030B20] ">
        <Header mode={"light"} />
        <div className="bg-[#030B20] pt-16">
          <div className="container mx-auto lg:pt-10  md:pb-5 relative">
            <div className="mt-18 lg:mt-20">
              <div
                ref={ref}
                className="flex flex-col lg:flex-row justify-center "
              >
                <div className="flex-1 flex flex-col py-6  pb-4 mb:pb-0 lg:py-10 text-white space-y-4">
                  <h2 className="font-bold text-5xl pb-2 lg:pb-4 lg:text-left  lg:-mb-1">
                    MetaTrader 4
                  </h2>
                  <p className="text-lg font-light  md:text-3xl leading-[30px]">
                    One of the most popular platforms on the currency market
                  </p>
                  <p className="text-sm lg:text-base leading-[18px] font-light text-[#D1D1D1]">
                    The classic MetaTrader 4 terminal offered by RoboForex is
                    the top choice for trading among its clients. It is widely
                    popular among both beginner and experienced traders,
                    providing all necessary features and tools for the financial
                    market. Additionally, it offers unique functionality and
                    opportunities specific to MQL platforms.
                  </p>
                  <div className="text-sm  lg:text-base font-light py-6 text-[#D1D1D1]">
                    <ul className="list-disc pl-5 lg:pl-0 lg:list-inside space-y-2 leading-[18px]">
                      <li>3 types of order execution</li>
                      <li>50 ready-to-use indicators for technical analysis</li>
                      <li>Basic tools for graphic analysis</li>
                      <li>Opportunity to program your own trading robot</li>
                    </ul>
                  </div>

                  <div>
                    <button className="text-[#112556] text-sm lg:text-lg bg-gradient-to-r from-[#4575FF] to-[#92AEFF] px-5 py-3 capitalize font-medium rounded-sm">
                      {" "}
                      <a href="https://download.mql5.com/cdn/web/fastone.global.financial/mt4/fastoneglobal4setup.exe">
                        download meta trader 4 for pc
                      </a>
                    </button>
                  </div>
                </div>
                <div className="flex-1 flex justify-center items-center ">
                  {/* <img src={imagepath} alt="metatrader 4 " /> */}
                  <div className="relative w-full h-[350px] sm:h-[450px]">
                    {inView ? (
                      <div className="absolute inset-0">
                        <Lottie
                          animationData={Meta4HeroAnimation}
                          loop={false}
                        />
                      </div>
                    ) : (
                      <img
                        src={imagepath}
                        alt="metatrader 4"
                        className="absolute inset-0"
                      />
                    )}
                  </div>
                </div>
              </div>

              {/* trading grid  */}
              <div className="my-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 my-6">
                  {tradingGridData.map((data) => (
                    <div className="flex" key={data.title}>
                      <TradingGrid
                        title={data.title}
                        description={data.description}
                        imagepath={data.imagepath}
                      />
                    </div>
                  ))}
                </div>

                <div className="flex flex-col md:flex-row md:gap-10 justify-center items-center mt-10 gap-4 lg:gap-4">
                  <button className="text-[#112556] rounded-sm bg-gradient-to-r from-[#4575FF] to-[#92AEFF]  px-5 py-3 lg:px-5 lg:py-3 capitalize font-medium">
                    {" "}
                    <a href="#" onClick={(e) => handleLinkClick(e, false)}>
                      open trading account{" "}
                    </a>
                  </button>
                  <button className="text-white rounded-sm bg-gradient-to-r from-[#1378BF] to-[#1378BF] px-6.5 py-3 lg:px-5 lg:py-3 capitalize font-medium">
                    {" "}
                    <a href="#" onClick={(e) => handleLinkClick(e, false)}>
                      open demo account{" "}
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <MetaTraderPlatform
          title="MetaTrader 4 mobile application"
          imagepath="/images/metatradermobile4.png"
          animation={Meta4MobileAnimation}
          description="MetaTrader 4 portable application will allow you to trade from
                  anywhere in the world. Designed specifically for smartphones
                  and tablets, this mobile terminal offers traders a familiar
                  interface with slight modifications and the same set of tools
                  and features as the desktop terminal. Download the portable
                  version of the MetaTrader 4 to your mobile device and try
                  trading from any convenient place - the terminal will always
                  be with you!"
          button={[
            {
              href: "https://download.mql5.com/cdn/mobile/mt4/ios?server=FastOneGlobal-Demo,FastOneGlobal-Main",
              firstname: "Download on the",
              lastname: "App Store",
              // imgpath: "/images/mt4.png",
              icon: <FaApple size={30} color="white" />,
            },
            {
              href: "https://download.mql5.com/cdn/mobile/mt4/android?server=FastOneGlobal-Demo,FastOneGlobal-Main",
              firstname: "Get it on",
              lastname: "Google Play",
              // imgpath: "/images/mt4.png",
              icon: <IoLogoGooglePlaystore size={30} color="white" />,
            },
          ]}
        />

        <div className="relative overflow-x-hidden">
          <img
            src="/images/bg-shadow-circle.png"
            alt=""
            className="absolute -right-1/6 top-1/6"
          />
          <MetaTraderPlatform
            title="MetaTrader 4 web platform"
            imagepath="/images/metatraderwebapp.png"
            description=" Also, you have an opportunity to use a web version of
          MetaTrader 4 platform, which is supported by all available
          browsers. The MT4 web terminal offers the same features and
          performance as the desktop version, and is still available in
          all languages supported by FastOne websites. Manage your
          positions freely and easily from any place in the world."
            button={[
              {
                href: "#",
                firstname: "open in",
                lastname: "browser",
                imgpath: "/images/mt4.png",
              },
            ]}
          />

          <section className="bg-[#030B20] py-10 flex items-center justify-center px-4 ">
            {/* <img
            src="/images/bg-shadow-circle.png"
            alt=""
            className="absolute -right-1/6 -top-3/5"
          /> */}
            <div className="container mx-auto flex justify-center relative">
              <div className=" w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-10 text-white">
                {/* <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-10 text-white"> */}
                {/* Left Side */}
                <div className="space-y-4">
                  <h2 className="text-4xl text-white font-semibold leading-[52px]">
                    Why trade on MetaTrader 4 app with Fastone
                  </h2>
                  <p className="text-sm text-white/60 leading-[20px]">
                    Enjoy trading on this time-tested and convenient mobile
                    trading platform, with the broker 800,000 traders trust.
                    Access diverse financial markets and real-time execution to
                    trade anytime, anywhere.
                  </p>
                </div>

                {/* Right Side */}
                <div className="bg-[#092140] rounded-xl p-8 space-y-6 shadow-md border border-[#4575FF]">
                  <div className="flex items-center gap-4">
                    <div className="flex  text-5xl font-bold text-white">1</div>
                    <div className="flex-1 space-y-2">
                      <h3 className="font-bold text-xl lg:text-2xl  text-white">
                        Instant withdrawals
                      </h3>
                      <p className="text-sm leading-[24px]">
                        Remain in control of your funds. Simply choose your
                        preferred payment method, make a withdrawal request, and
                        enjoy instant automatic approval.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 border-t border-blue-300 pt-6">
                    <div className="flex text-5xl font-bold text-white">2</div>
                    <div className="flex-1 space-y-2">
                      <h3 className="font-bold text-xl lg:text-2xl  text-white">
                        Ultra-fast execution
                      </h3>
                      <p className="text-sm leading-[24px]">
                        Stay ahead of trends with lightning-fast execution. Get
                        your orders executed in milliseconds on all available
                        platforms at Fastone.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 border-t border-blue-300 pt-6">
                    <div className="flex text-5xl font-bold text-white">3</div>
                    <div className="flex-1 space-y-2">
                      <h3 className="font-bold text-xl lg:text-2xl  text-white">
                        Stop Out Protection
                      </h3>
                      <p className="text-sm leading-[24px] text-gray-200">
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
        </div>

        <InstantAccount />
      </div>
    </div>
  );
}

export default MetaTrader4;
