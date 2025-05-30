import Header from "../components/Header";
import TitleBgCenter from "../components/TitleBgCenter";

function RiskWarning() {
  const breadcrumbPaths = [
    { name: "Home", href: "/" },
    { name: "Company", href: "" },
    { name: "Legal", href: "/legal" },
    { name: "Risk Warning" },
  ];
  return (
    <>
      <Header mode={"light"} />
      <TitleBgCenter
        title="Risk Warning"
        description=""
        backgroundImage="/images/bg-2.png"
        breadcrumbPaths={breadcrumbPaths}
      />
      <section className="mt-5">
        <div className="container">
          <div className="row">
            <div className="col-12 about-text">
             
              
              <p>
                FastOne Global Financial Markets Limited, a leading financial
                intermediary providing trading solutions is an FSC (Financial
                Services Commission, Mauritius) regulated company holding a
                Category 1 Global Business License.
              </p>

              <p>
                References to "FastOne" in this risk warning document shall mean
                FastOne Global Financial Markets Limited unless otherwise
                stated. In the best interest of our clients it is imperative for
                all traders who are keen to become FastOne clients, to be
                informed about the execution and various other risks involved
                with trading at FastOne.
              </p>

              <p>
                FastOne recommends traders and clients to read this risk
                document carefully.
              </p>

              <p>
                Here our clients and prospects will find detailed information
                about execution and various other risks associated with FastOne
                but not limited to its products/financial instruments, trading
                technologies, execution types and services.
              </p>

              <h3 className="mt-4">High Risk Products/Financial Instruments</h3>
              <p>
                Trading Currency, Commodities, CFDs, Indices and leveraged
                products/financial instruments on margin carry a high risk and
                may not be suitable for all traders/clients and investors.
                Before deciding to trade products/financial instruments offered
                by FastOne Global Financial Markets Limited ("FastOne") a client
                should carefully consider his/her expertise, knowledge,
                objectives, financial situation, needs and level of experience.
                FastOne is a registered Global Business License Category 1
                company having investment dealer license (full services) and
                regulated by FSC (Financial Services Commission), Mauritius.
                FastOne either directly, through its' associate
                company/companies and/or third party may provide general advice,
                reports, news, data and other materials that do not take into
                account specific objectives, financial situation or needs of
                individual clients. The content of this website and any other
                website of the group companies, its' associated companies must
                not be construed as personal advice or as an attempt by the
                FastOne to solicit business or an attempt of persuasion for
                trading. The possibility exists that a client could sustain a
                loss of some or all of his/her deposited funds and therefore,
                client should not speculate with capital that he/she cannot
                afford to lose. A client should be very aware of all the risks
                associated with trading on margin and associated financial risk.
                FastOne recommends its clients to seek advice from an
                independent financial advisor and/or apply his/her own prudent
                decision.
              </p>
              <h3 className="mt-4">Market Views and Opinions</h3>
              <p>
                News, research, analysis, prices, views on market, market trends
                and news on economy, opinions or/and other information contained
                on this website is provided as general market commentary and
                does not constitute investment/trading advice. FastOne will not
                accept liability for any loss or damage, including but not
                limited to, any loss of profit, which may arise directly or
                indirectly from use of or reliance on such information.
              </p>
              <h3 className="mt-4">
                Risks Associated with Internet and Technology
              </h3>
              <p>
                There are risks associated with an Internet and Technology based
                trade execution system including, but not limited to, the
                failure of hardware (crash of computer, server), software, and
                internet connection. Since FastOne does not control
                transmission, signal power, its reception or routing via the
                internet, configuration of your electronic and trading equipment
                or reliability of internet connection. FastOne together with its
                shareholders, directors, management, employees, business
                associates, strategic partners, introducing brokers, white label
                partners, vendors and service providers cannot be responsible
                for communication failures, distortions or delays when trading
                via the internet. FastOne employs backup systems and contingency
                plans to minimize the possibility of system failure, which
                includes allowing clients to trade via telephone, live chat
                service or other means, as an alternative. Execution of order
                through telephone or alternative means may attract additional
                charges and such charges would be notified to the clients.
              </p>
              <h3 className="mt-4">Market Depth and Liquidity</h3>
              <p>
                During the trading hours at various intervals, market for a
                particular product/financial instruments may become less
                liquid/active. This may occur when market is not very active and
                due to dramatic turn of socio, economic & political event,
                terrorist attack, war and civil unrest, etc. This may happen
                across all products/financial instruments or few selected
                products/financial instruments. Less liquidity or thinner
                markets may result in wider spreads, as there are fewer market
                participants. In illiquid markets, clients may find it difficult
                to enter or exit positions at their requested price, experience
                delays in execution, and receive a price at execution that is
                significantly away from requested price. It may also impact
                their P/L, clients may get margin call and/or trading may get
                suspended for some time.
              </p>
              <p>
                A client must carefully select a product/financial instrument
                prior to any trading decision as in all financial markets; some
                instruments within that market will have greater depth of
                liquidity than others.
              </p>
              <h3 className="mt-4">Execution Delay</h3>
              <p>
                There is possibility of delay in execution of clients' orders.
                This may occur for various reasons, such as technical issues
                with the clients' internet connection or by a lack of available
                liquidity in the product/financial instrument that client is
                attempting to trade. Due to inherent volatility in the markets,
                it is imperative that clients have a working and reliable
                internet connection. There are possibilities that the client's
                personal internet connection may not be maintaining a constant
                connection with the FastOne servers due to a lack of signal
                strength. A disturbance in the connection path can sometimes
                interrupt the signal and disable the FastOne Trading Station,
                causing delays in the transmission of data between the trading
                station and the FastOne server.
              </p>
              <h3 className="mt-4">Execution Slippage</h3>
              <p>
                It is FastOne endeavour to provide clients with the best
                execution available and to get clients' orders filled at the
                requested rate/price. However, at times, including but not
                limited to, due to an increase in volatility and spurt in price,
                orders may be subject to slippage. Slippage most commonly
                happens due to an increase in volatility during fundamental news
                events or periods of limited liquidity. During periods such as
                these, client's order type, quantity & rate/price demanded, and
                specific order instruction e.g. Limit Order can have an impact
                on the overall execution of his trades.
              </p>

              <p>
                The high volatility in the market at times creates conditions
                such that orders are difficult to execute. A client might select
                a rate/price to execute his trade. Here, the client tries to
                execute his trade at a certain rate/price but in a split second,
                the market may have moved significantly away from that
                rate/price. The clients order would then be filled at the next
                available price for that specific order.
              </p>

              <p>
                FastOne provides a number of basic, advanced and specific order
                types to help clients mitigate execution risk. To view more
                information regarding order types at FastOne, Please read
                paragraph below.
              </p>
              <h3 className="mt-4">Order Types</h3>
              <p>
                FastOne different trading systems support different types of
                orders, we caution clients to please be confirmed about the
                various types of orders that are supported by various systems.
                It is possible that some order types that are existing in the
                respective systems either be removed or new order types are
                introduced or both without prior notice and they are not
                updated. FastOne does not promise that the FastOne system will
                support all order types under all market conditions, there might
                be certain market scenarios including but not limited to opening
                session, closing session, immediately before and after economic
                news events & data releases, untoward events like, war,
                terrorist attacks, political crisis and civil unrest etc. where
                some or all order types are made dysfunctional/non-operative.
              </p>
              <h3 className="mt-4">Preference between Execution and Price</h3>
              <p>
                The high volatility in the market at times creates conditions
                such that orders are difficult to execute. A client might select
                a rate/price to execute his trade but in a split second, the
                market may have moved significantly away from the rate/price at
                which FastOne is able to execute the trades.
              </p>
              <p>
                Where the liquidity depth is not large enough to fill a Limit
                Entry and Limit Order, the order will not be executed instead
                remain in the system until the order can be filled. Limit Entry
                and Limit orders guarantee price but not execution. A client
                should weigh his objective and preference between execution and
                price depending on his trading strategy and the market
                conditions.
              </p>
              <h3 className="mt-4">Enlarged Spreads</h3>
              <p>
                At times, spreads expand beyond the normal spread. Spreads
                depend on liquidity and in periods of limited liquidity, spreads
                may expand because of extreme volatility and uncertainty in
                market movement or thin liquidity. Quite often spreads expand in
                live market scenario. It is recommended to be aware of liquidity
                patterns while trading. It also helps managing open orders
                better. In such scenarios clients should be careful while
                placing new orders. Since spreads may expand because of the
                change in volatility and liquidity scenario, often spreads
                expand substantially during news events. The spreads may remain
                expanded momentarily for few minutes. The scenario of expanded
                spreads can make huge impact on desired result of the trades.
                FastOne strongly encourages clients to employ caution when
                trading around news events and increased volatility. Widened
                spreads can adversely affect client's equity.
              </p>
              <h3 className="mt-4">Pending Orders</h3>
              <p>
                Where an order is in the process of execution but not executed
                means execution has not been confirmed. This may happen in case
                of high volume and volatility. During periods of heavy trading
                volume, it is possible that the orders are in queue and there is
                a delay in getting confirmation of certain orders. It may also
                happen that the orders have been executed and the delay is due
                to heavy internet traffic.
              </p>
              <p>
                The pending order could also be a result of the type of order
                placed. There is possibility of Market order to be filled at the
                next available price in the market. In both the scenarios order
                window will typically indicate executed or processing and it
                will take few moments for trades to appear in the "open
                positions" window.
              </p>
              <p>
                One should also be careful not to place order (click multiple
                times) repeatedly because order confirmation has not been
                received because such attempts unconsciously and unnecessarily
                open unwanted positions.
              </p>
              <h3 className="mt-4">Trade Rollover</h3>
              <p>
                Trade rollover is the process of extending the settlement date
                of an open position by simultaneously closing the existing
                position and re-entering (opening) of new equivalent position. A
                client artificially extends the settlement period. FastOne does
                not support delivery or receipt of physical currency, CFDs and
                other financial instruments. In case of rollover of trade of
                certain products/financial instruments (Currency) interest is
                either paid or received on the overnight open positions. FastOne
                may also have a system where there are fixed rollover charges or
                no rollover interest/charges.
              </p>
              <p>
                It is important to note that rollover charges will be higher
                than rollover accruals. Spreads during rollover may be wider.
                Clients are requested to understand the implications of the
                rollover.
              </p>
              <h3 className="mt-4">Tick Size</h3>
              <p>
                Tick size is defined as the value given to a tick movement for a
                particular product/financial instruments, also referred as
                minimum price movement. This cost is the amount that will be
                gained or lost with each tick movement of the respective
                product/financial instrument and will be expressed in particular
                currency. They may vary across various products/financial
                instruments. On the FastOne Platforms, the tick size for all the
                products/financial instruments and equivalent value are defined.
              </p>
              <h3 className="mt-4">Inverted Spread</h3>
              <p>
                In the event spreads become inverted because of including but
                not limited to some technical snag, FastOne advises clients to
                avoid placing orders on such unreal prices. All trades executed
                on such prices may be revoked.
              </p>

              <p>Impact of Weekend, Holidays, Opening and Closing Hours</p>

              <p>
                The lack of liquidity and volume during the weekend and holidays
                at major global financial centres hamper execution and price
                delivery. Markets may also be extremely volatile over the
                weekend because of major news announcements, economic and
                political developments. Therefore market may open with gap in
                the new trading session. This can severely affect clients'
                equity, P/L, margin requirements.
              </p>

              <p>
                Trading hours for various products/ financial instruments
                differ. Clients placing GTC (Good Till Cancellation) orders
                during non trading hours may be unable to cancel orders pending
                for execution. In the event that a Market GTC Order is submitted
                right at market close, the possibility exists that it may not be
                executed until the market opens again. FastOne advises clients
                to be careful when trading around closing time of the market and
                factor reasons described into their trading decision.
              </p>

              <p>
                FastOne cautions clients holding positions over the weekend. The
                prices could be significantly different when the market opens
                (new session) after the close. There are various factors that
                affect the prices of different products/financial instruments.
                At times, the opening prices are near where the prices were on
                the close. However considerable gap may exist between open and
                close prices because of important news announcements and
                economic events before the market opens. It depends on how
                market views and values various products/financial instruments.
              </p>

              <p>
                The open or close times may be altered as FastOne relies on
                prices being offered by third party sources.
              </p>
              <h3 className="mt-4">Margin Requirement and Liquidation</h3>
              <p>
                A margin is cash/collateral that the buyer/seller of a financial
                instrument has to deposit to cover some or all of the credit
                risk of their counterparty. It is also called performance bond.
                Margin acts as a good faith deposit to secure clients' financial
                obligations and the notional value of his position.
              </p>

              <p>
                There are two types of margin Initial Margin and Maintenance
                Margin. FastOne defines the margin amount for both the margins
                and they are subject to change depending on various factors,
                predominantly volatility in the market. Initial margin is
                expressed either as a fixed amount or percentage of total value
                of a contract or financial instrument. A client needs to deposit
                initial margin or have credit balance of equivalent amount in
                his trading account with FastOne before he/she can initiate (buy
                or sell) a position in a particular contract or financial
                instrument. Maintenance margin (generally less than the initial
                margin) is the minimum margin (amount) required to continue or
                maintain the open position.
              </p>

              <p>
                Margin trading allows clients to hold a position much larger
                than the actual account value because of leverage. Margin calls
                are triggered when clients' usable margin (difference between
                initial and maintenance margin) reaches zero. In the event when
                client's floating losses reduce account equity/balance to a
                level that is less than or equal to clients' maintenance margin
                requirement. Therefore, the result of any margin call is
                subsequent liquidation unless otherwise specified. FastOne is
                not obligated to provide a margin call warning to clients prior
                to liquidating open positions.
              </p>

              <p>
                Trading on margin comes with risk. Potential gain coincides with
                potential loss. If account equity falls to a level that is less
                than or equal to client's maintenance margin requirement,
                FastOne Trading Station/Dealing desk will trigger order to
                liquidate (close) all open positions or part of the open
                positions. The liquidation process could be electronic or
                manual; it is completely on FastOne's sole discretion to
                liquidate such open positions that has hit the maintenance
                margin level in the manner it deems fit and appropriate.
              </p>

              <p>
                At times during the forced liquidation because a client is on a
                margin call, there may not be enough liquidity. Therefore, it is
                also possible that the client equity becomes negative because of
                extreme volatility and gap. Clients would be responsible to make
                good to such negative balances. FastOne also recommends that
                clients use Stop orders to limit downside risk.
              </p>

              <p>
                It is strongly advised that clients keep their account
                adequately funded and maintain additional margin in their
                accounts at all times and do not allow their account balance to
                fall at or below the maintenance margin.
              </p>
              <h3 className="mt-4">
                FastOne Product Specific Margin Requirements
              </h3>
              <p>
                The margins are indicative and may vary without prior
                intimation; they may vary in live market scenarios as well.
              </p>
              <h3 className="mt-4">
                Difference between Chart Prices and Work Station Price
              </h3>
              <p>
                There is possibility of difference in price that appears on the
                FastOne trading platform and on chart. Chart prices are
                indicative prices usually very close to the executable prices.
                There is possibility of both prices, Chart and Executable prices
                are from different sources and therefore may not be exactly the
                same. FastOne recommends clients to establish the distinction
                between the Chart prices and Executable prices and be aware of
                the consequences.
              </p>
              <h3 className="mt-4">
                Portable Device Trading Platform (Mobile/Tablet)
              </h3>
              <p>
                There are various risks associated to portable device trading
                platforms (Mobile/Tablet) and technologies similar to internet
                trading technology as explained above. For example the
                duplication of order instructions, feed (rate/price) latency and
                other issues that are result of portable device (Mobile/Tablet)
                connectivity. Prices displayed on the mobile platform are solely
                an indication of the executable rates and may not reflect the
                actual executable price on the platforms.
              </p>

              <p>
                FastOne shall not be liable under any circumstances where
                clients experience a delay in price quotation or an inability to
                trade caused by slow internet connectivity or any other
                transmission and technology, hardware problems outside the
                direct control of FastOne. Transmission problems include but are
                not limited to the strength of the mobile signal, latency, or
                any other issues that may arise between client and his internet
                service provider or any other service provider.
              </p>

              <p>
                FastOne recommends that clients to be aware of the functionality
                of the FastOne portable device trading platform (Mobile/Tablet)
                prior to managing a live account via a portable device.
              </p>
              <h3 className="mt-4">FastOne Dealing Desk</h3>
              <p>
                Being customer-centric FastOne provides its clients added means
                to place trading orders over phone and through online secured
                login chat service. A Customer understands that FastOne dealing
                desk in its sole discretion may record telephone calls, or tape
                or otherwise and produce the same as an evidence in case of
                legal dispute. Clients acknowledge and agree to accept the
                recording as an evidence.
              </p>

              <p>
                Clients are requested to place execution request/ order through
                chat service in rare circumstances, only when you are not able
                to trade through FastOne trading platform or in case of system
                failure, slowdown in internet connectivity, failure of your
                telephone lines.
              </p>

              <p>
                FastOne reserves the right to accept or refuse execution of
                trades on phone/chat. You choose to execute order through phone
                or online chat service at your own risks. FastOne will not be
                responsible for any losses due to technical error or any other
                error or problem in telephone line or chat service.
              </p>

              <p>
                These services are added means; clients are usually expected to
                trade through FastOne trading platforms. Excessive use may
                attract a fee, which will be notified separately.
              </p>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default RiskWarning;
