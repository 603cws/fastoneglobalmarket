import Header from "../components/Header";
import FeaturesGrid from "../components/FeaturesGrid";
import TitleArea from "../components/TitleArea";
import OpenAccount from "../components/OpenAccount";

const advantages = [
  {
    title: "Lightning-Fast Execution",
    icon: "/images/icons/lightning.png",
    description: "Over 98% of trades executed in less than 0.1 seconds!",
  },
  
  {
    title: "Trade with Confidence",
    icon: "/images/icons/self-confidence.png",
    description: "100% transparency and no hidden fees!",
  },
  {
    title: "Always in Control",
    icon: "/images/icons/control.png",
    description: "99.9% of market orders executed instantly!",
  },
  {
    title: "Uninterrupted Trading",
    icon: "/images/icons/uninterrupted.png",
    description: "Over 99% uptime for a seamless trading experience!",
  },
  {
    title: "Your Strategy, Your Terms",
    icon: "/images/icons/growth-skill.png",
    description: "Execute your trades with pinpoint accuracy!",
  },
  {
    title: "Trusted Reliability",
    icon: "/images/icons/reputation.png",
    description: "No delays, no surprises, just flawless trade execution!",
  },
];

function PricingModel() {
  const breadcrumbPaths = [
    { name: "Home", href: "/" },
    { name: "Trading", href: "" },
    { name: "Pricing Model" },
  ];
  return (
    <>
      <Header mode={"light"} />
      <TitleArea
        title="NDD EXECUTION"
        description="Deep liquidity, the best possible prices, and ultra fast precise execution at the best prices possible. Doesn't get FASTer than this."
        breadcrumbPaths={breadcrumbPaths}
      />
      <section className="adv-start">
        <div className="container">
          <FeaturesGrid advantages={advantages} />
        </div>
      </section>

      <OpenAccount />
    </>
  );
}

export default PricingModel;
