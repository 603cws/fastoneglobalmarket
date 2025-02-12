import React, { useState } from 'react';
import './Faq.css';

const Faq = ({ questions }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq row">
      {questions.map((item, index) => (
        <div key={index} className="faq-item col-md-12 mb-4">
          <div
            className={`faq-question d-flex justify-content-between  p-3 ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleQuestion(index)}
          >
            <span>{item.question}</span>
            <span>{activeIndex === index ? '-' : '+'}</span>
          </div>
          {activeIndex === index && (
            <div className="faq-answer p-3">
              <div dangerouslySetInnerHTML={{ __html: item.answer }} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;
