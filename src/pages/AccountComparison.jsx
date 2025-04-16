import Header from "../components/Header";
import TitleArea from "../components/TitleArea";
import PricingTable from "../components/PricingTable";
import CtaBox from "../components/CtaBox1";
import Faq from "../components/Faq";
import { handleRedirect } from "../lib/redirectLocationHandler";
import InstantAccount from "../components/InstantAccount";

const advantages = [
  {
    title: "Lightning-Fast Execution",
    icon: "/images/icons/donation.png",
    description: "Over 98% of trades executed in less than 0.1 seconds!",
  },
  {
    title: "No Slippage, No Stress",
    icon: "/images/icons/statistics.png",
    description: "99.5% of orders filled at the requested price!",
  },
  {
    title: "Trade with Confidence",
    icon: "/images/icons/latency.png",
    description: "100% transparency and no hidden fees!",
  },
  {
    title: "Always in Control",
    icon: "/images/icons/security-system.png",
    description: "99.9% of market orders executed instantly!",
  },
  {
    title: "Uninterrupted Trading",
    icon: "/images/icons/verified.png",
    description: "Over 99% uptime for a seamless trading experience!",
  },
  {
    title: "Your Strategy, Your Terms",
    icon: "/images/icons/transparency.png",
    description: "Execute your trades with pinpoint accuracy!",
  },
  {
    title: "Trusted Reliability",
    icon: "/images/icons/data-integration.png",
    description: "No delays, no surprises, just flawless trade execution!",
  },
];

const faqData = [
  {
    question: "What is the maximum lot size for trading during night time?",
    answer:
      "The maximum lot size available is fixed at 20 lots per position from 21:00 to 06:59 GMT+0 across all Fastone account types, for all crypto and indices, and for the following commodities: UKOIL, USOIL, XNGUSD, XAUUSD, XAGUSD, XAGAUD, XAGGBP, XAGEUR, XPDUSD, XPTUSD, XALUSD, XCUUSD, XZNUSD, XPBUSD. XNIUSD comes with 10 lots per position. All other instruments, except the above, come with a night time max lot of 60 lots.",
  },
];

function AccountComparison() {
  const breadcrumbPaths = [
    { name: "Home", href: "/" },
    { name: "Trading", href: "" },
    { name: "Account Comparison" },
  ];

  const handleLinkClick = (event, isLogin) => {
    event.preventDefault();
    handleRedirect(isLogin);
  };

  return (
    <>
      <div className="bg-[#030B20] text-white min-h-screen px-4 lg:px-16 py-10 relative">
        <img
          src="/images/bg-shadow.png"
          alt=""
          className="absolute top-0 left-0"
        />
        <Header />
        <div className="max-w-7xl mx-auto text-center">
          <TitleArea
            title="ACCOUNT COMPARISON"
            description="Explore our account types and choose the one that best fits your trading goals."
            breadcrumbPaths={breadcrumbPaths}
          />
        </div>
        <div className="relative">
          <PricingTable />
        </div>

        <section className="my-10 flex items-center justify-center px-4 relative">
          {/* <section className="min-h-screen bg-gradient-to-r from-[#001633] to-[#00204D] flex items-center justify-center px-4"> */}

          <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-10 text-white">
            {/* Left Side */}
            <div className="space-y-4">
              <h2 className="text-xl text-[#1368A6] font-semibold">
                How to get Started
              </h2>
              <p className="text-sm text-[#3C3C3C]">
                Getting Started is as simple as 1 2 3! And the onboarding
                process is so smooth you won’t have to worry about a thing.
              </p>
              <div className="">
                <button className="border border-[#4575FF] bg-[#1368A6]/20 text-white px-6 py-2 rounded-md transition cursor-pointer duration-300 ">
                  Start Trading
                </button>
              </div>
            </div>

            {/* Right Side */}
            <div className="bg-[#1368A6]/20 rounded-xl p-8 space-y-6 shadow-md border border-[#4575FF]">
              <div className="flex items-start gap-4">
                <div className="text-2xl font-bold text-white">1</div>
                <div>
                  <h3 className="font-bold text-xl text-white">
                    Open An Account
                  </h3>
                  <p className="text-sm ">
                    Register using your full name, email and password
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 border-t border-blue-300 pt-6">
                <div className="text-2xl font-bold text-white">2</div>
                <div>
                  <h3 className="font-semibold text-white">Add Funds</h3>
                  <p className="text-sm text-gray-200">
                    Fund your account using any of the multiple methods.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 border-t border-blue-300 pt-6">
                <div className="text-2xl font-bold text-white">3</div>
                <div>
                  <h3 className="font-semibold text-white">Start Trading</h3>
                  <p className="text-sm text-gray-200">
                    Use the desktop or mobile platform to launch your trades.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* still confuse */}
        <CtaBox
          heading="Still confused which account to choose ?"
          description="Talk to our sales expert now"
          buttonText="Live Chat"
          buttonImage="/images/icons/chat.png"
          sectionColor="#1368A6"
          opacity="20"
        />
      </div>
      <InstantAccount />
      {/* <div className="bg-[#0A324F] flex justify-center md:justify-around items-center  py-6  text-center px-2 md:px-0">
        <div>
          <p className="text-white font-semibold text-sm lg:text-lg ">
            Instant Account - Trade Within Minutes!
          </p>
        </div>
        <div>
          <button className="md:mt-4 text-xs lg:text-base bg-white text-black px-3 py-1 md:px-6 md:py-2 rounded-md font-medium">
            <a href="/account-comparison">Start Live Account</a>
          </button>
        </div>
      </div> */}
    </>
  );
}
// function AccountComparison() {
//   const breadcrumbPaths = [
//     { name: "Home", href: "/" },
//     { name: "Trading", href: "" },
//     { name: "Account Comparison" },
//   ];

//   const handleLinkClick = (event, isLogin) => {
//     event.preventDefault();
//     handleRedirect(isLogin);
//   };

//   return (
//     <>
//       <Header mode={"light"} />
//       <TitleArea
//         title="ACCOUNT COMPARISON"
//         description="Explore our account types and choose the one that best fits your trading goals."
//         breadcrumbPaths={breadcrumbPaths}
//       />
//       <PricingTable />
//       <section className="how-to-start">
//         <div className="container">
//           <div className="row align-items-center">
//             <div className="col-md-6 oaa-left align-items-center">
//               <h3>How to get Started</h3>
//               <p>
//                 Getting Started is as simple as 1-2-3! And the onboarding
//                 process is so smooth you won't have to worry about a thing.
//               </p>
//               <a
//                 href="#"
//                 onClick={(e) => handleLinkClick(e, true)}
//                 class="btn-one rounded-btn btn-primary"
//               >
//                 Start Trading
//               </a>
//             </div>
//             <div className="col-md-6 oaa-right">
//               <div className="row oaa-rcard">
//                 <div className="col-2 oaa-seq">1</div>
//                 <div className="col-10">
//                   <h3>Open An Account</h3>
//                   <p>Register using your full name, email and password</p>
//                 </div>
//               </div>
//               <div className="row oaa-rcard">
//                 <div className="col-2 oaa-seq">2</div>
//                 <div className="col-10">
//                   <h3>Add Funds</h3>
//                   <p>Fund your account using any of the multiple methods.</p>
//                 </div>
//               </div>
//               <div className="row oaa-rcard">
//                 <div className="col-2 oaa-seq">3</div>
//                 <div className="col-10">
//                   <h3>Start Trading</h3>
//                   <p>
//                     Use the desktop or mobile platform to launch your trades.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <CtaBox
//         heading="Still confused which account to choose ?"
//         description="Talk to our sales expert now"
//         buttonText="Live Chat"
//         buttonImage="/images/icons/chat.png"
//         sectionColor=""
//       />
//       <section className="text-center">
//         <div className="container">
//           <h2>Frequently Asked Questions</h2>
//           <div className="row mt-5">
//             <div className="col-md-6 offset-md-3">
//               <Faq questions={faqData} />
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

export default AccountComparison;
