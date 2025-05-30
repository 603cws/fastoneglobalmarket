import Header from "../components/Header";
import InstantAccount from "../components/InstantAccount";
import Breadcrumbs from "../components/Breadcrumbs";
import WithDrawalAnimation from "../assets/WithDrawalAnimation.json";
import { useInView } from "react-intersection-observer";
import Lottie from "lottie-react";

function DepositsWithdrawls() {
  const breadcrumbPaths = [
    { name: "Home", href: "/" },
    { name: "Deposits and Withdrawls" },
  ];

  const { ref: ref, inView: inView } = useInView({
    triggerOnce: false, // play once
    threshold: 0.5, // 50% of element should be visible
  });

  return (
    <div
      className="bg-[#030B20] bg-cover bg-center"
      style={{ backgroundImage: "url('/images/bg-landing3.png')" }}
    >
      <Header />
      <section className="w-full px-4 sm:px-10" ref={ref}>
        <div className="py-10 text-center max-w-7xl mx-auto">
          <div className="pt-24 relative">
            <h2 className="text-xs md:text-base text-white">
              {breadcrumbPaths && (
                <Breadcrumbs
                  paths={breadcrumbPaths}
                  currentTitle="Pricing Model"
                />
              )}
            </h2>
          </div>

          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8 sm:gap-10 pt-12">
            {/* Left Content */}
            <div className="space-y-4 flex-1 text-left">
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-snug sm:leading-tight">
                <span className="bg-gradient-to-r from-[#4575FF] to-[#92AEFF] text-transparent bg-clip-text">
                  Deposits / Withdrawals
                </span>
              </h1>
            </div>

            {/* Right Image */}
            <div className="w-45 sm:w-64 md:w-[400px] h-48 sm:h-64 md:h-[500px] rounded-xl md:flex-1 mt-4 sm:mt-10 md:mt-0 overflow-hidden">
              {inView ? (
                <Lottie
                  animationData={WithDrawalAnimation}
                  loop={false}
                  className="h-full object-contain"
                />
              ) : (
                <img
                  src="/images/card.png"
                  alt="Card"
                  className="w-full h-full object-contain"
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Section with Icons */}
      <section className="w-full mt-20 px-4 md:px-10 lg:px-18 xl:px-32">
        <div className="flex flex-wrap justify-between items-center py-10 mx-auto container">
          <div className="flex-1 flex justify-start 3xl:justify-center">
            <img
              src="/images/dw1.png"
              alt="deposit 1"
              className="w-[100px] sm:w-[120px] md:w-[140px] icon-4k2 object-contain"
            />
          </div>
          <div className="flex-1 flex justify-center">
            <img
              src="/images/dw2.png"
              alt="deposit 2"
              className="w-[100px] sm:w-[120px] md:w-[140px] icon-4k2 object-contain"
            />
          </div>
          <div className="flex-1 flex justify-center">
            <img
              src="/images/dw3.png"
              alt="deposit 3"
              className="w-[100px] sm:w-[120px] md:w-[140px] icon-4k2 object-contain"
            />
          </div>
          <div className="flex-1 flex justify-end 3xl:justify-center">
            <img
              src="/images/dw4.png"
              alt="deposit 4"
              className="w-[100px] sm:w-[120px] md:w-[140px] icon-4k2 object-contain"
            />
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20 w-full px-4 md:px-10 lg:px-18 xl:px-32 px-4k">
        <div className="container mx-auto">
          <div className="p-[1px] bg-gradient-to-r from-[#4575FF] to-[#92AEFF] rounded-xl">
            <div className="bg-[#030B20] rounded-xl text-white px-6 xl:px-14 py-10 border border-[#4575FF]">
              <div className="text-[#B2B2B2] font-bold text-sm lg:text-lg">
                <p>
                  FastOne Global Financial Markets Limited typically processes
                  deposits within 24 to 48 hours and processes withdrawals
                  within 24 to 48 hours of receiving a valid request.
                </p>
                <br />
                <p>
                  Note: this period may be extended due to enhanced Due
                  Diligence associated with larger sums or matters of concern.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="md:py-10 lg:py-20 w-full px-4 md:px-10 lg:px-18 xl:px-32 px-4k">
        <div className="container mx-auto flex flex-col gap-20 lg:gap-10 lg:flex-row justify-between items-center py-20">
          {/* CARD 1 */}
          <div className="relative w-[280px] max-w-full p-[1px] bg-gradient-to-r from-[#4575FF] to-[#92AEFF] rounded-xl">
            <div className="rounded-xl border border-[#4575FF] flex justify-center items-center text-center bg-[#030B20] h-54">
              <div className="absolute -top-1/3 left-1/2 transform -translate-x-1/2 rounded-sm">
                <img
                  src="/images/dw5.png"
                  alt="Bank Transfer"
                  className="w-30 h-30 object-contain"
                />
              </div>
              <div className="py-2">
                <h3 className="text-white font-semibold text-lg">
                  Bank Transfer
                </h3>
                <p className="text-gray-400 text-sm mt-1">(GBP/USD/EUR/MUR)</p>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="relative w-[280px] max-w-full p-[1px] bg-gradient-to-r from-[#4575FF] to-[#92AEFF] rounded-xl">
            <div className=" rounded-xl border border-[#4575FF] flex justify-center items-center text-center bg-[#030B20] h-54">
              <div className="absolute -top-1/3 left-1/2 transform -translate-x-1/2 rounded-sm">
                <img
                  src="/images/dw6.png"
                  alt="Credit Card"
                  className="w-30 h-30 object-contain"
                />
              </div>
              <div className="py-4">
                <h3 className="text-white font-semibold text-lg">
                  Credit Card
                </h3>
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="relative w-[280px] max-w-full p-[1px] bg-gradient-to-r from-[#4575FF] to-[#92AEFF] rounded-xl">
            <div className="rounded-xl border border-[#4575FF] flex justify-center items-center text-center bg-[#030B20] h-54">
              <div className="absolute -top-1/3 left-1/2 transform -translate-x-1/2 rounded-sm">
                <img
                  src="/images/dw7.png"
                  alt="Skrill"
                  className="w-30 h-30 object-contain"
                />
              </div>
              <div className="py-4">
                <h3 className="text-white font-semibold text-lg">Skrill</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <InstantAccount />

      {/* <section className="mt-5">
        <div className="container">
          <div className="row">
            <div className="col-12 about-text">
              <img src="/images/icons/bankstripe.svg" alt="" />
              <div className="infoDiv">
                <p>
                  ➤ FastOne Global Financial Markets Limited typically processes
                  deposits within 24 to 48 hours and processes withdrawals
                  within 24 to 48 hours of receiving a valid request. <br />
                  Note: this period may be extended due to enhanced Due
                  Diligence associated with larger sums or matters of concern.
                </p>
              </div>
              <div className="infoDiv">
                <p>
                  ➤ Clients of FastOne can use a number of deposit methods.
                  These providers include:
                  <ul>
                    <li>Bank Transfer (GBP/USD/EUR/MUR)</li>
                    <li>Credit Card</li>
                    <li>Skrill</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
  // return (
  //   <>
  //     <Header mode={"light"} />
  //     <TitleBgCenter
  //       title="Deposits / Withdrawls"
  //       description=""
  //       backgroundImage="/images/bg-2.png"
  //       breadcrumbPaths={breadcrumbPaths}
  //     />
  //     <section className="mt-5">
  //       <div className="container">
  //         <div className="row">
  //           <div className="col-12 about-text">
  //             <img src="/images/icons/bankstripe.svg" alt="" />
  //             <div className="infoDiv">
  //               <p>
  //               ➤ FastOne Global Financial Markets Limited typically processes
  //                 deposits within 24 to 48 hours and processes withdrawals
  //                 within 24 to 48 hours of receiving a valid request. <br/>Note: this
  //                 period may be extended due to enhanced Due Diligence
  //                 associated with larger sums or matters of concern.
  //               </p>
  //             </div>
  //             <div className="infoDiv">
  //               <p>
  //               ➤ Clients of FastOne can use a number of deposit methods. These
  //                 providers include:
  //                 <ul>
  //                   <li>Bank Transfer (GBP/USD/EUR/MUR)</li>
  //                   <li>Credit Card</li>
  //                   <li>Skrill</li>
  //                 </ul>
  //               </p>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </section>
  //   </>
  // );
}

export default DepositsWithdrawls;
