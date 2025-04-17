import Header from "../components/Header";
import TitleBgCenter from "../components/TitleBgCenter";
import TitleArea from "../components/TitleArea";
import InstantAccount from "../components/InstantAccount";

function DepositsWithdrawls() {
  const breadcrumbPaths = [
    { name: "Home", href: "/" },
    { name: "Deposits and Withdrawls" },
  ];
  return (
    <div className="bg-[#030B20]">
      <Header />
      <div className=" py-10 text-center">
        <TitleArea
          title="Deposits and Withdrawls"
          breadcrumbPaths={breadcrumbPaths}
        />
      </div>
      <section className="container mx-auto ">
        <div className=" flex gap-3 lg:gap-0 justify-between items-center py-10">
          <div>
            <img src="/images/depositdummy.png" alt="deposit" />
          </div>
          <div>
            <img src="/images/depositdummy.png" alt="deposit" />
          </div>
          <div>
            <img src="/images/depositdummy.png" alt="deposit" />
          </div>
          <div>
            <img src="/images/depositdummy.png" alt="deposit" />
          </div>
        </div>
      </section>

      <section className="container mx-auto mb-10">
        <div className="text-[#B2B2B2] font-bold text-sm lg:text-lg py-10">
          <p>
            FastOne Global Financial Markets Limited typically processes
            deposits within 24 to 48 hours and processes withdrawals within 24
            to 48 hours of receiving a valid request.
          </p>
          <p>
            Note: this period may be extended due to enhanced Due Diligence
            associated with larger sums or matters of concern.
          </p>
        </div>
      </section>

      <section className="container mx-auto ">
        <div className="flex flex-col gap-40 lg:gap-0 lg:flex-row justify-between items-center py-10">
          <div className="relative   rounded-lg border border-blue-500/20 p-16  text-center">
            {/* Icon placeholder (you can replace this with an actual image) */}
            <div className="absolute -top-1/2 left-1/2 transform -translate-x-1/2   rounded-sm">
              <img src="/images/depositdummy2.png" alt="deposit dummy" />
            </div>

            <h3 className="text-white font-semibold text-lg">Bank Transfer</h3>
            <p className="text-gray-400 text-sm mt-1">(GBP/USD/EUR/MUR)</p>
          </div>

          <div className="relative   rounded-lg border border-blue-500/20 p-16  text-center">
            {/* Icon placeholder (you can replace this with an actual image) */}
            <div className="absolute -top-1/2 left-1/2 transform -translate-x-1/2   rounded-sm">
              <img src="/images/depositdummy2.png" alt="deposit dummy" />
            </div>

            <h3 className="text-white font-semibold text-lg">Bank Transfer</h3>
            <p className="text-gray-400 text-sm mt-1">(GBP/USD/EUR/MUR)</p>
          </div>

          <div className="relative   rounded-lg border border-blue-500/20 p-16  text-center">
            {/* Icon placeholder (you can replace this with an actual image) */}
            <div className="absolute -top-1/2 left-1/2 transform -translate-x-1/2   rounded-sm">
              <img src="/images/depositdummy2.png" alt="deposit dummy" />
            </div>

            <h3 className="text-white font-semibold text-lg">Bank Transfer</h3>
            <p className="text-gray-400 text-sm mt-1">(GBP/USD/EUR/MUR)</p>
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
