import Hero from "../components/Hero";
import ChooseUs from "../components/ChooseUs";
import TradingTools from "../components/TradingTools";
import StayAhead from "../components/StayAhead";
import AccountTypes from "../components/AccountTypes";
import Testimonials from "../components/Testimonials";
import Header from "../components/Header";
import OpenAccount from "../components/OpenAccount";
import Cta3 from "../components/Cta3";

function Home() {
  return (
    <>
      <Header mode={"light"} />
      <Landing />
    </>
  );
  // return (
  //   <>
  //     <Header mode={"dark"} />
  //     {/* <Hero /> */}
  //     <ChooseUs />
  //     <OpenAccount />
  //     <TradingTools />
  //     <AccountTypes />
  //     <StayAhead />
  //     <Cta3
  //       title="For any Questions or feedback, get in touch with us"
  //       link="/contact"
  //       linkText="Contact Us"
  //     />
  //   </>
  // );
}

export default Home;
