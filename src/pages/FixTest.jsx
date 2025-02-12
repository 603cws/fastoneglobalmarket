import React, { useEffect, useState } from 'react';
import './FixTest.css'; // Import CSS for styling

const FixTest = () => {
  const [data, setData] = useState({});
  const symbols = ["USD/EUR", "USD/JPY", "GBP/USD", "USD/CHF", "AUD/USD", "USD/CAD", "NZD/USD", "USD/SGD", "USD/HKD", "USD/CNY"];

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8080');

    ws.onopen = () => console.log('WebSocket opened');
    ws.onerror = (error) => console.error('WebSocket error:', error);
    ws.onmessage = (event) => {
      const newData = JSON.parse(event.data);
      setData((prevData) => ({
        ...prevData,
        [newData.symbol]: newData.price,
      }));
    };

    return () => ws.close(); // Clean up WebSocket on component unmount
  }, []);

  return (
    <div className="container">
      <h1>Pricing Data</h1>
      <table className="data-table">
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {symbols.map((symbol) => (
            <tr key={symbol}>
              <td>{symbol}</td>
              <td>{data[symbol] || 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FixTest;
