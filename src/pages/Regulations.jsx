import Header from "../components/Header";
import TitleBgCenter from "../components/TitleBgCenter";

function Regulations() {
  const breadcrumbPaths = [
    { name: "Home", href: "/" },
    { name: "Company", href: "" },
    { name: "Contact Us" },
  ];
  return (
    <>
      <Header mode={"light"} />
      <TitleBgCenter
        title="Regulations"
        description=""
        backgroundImage="/images/bg-2.png"
        breadcrumbPaths={breadcrumbPaths}
      />
      <section className="mt-5 regulations">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img src="/images/tp/regulations.jpg" alt="" className="round-bimg" />
            </div>
            <div className="mt-5 col-md-6 about-text">
              
              <p><strong>
                FastOne Global Financial Markets Limited is authorised and
                regulated by the FSC (Financial Services Commission) No.
                C113011860</strong>
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
      </section>
    </>
  );
}

export default Regulations;
