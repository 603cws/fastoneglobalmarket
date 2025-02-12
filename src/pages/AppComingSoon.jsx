import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import Header from "../components/Header";
import TitleBgCenter from "../components/TitleBgCenter";

function AppComingSoon() {
  const breadcrumbPaths = [
    { name: "Home", href: "/" },
    { name: "Platform", href: "" },
    { name: "Coming Soon" },
  ];
  return (
    <>
      <Header mode={"light"} />
      <TitleBgCenter
        title="Coming Soon"
        description=""
        backgroundImage="/images/bg-2.png"
        breadcrumbPaths={breadcrumbPaths}
      />
      <section className="contact-details">
        <div className="container">
          <h3>The app will be available soon!</h3>
        </div>
      </section>
      
    </>
  );
}

export default AppComingSoon;
