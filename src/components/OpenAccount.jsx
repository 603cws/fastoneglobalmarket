import React from "react";
// bg-[#0d1b2a]
const OpenAccount = () => {
  return (
    <section className="py-10">
      <div className="max-w-screen-xl mx-auto px-4 start-trading">
        <div className="mt-3">
          <div className="flex">
            <div className="bg-gradient-to-b from-[#4575FF] to-[#92AEFF]  p-0.5 rounded-xl">
              <div className="w-full border bg-[#030B20]  rounded-xl p-3 md:p-6 flex flex-col md:flex-row md:justify-between md:items-center md:gap-6 ">
                {/* Left Column */}
                <div className="w-full md:w-1/2 box-left">
                  <h3 className="text-white text-2xl font-bold">
                    Start Trading Now
                  </h3>
                </div>

                {/* Right Column */}
                <div className="w-full md:w-1/2 box-right flex justify-center md::justify-end">
                  <div className="inner-img">
                    <a
                      href="/account-comparison"
                      className="bg-white text-sm rounded-lg py-2 px-5 "
                    >
                      Open Account Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  // return (
  //   <section>
  //     <div className="container start-trading">
  //       <div className="row mt-3">
  //         <div className="col-md-12 d-flex">
  //           <div className="box-card card-shrink card-2  bgt-primary half">
  //             <div className="row d-flex">
  //               <div className="col-md-6 box-left">
  //                 <h3>Start Trading Now</h3>
  //               </div>
  //               <div className="col-md-6 box-right">
  //                 <div className="inner-img">
  //                   <a
  //                     href="/account-comparison"
  //                     className="btn-one rounded-btn white-btn"
  //                   >
  //                     Open Account Now
  //                   </a>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </section>
  // );
};

export default OpenAccount;
