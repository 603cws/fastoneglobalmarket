import Header from "../components/Header";
import TitleBgCta from "../components/TitleBgCta";

function MobileMetaTrader4() {
  return (
    <>
      <Header mode={"light"} />
      <section className="page-title-area title-bg-cta">
        <div className="overlay"></div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1>MetaTrader 4 app</h1>
              <p>Trade on the go with the popular and user-friendly MT4 app.</p>
              <div className="mb-btn-group">
                <a href="https://download.mql5.com/cdn/mobile/mt4/ios?server=FastOneGlobal-Demo,FastOneGlobal-Main">
                  <img src="/images/icons/app-store.svg" alt="" className="" />
                </a>
                <a href="https://download.mql5.com/cdn/mobile/mt4/android?server=FastOneGlobal-Demo,FastOneGlobal-Main">
                  <img src="/images/icons/android-store.svg" alt="" />
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <img src="/images/tp/mt4-image2.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="pf-about">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-8 offset-md-2 mt-2 mb-2">
              <p className="mt-3">
                Experience the convenience of mobile trading with the world’s
                leading trading app, MetaTrader 4 Android and MetaTrader 4 iOS.
                Join the millions of traders who choose the popular MT4 mobile
                app and find your edge with Fastone.
              </p>
              <h2 className="mt-5 mb-5">
                Explore time-tested, reliable features on MT4 mobile
              </h2>
              <p className="mt-3">
                Enjoy this user-friendly and reliable mobile trading app with
                time-tested features such as top trading indicators, standard
                charts, analytical tools and more, fit for all trading levels
                and online trading strategies.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-img-txt">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4 mb-it-content">
              <div className="mb-it-card">
                <img src="/images/icons/flash.png" alt="" />
                <h3>Financial market news</h3>
                <p>Stay updated on market-shifting news and events.</p>
              </div>
              <div className="mb-it-card ">
                <img src="/images/icons/laptop.png" alt="" />
                <h3>All essential order types</h3>
                <p>
                  With the MT4 app you can apply all essential order types and
                  execution modes.
                </p>
              </div>
              <div className="mb-it-card">
                <img src="/images/icons/latency.png" alt="" />
                <h3>Order history</h3>
                <p>
                  Access your trading history for better prediction and decision
                  making.
                </p>
              </div>
            </div>
            <div className="col-md-8">
              <img src="/images/tp/news-rp.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="pf-about">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-8 offset-md-2 mt-2 mb-2">
              <h2 className="mt-5 mb-5">Comprehensive analysis</h2>
              <p className="mt-3">
                Featuring more than 40 built-in, customizable indicators and an
                economic calendar, the MetaTrader 4 app is the platform of
                choice for experienced traders. Almost any aspect of a chart can
                be modified to your liking, and indicator combinations are
                potentially infinite.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-img-txt">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8">
              <img src="/images/tp/mb-2.jpg" alt="" />
            </div>
            <div className="col-md-4 mb-it-content">
              <div className="mb-it-card">
                <img src="/images/icons/flash.png" alt="" />
                <h3>3 types of charts</h3>
                <p>
                  Apply bar charts, Japanese candlesticks, and broken line
                  charts to help guide your trades.
                </p>
              </div>
              <div className="mb-it-card ">
                <img src="/images/icons/laptop.png" alt="" />
                <h3>30 top indicators</h3>
                <p>
                  Take advantage of the most popular technical indicators used
                  by traders of all levels.
                </p>
              </div>
              <div className="mb-it-card">
                <img src="/images/icons/latency.png" alt="" />
                <h3>24 analytical objects</h3>
                <p>
                  Apply lines, channels, geometric shapes, and Elliott tools to
                  find when to open and close a trade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pf-about">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-8 offset-md-2 mt-2 mb-2">
              <h2>Why trade on MetaTrader 4 app with Fastone</h2>
              <p className="mt-3">
                Enjoy trading on this time-tested and convenient mobile trading
                platform, with the broker 800,000 traders trust. Access diverse
                financial markets and real-time execution to trade anytime,
                anywhere.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="pf-card-grid">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className=" dk-card-1">
                <h3>Instant withdrawals</h3>
                <p>
                Remain in control of your funds. Simply choose your preferred payment method, make a withdrawal request, and enjoy instant automatic approval.¹
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className=" dk-card-1">
                <h3>Ultra-fast execution</h3>
                <p>
                Stay ahead of trends with lightning-fast execution. Get your orders executed in milliseconds on all available platforms at Fastone.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className=" dk-card-1">
                <h3>Stop Out Protection</h3>
                <p>
                  Enjoy unique Stop Out Protection while trading with Fastone,
                  strengthening your positions during increased volatility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MobileMetaTrader4;
