import Header from "../components/Header";
import TitleBgCenter from "../components/TitleBgCenter";

function RegulatoryDisclaimers() {
  const breadcrumbPaths = [
    { name: "Home", href: "/" },
    { name: "Company", href: "" },
    { name: "Legal", href: "/legal" },
    { name: "Regulatory Disclaimers" },
  ];
  return (
    <>
      <Header mode={"light"} />
      <TitleBgCenter
        title="Regulatory Disclaimers"
        description=""
        backgroundImage="/images/bg-2.png"
        breadcrumbPaths={breadcrumbPaths}
      />
      <section className="mt-5">
        <div className="container">
          <div className="row">
            <div className="col-12 about-text">
              <h1>
                Financial Services Commission (FSC) – Mauritius - Disclaimers
              </h1>
              <p>
                In issuing an Investment Dealer License to the Company, the
                Mauritius Financial Services Commission does not vouch:
              </p>
              <ul>
                <li>
                  For the reliability and financial soundness of the products
                  offered or products on which the company provides its service;
                  and
                </li>
                <li>
                  For the correctness of any statements or opinions expressed by
                  the company.
                </li>
              </ul>
              <p>
                The license issued by FSC to{" "}
                <strong>“FASTONE GLOBAL FINANCIAL MARKETS LTD”</strong> relates
                to services on “securities” as defined under the Securities Act
                2005, and it does not authorize the company to provide similar
                services on other financial products.
              </p>
              <p>
                As per the Securities Act 2005, Securities include options,
                futures, forwards, and other derivatives whether on securities
                or commodities. Currency (FX) is a financial derivative and
                therefore falls under the definition of Securities.
              </p>
              <p>
                Every person/entity should deal with the company at their own
                risk and shall not be protected by any statutory compensation
                arrangements in Mauritius in any events whatsoever.
              </p>
              <p>
                Every person/entity proposing to trade on such products or with
                the company is recommended to seek independent advice on the
                investment viability and risk associated with such products and
                services proposed by the company.
              </p>
              <h2>Customer Acknowledgement</h2>
              <p>
                Customer(s) acknowledge(s) and confirm(s) that he(they)
                has(have) filled up an online account on{" "}
                <a
                  href="https://www.fastoneglobalmarkets.com"
            
                >
                  www.fastoneglobalmarkets.com
                </a>
                . By checking the box in the upload documents section of the
                open online account on{" "}
                <a
                  href="http://fastoneglobalmarkets.com/"
                 
                >
                  www.fastoneglobalmarkets.com
                </a>
                , customer is digitally signing regulatory disclaimers.
              </p>
              <p>
                By digitally signing regulatory disclaimers, customer(s) hereby
                acknowledge(s) that he(they) has(have) received, read, and
                understand the regulatory disclaimers.
              </p>
              <p>
                I (We), the customer (customers) has(have) read and understand
                regulatory disclaimers and fully agree with them.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default RegulatoryDisclaimers;
