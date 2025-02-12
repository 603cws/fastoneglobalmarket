import AboutAnimation from "../components/animations/AboutAnimation";
import Cta2Btn from "../components/Cta2Btn";
import Header from "../components/Header";
import TitleAreaCenter from "../components/TitleAreaCenter";

function AboutFastone() {
  const breadcrumbPaths = [
    { name: "Home", href: "/" },
    { name: "Company", href: "" },
    { name: "About Fastone" },
  ];
  return (
    <>
      <Header mode={"light"} />
      <TitleAreaCenter
        title="About Fastone"
        description="FastOne Global Financial Markets Limited (FastOne), Incorporated in 2013, is a Mauritius based broker authorised and regulated by the Financial Services Commission (the “FSC”). FastOne Offer retail and professional customers around the globe with CFD Trading and related services. We are indeed able to provide Equity and algorithmic trade through partnerships."
        breadcrumbPaths={breadcrumbPaths}
      />
      <section className="about-intro">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <AboutAnimation />
            </div>
            <div className="col-md-6 about-text">
              <h3>FastOne Global Financial Markets Limited</h3>
              <p>
                We are a leading financial intermediary with a significant
                presence in Europe, MENA and South East Asia regions offering
                online trading solutions. Our company is based on the central
                concept of long-term relationship building.
              </p>
              <p>
                We offer a growing range of services with a range of
                user-friendly platforms which are available in many languages
                and are extremely user-friendly to our clients. Customers are
                given access to a variety of global markets through these
                platforms.
              </p>
              <p>
                We have IB Partnerships all over the globe and we work closely
                with them to understand their specific commercial needs. We are
                proud of our customer service.
              </p>
              <p>
                FastOne started out in Dubai Gold Exchange as the 1st recognised
                gold market maker over 20 years ago. In 2013, FastOne moved into
                CFDs hence opening a Mauritian Office which is regulated by the
                FSC. With the opening of Mauritian Office, Traders are able to
                benefit from higher leverage without the ESMA limitations.
              </p>
              <p>
                Our senior management has extensive cfd industry experience
                spanning over 25 years on aggregate, and this translates into
                our transparent, reliable, and reputable service.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="about-notes">
        <div className="container abt-margin-1">
          <div className="row">
            <div className="col-md-4 card about-br">
              <h3>Our Strategy</h3>
              <p>
                FastOne aims growth by provision of highest possible level of
                Customer Service to Clientele by focusing resources on Customer
                Satisfaction, building collaborative relationship with other
                stakeholders and associates.
              </p>
            </div>
            <div className="col-md-4 card about-br">
              <h3>Our Vision</h3>
              <p>
                To be Financial Service Provider of choice. Our Vision is to
                maintain our status as a Market Leader reknown for exceptional
                Customer Centric Ideology by providing excellence in client
                service, compliance, enviable commitment to staff and a
                continuous endeavor on process improvement.
              </p>
            </div>
            <div className="col-md-4 card">
              <h3>Our Values</h3>
              <p>
                We are passionate and determined in delivering a transparent and
                authentic trading experience to our Clients as we continue to
                drive and embrace change in a dynamic environment. Prominent
                values at FastOne include Innovation, Integrity, Team work,
                Respect for people and new ideas.
              </p>
            </div>
          </div>
          <Cta2Btn
            title="Get Started"
            description=""
            button1="Open an Account"
            button2="Become a Partner"
            buttonLinks={["/account-comparison", "/introducing-broker"]}
          />
        </div>
      </section>
    </>
  );
}

export default AboutFastone;
