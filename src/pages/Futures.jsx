import Header from "../components/Header";
import FeaturesGrid from "../components/FeaturesGrid";
import TitleAreaVideo from "../components/TitleAreaVideo";
import OpenAccount from "../components/OpenAccount";
import TradingTools from "../components/TradingTools";
import WhyTrade from "../components/WhyTrade";

const benefits = [
  <>
    <strong>Trade major and minor forex pairs, metals, and other instruments</strong> including cfds, indices, metals, and energy.
  </>,
  <>
    <strong>Raw spreads from 0.0 pips</strong> with minimal commissions and no hidden charges.
  </>,
  <>
    <strong>Leverage up to 1:500</strong> for enhanced trading potential.
  </>,
  <>
    <strong>Fast execution</strong> and <strong>deep liquidity</strong> for optimal trading conditions.
  </>,
  <>
    <strong>24/7 customer support</strong> for your convenience.
  </>,
  <>
    <strong>Internationally recognized and regulated broker</strong> ensuring security and reliability.
  </>
];

function Futures() {
  const breadcrumbPaths = [
    { name: "Home", href: "/" },
    { name: "Markets", href: "" },
    { name: "Futures" },
  ];
  return (
    <>
      <Header mode={"light"} />
      <TitleAreaVideo
        title="Diversify your investment portfolio by trading Futures on forex"
        description=""
        videoURL="/video/fastone-futures-trim.mp4"
        breadcrumbPaths={breadcrumbPaths}
      />
       <WhyTrade title="Why trade Futures with FastOne?" benefits={benefits}/>
      <TradingTools />
    </>
  );
}

export default Futures;
