import React from "react";
import "./PricingTable.css"; // Assuming you have a CSS file for styles
import { handleRedirect } from "../lib/redirectLocationHandler";

const PricingCard = ({
  title,
  initialDeposit,
  leverage,
  charges,
  tradeSize,
  platform,
  marginCall,
  stopoutLevel,
  rebate,
}) => {
  const handleLinkClick = (event, isLogin) => {
    event.preventDefault();
    handleRedirect(isLogin);
  };

  return (
    <div className=" text-white py-6 lg:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="border border-blue-500 rounded-xl p-6  shadow-lg flex flex-col justify-between ">
          <div className="">
            <h3 className="text-xl font-bold text-center  text-blue-400 mb-4">
              {title}
            </h3>
            <div
              className="h-px w-full my-10"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #000000 0%, #92AEFF 24%, #4575FF 77%, #000000 98%)",
              }}
            ></div>
            <div className="space-y-6  text-sm">
              <div className="flex justify-between items-center border-b border-b-[#494949] pb-3">
                <p className=" text-[#B2B2B2]">Initial Deposit</p>{" "}
                <p className="flex-1 flex justify-center items-center text-[#E3E3E3] text-lg">
                  {" "}
                  {initialDeposit}
                </p>
              </div>
              {/* <p className="flex justify-between items-center border-b border-b-[#494949] pb-3">
                <span className=" text-[#B2B2B2]">Initial Deposit</span>{" "}
                <span className="text-[#E3E3E3] text-lg">
                  {" "}
                  {initialDeposit}
                </span>
              </p> */}
              <div className="flex justify-between items-center border-b border-b-[#494949] pb-3">
                <p className=" text-[#B2B2B2]">leverage</p>{" "}
                <p className="flex-1 flex justify-center items-center text-[#E3E3E3] text-lg">
                  {" "}
                  {leverage}
                </p>
              </div>
              <div className="flex justify-between items-center border-b border-b-[#494949] pb-3">
                <p className=" text-[#B2B2B2] text-sm">Charges</p>
                <div className="flex-1 flex justify-center items-center">
                  <ul className=" list-disc list-inside ml-2 space-y-1 text-xs text-[#CCD9FF]">
                    {charges.map((charge, index) => (
                      <li key={index}>{charge}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex justify-between items-center border-b border-b-[#494949] pb-3">
                <p className=" text-[#B2B2B2]">Minimum Trade Size</p>{" "}
                <p className="flex-1 flex justify-center items-center  text-[#E3E3E3]">
                  {" "}
                  {tradeSize}
                </p>
              </div>
              <div className="flex justify-between items-center border-b border-b-[#494949] pb-3">
                <p className=" text-[#B2B2B2]">platform</p>{" "}
                <p className="flex-1 flex justify-center items-center  text-[#E3E3E3]">
                  {" "}
                  {platform}
                </p>
              </div>
              <div className="flex justify-between items-center gap-2 ">
                <p className=" text-[#B2B2B2]">Margin Call/Stopout Level</p>{" "}
                <p className="flex-1 flex justify-center items-center  text-[#E3E3E3]">
                  {marginCall} / {stopoutLevel}
                </p>
              </div>
              {/* <p>
                <span className="">Margin Call / Stopout Level:</span>{" "}
                {marginCall} /{stopoutLevel}
              </p> */}
              {rebate && (
                <div className="pricing-feature">
                  <h6>Rebate</h6>
                  <p>{title === "Gold" ? <strong>{rebate}</strong> : rebate}</p>
                </div>
              )}
            </div>
          </div>

          <div
            className="h-px w-full mt-5"
            style={{
              backgroundImage:
                "linear-gradient(to right, #000000 0%, #92AEFF 24%, #4575FF 77%, #000000 98%)",
            }}
          ></div>
          <button className="mt-3 w-full bg-gradient-to-r from-[#4575FF] to-[#92AEFF] text-[#112556] py-2 rounded-lg transition cursor-pointer">
            <a href="#" onClick={(e) => handleLinkClick(e, false)}>
              Open {title} Account
            </a>
          </button>
        </div>
      </div>
    </div>
  );
  // return (
  //   <div className="col-lg-4 col-md-6 mb-4">
  //     <div className="card pricing-card shadow-sm">
  //       <div className="card-header">
  //         <h2 className="card-price">{title}</h2>
  //       </div>
  //       <div className="card-body">
  //         <div className="pricing-feature">
  //           <h6>Initial Deposit</h6>
  //           <p>{initialDeposit}</p>
  //         </div>
  //         <div className="pricing-feature">
  //           <h6>Leverage</h6>
  //           <p>{leverage}</p>
  //         </div>
  //         <div className="pricing-feature">
  //           <h6>Charges</h6>
  //           <ul>
  //             {charges.map((charge, index) => (
  //               <li key={index}>{charge}</li>
  //             ))}
  //           </ul>
  //         </div>
  //         <div className="pricing-feature">
  //           <h6>Minimum Trade Size</h6>
  //           <p>{tradeSize}</p>
  //         </div>
  //         <div className="pricing-feature">
  //           <h6>Platform</h6>
  //           <p>{platform}</p>
  //         </div>
  //         <div className="pricing-feature">
  //           <h6>Margin Call / Stopout Level</h6>
  //           <p>{marginCall} / {stopoutLevel}</p>
  //         </div>
  //         {rebate && (
  //           <div className="pricing-feature">
  //             <h6>Rebate</h6>
  //             <p>
  //               {title === 'Gold' ? <strong>{rebate}</strong> : rebate}
  //             </p>
  //           </div>
  //         )}
  //       </div>
  //       <div className="card-footer">
  //         <a href="#" onClick={(e) => handleLinkClick(e, false)} className="btn account-btn">
  //           Open {title} Account
  //         </a>
  //       </div>
  //     </div>
  //   </div>
  // );
};

const PricingTable = () => {
  const pricingPlans = [
    {
      title: "Standard",
      initialDeposit: "$100",
      leverage: "Upto 1:500",
      charges: [
        "All inclusive spread",
        "Currency spread from 1.2",
        "Gold spread from 25 cents",
      ],
      tradeSize: "0.01 Lot",
      platform: "MT4/MT5",
      marginCall: "100%",
      stopoutLevel: "30%",
    },
    {
      title: "Gold",
      initialDeposit: "$1000",
      leverage: "Upto 1:500",
      charges: [
        "Raw + $3.5 per side",
        "Currency spread from 0",
        "Gold spread from 10 cents",
      ],
      tradeSize: "0.01 Lot",
      platform: "MT4/MT5",
      marginCall: "100%",
      stopoutLevel: "30%",
    },
  ];

  return (
    <section className="pricing-table">
      <div className="lg:container mx-2 lg:mx-auto my-2">
        <div className="flex flex-col md:flex-row justify-center  items-center">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
  // return (
  //   <section className="pricing-table">
  //     <div className="container my-2">
  //       <div className="row justify-content-center">
  //         {pricingPlans.map((plan, index) => (
  //           <PricingCard key={index} {...plan} />
  //         ))}
  //       </div>
  //     </div>
  //   </section>
  // );
};

export default PricingTable;
