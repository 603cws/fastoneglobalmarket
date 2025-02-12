import React from "react";
import "./WhyTrade.css";
import Cta2Btn from "./Cta2Btn";
const WhyTrade = ({ title, benefits }) => {
  return (
    <section className="why-trade text-center">
      <div className="container">
        <h2 className="wt-top-title">{title}</h2>
        <ul className="why-trade-grid">
          {benefits.map((benefit, index) => (
            <li key={index} className="card">
              <p>{benefit}</p>
            </li>
          ))}
        </ul>
        
        <Cta2Btn
          title="Start trading now or open a demo account to explore our platforms."
          description=""
          button1="Open Live Account"
          button2="Open Demo Account"
          buttonLinks={["#", "#"]}
        />
      </div>
    </section>
  );
};

export default WhyTrade;
