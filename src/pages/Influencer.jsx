import Header from "../components/Header";
import FeaturesGrid2 from "../components/FeaturesGrid2";
import TitleAreaCenter from "../components/TitleAreaCenter";
import InfluencerAnimation from "../components/animations/InfluencerAnimation";
const advantages = [
  {
    icon: "/images/icons/chess.png",
    title: "Generous Commission Rates",
    description:
      "Enjoy competitive commission rates with the opportunity to earn substantial rewards for each referred client. Our structured commission system ensures that your efforts are well-compensated.",
  },
  {
    icon: "/images/icons/shuffle.png",
    title: "Same-Day Deposits and Withdrawals",
    description:
      "Provide your followers with seamless trading experiences through our same-day deposit and withdrawal capabilities, enhancing their satisfaction and trust in your recommendations.",
  },
  {
    icon: "/images/icons/pencil.png",
    title: "Exclusive Access to Tools and Resources",
    description:
      "Gain access to advanced trading tools, market analysis, and educational materials that will help you and your audience stay ahead in the financial markets.",
  },
  {
    icon: "/images/icons/heart.png",
    title: "Comprehensive Support",
    description:
      "Benefit from dedicated support from our team, including marketing materials, technical assistance, and strategic advice to maximize your influence and impact.",
  },
  {
    icon: "/images/icons/television.png",
    title: "Client Education Programs",
    description:
      "Offer your audience high-quality educational resources, including webinars, trading guides, and tutorials, empowering them to make informed trading decisions.",
  },
  {
    icon: "/images/icons/handshake.png",
    title: "Daily Market Insights",
    description:
      "Keep your audience informed with our daily market technical and fundamental analysis, giving them the edge they need to navigate the markets effectively.",
  },

  {
    icon: "/images/icons/handshake.png",
    title: "Promotional Opportunities",
    description:
      "Take advantage of exclusive promotional campaigns and events designed to boost your visibility and engagement, enhancing your brand’s reach and influence.",
  },
  {
    icon: "/images/icons/handshake.png",
    title: "Strong Partnership Network",
    description:
      "Join a network of successful influencers and industry leaders, providing you with opportunities for collaboration, growth, and mutual success.",
  },
  {
    icon: "/images/icons/handshake.png",
    title: "Reputation and Reliability",
    description:
      "Partner with a trusted and reputable CFD provider known for its transparency, security, and commitment to excellence, enhancing your credibility and trustworthiness.",
  },
  {
    icon: "/images/icons/handshake.png",
    title: "Customizable Solutions",
    description:
      "Enjoy tailored solutions and personalized support to fit your unique needs and objectives, ensuring a successful and rewarding partnership.",
  },
];

function Influencer() {
  const breadcrumbPaths = [
    { name: "Home", href: "/" },
    { name: "Partners", href: "" },
    { name: "Influencer" },
  ];
  return (
    <>
      <Header mode={"light"} />
      <TitleAreaCenter
        title="Influencer"
        description="Join our influencer Program today and elevate your business with
                our unparalleled support and resources. Experience the benefits
                of partnering with a leading CFD provider and watch your success
                grow!"
        backgroundImage="/images/bg-2.png"
        breadcrumbPaths={breadcrumbPaths}
      />
      <section className="wc-fmarket wc-fm-2">
        <div className="container">
          <div className="row">
          <div className="row partner-img-1">
            <InfluencerAnimation />
          </div>
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
              <h2 className="wcu-title">What do we offer to our Influencers?</h2>
            </div>
            <div className="col-md-7 af-border">
              <p>
                Join our Influencer Program today and elevate your business with
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
          <h3 className="wcu-title">What We Offer Our Influencers</h3>
          <FeaturesGrid2 advantages={advantages} />
        </div>
      </section>
    </>
  );
}

export default Influencer;
