import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import Header from "../components/Header";
import TitleBgCenter from "../components/TitleBgCenter";
import TitleArea from "../components/TitleArea";

function AppComingSoon() {
  const breadcrumbPaths = [
    { name: "Home", href: "/" },
    { name: "Platform", href: "" },
    { name: "Coming Soon" },
  ];
  return (
    <div className="bg-[#030B20]">
      <Header />
      {/* <TitleBgCenter
        title="Coming Soon"
        description=""
        backgroundImage="/images/bg-2.png"
        breadcrumbPaths={breadcrumbPaths}
      /> */}
      <div className="pt-8 lg:pt-6 lg:py-0 md:pt-10">
        <div className="max-w-7xl mx-auto text-center lg:pt-10 ">
          <TitleArea
            title={breadcrumbPaths[2].name}
            breadcrumbPaths={breadcrumbPaths}
          />
        </div>
      </div>
      <section className="py-16 lg:py-32 ">
        <div className="flex justify-center items-center text-white md:text-3xl container mx-auto">
          <h3>The app will be available soon!</h3>
        </div>
      </section>
    </div>
  );
  // return (
  //   <>
  //     <Header />
  //     {/* <TitleBgCenter
  //       title="Coming Soon"
  //       description=""
  //       backgroundImage="/images/bg-2.png"
  //       breadcrumbPaths={breadcrumbPaths}
  //     /> */}
  //     <div className="pt-6 lg:pt-0 lg:py-6 md:py-10">
  //       <div className="max-w-7xl mx-auto text-center lg:py-10 ">
  //         <TitleArea title="Contact us" breadcrumbPaths={breadcrumbPaths} />
  //       </div>
  //     </div>
  //     <section className="contact-details">
  //       <div className="container">
  //         <h3>The app will be available soon!</h3>
  //       </div>
  //     </section>
  //   </>
  // );
}

export default AppComingSoon;
