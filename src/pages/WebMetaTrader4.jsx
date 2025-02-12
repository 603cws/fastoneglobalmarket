import Header from "../components/Header";
import TitleBgCta from "../components/TitleBgCta";

function WebMetaTrader4() {
  return (
    <>
      <Header mode={"light"} />
      <TitleBgCta
        title="MetaTrader WebTerminal"
        description="Trade on the world’s leading platforms directly from your browser - no downloads."
        backgroundImage="/images/tp/2.png"
        buttonText="Launch MetaTrader Web"
        buttonUrl="#"
      />

      <section className="pf-img-txt">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img src="/images/tp/meta-web-2.jpg" alt="" />
            </div>
            <div className="col-md-6 pf-it-content">
              <h3>No downloads, no installations</h3>
              <p>
                MetaTrader WebTerminal allows you to trade financial markets
                without installing any additional programs. You can trade via a
                browser on any operating system with much of the same core
                functionality as the desktop version.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="pf-img-txt">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 pf-it-content">
              <h3>Every symbol in one place</h3>
              <p>
                MetaTrader WebTerminal gives you access to every single
                instrument Fastone offers. From MetaTrader’s Market Watch, you
                can monitor real-time prices, spreads and more for every CFD
                available. Switch between charts with a single click and open
                new ones instantly whenever you wish.
              </p>
            </div>
            <div className="col-md-6">
              <img src="/images/tp/web-3.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="pf-img-txt">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img src="/images/tp/web-4.jpg" alt="" />
            </div>
            <div className="col-md-6 pf-it-content">
              <h3>Comprehensive analysis</h3>
              <p>
                MetaTrader is the platform of choice for serious traders because
                it features more than 40 built-in, customizable indicators and
                an economic calendar. Almost any aspect of a chart can be
                modified to your liking, and the combinations of indicators are
                potentially infinite.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h3>Platform details</h3>
            </div>
            <div className="col-md-9">
              <div className="row">
                <div className="col-6">
                  <h3>MetaTrader 4 WebTerminal</h3>
                </div>
                <div className="col-6">
                  <h3>MetaTrader 5 WebTerminal</h3>
                </div>
              </div>
              <div className="web-box-tb">
                <div className="row">
                  <div className="col-12">
                    <span>Available On</span>
                  </div>
                  <div className="col-6">
                    <p>Windows, Linux, macOS, iOS, Android</p>
                  </div>
                  <div className="col-6">
                    <p>Windows, Linux, macOS, iOS, Android</p>
                  </div>
                </div>
              </div>
              <div className="web-box-tb">
                <div className="row">
                  <div className="col-12">
                    <span>Account types</span>
                  </div>
                  <div className="col-6">
                    <p>All MT4 accounts</p>
                  </div>
                  <div className="col-6">
                    <p>All MT5 accounts</p>
                  </div>
                </div>
              </div>

              <div className="web-box-tb">
                <div className="row">
                  <div className="col-12">
                    <span>Chart types</span>
                  </div>
                  <div className="col-6">
                    <p>Candle, bar, line</p>
                  </div>
                  <div className="col-6">
                    <p>Candle, bar, line</p>
                  </div>
                </div>
              </div>
              <div className="web-box-tb">
                <div className="row">
                  <div className="col-12">
                    <span>Pending orders</span>
                  </div>
                  <div className="col-6">
                    <p>
                      Buy limit, buy stop, sell limit, sell stop, take profit,
                      stop loss
                    </p>
                  </div>
                  <div className="col-6">
                    <p>
                      Buy limit, buy stop, sell limit, sell stop, buy stop
                      limit, sell stop limit, take profit, stop loss
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pf-about">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-8 offset-md-2 mt-2 mb-2">
              <h2>Why Fastone</h2>
              <p className="mt-3">
                Better-than-market conditions, unique features and cutting-edge
                security, partnered with our dedication to transparency and
                excellent customer service, are the reasons traders continue to
                choose Fastone.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="pf-card-grid">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className=" pf-card-1">
                <h3>Instant withdrawals</h3>
                <p>
                  Remain in control of your funds. Simply choose your preferred
                  payment method, make a withdrawal request, and enjoy instant
                  automatic approval.¹
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className=" pf-card-1">
                <h3>Ultra-fast execution</h3>
                <p>
                  Stay ahead of trends with lightning-fast execution. Get your
                  orders executed in milliseconds on all available platforms at
                  Fastone.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className=" pf-card-1">
                <h3>Stop Out Protection</h3>
                <p>
                  Enjoy our unique Stop Out Protection feature. Delay and
                  sometimes completely avoid stop outs while trading with
                  Fastone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WebMetaTrader4;
