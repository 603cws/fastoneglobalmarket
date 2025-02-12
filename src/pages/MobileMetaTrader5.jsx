import Header from "../components/Header";
import TitleBgCta from "../components/TitleBgCta";

function MobileMetaTrader5() {
  return (
    <>
      <Header mode={"light"} />
      <section className="page-title-area title-bg-cta">
        <div className="overlay"></div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1>MetaTrader 5 app</h1>
              <p>Trade on the go with the popular and user-friendly MT5 app.</p>
              <div className="mb-btn-group">
                <a href="/app-coming-soon">
                  <img src="/images/icons/app-store.svg" alt="" className="" />
                </a>
                <a href="/app-coming-soon">
                  <img src="/images/icons/android-store.svg" alt="" />
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <img src="/images/tp/mt5-image2.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="pf-about">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-8 offset-md-2 mt-2 mb-2">
              <p className="mt-3">
                Get everything you need for advanced trading all in one
                feature-rich and convenient mobile app. Download MetaTrader 5
                iOS or Android and start trading diverse markets with real-time
                strategy execution. See for yourself the benefits of trading on
                MT5 with Fastone.
              </p>
              <h2 className="mt-5 mb-5">
                All the features you need with MT5 mobile
              </h2>
              <p className="mt-3">
                Upgrade your CFD trading with the MetaTrader 5 app and its
                advanced tools and enhanced features for all trading styles and
                strategies, anytime, anywhere.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-img-txt">
        <div className="container">
          <div className="row align-items-start">
            <div className="col-md-4 mb-it-content">
              <div className="mb-it-card">
                <img src="/images/icons/flash.png" alt="" />
                <h3>Quick and convenient trading</h3>
                <p>
                  Monitor your account status, track your trade history, and buy
                  and sell financial instruments with one click.
                </p>
              </div>
              <div className="mb-it-card ">
                <img src="/images/icons/laptop.png" alt="" />
                <h3>News alerts and notifications</h3>
                <p>
                  Stay updated with market news and events and price shifts with
                  alerts and notifications.
                </p>
              </div>
              <div className="mb-it-card">
                <img src="/images/icons/latency.png" alt="" />
                <h3>Full set of trade orders</h3>
                <p>
                  The MT5 app comes with a full set of trade orders including
                  Buy Stop Limit and Sell Stop.
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
                MetaTrader is the platform of choice for experienced traders
                because it features more than 40 built-in, customizable
                indicators and an economic calendar. Almost any aspect of a
                chart can be modified to your liking, and the combinations of
                indicators are potentially infinite.
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
                <h3>Built-in technical analysis</h3>
                <p>
                  Analyze the markets and plan your strategy with 30 top
                  indicators and 24 analytical objects.
                </p>
              </div>
              <div className="mb-it-card">
                <img src="/images/icons/latency.png" alt="" />
                <h3>9 timeframes</h3>
                <p>
                  Trade with M1, M5, M15, M30, H1, H4, D1, W1 and MN timeframes
                  to suit your chosen trading style.
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
              <h2>Why trade on MetaTrader 5 app with Fastone</h2>
              <p className="mt-3">
                Trade forex, stocks, crypto and other instruments with the
                broker professionals trust on a mobile trading platform that
                provides a user-friendly, feature-rich, and smooth trading
                experience.
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
                  Remain in control of your funds. Simply choose your preferred
                  payment method, make a withdrawal request, and enjoy instant
                  automatic approval.¹
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className=" dk-card-1">
                <h3>Ultra-fast execution</h3>
                <p>
                  Stay ahead of trends with lightning-fast execution. Get your
                  orders executed in milliseconds on MetaTrader 5 with Fastone.
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

export default MobileMetaTrader5;
