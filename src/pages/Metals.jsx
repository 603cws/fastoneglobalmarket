import Header from "../components/Header";
import FeaturesGrid from "../components/FeaturesGrid";
import TitleAreaVideo from "../components/TitleAreaVideo";
import OpenAccount from "../components/OpenAccount";
import TradingTools from "../components/TradingTools";
import WhyTrade from "../components/WhyTrade";
import MarketHeaderSection from "../components/MarketHeaderSection";
import TitleArea from "../components/TitleArea";
import InstantAccount from "../components/InstantAccount";
import PriceTicker from "../components/PriceTicker";

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

function Metals() {
  const breadcrumbPaths = [
    { name: "Home", href: "/" },
    { name: "Markets", href: "" },
    { name: "Metals" },
  ];
  const imagepath = "/images/metal.png";
  return (
    <div className="relative">
      <img
        src="/images/bg-shadow.png"
        alt=""
        className="absolute top-0 left-0 w-full object-cover"
      />
      <Header />
      <div className="bg-[#030B20] py-10">
        <TitleArea breadcrumbPaths={breadcrumbPaths} />
      </div>
      <MarketHeaderSection
        title="Trade CFDs on spot and metals, Take advantage of volatility in gold, silver, oil and natural gas."
        imagepath={imagepath}
        alt="metals"
      />
      <WhyTrade
        title="Why trade Precious Metals with FastOne?"
        benefits={benefits}
      />
      <TradingTools />
      <InstantAccount />
    </div>
  );

  // return (
  //   <>
  //     <Header mode={"light"} />
  //     <TitleAreaVideo
  //       title="Trade CFDs on spot and metals, Take advantage of volatility in gold, silver, oil and natural gas."
  //       description=""
  //       videoURL="/video/fastone-metal.mp4"
  //       breadcrumbPaths={breadcrumbPaths}
  //     />
  //      <WhyTrade title="Why trade Precious Metals with FastOne?" benefits={benefits} />
  //     <TradingTools />
  //   </>
  // );
}

export default Metals;
