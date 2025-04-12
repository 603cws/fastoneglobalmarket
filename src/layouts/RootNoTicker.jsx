import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

function RootNoTicker() {
  return (
    <div className="root-container">
      <Outlet />
      <WhatsAppButton />
      <Footer />
    </div>
  );
}

export default RootNoTicker;
