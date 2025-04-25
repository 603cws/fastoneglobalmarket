import Header from "../components/Header";
import FeaturesGrid from "../components/FeaturesGrid";
import TitleBgCenter from "../components/TitleBgCenter";
import OpenAccount from "../components/OpenAccount";
import TitleArea from "../components/TitleArea";
import InstantAccount from "../components/InstantAccount";
import MarketHeaderSection from "../components/MarketHeaderSection";

const advantages = [
  {
    icon: "/images/icons/chess.png",
    title: "75+ Instruments",
    description:
      "You have multiple options to choose from - Currency, Bullion, CFDs, Indices. You name it and we have it.",
  },
  {
    icon: "/images/icons/shuffle.png",
    title: "Competitive Spreads",
    description:
      "Competitive Spreads The spread that we offer is unbeatable. Our Raw spreads means really raw spread.",
  },
  {
    icon: "/images/icons/pencil.png",
    title: "Sharp Trading Execution",
    description:
      "The accuracy and speed of execution at FastOne is something you will be surely surprised with. Come and experience the sharp trading execution with us.",
  },
  {
    icon: "/images/icons/heart.png",
    title: "Trusted & Regulated Broker",
    description:
      // description:
      "FastOne is a Mauritius based broker authorised and regulated by the Financial Services Commission (the “FSC”).",
    // "FastOne is a Mauritius based broker authorised and regulated by the Financial Services Commission (the “FSC”). We are a leading financial intermediary with a significant presence in Europe, MENA and South East Asia regions offering online trading solutions. Our senior management has extensive industry experience spanning over 25 years on aggregate, and this translates into our transparent, reliable, and reputable service.",
  },
  {
    icon: "/images/icons/television.png",
    title: "Powerful Trading Terminals",
    description:
      "Trade on the world’s most popular platform MT4 and other EA and AI Tools.",
  },
  {
    icon: "/images/icons/handshake.png",
    title: "Customer Experience",
    description:
      "24 X 7 Customer support services is available throughout the year.",
  },
];

function WhyChooseUS() {
  const breadcrumbPaths = [
    { name: "Home", href: "/" },
    { name: "Company", href: "" },
    { name: "Why Choose Us?" },
  ];
  return (
    <div className="bg-[#030B20]">
      <img
        src="/images/bg-shadow.png"
        alt=""
        className="absolute top-0 left-0 max-h-full w-full object-cover"
      />
      <Header />
      {/* <TitleBgCenter
        title="Why Choose Us?"
        description=""
        backgroundImage="/images/bg-2.png"
        breadcrumbPaths={breadcrumbPaths}
      /> */}
      <div className="bg-[#030B20] py-10 text-center">
        <TitleArea breadcrumbPaths={breadcrumbPaths} />
      </div>
      <div className="bg-[#030B20]">
        <div className="container mx-auto lg:pt-10  md:pb-5 relative">
          <div className="">
            <div className="flex flex-col lg:flex-row justify-center lg:justify-between lg:items-center lg:gap-10 ">
              <div className="flex-1 flex justify-center pb-4 mb:pb-0 lg:py-10 ">
                <h2 className="font-bold text-xl text-center lg:text-left md:text-5xl xl:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-[#4575FF] to-[#92AEFF]">
                  Why Choose Us?
                </h2>
              </div>
              <div className="flex-1 flex justify-center items-center  ">
                <div className="md:max-w-lg">
                  {" "}
                  <img src="/images/whychooseus.png" alt="whychooseus" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="mt-5 relative">
        <div className="container mx-auto">
          <div className=" space-y-4">
            <h1 className="text-white text-center pt-8">
              The Advantages of Trading With FastOne
            </h1>
            <p className="text-center text-[#B2B2B2] ">
              Once you start trading with us, you will be addicted to be with us
              and here are the reasons.
            </p>
            <div className="">
              <FeaturesGrid advantages={advantages} />
            </div>
          </div>
          <OpenAccount />
        </div>
      </section>

      <InstantAccount />
    </div>
  );
  // return (
  //   <>
  //     <Header mode={"light"} />
  //     <TitleBgCenter
  //       title="Why Choose Us?"
  //       description=""
  //       backgroundImage="/images/bg-2.png"
  //       breadcrumbPaths={breadcrumbPaths}
  //     />
  //     <section className="mt-5 why-choose-us">
  //       <div className="container">
  //         <div className="row ">
  //           <h1 className="wcu-title">
  //             The Advantages of Trading With FastOne
  //           </h1>
  //           <p className="text-center">
  //             Once you start trading with us, you will be addicted to be with us
  //             and here are the reasons.
  //           </p>
  //           <div className="col-12 about-text">
  //             <FeaturesGrid advantages={advantages} />
  //           </div>
  //         </div>
  //         <OpenAccount/>
  //       </div>
  //     </section>
  //   </>
  // );
}

export default WhyChooseUS;
