import AboutAnimation from "../components/animations/AboutAnimation";
import Cta2Btn from "../components/Cta2Btn";
import Header from "../components/Header";
import InstantAccount from "../components/InstantAccount";
import TitleAreaCenter from "../components/TitleAreaCenter";
import WhyTrade from "../components/WhyTrade";

function AboutFastone() {
  const breadcrumbPaths = [
    { name: "Home", href: "/" },
    { name: "Company", href: "" },
    { name: "About Fastone" },
  ];
  return (
    <>
      <Header />
      <div className="bg-[#030B20]">
        <TitleAreaCenter
          title="About Fastone"
          description="FastOne Global Financial Markets Limited (FastOne), Incorporated in 2013, is a Mauritius based broker authorised and regulated by the Financial Services Commission (the “FSC”). FastOne Offer retail and professional customers around the globe with CFD Trading and related services. We are indeed able to provide Equity and algorithmic trade through partnerships."
          breadcrumbPaths={breadcrumbPaths}
        />
        <section className="about-intro ">
          <div className="container mx-auto">
            <div className="lg:flex flex-row-reverse justify-center items-center">
              <div className="flex-1 about-text text-sm lg:px-30">
                <h3 className=" text-2xl capitalize font-bold bg-gradient-to-r from-[#4575FF] to-[#92AEFF] text-transparent bg-clip-text my-5">
                  FastOne Global Financial Markets Limited
                </h3>
                <p className="text-wrap text-[#B2B2B2] leading-6">
                  We are a leading financial intermediary with a significant
                  presence in Europe, MENA and South East Asia regions offering
                  online trading solutions. Our company is based on the central
                  concept of long-term relationship building.
                </p>
                <p className="text-wrap text-[#B2B2B2] leading-6">
                  We offer a growing range of services with a range of
                  user-friendly platforms which are available in many languages
                  and are extremely user-friendly to our clients. Customers are
                  given access to a variety of global markets through these
                  platforms.
                </p>
                <p className="text-wrap text-[#B2B2B2] leading-6">
                  We have IB Partnerships all over the globe and we work closely
                  with them to understand their specific commercial needs. We
                  are proud of our customer service.
                </p>
                <p className="text-wrap text-[#B2B2B2] leading-6">
                  FastOne started out in Dubai Gold Exchange as the 1st
                  recognised gold market maker over 20 years ago. In 2013,
                  FastOne moved into CFDs hence opening a Mauritian Office which
                  is regulated by the FSC. With the opening of Mauritian Office,
                  Traders are able to benefit from higher leverage without the
                  ESMA limitations.
                </p>
                <p className="text-wrap text-[#B2B2B2] leading-6">
                  Our senior management has extensive cfd industry experience
                  spanning over 25 years on aggregate, and this translates into
                  our transparent, reliable, and reputable service.
                </p>
              </div>
              <div className="flex-1 flex justify-center items-center">
                <div className="">
                  {/* <AboutAnimation /> */}
                  <img src="/images/Stratergy.png" alt="stratergy" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* section 2 */}
        <section className="container mx-auto my-10">
          <div className=" space-y-4 lg:px-20 xl:px-30">
            {/* <div className=" space-y-4 lg:px-20 xl:px-30"> */}
            <div className="w-full flex justify-around  items-center ">
              <div className="flex-1 ">
                <div className="w-full xl:w-2/3">
                  <div
                    className="h-[1.5px] w-full"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, #0F2567 0%, #92AEFF 24%, #4575FF 77%, #0F2567 100%)",
                    }}
                  ></div>
                  <h4 className="capitalize text-2xl font-bold text-white my-5">
                    Our Strategy
                  </h4>
                  <p className="text-[#B2B2B2] text-sm text-wrap">
                    FastOne aims growth by provision of highest possible level
                    of Customer Service to Clientele by focusing resources on
                    Customer Satisfaction, building collaborative relationship
                    with other stakeholders and associates.
                  </p>
                </div>
              </div>
              <div className="hidden flex-1 md:flex items-center">
                <div className="max-w-sm lg:max-w-lg rounded-sm shrink-0">
                  {/* <div className="w-60 lg:w-80 h-60 lg:h-80  rounded-sm shrink-0"> */}
                  <img src="/images/our_stratergy.png" alt="" />
                </div>
              </div>
            </div>
            {/* <div className="w-full flex justify-stretch items-center">
              <div className="flex-1 ">
                <div className="w-full xl:w-2/3">
                  <div
                    className="h-[1.5px] w-full"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, #0F2567 0%, #92AEFF 24%, #4575FF 77%, #0F2567 100%)",
                    }}
                  ></div>
                  <h4 className="capitalize text-2xl font-bold text-white my-5">
                    Our Strategy
                  </h4>
                  <p className="text-[#B2B2B2] text-sm text-wrap">
                    FastOne aims growth by provision of highest possible level
                    of Customer Service to Clientele by focusing resources on
                    Customer Satisfaction, building collaborative relationship
                    with other stakeholders and associates.
                  </p>
                </div>
              </div>
              <div className="hidden flex-1 md:flex justify-end">
                <div className="">
                  <img src="/images/Stratergy.png" alt="" />{" "}
                </div>
              </div>
            </div> */}
            <div className="flex  items-center w-full">
              <div className="hidden flex-1 md:flex items-center">
                <div className="max-w-sm lg:max-w-lg rounded-sm shrink-0">
                  {/* <div className="w-60 lg:w-80 h-60 lg:h-80  rounded-sm shrink-0"> */}
                  <img src="/images/our_vision.png" alt="" />
                </div>
              </div>
              <div className="flex-1 xl:flex flex-col justify-end items-center">
                {/* <div className="flex-1 xl:flex flex-col justify-end items-end w-full xl:w-2/3"> */}
                <div className="w-full xl:w-2/3">
                  <div
                    className="h-[1.5px] w-full"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, #0F2567 0%, #92AEFF 24%, #4575FF 77%, #0F2567 100%)",
                    }}
                  ></div>
                  <h4 className="capitalize text-2xl font-bold text-white my-5">
                    Our vision
                  </h4>
                  <p className="text-[#B2B2B2] text-sm text-wrap">
                    To be Financial Service Provider of choice. Our Vision is to
                    maintain our status as a Market Leader reknown for
                    exceptional Customer Centric Ideology by providing
                    excellence in client service, compliance, enviable
                    commitment to staff and a continuous endeavor on process
                    improvement.
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="flex justify-stretch items-center w-full">
              <div className="hidden flex-1 md:flex justify-start">
                <div className="w-60 lg:w-80 h-60 lg:h-80 bg-gray-300 rounded-sm shrink-0" />
              </div>
              <div className="flex-1 xl:flex flex-col justify-end items-end w-full xl:w-2/3">
                <div className="w-full xl:w-2/3">
                  <div
                    className="h-[1.5px] w-full"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, #0F2567 0%, #92AEFF 24%, #4575FF 77%, #0F2567 100%)",
                    }}
                  ></div>
                  <h4 className="capitalize text-2xl font-bold text-white my-5">
                    Our vision
                  </h4>
                  <p className="text-[#B2B2B2] text-sm text-wrap">
                    To be Financial Service Provider of choice. Our Vision is to
                    maintain our status as a Market Leader reknown for
                    exceptional Customer Centric Ideology by providing
                    excellence in client service, compliance, enviable
                    commitment to staff and a continuous endeavor on process
                    improvement.
                  </p>
                </div>
              </div>
            </div> */}
            <div className="w-full flex justify-stretch items-center">
              <div className="flex-1">
                <div className="w-full xl:w-2/3">
                  <div
                    className="h-[1.5px] w-full"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, #0F2567 0%, #92AEFF 24%, #4575FF 77%, #0F2567 100%)",
                    }}
                  ></div>
                  <h4 className="capitalize text-2xl font-bold text-white my-5">
                    Our values
                  </h4>
                  <p className="text-[#B2B2B2] text-sm text-wrap">
                    We are passionate and determined in delivering a transparent
                    and authentic trading experience to our Clients as we
                    continue to drive and embrace change in a dynamic
                    environment. Prominent values at FastOne include Innovation,
                    Integrity, Team work, Respect for people and new ideas.
                  </p>
                </div>
              </div>
              <div className="hidden flex-1 md:flex items-center">
                <div className="max-w-sm lg:max-w-lg rounded-sm shrink-0">
                  {/* <div className="w-60 lg:w-80 h-60 lg:h-80  rounded-sm shrink-0"> */}
                  <img src="/images/our_value.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <Cta2Btn
            title="Get Started"
            button1="Open An Account"
            button2="Become A Partner"
            buttonLinks={["#", "#"]}
          />
        </section>

        <InstantAccount />
      </div>
    </>
  );
}

export default AboutFastone;
