import Header from "../components/Header";
import TitleBgCenter from "../components/TitleBgCenter";

function DepositsWithdrawls() {
  const breadcrumbPaths = [
    { name: "Home", href: "/" },
    { name: "Deposits and Withdrawls" },
  ];
  return (
    <>
      <Header mode={"light"} />
      <TitleBgCenter
        title="Deposits / Withdrawls"
        description=""
        backgroundImage="/images/bg-2.png"
        breadcrumbPaths={breadcrumbPaths}
      />
      <section className="mt-5">
        <div className="container">
          <div className="row">
            <div className="col-12 about-text">
              <img src="/images/icons/bankstripe.svg" alt="" />
              <div className="infoDiv">
                <p>
                ➤ FastOne Global Financial Markets Limited typically processes
                  deposits within 24 to 48 hours and processes withdrawals
                  within 24 to 48 hours of receiving a valid request. <br/>Note: this
                  period may be extended due to enhanced Due Diligence
                  associated with larger sums or matters of concern.
                </p>
              </div>
              <div className="infoDiv">
                <p>
                ➤ Clients of FastOne can use a number of deposit methods. These
                  providers include:
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
      </section>
    </>
  );
}

export default DepositsWithdrawls;
