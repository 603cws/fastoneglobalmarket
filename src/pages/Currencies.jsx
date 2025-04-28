import Header from "../components/Header";
import PriceTicker from "../components/PriceTicker";
import TitleAreaVideo from "../components/TitleAreaVideo";
import TradingTools from "../components/TradingTools";
import WhyTrade from "../components/WhyTrade";
import MarketHeaderSection from "../components/MarketHeaderSection";
import TitleArea from "../components/TitleArea";
import InstantAccount from "../components/InstantAccount";

const benefits = [
  <>
    <strong className="">
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

  const imagepath = "/images/currencyimage.png";
  return (
    <div className="relative">
      <img
        src="/images/bg-shadow.png"
        alt=""
        className="absolute  top-0 left-0 w-full"
      />
      <div className="relative">
        <PriceTicker />
      </div>
      <Header />
      <div className="bg-[#030B20] py-6 md:py-10">
        <TitleArea breadcrumbPaths={breadcrumbPaths} />
      </div>
      <MarketHeaderSection
        title={"Diversify your investment portfolio by trading CFDS on forex"}
        imagepath={imagepath}
      />
      <WhyTrade
        title="Why trade Currencies with FastOne?"
        benefits={benefits}
      />
      <TradingTools />
      <InstantAccount />
    </div>
  );
  // return (
  //   <div className="header-2-wrap ">
  //     {/* <Header mode={"light"} /> */}
  //     <PriceTicker />
  //     {/* <TitleAreaVideo
  //       title="Diversify your investment portfolio by trading CFDS on forex"
  //       description=""
  //       videoURL="/video/fastone-forex.mp4"
  //       breadcrumbPaths={breadcrumbPaths}
  //     /> */}

  //     <WhyTrade
  //       title="Why trade Currencies with FastOne?"
  //       benefits={benefits}
  //     />
  //     <TradingTools />
  //   </div>
  // );
}

export default Currencies;
