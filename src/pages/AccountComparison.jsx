import Header from "../components/Header";
import TitleArea from "../components/TitleArea";
import PricingTable from "../components/PricingTable";
import CtaBox from "../components/CtaBox1";
import Faq from "../components/Faq";
import { handleRedirect } from '../lib/redirectLocationHandler'; 

const advantages = [
  {
    title: "Lightning-Fast Execution",
    icon: "/images/icons/donation.png",
    description: "Over 98% of trades executed in less than 0.1 seconds!",
  },
  {
    title: "No Slippage, No Stress",
    icon: "/images/icons/statistics.png",
    description: "99.5% of orders filled at the requested price!",
  },
  {
    title: "Trade with Confidence",
    icon: "/images/icons/latency.png",
    description: "100% transparency and no hidden fees!",
  },
  {
    title: "Always in Control",
    icon: "/images/icons/security-system.png",
    description: "99.9% of market orders executed instantly!",
  },
  {
    title: "Uninterrupted Trading",
    icon: "/images/icons/verified.png",
    description: "Over 99% uptime for a seamless trading experience!",
  },
  {
    title: "Your Strategy, Your Terms",
    icon: "/images/icons/transparency.png",
    description: "Execute your trades with pinpoint accuracy!",
  },
  {
    title: "Trusted Reliability",
    icon: "/images/icons/data-integration.png",
    description: "No delays, no surprises, just flawless trade execution!",
  },
];

const faqData = [
  {
    question: "What is the maximum lot size for trading during night time?",
    answer:
      "The maximum lot size available is fixed at 20 lots per position from 21:00 to 06:59 GMT+0 across all Fastone account types, for all crypto and indices, and for the following commodities: UKOIL, USOIL, XNGUSD, XAUUSD, XAGUSD, XAGAUD, XAGGBP, XAGEUR, XPDUSD, XPTUSD, XALUSD, XCUUSD, XZNUSD, XPBUSD. XNIUSD comes with 10 lots per position. All other instruments, except the above, come with a night time max lot of 60 lots.",
  },
];

function AccountComparison() {
  const breadcrumbPaths = [
    { name: "Home", href: "/" },
    { name: "Trading", href: "" },
    {name: "Account Comparison"}
  ];

  const handleLinkClick = (event, isLogin) => {
    event.preventDefault(); 
    handleRedirect(isLogin);
  };

  return (
    <>
      <Header mode={"light"} />
      <TitleArea
        title="ACCOUNT COMPARISON"
        description="Explore our account types and choose the one that best fits your trading goals."
        breadcrumbPaths={breadcrumbPaths}
      />
      <PricingTable />
      <section className="how-to-start">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 oaa-left align-items-center">
              <h3>How to get Started</h3>
              <p>
                Getting Started is as simple as 1-2-3! And the onboarding
                process is so smooth you won't have to worry about a thing.
              </p>
              <a href="#" onClick={(e) => handleLinkClick(e, true)} class="btn-one rounded-btn btn-primary">
                Start Trading
              </a>
            </div>
            <div className="col-md-6 oaa-right">
              <div className="row oaa-rcard">
                <div className="col-2 oaa-seq">1</div>
                <div className="col-10">
                  <h3>Open An Account</h3>
                  <p>Register using your full name, email and password</p>
                </div>
              </div>
              <div className="row oaa-rcard">
                <div className="col-2 oaa-seq">2</div>
                <div className="col-10">
                  <h3>Add Funds</h3>
                  <p>Fund your account using any of the multiple methods.</p>
                </div>
              </div>
              <div className="row oaa-rcard">
                <div className="col-2 oaa-seq">3</div>
                <div className="col-10">
                  <h3>Start Trading</h3>
                  <p>
                    Use the desktop or mobile platform to launch your trades.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CtaBox
        heading="Still confused which account to choose ?"
        description="Talk to our sales expert now"
        buttonText="Live Chat"
        buttonImage="/images/icons/chat.png"
        sectionColor=""
      />
      <section className="text-center">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="row mt-5">
            <div className="col-md-6 offset-md-3">
              <Faq questions={faqData} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AccountComparison;
