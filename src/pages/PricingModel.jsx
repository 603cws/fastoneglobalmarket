import React from "react";
import { BsLightningCharge } from "react-icons/bs";

const PricingModel = () => {
  const pricingGrid = [
    {
      title: "Lightning-Fast Execution",
      desc: "Over 98% of trades executed in less than 0.1 seconds!",
      icon: <BsLightningCharge size={30} color="#4575FF" />,
      pricingimage: "/images/pricing-model/lightning.png",
    },
    {
      title: "Trade with Confidence",
      desc: "100% transparency and no hidden fees!",
      icon: <BsLightningCharge size={30} />,
      pricingimage: "/images/pricing-model/self-confidence.png",
    },
    {
      title: "Always in Control",
      desc: "99.9% of market orders executed instantly!",
      icon: <BsLightningCharge size={30} />,
      pricingimage: "/images/pricing-model/control.png",
    },
    {
      title: "Uninterrupted Trading",
      desc: "Over 99% uptime for a seamless trading experience!",
      icon: <BsLightningCharge size={30} />,
      pricingimage: "/images/pricing-model/uninterrupted.png",
    },
    {
      title: "Your Strategy, Your Terms",
      desc: "Execute your trades with pinpoint accuracy!",
      icon: <BsLightningCharge size={30} />,
      pricingimage: "/images/pricing-model/growth-skill.png",
    },
    {
      title: "Trusted Reliability",
      desc: "No delays, no surprises, just flawless trade execution!",
      icon: <BsLightningCharge size={30} />,
      pricingimage: "/images/pricing-model/reputation.png",
    },
  ];
  return (
    <div className="bg-[#030B20] text-white min-h-screen px-4 lg:px-16 py-10">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-sm md:text-base text-gray-400">
          Home / Trading / <span className="text-blue-400">Pricing Model</span>
        </h2>
        <h1 className="text-xl lg:text-3xl xl:text-5xl font-bold text-blue-400 mt-4">
          NDD EXECUTION
        </h1>
        <p className="text-gray-300 mt-4 text-xs md:text-sm lg:text-lg">
          Deep liquidity, the best possible prices, and ultra fast precise
          execution at the best prices possible. Doesn't get FASTER than this.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
          {pricingGrid.map((item, index) => (
            <div
              key={index}
              className="border border-blue-400 flex items-center justify-around gap-1  rounded-md p-5 hover:shadow-lg transition duration-300"
            >
              <div className="border-l  border-l-[#4575FF] pl-1">
                <img src={item.pricingimage} alt="pricingmodel" />
              </div>
              <div>
                <h3 className="font-semibold text-sm lg:text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-xs lg:text-sm text-[#B2B2B2]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 flex  justify-between  border-2 border-blue-400 drop-shadow-2xl rounded-lg p-4 items-center gap-4">
          <div className=" text-white text-sm lg:text-xl font-bold  rounded-md ">
            Start Trading Now
          </div>
          <button className="bg-white text-sm lg:text-base text-black px-6 py-3 border-2 border-[#fff] rounded-xl">
            Open Account Now
          </button>
        </div>

        <div className="bg-[#0A324F] flex justify-center md:justify-around items-center mt-16 py-6 rounded-md text-center px-2 md:px-0">
          <div>
            <p className="text-white font-semibold text-sm lg:text-lg ">
              Instant Account - Trade Within Minutes!
            </p>
          </div>
          <div>
            <button className="md:mt-4 text-xs lg:text-base bg-white text-black px-3 py-1 md:px-6 md:py-2 rounded-md font-medium">
              <a href="/account-comparison">Start Live Account</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingModel;

// import Header from "../components/Header";
// import FeaturesGrid from "../components/FeaturesGrid";
// import TitleArea from "../components/TitleArea";
// import OpenAccount from "../components/OpenAccount";

// const advantages = [
//   {
//     title: "Lightning-Fast Execution",
//     icon: "/images/icons/lightning.png",
//     description: "Over 98% of trades executed in less than 0.1 seconds!",
//   },

//   {
//     title: "Trade with Confidence",
//     icon: "/images/icons/self-confidence.png",
//     description: "100% transparency and no hidden fees!",
//   },
//   {
//     title: "Always in Control",
//     icon: "/images/icons/control.png",
//     description: "99.9% of market orders executed instantly!",
//   },
//   {
//     title: "Uninterrupted Trading",
//     icon: "/images/icons/uninterrupted.png",
//     description: "Over 99% uptime for a seamless trading experience!",
//   },
//   {
//     title: "Your Strategy, Your Terms",
//     icon: "/images/icons/growth-skill.png",
//     description: "Execute your trades with pinpoint accuracy!",
//   },
//   {
//     title: "Trusted Reliability",
//     icon: "/images/icons/reputation.png",
//     description: "No delays, no surprises, just flawless trade execution!",
//   },
// ];

// function PricingModel() {
//   const breadcrumbPaths = [
//     { name: "Home", href: "/" },
//     { name: "Trading", href: "" },
//     { name: "Pricing Model" },
//   ];
//   return (
//     <>
//       <Header mode={"light"} />
//       <TitleArea
//         title="NDD EXECUTION"
//         description="Deep liquidity, the best possible prices, and ultra fast precise execution at the best prices possible. Doesn't get FASTer than this."
//         breadcrumbPaths={breadcrumbPaths}
//       />
//       <section className="adv-start">
//         <div className="container">
//           <FeaturesGrid advantages={advantages} />
//         </div>
//       </section>

//       <OpenAccount />
//     </>
//   );
// }

// export default PricingModel;
