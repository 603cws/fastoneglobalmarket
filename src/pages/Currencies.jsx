import Header from "../components/Header";
import PriceTicker from "../components/PriceTicker";
import TitleAreaVideo from "../components/TitleAreaVideo";
import TradingTools from "../components/TradingTools";
import WhyTrade from "../components/WhyTrade";

const benefits = [
  <>
    <strong>
      Trade major and minor forex pairs, metals, and other instruments
    </strong>{" "}
    including cfds, indices, metals, and energy.
  </>,
  <>
    <strong>Raw spreads from 0.0 pips</strong> with minimal commissions and no
    hidden charges.
  </>,
  <>
    <strong>Leverage up to 1:500</strong> for enhanced trading potential.
  </>,
  <>
    <strong>Fast execution</strong> and <strong>deep liquidity</strong> for
    optimal trading conditions.
  </>,
  <>
    <strong>24/7 customer support</strong> for your convenience.
  </>,
  <>
    <strong>Internationally recognized and regulated broker</strong> ensuring
    security and reliability.
  </>,
];

function Currencies() {
  const breadcrumbPaths = [
    { name: "Home", href: "/" },
    { name: "Markets", href: "" },
    { name: "Currencies" },
  ];
  return (
    <div className="header-2-wrap">
      <Header mode={"light"} />

      <TitleAreaVideo
        title="Diversify your investment portfolio by trading CFDS on forex"
        description=""
        videoURL="/video/fastone-forex.mp4"
        breadcrumbPaths={breadcrumbPaths}
      />
      <PriceTicker />
      <WhyTrade
        title="Why trade Currencies with FastOne?"
        benefits={benefits}
      />
      <TradingTools />
    </div>
  );
}

export default Currencies;
