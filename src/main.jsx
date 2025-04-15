import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import Root from "./layouts/Root.jsx";
import RootNoTicker from "./layouts/RootNoTicker.jsx"; // Import RootNoTicker
import Home from "./pages/Home.jsx";
import PricingModel from "./pages/PricingModel.jsx";
import ErrorPage from "./error-page.jsx";
import AccountComparison from "./pages/AccountComparison.jsx";
import Currencies from "./pages/Currencies.jsx";
import Metals from "./pages/Metals.jsx";
import Energy from "./pages/Energy.jsx";
import Indices from "./pages/Indices.jsx";
import CFD from "./pages/CFD.jsx";
import AboutFastone from "./pages/AboutFastone.jsx";
import Regulations from "./pages/Regulations.jsx";
import KycAml from "./pages/KycAml.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import WhyChooseUS from "./pages/WhyChooseUS.jsx";
import IntroducingBroker from "./pages/IntroducingBroker.jsx";
import Affiliate from "./pages/Affiliate.jsx";
import Influencer from "./pages/Influencer.jsx";
import DesktopMetaTrader4 from "./pages/DesktopMetaTrader4.jsx";
import DesktopMetaTrader5 from "./pages/DesktopMetaTrader5.jsx";
import MobileMetaTrader4 from "./pages/MobileMetaTrader4.jsx";
import MobileMetaTrader5 from "./pages/MobileMetaTrader5.jsx";
import WebMetaTrader4 from "./pages/WebMetaTrader4.jsx";
import UpdateNewsButton from "./components/UpdateNewsButton.jsx";
import MarketUpdates from "./pages/MarketUpdates.jsx";
import FixTest from "./pages/FixTest.jsx";
import Complaints from "./pages/Complaints.jsx";
import Legal from "./pages/Legal.jsx";
import DataProtection from "./pages/DataProtection.jsx";
import Faqs from "./pages/Faqs.jsx";
import DepositsWithdrawls from "./pages/DepositsWithdrawls.jsx";
import RiskWarning from "./pages/RiskWarning.jsx";
import SecurityAndPrivacyPolicy from "./pages/SecurityAndPrivacyPolicy.jsx";
import AdditionalRiskDisclosure from "./pages/AdditionalRiskDisclosure.jsx";
import RegulatoryDisclaimers from "./pages/RegulatoryDisclaimers.jsx";
import LegalTerms from "./pages/LegalTerms.jsx";
import AppComingSoon from "./pages/AppComingSoon.jsx";
import Landing from "./components/Landing.jsx";
import MetaTrader4 from "./pages/MetaTrader4.jsx";
import MetaTrader5 from "./pages/MetaTrader5.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        // element: <Home />,
        element: <Landing />,
      },
      {
        path: "pricing-model",
        element: <PricingModel />,
      },
      {
        path: "account-comparison",
        element: <AccountComparison />,
      },
      {
        path: "metals",
        element: <Metals />,
      },
      {
        path: "energy",
        element: <Energy />,
      },
      {
        path: "indices",
        element: <Indices />,
      },
      {
        path: "cfd",
        element: <CFD />,
      },
      {
        path: "about",
        element: <AboutFastone />,
      },
      {
        path: "why-choose-us",
        element: <WhyChooseUS />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
      {
        path: "regulation",
        element: <Regulations />,
      },
      {
        path: "kyc-aml",
        element: <KycAml />,
      },
      {
        path: "legal",
        element: <Legal />,
      },
      {
        path: "legal/risk-warning",
        element: <RiskWarning />,
      },
      {
        path: "legal/security-statement-and-privacy-policy",
        element: <SecurityAndPrivacyPolicy />,
      },
      {
        path: "legal/additional-risk-disclosure",
        element: <AdditionalRiskDisclosure />,
      },
      {
        path: "legal/regulatory-disclaimers",
        element: <RegulatoryDisclaimers />,
      },
      {
        path: "legal/terms-and-conditions",
        element: <LegalTerms />,
      },

      {
        path: "data-protection",
        element: <DataProtection />,
      },
      {
        path: "complaints",
        element: <Complaints />,
      },
      {
        path: "introducing-broker",
        element: <IntroducingBroker />,
      },
      {
        path: "affiliate",
        element: <Affiliate />,
      },
      {
        path: "influencer",
        element: <Influencer />,
      },
      {
        path: "desktop/metatrader4",
        element: <DesktopMetaTrader4 />,
      },
      {
        path: "metatrader4",
        element: <MetaTrader4 />,
      },
      { path: "metatrader5", element: <MetaTrader5 /> },
      {
        path: "desktop/metatrader5",
        element: <DesktopMetaTrader5 />,
      },
      {
        path: "mobile/metatrader4",
        element: <MobileMetaTrader4 />,
      },
      {
        path: "mobile/metatrader5",
        element: <MobileMetaTrader5 />,
      },
      {
        path: "web/metatrader4",
        element: <WebMetaTrader4 />,
      },
      {
        path: "web/metatrader5",
        element: <WebMetaTrader4 />,
      },
      {
        path: "market-updates",
        element: <MarketUpdates />,
      },
      {
        path: "update-news-manually",
        element: <UpdateNewsButton />,
      },
      {
        path: "faqs",
        element: <Faqs />,
      },
      {
        path: "deposits-and-withdrawls",
        element: <DepositsWithdrawls />,
      },
      {
        path: "app-coming-soon",
        element: <AppComingSoon />,
      },
    ],
  },
  {
    path: "/landing",
    element: <Landing />,
  },
  // {
  //   path: "/",
  //   element: <Landing />,
  // },
  {
    path: "/currencies",
    element: <RootNoTicker />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Currencies />,
      },
      {
        path: "fix-test",
        element: <FixTest />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
