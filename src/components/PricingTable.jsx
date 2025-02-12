import React from 'react';
import './PricingTable.css'; // Assuming you have a CSS file for styles
import { handleRedirect } from '../lib/redirectLocationHandler'; 

const PricingCard = ({ title, initialDeposit, leverage, charges, tradeSize, platform, marginCall, stopoutLevel, rebate }) => {
  const handleLinkClick = (event, isLogin) => {
    event.preventDefault(); 
    handleRedirect(isLogin);
  };
  
  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card pricing-card shadow-sm">
        <div className="card-header">
          <h2 className="card-price">{title}</h2>
        </div>
        <div className="card-body">
          <div className="pricing-feature">
            <h6>Initial Deposit</h6>
            <p>{initialDeposit}</p>
          </div>
          <div className="pricing-feature">
            <h6>Leverage</h6>
            <p>{leverage}</p>
          </div>
          <div className="pricing-feature">
            <h6>Charges</h6>
            <ul>
              {charges.map((charge, index) => (
                <li key={index}>{charge}</li>
              ))}
            </ul>
          </div>
          <div className="pricing-feature">
            <h6>Minimum Trade Size</h6>
            <p>{tradeSize}</p>
          </div>
          <div className="pricing-feature">
            <h6>Platform</h6>
            <p>{platform}</p>
          </div>
          <div className="pricing-feature">
            <h6>Margin Call / Stopout Level</h6>
            <p>{marginCall} / {stopoutLevel}</p>
          </div>
          {rebate && (
            <div className="pricing-feature">
              <h6>Rebate</h6>
              <p>
                {title === 'Gold' ? <strong>{rebate}</strong> : rebate}
              </p>
            </div>
          )}
        </div>
        <div className="card-footer">
          <a href="#" onClick={(e) => handleLinkClick(e, false)} className="btn account-btn">
            Open {title} Account
          </a>
        </div>
      </div>
    </div>
  );
};

const PricingTable = () => {
  const pricingPlans = [
    {
      title: 'Standard',
      initialDeposit: '$100',
      leverage: 'Upto 1:500',
      charges: ['All inclusive spread', 'Currency spread from 1.2', 'Gold spread from 25 cents'],
      tradeSize: '0.01 Lot',
      platform: 'MT4/MT5',
      marginCall: '100%',
      stopoutLevel: '30%',
    },
    {
      title: 'Gold',
      initialDeposit: '$1000',
      leverage: 'Upto 1:500',
      charges: ['Raw + $3.5 per side', 'Currency spread from 0', 'Gold spread from 10 cents'],
      tradeSize: '0.01 Lot',
      platform: 'MT4/MT5',
      marginCall: '100%',
      stopoutLevel: '30%',
    },
  ];

  return (
    <section className="pricing-table">
      <div className="container my-2">
        <div className="row justify-content-center">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingTable;
