import Header from "../components/Header";
import FeaturesGrid2 from "../components/FeaturesGrid2";
import TitleAreaCenter from "../components/TitleAreaCenter";
import AffiliateAnimation from "../components/animations/AffiliateAnimation";
const advantages = [
  {
    icon: "/images/icons/chess.png",
    title: "No Setup Fees",
    description:
      "Start partnering with us without any initial costs. Our affiliate program is designed to be accessible and hassle-free, allowing you to begin immediately.",
  },
  {
    icon: "/images/icons/shuffle.png",
    title: "Easy Onboarding for Your Clients",
    description:
      "Enjoy a seamless onboarding process for your clients with our user-friendly platform and streamlined registration procedures, ensuring a smooth start for them.",
  },
  {
    icon: "/images/icons/pencil.png",
    title: "Consistent Commission Payouts",
    description:
      "Benefit from reliable and timely commission payouts, ensuring that your earnings are consistently delivered without delays.",
  },
  {
    icon: "/images/icons/heart.png",
    title: "Generous Commission Rates",
    description:
      "Earn competitive commissions for each client you refer, with a structure that rewards your efforts and provides substantial returns.",
  },
  {
    icon: "/images/icons/television.png",
    title: "Same-Day Deposits and Withdrawals",
    description:
      "Offer your clients the convenience of same-day deposits and withdrawals, enhancing their trading experience and satisfaction.",
  },
  {
    icon: "/images/icons/handshake.png",
    title: "Comprehensive Support",
    description:
      "Receive full support from our dedicated team, including marketing materials, technical assistance, and strategic guidance to help you succeed.",
  },
  {
    icon: "/images/icons/handshake.png",
    title: "Client Education Programs",
    description:
      "Provide your clients with access to valuable educational resources, including webinars, tutorials, and trading guides, to support their trading journey.",
  },
  {
    icon: "/images/icons/handshake.png",
    title: "Daily Market Insights",
    description:
      "Equip your clients with daily market analysis, technical insights, and fundamental updates to help them make informed trading decisions.",
  },
  {
    icon: "/images/icons/handshake.png",
    title: "Exclusive Promotions",
    description:
      "Access special promotional campaigns and events that can boost your visibility and engagement, enhancing your ability to attract and retain clients.",
  },
  {
    icon: "/images/icons/handshake.png",
    title: "Reputation and Reliability",
    description:
      "Partner with a well-established and trusted CFD provider known for its transparency, security, and excellence in the industry.",
  },
];

function Affiliate() {
  const breadcrumbPaths = [
    { name: "Home", href: "/" },
    { name: "Partners", href: "" },
    { name: "Affiliate" },
  ];
  return (
    <>
      <Header mode={"light"} />
      <TitleAreaCenter
        title="Affiliate"
        description="Join our Affiliate Program today and elevate your business with
                our unparalleled support and resources. Experience the benefits
                of partnering with a leading CFD provider and watch your success
                grow!"
        backgroundImage="/images/bg-2.png"
        breadcrumbPaths={breadcrumbPaths}
      />
      
      <section className="wc-fmarket wc-fm-2">
        <div className="container">
        <div className="row partner-img-1">
            <AffiliateAnimation />
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="wcfm-col">
                <p>
                  Partner with FastOne Markets - where your referrals lead to
                  real rewards. Enjoy high commissions and support at every
                  step!
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="wcfm-col">
                <p>
                  FastOne Markets empowers partners with a fixed $10 commission
                  per lot traded. Maximize your earnings while offering top-tier
                  trading conditions!
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="wcfm-col">
                <p>
                  Join FastOne Markets' IB program and enjoy fixed earnings of
                  $10 per lot traded—spread doesn't matter, only your profits
                  do!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="inf-cta">
        <div className="container">
          <div className="row inf-cta-title">
            <div className="col-md-5">
              <h2 className="wcu-title">
                Interested in Affiliate Partnership opportunities??
              </h2>
            </div>
            <div className="col-md-7 af-border">
              <p>
                Join our Affiliate Program today and elevate your business with
                our unparalleled support and resources. Experience the benefits
                of partnering with a leading CFD provider and watch your success
                grow!
              </p>
            </div>
          </div>
          <div className="row reg-steps">
            <div className="col-md-4">
              <img
                src="/images/icons/register.png"
                alt=""
                className="inf-icon"
              />
              <h3>1. Register</h3>
              <p>
                Fill out a simple application form, and we'll review it on the
                same day.
              </p>
            </div>
            <div className="col-md-4">
              <img src="/images/icons/refer.png" alt="" className="inf-icon" />
              <h3>2. Refer</h3>
              <p>
                After signing up, you'll receive a tracking link that gives you
                access to our marketing and operational tools.
              </p>
            </div>
            <div className="col-md-4">
              <img
                src="/images/icons/earn-reward.png"
                alt=""
                className="inf-icon"
              />
              <h3>3. Earn Rewards</h3>
              <p>
                Send us your leads, and you'll start earning as soon as they
                begin trading.
              </p>
            </div>
          </div>
          <div className="inf-cta-btn">
            <a class="btn-one rounded-btn inf-account" href="#">
              Create your Partner Account
            </a>
          </div>
        </div>
      </section>
      <section className="af-offers mt-5">
        <div className="container">
          <h3 className="wcu-title">What We Offer Our Affiliate Partners</h3>

          <FeaturesGrid2 advantages={advantages} />
        </div>
      </section>
    </>
  );
}

export default Affiliate;
