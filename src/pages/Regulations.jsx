import Header from "../components/Header";
import TitleBgCenter from "../components/TitleBgCenter";
import TitleArea from "../components/TitleArea";
import InstantAccount from "../components/InstantAccount";

function Regulations() {
  const breadcrumbPaths = [
    { name: "Home", href: "/" },
    { name: "Company", href: "" },
    { name: "Regulations" },
  ];
  return (
    <div className="bg-[#030B20]">
      <Header />
      <img
        src="/images/bg-shadow.png"
        alt=""
        className="absolute top-0 left-0  w-full object-cover"
      />
      <div className="pt-10 text-center">
        <TitleArea title="Regulations" breadcrumbPaths={breadcrumbPaths} />
      </div>
      <section>
        <div className="flex justify-center">
          <div className="md:max-w-2xl lg:max-w-3xl">
            <img src="/images/REGULATION.png" alt="regulation" />
          </div>
        </div>
      </section>
      <section className="container mx-auto">
        <div className="flex justify-center items-center py-10 lg:py-0 lg:pt-10 lg:pb-32">
          <div className="bg-gradient-to-b from-[#4575FF] to-[#92AEFF]  p-0.5 rounded-xl">
            <div className="text-[#B2B2B2] bg-[#030B20] px-6 py-10  rounded-xl">
              <p className="mb-4">
                <strong>
                  FastOne Global Financial Markets Limited is authorised and
                  regulated by the FSC (Financial Services Commission) No.
                  C113011860
                </strong>
              </p>
              <p className="mb-3">Are my funds segregated?</p>
              <p>
                FastOne Global Financial Markets Limited ensure a clear
                segregation between money belonging to retail clients and money
                that belongs to the firm. Retail client money is transferred to
                a segregated client money bank account. In the unlikely event of
                FastOne Global Financial Markets Limited insolvency, segregated
                client funds cannot be used for reimbursement to FastOne Global
                Financial Markets Limited's creditors.
              </p>
            </div>
          </div>
        </div>
      </section>

      <InstantAccount />

      {/* <section className="mt-5 regulations">
        <div className="container mx-auto">
          <div className="row align-items-center">
            <div className="mt-5 col-md-6 about-text">
              <p>
                <strong>
                  FastOne Global Financial Markets Limited is authorised and
                  regulated by the FSC (Financial Services Commission) No.
                  C113011860
                </strong>
              </p>
              <p>Are my funds segregated?</p>
              <p>
                FastOne Global Financial Markets Limited ensure a clear
                segregation between money belonging to retail clients and money
                that belongs to the firm. Retail client money is transferred to
                a segregated client money bank account. In the unlikely event of
                FastOne Global Financial Markets Limited insolvency, segregated
                client funds cannot be used for reimbursement to FastOne Global
                Financial Markets Limited's creditors.
              </p>
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
  //       title="Regulations"
  //       description=""
  //       backgroundImage="/images/bg-2.png"
  //       breadcrumbPaths={breadcrumbPaths}
  //     />
  //     <section className="mt-5 regulations">
  //       <div className="container">
  //         <div className="row align-items-center">
  //           <div className="col-md-6">
  //             <img src="/images/tp/regulations.jpg" alt="" className="round-bimg" />
  //           </div>
  //           <div className="mt-5 col-md-6 about-text">

  //             <p><strong>
  //               FastOne Global Financial Markets Limited is authorised and
  //               regulated by the FSC (Financial Services Commission) No.
  //               C113011860</strong>
  //             </p>
  //             <p>Are my funds segregated?</p>
  //             <p>
  //               FastOne Global Financial Markets Limited ensure a clear
  //               segregation between money belonging to retail clients and money
  //               that belongs to the firm. Retail client money is transferred to
  //               a segregated client money bank account. In the unlikely event of
  //               FastOne Global Financial Markets Limited insolvency, segregated
  //               client funds cannot be used for reimbursement to FastOne Global
  //               Financial Markets Limited's creditors.
  //             </p>
  //           </div>
  //         </div>
  //       </div>
  //     </section>
  //   </>
  // );
}

export default Regulations;
