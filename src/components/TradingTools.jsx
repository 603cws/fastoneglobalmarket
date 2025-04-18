import React from "react";

const TradingTools = () => {
  return (
    <section className="lg:py-20  bg-[#030B20]">
      <div className="container mx-auto px-4">
        {/* Title and description row */}

        <div
          className="flex pb-5 md:pb-0
         flex-col lg:flex-row gap-5 lg:gap-0 justify-between items-center"
        >
          <div className="flex-1 text-3xl text-[#4575FF] font-bold text-center">
            <h2>Trusted trading platforms</h2>
          </div>
          <div className="flex-1 gradient-left-border pl-4 relative">
            <p className="text-[#fff]">
              We understand that different clients have different needs. Hence,
              we offer a wide range of trusted award-winning platforms to choose
              from.
            </p>
          </div>
        </div>

        {/* Platform content */}
        <div className="row">
          <div className="col-12 platform-content">
            <img
              src="/images/home-img/platforms.webp"
              className="t-platform-image"
              alt=""
            />
            <div className="platform-grid ">
              <a href="" className=" pf-card pf-card-1 bg-[#fff] mb-3  md:mb-0">
                <img
                  src="/images/hero-icons/mt4.svg"
                  className="grid-img"
                  alt=""
                />
                <div className="pf-card-right">
                  <h3>MetaTrader 4</h3>
                  <p>Level up your experience.</p>
                </div>
              </a>
              <a href="" className="pf-card pf-card-2 bg-[#fff] mb-3  md:mb-0">
                <img
                  src="/images/hero-icons/mt5.svg"
                  className="grid-img"
                  alt=""
                />
                <div className="pf-card-right">
                  <h3>MetaTrader 5</h3>
                  <p>A step up in Trading function</p>
                </div>
              </a>
              <a href="" className="pf-card pf-card-4 bg-[#fff] mb-3 md:mb-0">
                <img
                  src="/images/hero-icons/security.png"
                  className="grid-img"
                  alt=""
                />
                <div className="pf-card-right">
                  <h3>Secure Connectivity</h3>
                  <p>Robust encryption and security </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  // return (
  //   <section className="sp-5 bgt-white">
  //   <div className="container">
  //     <div className="row">
  //       <div className="col-12">
  //         <div className="half">
  //           <div className="row d-flex trusted-pf">
  //             <div className="col-lg-6 box-left ">
  //               <h2>Trusted trading platforms</h2>
  //             </div>
  //             <div className="col-lg-6 box-right l-quote">
  //               <p>
  //                 we understand that different clients have different needs.
  //                 Hence, we offer a wide range of trusted award winning
  //                 platforms to choose from.
  //               </p>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //     <div className="row">
  //       <div className="col-12 platform-content">
  //         <img
  //           src="/images/home-img/platforms.webp"
  //           className="t-platform-image"
  //           alt=""
  //         />
  //         <div className="platform-grid ">
  //           <a href="" className=" pf-card pf-card-1">
  //             <img src="/images/hero-icons/mt4.svg" className="grid-img" alt="" />
  //             <div className="pf-card-right">
  //               <h3>MetaTrader 4</h3>
  //               <p>Level up your experience.</p>
  //             </div>
  //           </a>
  //           <a href="" className="pf-card pf-card-2">
  //             <img src="/images/hero-icons/mt5.svg" className="grid-img" alt="" />
  //             <div className="pf-card-right">
  //               <h3>MetaTrader 5</h3>
  //               <p>A step up in Trading function</p>
  //             </div>
  //           </a>

  //           <a href="" className="pf-card pf-card-4">
  //             <img src="/images/hero-icons/security.png" className="grid-img" alt="" />
  //             <div className="pf-card-right">
  //               <h3>Secure Connectivity</h3>
  //               <p>Robust encryption and security </p>
  //             </div>
  //           </a>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // </section>
  // );
};

export default TradingTools;
