import Header from "../components/Header";
import TitleArea from "../components/TitleArea";
import Faq from "../components/Faq";

const faqData = [
  {
    question: "Who can I contact for enquiries on trading?",
    answer:
      "Existing customers may reach us through our website secured login Chat, they may choose to call us on +230 6983426 or drop us an email on support@fastoneglobalmarkets.com.<br/><br/>Guests/Prospects may reach us through our website Chat, they may choose to call us on +230 6983426 or drop us an email on support@fastoneglobalmarkets.com",
  },
  {
    question: "What kind of basic trading approaches are there?",
    answer:
      "There are basically two trading approaches, short term trading and long term trading. Short term trading includes taking a position for 1 day, 1 hour, or a few minutes, while long term trading can stretch from several days to several weeks.",
  },
  {
    question:
      "Where can I find more information on the First Notice and Last Trading Day for a particular contract?",
    answer:
      "There is no first notice day applicable in CFDs. Last trading days vary depending on contracts and months traded.",
  },
  {
    question:
      "After receiving a margin call, do I still need to top up my funds if market movement goes in my favor?",
    answer:
      "If you are on a margin call (Net Liquidation Value below the maintenance margin), you have 24 hours to remit funds. If the market moves in your favor and your NLV rises above the maintenance margin, the square-off mode is lifted. However, your position may be squared off if your NLV drops to 30% of the initial margin within 24 hours.",
  },
  {
    question: "What are the main risks involved with trading spot and CFDs?",
    answer:
      "Leveraged commodities and CFDs carry a certain degree of risk. Small market movements can have a larger impact due to leverage. Market conditions such as high volatility or low liquidity may also affect the effectiveness of stop loss or stop limit orders.",
  },
  {
    question:
      "Are my funds safe with FastOne Global Financial Markets Limited?",
    answer:
      "Yes, your funds are safe. All customer funds are segregated from the company's account and maintained in a Segregated Client Account.",
  },
  {
    question:
      "What are the operating hours of FastOne Global Financial Markets Limited?",
    answer:
      "The office operates 24 hours from Monday to Friday. Clients can reach support 24x7 during these days via online chat, phone, or email.",
  },
  {
    question: "How do I open an account?",
    answer:
      "To open an account, click on the Live account or Demo account tab on the homepage. Fill in your details, provide proof of ID and address, and once verified, you can deposit funds and start trading.",
  },
  {
    question:
      "What are the main risks involved in trading CFDs with FastOne Global Financial Markets Limited?",
    answer:
      "Leveraged commodities and CFDs carry risks due to high leverage, volatility, and liquidity. Market conditions can make it difficult to execute certain orders like stop-loss or limit orders.",
  },
  {
    question: "What are the main risks involved in trading CFDs?",
    answer:
      "High leverage, volatility, global socio-political and economic developments, 24-hour markets, and liquidation risk are key risks.",
  },
];

const faqData2 = [
  {
    question: "What is the trading limit?",
    answer:
      "The trading limit depends on the amount of capital deposited and Initial Margin applicable. For example, if your account has a credit balance of USD 9900 and the Initial Margin requirement for a particular contract is USD 1000, you would be able to trade 9 lots of the contract. You will not be able to trade the 10th lot because there is a shortage of USD 100.",
  },
  {
    question: "How long does it take to process the account opening?",
    answer:
      "The normal processing time is 1 business day, upon the receipt of all necessary documents and a duly filled Application (Account Opening) Form.",
  },
  {
    question:
      "What are the additional requirements for non face-to-face account opening and verification?",
    answer:
      "The requirements are the same as for face-to-face account opening.",
  },
  {
    question: "Why do you require my bank account or bank statement?",
    answer:
      "We require your bank account or bank statement to avoid third-party transactions and for deposit, transfer, and withdrawal of funds.",
  },
  {
    question: "What are the account opening requirements?",
    answer:
      "You need to be above 18 years of age (for individual or joint accounts). Required documents include:<br/><br/>- Proof of Identity (Passport, Driving License, National ID, or other IDs issued by a Government Agency)<br/>- Proof of Address (Utility/Telephone Bill, Credit Card/Bank Statement, Tenancy Contract)<br/>- Bank Account Proof (Passbook, Bank Statement, Cancelled Cheque Leaf, Bank Reference)<br/><br/>All documents should be less than 3 months old. Identity and address proof should be certified by an employee of FastOne, a lawyer, notary, actuary, chartered accountant, or senior civil servant.",
  },
  {
    question: "What are the required documents for a corporate account?",
    answer:
      "Required documents include:<br/><br/>- Certificate of incorporation or registration<br/>- Valid Trade license<br/>- Memorandum & Article of Association/Partnership Deed/Trust Deed<br/>- Copy of Register of Directors, Shareholders, and Company Secretary/Partners/Trustees/Members<br/>- Declaration that beneficial owners have gone through KYC<br/>- Registered and correspondence address proof (certified)<br/>- Board Resolution<br/>- List of Authorized Signatories and Authorized Traders<br/>- Photo/Identity Proof of Shareholders, Directors, Signatories, and Authorized Traders<br/>- Bank Statement (less than three months old)<br/>- Shareholding pattern<br/>- Latest Balance sheet or audited financials (except for newly incorporated entities).",
  },
];

const faqData3 = [
  {
    question: "Where can I view my daily account statement?",
    answer:
      "Clients can login to their trading system (MT4) and view their trades and statements online. Customers may reach us through our website secured login Chat, they may choose to call us on + 230 6983426 or drop us an email on support@fastoneglobalmarkets.com.",
  },
];

const faqData4 = [
  {
    question:
      "How long does FastOne Global Financial Markets Limited take to process withdrawals?",
    answer:
      "Withdrawals take a minimum of 3 - 5 business days to process. Business days for processing are Monday through Friday, except during bank holidays or days when the bank is closed. We accept withdrawal requests from 6.00 am to 11.00 am (GMT). Any withdrawal request received after this time will count towards the next working day.",
  },
  {
    question: "Can I use other currencies to top-up my account?",
    answer:
      "You can use the following currencies for funds transfer: USD, GBP, EUR, and AED. A conversion rate will be applicable.",
  },
  {
    question:
      "How do I top-up my FastOne Global Financial Markets Limited Account?",
    answer:
      "We accept funds in USD, EUR, and GBP. You may top-up your account via one of the following means:<br/><br/>- **Remittance**: Client can remit funds online to FastOne Bank Account and send us the remittance slip via email to support@fastoneglobalmarkets.com, or log in to our website and upload the remittance details.<br/>- **Telegraphic Transfer (TT)**: Transfer the funds via TT to FastOne Global Financial Markets Limited and send the TT slip using the methods mentioned above.",
  },
  {
    question: "How do I make a withdrawal?",
    answer:
      "You may request a withdrawal by sending an email to support@fastoneglobalmarkets.com addressed to our accounts department. You can also log in to our website to request a withdrawal.",
  },
];

const faqData5 = [
  {
    question:
      "How can I update my particulars (e.g. contact number, employment details, etc)?",
    answer:
      "You may contact our compliance department via email support@fastoneglobalmarkets.com. You may also login to our website and update your particulars.",
  },
];

const faqData6 = [
  {
    question: "How do we calculate profit and loss?",
    answer:
      "As in all trading activities, buying low and selling high earns you profits. Short selling is also an alternative when you have a bearish view of the market. The basic formula (excluding commission) for calculating profits and loss is as follows: Profit / Loss = (Selling Price - Buying price) X contract size.",
  },
  {
    question: "What is long and short position?",
    answer:
      "Buying a contract is called taking a long position. Selling a contract is referred to as taking a short position. A long position profits when the price of the position goes up, and a short position profits when the price goes down.",
  },
  {
    question:
      "What are futures trading and how different is it from share margin financing?",
    answer:
      "FastOne Global Financial Markets Limited does not offer futures trading and share financing.",
  },
  {
    question: "Can I appoint someone to trade on my behalf?",
    answer:
      "Yes, you may wish to appoint a discretionary trader through Trade Authorisation / Power of Attorney (POA) Form. Both you and the appointed party are required to sign the form. In case you wish to revoke the mandate, you can send a letter of mandate revocation.",
  },
  {
    question: "What can the Currency CFDs do for you?",
    answer:
      "The currency market is the world's largest, most liquid financial market. Financial institutions, investment managers, corporations, and individual investors trade currency CFDs to manage risks and capture potential opportunities associated with currency rate fluctuations.",
  },
  {
    question: "What is a Currency Futures contract?",
    answer:
      "FastOne Global Financial Markets Limited does not facilitate trading in Currency Futures but offers CFDs. A currency CFD contract is based on the underlying currency against the USD or some other currency and is traded nearly 24 hours a day.",
  },
  {
    question: "What should I do to place my orders?",
    answer:
      "You may trade electronically via one of our online trading platforms or call our 24-hour Dealing desks. You may also place an order through secured login Dealing Desk Chat.",
  },
  {
    question: "How can trading in CFDs benefit me?",
    answer:
      "By trading CFDs, you can easily participate in various equity markets without trading individual cash stocks. You may buy or sell first to initiate a position, depending on market conditions and whether your view is bullish or bearish.",
  },
  {
    question: "What can the CFDs do for you?",
    answer:
      "CFDs offer flexibility in risk management due to their liquidity, low transaction costs, small bid-ask spreads, and ease of adjusting positions. With Stock Index CFDs, you can manage exposure to stock market fluctuations effectively.",
  },
  {
    question: "What is a Stock Index Futures contract?",
    answer:
      "FastOne Global Financial Markets Limited does not facilitate trading in Stock Index Futures. CFDs are settled in cash because physically delivering the underlying index at expiration is impractical.",
  },
  {
    question: "What is a future contract?",
    answer:
      "FastOne Global Financial Markets Limited does not offer futures contracts. Futures contracts are highly standardized, exchange-traded contracts where time, place, quality, quantity, expiration, settlement, and delivery are predefined.",
  },
  {
    question: "What is a forward contract?",
    answer:
      "A forward contract is a non-standardized or customized derivative contract between two parties to buy or sell an asset at a future time for a price agreed upon today. Forward contracts are flexible, though some standardization may apply in certain cases.",
  },
  {
    question: "How do I place orders?",
    answer:
      "All orders can be placed online through E-trading platforms, secured chat, or by phone.",
  },
  {
    question: "What is a derivative contract?",
    answer:
      "Derivatives are financial contracts that derive their value from underlying assets such as forwards, futures, options, swaps, caps, floors, and credit default swaps (CDS).",
  },
  {
    question: "What is Currency or FX or Forex or Foreign Exchange?",
    answer:
      "Currency, or Foreign Exchange (FX/Forex), is the relative valuation of one currency against another, like GBP/USD or EUR/USD. It plays a critical role in cross-border trade, serving as the medium of exchange for goods and services.",
  },
  {
    question: "What is Futures trading?",
    answer:
      "FastOne Global Financial Markets Limited does not offer futures trading but facilitates CFD trading. A CFD is a forward contract allowing two parties to trade a particular quantity of an underlying asset at a predetermined price on a future date.",
  },
];
const faqData7 = [
  {
    question: "What are commodities?",
    answer:
      "The most popular physical commodities contracts can be broken down into several broad categories: Metals (Precious: Gold, Silver, Platinum, Palladium; and Industrial Copper, Aluminum, Zinc, Tin and Lead), Energy (Brent Crude oil, West Texas Crude oil and Natural Gas), Agro (Grains: Wheat, Corn, Rice; Oil & Oil Seeds: Soy, Crude Palm, Cotton, Sunflower, Mustard/Rape Seed; Plantation: Rubber, Live Stock, Orange Juice etc.). Commodities are not paper assets, and in general, are produced and consumed at a price based on the forces of supply and demand.",
  },
  {
    question: "When do I incur or earn interest?",
    answer:
      "You earn interest if you are short Gold (long USD) while you incur interest if you are long Gold (short USD). The scenarios above depend on the current Spot Gold interest rates.",
  },
  {
    question: "How is the interest on Gold/Silver contracts calculated?",
    answer:
      "Interest is calculated based on the prevailing interest rate of Spot Gold/Silver in the market and the daily settlement price of your Spot Gold/Silver overnight position.",
  },
  {
    question:
      "What are the Gold/Silver contracts offered by FastOne Global Financial Markets Limited?",
    answer:
      "We offer Spot Gold and Spot Silver including forward CFDs. For details please click here.",
  },
  {
    question: "How is the physical commodity delivery made on the Exchanges?",
    answer:
      "FastOne Global Financial Markets Limited products are cash settled, we do not facilitate delivery.",
  },
  {
    question:
      "What are the commodity products offered by FastOne Global Financial Markets Limited?",
    answer:
      "FastOne Global Financial Markets Limited offers commodity products in three main categories:<br/>" +
      "1. Energy Futures contracts: Brent Crude Oil and Natural Gas.<br/>" +
      "2. Metal Futures contracts: Gold, Silver, and Copper.<br/>" +
      "3. Agricultural Futures contracts: Corn, Cocoa, Coffee, Cotton, Soybeans, Soybean Oil, Soybean Meal, Sugar, Orange Juice, and Wheat.",
  },
  {
    question: "How are commodities traded?",
    answer:
      "Commodity trading involves undertaking an agreement to buy or sell a specified amount of a commodity at a fixed price and date. By doing this, sellers can lock in a price for their products while buyers can avoid the risks of price fluctuations.<br/>" +
      "In all futures markets, trading decisions are made in two ways: fundamental or technical analysis.<br/><br/>" +
      "Fundamental analysis includes all factors that influence supply and demand, such as weather and geopolitical events in producing countries.<br/>" +
      "Technical analysis is based on past price patterns in the markets, focusing on tendencies that are likely to repeat.",
  },
  {
    question: "What is a commodity future?",
    answer:
      "We do not offer commodity futures trading but we do offer commodity CFDs. A commodity CFD contract represents an agreement to buy or sell a specific type and grade of commodity at a specific time in the future at a specified price. These contracts are typically settled in cash, without actual delivery of the commodity.",
  },
];

const faqData8 = [
  {
    question: "What is the rollover of position?",
    answer:
      "Most spot currency trades are valued 2 business days later, except for USD/CAD, which is valued 1 business day later. For instance, if you bought GBP 100,000 against the USD at 2.0300, you will need to deliver USD 203,000 2 business days later. In leveraged trading, there is no delivery on the value dates. All outstanding positions that have crossed the current trade date would be rolled over to the next spot value date. This process continues daily until the positions are closed.",
  },
  {
    question: "What is a Currency margin account?",
    answer:
      "A Currency margin account with FastOne Global Financial Markets Limited allows you to trade spot and CFD/Currency on a margin basis. Due to leveraging, you may trade both spot and CFD/Currency with contract values much larger than your capital outlay. The margin required in Currency is to cover the price risk of the portfolio for a specified period.",
  },
  {
    question: "What is a margin deposit?",
    answer:
      "A margin deposit allows participation in trading by having a deposit that is only a small portion of the value of the contract in your account.",
  },
  {
    question: "What does mark-to-market mean?",
    answer:
      "Mark to market is a measure of the fair value of open trades that can change over time. This process is crucial in dynamic markets like currency and CFDs, where prices change rapidly. It aims to provide the current value of trades and measures the risk associated with outstanding positions. Additionally, clients need to deposit money equivalent to the Initial Margin requirement to initiate a position, and the Net Liquidation Value should not fall below the maintenance margin. If it does, clients should bring the margin back to the initial margin level.",
  },
  {
    question: "What happens when there is a margin call?",
    answer:
      "In the event of a margin call, you can either liquidate or reduce your positions or bring in additional funds to increase your equity to the initial margin level. Most traders place their deposit sufficiently higher than the required margin to provide a buffer against abnormal market movements and to prevent frequent margin calls.",
  },
  {
    question: "Can my margin deposit be in any other currencies?",
    answer:
      "We accept funds in USD, EUR, and GBP. If you wish to top up or deposit your account with currencies other than USD, prevailing conversion rates will apply.",
  },
  {
    question: "How will currency conversion be done?",
    answer:
      "Currency conversion will be conducted at the prevailing rate of exchange as quoted by the banks.",
  },
  {
    question: "What is Currency trading?",
    answer:
      "Currency trading refers to the exchange of one currency against another with the aim of profiting from fluctuations in the exchange rate. It is primarily carried out by buying or selling to initiate a trade.",
  },
  {
    question: "How do I calculate Profit & Loss? - An Example",
    answer: `Profit is made by buying low and selling high. If you are bearish, short selling is also possible in the Currency market. The formula is as follows (excluding commission and daily swap adjustments):
      <br/><br/>
      Profit (Loss) = (Selling Price - Buying Price) x Contract Size.
      <br/><br/>
      **Example 1:**<br/>
      Bought 3 contracts of USD/JPY at 116.00 (I.e., bought USD 300,000 against JPY at the price of JPY 116.00 per USD).<br/>
      Sold 3 contracts of USD/JPY at 117.00 (I.e., sold USD 300,000 against JPY at the price of JPY 117.00 per USD).<br/>
      Profit (Loss) = (117.00 - 116.00) x 300,000 = JPY 300,000.<br/>
      Therefore, a profit of JPY 300,000 is made.
      <br/><br/>
      **Example 2:**<br/>
      Sold 5 contracts of GBP/USD at 2.0300 (I.e., sold GBP 500,000 against USD at the price of USD 2.0300 per GBP).<br/>
      Bought 5 contracts of GBP/USD at 2.0250 (I.e., bought GBP 500,000 against USD at the price of USD 2.0250 per GBP).<br/>
      Profit (Loss) = (2.0300 - 2.0250) x 500,000 = USD 2,500.`,
  },
  {
    question: "What is swap?",
    answer:
      "In Forex trading, swap refers to the interest differential between two currencies.",
  },
  {
    question: "How are swap point adjustments carried out?",
    answer: `Different currencies carry different interest yields. When holding a position, you buy (long) one currency and sell (short) another currency simultaneously. If you carry your position overnight, you will receive interest on the currency you bought (long) and pay interest on the currency you sold (short). The daily swap point adjustment reflects the interest differential of the two currencies you hold.
      <br/><br/>
      **Example:**<br/>
      You bought (long) NZD 100,000 and sold (short) JPY 100,000 at an exchange rate of 89.00. Assuming the NZD interest rate is 8% and the JPY interest rate is 0.5%, you would receive 8% for your NZD and pay 0.5% for your JPY. This results in a net interest (swap point) gain if you carry your position into the next day.
      <br/><br/>
      The net interest swap point gain is calculated as:
      <br/>
      Spot rate x (NZD interest rate receivable - JPY interest rate payable) / 360<br/>
      Contracted exchange rate = 89.00<br/>
      NZD interest rate receivable = 8%<br/>
      JPY interest rate payable = 0.5%<br/>
      <br/>
      The net interest swap point gain is: 89.00 x (8% - 0.5%) / 360 = 0.018542.<br/>
      Net interest receivable (payable) is calculated by: Swap point x Contract size.<br/>
      Thus, you would receive: 0.018542 x 100,000 = JPY 1,854.2 for carrying the long NZD/JPY position into the next day. This is also known as positive carry.`,
  },
];

const faqData9 = [
  {
    question: "How do I know my Net Position?",
    answer:
      "You may log in to your trading system (MT4, VertexFX) to view your net outstanding position. Alternatively, existing customers may reach us through our website secured login Chat, call us on +230 6983426, or drop us an email at support@fastoneglobalmarkets.com.",
  },
  {
    question: "Will I receive confirmation for my trades executed?",
    answer:
      "Yes, you will receive your daily, monthly, and quarterly statements via email or hardcopy. The daily statements reflect the previous day's trades, open positions, and your account balances marked to the previous market close. Your trading activities and commissions are summarized in the monthly and quarterly statements. No daily statements will be sent to dormant accounts.",
  },
  {
    question: "How can I confirm that the orders I placed are done?",
    answer:
      "Existing customers may reach us through our website secured login Chat, or call us on +230 6983426 (dealing desk) to confirm that your orders have been placed.",
  },
  {
    question: "How do I place a trade via phone call?",
    answer:
      "Existing customers may call us on +230 6983426 to place orders over the phone.",
  },
];
const faqData10 = [
  {
    question:
      "Who do I contact for details of FastOne Global Financial Markets Limited margin call policy?",
    answer:
      "For details of FastOne Global Financial Markets Limited margin call policy, you may contact us by one of the following ways:<br/><br/>Telephone: (230) 698 3426<br/>Email: support@fastoneglobalmarkets.com",
  },
  {
    question: "If I have an outstanding margin call, can I still trade?",
    answer:
      "Yes, you can trade to reduce position/liquidate; however, you are not allowed to add a new position.",
  },
  {
    question: "What will happen if I do nothing to my margin call?",
    answer:
      "When on a margin call, clients have 24 hours to remit funds. However, if the Net Liquidation Value hits 30% of the initial margin, FastOne Global Financial Markets Limited reserves the right to square-off/liquidate the trades, and therefore the 24 hours waiting period would not be applicable. Please refer to our trading guide.",
  },
  {
    question: "By when do I need to top-up for my margin call?",
    answer:
      "Under normal market conditions, you may have 24 hours to top-up your account when on Margin Call. However, if the Net Liquidation Value hits 30% of the initial margin, FastOne Global Financial Markets Limited reserves the right to square-off/liquidate the trades, and therefore the 24 hours waiting period would not be applicable. Please refer to our trading guide.",
  },
  {
    question:
      "When will I have a margin call and how much do I need to top up into my account?",
    answer:
      "A Margin Call will be initiated when the total net equity (cash + unrealized Profit and Loss) falls below the maintenance margin. Your open positions are marked-to-market in a live market scenario. At most times, the Initial Margin (IM) is sufficient to buffer some losses. However, when your losses deplete your equity below the Maintenance Margin (MM) requirement, you will then receive a margin call, which requires you to top up your equity to the Initial Margin level. Please refer to the link for our trading guide and also for margin requirements.",
  },
  {
    question: "What are margins?",
    answer:
      "Margins are likened to a performance bond - a good faith deposit - to ensure the ability of market participants to honor their financial commitments and cover any obligations which may arise out of the trading activities.",
  },
];
const faqData11 = [
  {
    question:
      "How can I verify if the execution price the Dealer placed for me is correct or wrong?",
    answer:
      "You may write us an email at <a href='mailto:dealing@vibhsfinancials.mu'>dealing@vibhsfinancials.mu</a>.",
  },
  {
    question:
      "How can I verify if the trades shown in my account are done by me?",
    answer:
      "For Online Trades, you can check the trade log to verify the trades and the User ID through which the trade was executed. All trades executed through your login are binding upon you, as the password is your responsibility.<br/><br/>For trades executed over the phone, we have a call recording facility. You can verify any trades through call recordings. Any trade-related doubts or verification must be done within 48 hours of the trade. You may also write us an email at <a href='mailto:dealing@vibhsfinancials.mu'>dealing@vibhsfinancials.mu</a>.",
  },
];
const faqData12 = [
  {
    question: "What are the different types of orders?",
    answer:
      "Listed below are the different types of orders:<br/><br/>" +
      "<strong>Day Orders:</strong> Day orders are valid until that day's New York market close or London market close if it is a New York holiday.<br/><br/>" +
      "<strong>Good Till Cancel (GTC) Orders:</strong> GTC orders are orders that are valid until the orders are filled or until they are cancelled by you.<br/><br/>" +
      "<strong>Market Orders:</strong> Market orders are to be transacted at the prevailing price in the market. To do a Forex market order, you have to call our dealer to give you a FIRM or DEALING quote. Prices are quoted in the sequence of Bid vs. Offer. A firm quote will hold only for a short while. Once a firm quote is quoted, you have to decide to buy (at the offer price), sell (at the bid price), or do nothing before the dealer invalidates the quote. For Futures orders, please note that you may be put on the line while the dealers get your transacted price.<br/><br/>" +
      "<strong>Limit Orders:</strong> Limit orders are price-specific orders that are placed away from the current market price. They give you more control over the execution price. The price of a limit-buy order is lower than the current market price and may be filled at the limit price or higher.<br/><br/>" +
      "<strong>Stop Orders:</strong> Stop orders are orders that become market orders when the market reaches a designated price. The price of a buy stop order is lower than the current market price and may be filled at the specified stop price or higher. The price of a sell stop order is higher than the current market price and may be filled at the specified stop price or lower.<br/><br/>" +
      "<strong>One Cancel the Other (OCO) Order:</strong> An OCO order is an order that allows you to place a Limit Order and a Stop Order at the same time. When one order is executed, the other order is automatically cancelled. For example, if the limit order is filled, the stop order is automatically cancelled, and vice-versa.",
  },
];

function Faqs() {
  const breadcrumbPaths = [
    { name: "Home", href: "/" },
    { name: "FAQs", href: "" },
  ];

  return (
    <>
      <Header mode={"light"} />
      <TitleArea
        title="FAQs"
        description=""
        breadcrumbPaths={breadcrumbPaths}
      />
      <section className="text-center">
        <div className="container">
          <div className="row mt-5">
            <div className="col-md-10 offset-md-1">
              <Faq questions={faqData} />
            </div>
          </div>
          <h2>Account Opening</h2>
          <div className="row mt-5">
            <div className="col-md-10 offset-md-1">
              <Faq questions={faqData2} />
            </div>
          </div>
          <h2>Account Statement</h2>
          <div className="row mt-5">
            <div className="col-md-10 offset-md-1">
              <Faq questions={faqData3} />
            </div>
          </div>
          <h2>Topup and Withdrawal</h2>
          <div className="row mt-5">
            <div className="col-md-10 offset-md-1">
              <Faq questions={faqData4} />
            </div>
          </div>
          <h2>Update of personal particulars</h2>
          <div className="row mt-5">
            <div className="col-md-10 offset-md-1">
              <Faq questions={faqData5} />
            </div>
          </div>
          <h2>General</h2>
          <div className="row mt-5">
            <div className="col-md-10 offset-md-1">
              <Faq questions={faqData6} />
            </div>
          </div>
          <h2>Commodities</h2>
          <div className="row mt-5">
            <div className="col-md-10 offset-md-1">
              <Faq questions={faqData7} />
            </div>
          </div>
          <h2>Currency</h2>
          <div className="row mt-5">
            <div className="col-md-10 offset-md-1">
              <Faq questions={faqData8} />
            </div>
          </div>
          <h2>Call In</h2>
          <div className="row mt-5">
            <div className="col-md-10 offset-md-1">
              <Faq questions={faqData9} />
            </div>
          </div>
          <h2>Margin call</h2>
          <div className="row mt-5">
            <div className="col-md-10 offset-md-1">
              <Faq questions={faqData10} />
            </div>
          </div>
          <h2>Error Trades</h2>
          <div className="row mt-5">
            <div className="col-md-10 offset-md-1">
              <Faq questions={faqData11} />
            </div>
          </div>
          <h2>Type of orders</h2>
          <div className="row mt-5">
            <div className="col-md-10 offset-md-1">
              <Faq questions={faqData12} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Faqs;
