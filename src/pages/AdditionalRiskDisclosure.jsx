import Header from "../components/Header";
import TitleBgCenter from "../components/TitleBgCenter";

function AdditionalRiskDisclosure() {
  const breadcrumbPaths = [
    { name: "Home", href: "/" },
    { name: "Company", href: "" },
    { name: "Legal", href: "/legal" },
    { name: "Additional Risk Disclosure" },
  ];
  return (
    <>
      <Header mode={"light"} />
      <TitleBgCenter
        title="Additional Risk Disclosure"
        description=""
        backgroundImage="/images/bg-2.png"
        breadcrumbPaths={breadcrumbPaths}
      />
      <section className="mt-3">
        <div className="container">
          <div className="row">
            <div className="col-12 about-text">
              <ol>
                <li className="mt-3">
                  You acknowledge that trading in financial and commodity
                  instruments and products such as Currency (Fx), CFDs, OTC Spot
                  and Forward Contracts, Futures and Options Contracts and Other
                  Derivatives Instruments is speculative and involves a high
                  degree of risk, and that no promises or representations
                  regarding profits or limitation of losses have been made by
                  FastOne Global Financial Markets Ltd or its' employees, its'
                  agents, associates, introducing brokers, white label partners,
                  associated companies and group companies. Because of the
                  complexity, only genuine risk capital should be used for
                  trading.
                </li>
                <li className="mt-3">
                  No representation is made that taking education in financial
                  and commodity instruments and products such as Currency (Fx),
                  CFDs, OTC Spot and Forward Contracts, Futures and Options
                  Contracts and Other Derivatives Instruments courses, paper
                  trading or online simulated trading will increase your chances
                  of success in trading futures. Simply because a subscriber of
                  educational publication follows its methodologies does not
                  mean that the customer's trading will be profitable, or losses
                  will be limited. As a result, customer acknowledge that the
                  high degree of risk involved in trading such Forex, CFD &
                  other derivatives instruments is not lessened by having
                  subscribed to materials of any educational service or paper
                  trading and does not guarantee or assure that the customer
                  will make a profit or limit his losses.
                </li>
                <li className="mt-3">
                  You acknowledge that you may receive trading recommendations
                  by FastOne Global Financial Markets Ltd or its' employees,
                  its' agents, associates, introducing brokers, white label
                  partners, associated companies, and group companies, and that
                  any trading recommendations received shall not be relied upon
                  by you for accuracy. You must make your own independent
                  determination as to the advisability of a particular trade or
                  rely on the independent advice of a CTA or other account
                  manager and experts not affiliated with FastOne Global
                  Financial Markets Ltd. Hypothetical or simulated performance
                  results have certain inherent limitations. Unlike an actual
                  performance record, simulated results do not represent actual
                  trading. Also, since the trades have not actually been
                  executed, the results may have under-or-over-compensated for
                  the impact, if any, of certain market factors, such as lack of
                  liquidity. Simulated trading programs in general are also
                  subject to the fact that they fare designed with benefit of
                  hindsight. No representation is being made and any account
                  will or is likely to achieve profits or losses. There have
                  been no promises, guarantees or warranties suggesting that any
                  trading will result in a profit or will not result in a loss.
                </li>
                <li className="mt-3">
                  It has been widely reported that most leveraged products
                  whether spot, forward, futures and options traders lose money.
                  FastOne Global Financial Markets Ltd, its' employees, its'
                  agents, associates, introducing brokers, white label partners,
                  associated companies and group companies have no reason to
                  believe that individuals, who subscribe to educational
                  materials and attend courses to learn trading in financial and
                  commodity instruments and products such as Spot Currency and
                  other Spot Contracts, CFDs, OTC Spot and Forward Contracts,
                  Futures and Options Contracts and Other Derivatives
                  Instruments, attend seminars, and/or workshops perform any
                  better than other traders.
                </li>
                <li className="mt-3">
                  You acknowledge that you have exercised independent judgment
                  in selecting a brokerage firm, and that opening an account
                  with FastOne Global Financial Markets Ltd is purely your own
                  judgment, it is optional and voluntary.
                </li>
                <li className="mt-3">
                  {" "}
                  This additional risk disclosure document is supplement to all
                  other risk disclosure document provided to you by FastOne
                  Global Financial Markets Ltd but does not replace any other
                  risk disclosure given to you when opening your account.
                </li>
                <li className="mt-3">
                  FastOne Global Financial Markets Ltd encourages you to check
                  your equity runs (account position) daily to determine its
                  accuracy and to report any errors. You are limited to 24-hours
                  in which you can report errors contained in the equity run. If
                  you do not understand how to read equity run. Please contact
                  FastOne Global Financial Markets Ltd or our Customer Service
                  Department for assistance. If your account is traded by
                  someone (an agent) other than yourself, it is imperative that
                  you check your equity runs as soon as possible to correct any
                  errors. If you are not receiving or are unable to access your
                  equity runs on a daily basis, even if someone else is trading
                  your account, please contact us immediately: otherwise, we
                  will assume you are receiving error free equity runs.
                </li>
                <li className="mt-3">
                  Most open outcry and electronic trading facilities are
                  supported by computer-based systems for their order-routing,
                  executing, matching, response times, security, registration,
                  clearing of trades. As with all facilities and systems, they
                  are vulnerable to temporary disruption or failure. In the
                  event of a system or component failure, it is possible that
                  you may be able to enter new orders, execute existing orders,
                  or modify or cancel orders that were previously entered. You
                  may also experience loss of orders or order priority. Your
                  ability to recover certain losses as a result of such failures
                  is limited by the system providers, the exchanges, the
                  clearing firms & FastOne Global Financial Markets Ltd.
                </li>
                <li className="mt-3">
                  Accounts in which you have assigned someone else limited power
                  of attorney to trade your account (“LPOA”), that account must
                  only be traded by the POA and not by both you and your LPOA at
                  the same time. This is to avoid confusion and mistakes between
                  the two parties. If the Customer wants to trade his own
                  account, he should open a second account and allow the LPOA to
                  continue trading the first account or remove the LPOA as
                  having authority to trade the account. FastOne Global
                  Financial Markets Ltd is not responsible for trading errors or
                  entries as a result of both parties trading the same account.
                  LPOAs must be revoked by the account owner(s) in writing in
                  order to be effective.
                </li>
                <li className="mt-3">
                  When you place an order through the trading/dealing desk of
                  FastOne Global Financial Markets Ltd or its' employees,
                  introducing brokers, white label partners the order may NOT be
                  entered into your online order execution platform. It is your
                  responsibility to keep track of all orders, including all
                  trades executed with the trade desk, and for knowing your
                  position at all times. FastOne Global Financial Markets Ltd is
                  authorized to rely solely on your representations and the
                  information shown on our computer system. While this
                  information is deemed reliable, FastOne Global Financial
                  Markets Ltd makes no guarantees as to the accuracy of the
                  information provided. If you would like your trades placed
                  with the trade desk to be shown on you online order execution
                  platform, it is your responsibility to contact FastOne Global
                  Financial Markets Ltd and request an “External fill”.
                </li>
                <li className="mt-3">
                  FastOne Global Financial Markets Ltd is authorized by you to
                  accept orders/instructions over phone or through any other
                  means for e.g., mobile SMS, online chat, online messenger, or
                  any other messaging means, email, fax etc. to trade, to
                  withdraw funds and issue any other order/instructions in
                  relation to your trading account. In case you have an
                  authorized agent; such an agent (appointed and authorized by
                  you) is also authorized to place orders/instructions on your
                  behalf to trade, to withdraw funds and issue any other
                  orders/instructions in relation to your account over phone or
                  through any other means for e.g. mobile SMS, online chat,
                  online messenger, or any other messaging means, email, fax
                  etc. in your account(s) and you authorize FastOne Global
                  Financial Markets Ltd to accept such orders/instructions and
                  act upon them. You hereby waive any defense that such order
                  was not in writing or evidenced by a memorandum in writing as
                  required by the Statue of Frauds or any other statute.
                  Although authorized, FastOne Global Financial Markets Ltd may
                  not accept oral or telephonic orders. FastOne Global Financial
                  Markets Ltd is further authorized to record, whether by tape,
                  wire, or other methods, with or without a periodic tone
                  signal, any and all telephonic or other oral communications,
                  save and keep records of all such communications between
                  FastOne Global Financial Markets Ltd and you and/or your
                  authorized agents, with or without notice thereof.
                </li>
                <li className="mt-3">
                  By putting your signature below, you agree that if any action
                  brought by you against FastOne Global Financial Markets Ltd,
                  its' employees, its' agents, associates, introducing brokers,
                  white label partners, associated companies, and group
                  companies or its clearing firm(s) with which it has
                  contractual and indemnification responsibilities, in which
                  FastOne Global Financial Markets Ltd or its clearing firm
                  prevails, to reimburse FastOne Global Financial Markets Ltd
                  for all legal fees and costs, including attorney's fees,
                  expended in conjunction with such matter, including
                  indemnification cost between FastOne Global Financial Markets
                  Ltd and its clearing firm(s). By putting your signature below,
                  you are hereby waiving to contest this provision.
                </li>
                <li className="mt-3">
                  This brief statement does not disclose all the risks
                  associated with trading in financial and commodity instruments
                  and products such as Spot Currency and other Spot Contracts,
                  CFDs, OTC Spot and Forward Contracts, Futures and Options
                  Contracts and Other Derivatives Instruments. Customers should
                  undertake trading in these instruments only if they fully
                  understand the nature of the contract and contractual
                  relationship into which they are entering and the extent of
                  their capital exposure risk. Trading in these instruments is
                  not suitable for everyone. Customers are advised to carefully
                  consider whether trading is appropriate for them in light of
                  their experience, objectives, financial resources and other
                  relevant circumstances.
                </li>
                <li className="mt-3">
                  You understand that FastOne Global Financial Markets Ltd has
                  the sole and absolute discretion and the right to limit
                  positions in your account(s), to decline to accept any order,
                  and your account(s) be transferred to another firm. You
                  understand that if you do not promptly transfer your positions
                  upon FastOne Global Financial Markets Ltd.'s demand, FastOne
                  Global Financial Markets Ltd reserves the right to liquidate
                  positions in your account(s) at its sole and absolute
                  discretion.
                </li>
                <li className="mt-3">
                  You understand that FastOne Global Financial Markets Ltd has
                  the sole and absolute discretion and the right to limit
                  positions in your account(s), to decline to accept any order,
                  and your account(s) be transferred to another firm. You
                  understand that if you do not promptly transfer your positions
                  upon FastOne Global Financial Markets Ltd.'s demand, FastOne
                  Global Financial Markets Ltd reserves the right to liquidate
                  positions in your account(s) at its sole and absolute
                  discretion.
                </li>
                <li className="mt-3">
                  You agree to maintain such margin with FastOne Global
                  Financial Markets Ltd as it may require in its sole and
                  absolute discretion with respect to your account(s) and
                  trades. Any accounts that fall into margin call must be
                  funded. In the event you fail to deposit sufficient funds or
                  fail to reduce any trading position, your account will be stop
                  out. FastOne Global Financial Markets will not be responsible
                  in this case.
                </li>
                <li className="mt-3">
                  You acknowledge that you shall be liable for all losses in
                  your account(s) whether or not your account(s) is liquidated
                  for any debts and deficiencies, including, but not limited to,
                  interest, penalties, costs, expenses, maintenance fees,
                  exchange rates, margin call fees, liquidation fees, and
                  attorney's fees, including all debts and deficiencies
                  resulting from a liquidation of your account(s).
                </li>
                <li className="mt-3">
                  Special Risk Disclosure Document for System Trader,
                  Hypothetical or simulated performances results have certain
                  inherent limitations. Unlike an actual performance record,
                  simulated results do not represent actual trading. Also, since
                  the trades have not been executed, the result may have under
                  or overcompensated for the impact, if any, of certain market
                  factors, such as lack of liquidity. Simulated trading programs
                  in general are also subject to the fact that they are designed
                  with the benefit of hindsight. No representation is being made
                  that any account will or is likely to achieve profits and
                  losses. There have been no promises, guarantees or warranties
                  suggesting that any trading will result in a profit or will
                  not result in a loss
                </li>
              </ol>
              <p>
                <h4 className="mt-5">CUSTOMER ACKNOWLEDGEMENT</h4>
                <p>
                  CUSTOMER(S) ACKNOWLEDGE(S) AND CONFIRM(S) THAT HE(THEY)
                  HAS(HAVE) FILLED UP ONLINE ACCOUNT ON www.fastoneglobalmarkets.com. BY
                  CHECKING THE BOX IN THE UPLOAD DOCUMENTS SECTION OF OPEN
                  ONLINE ACCOUNT ON www.fastoneglobalmarkets.com, CUSTOMER IS DIGITALLY
                  SIGNING ADDITIONAL RISK DISCLOSURE. BY DIGITALLY SIGNING
                  ADDITIONAL RISK DISCLOSURE CUSTOMER(S) HEREBY ACKNOWLEDGE(S)
                  THAT HE(THEY) HAS/HAVE RECEIVED, READ AND UNDERSTAND THE
                  ADDITIONAL RISK DICLOSURE STATEMENTS. I (WE), THE CUSTOMER
                  (CUSTOMERS) HAS(HAVE) READ AND UNDERSTAND ADDITIONAL RISK
                  DICLOSURE AND FULLY AGREE WITH THEM.
                </p>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AdditionalRiskDisclosure;
