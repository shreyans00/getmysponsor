// FAQ.js
import React, { useState } from "react";
import "../CSS/faq.css";
import faqData from "../json/faq.json";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    if (openIndex === index) {
      // If the clicked question is already open, close it.
      setOpenIndex(null);
    } else {
      // Otherwise, open the clicked question.
      setOpenIndex(index);
    }
  };

  return (
    <div className="faq-section">
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <ul className="faq-list">
          {faqData.map((item, index) => (
            <li
              onClick={() => toggleAnswer(index)}
              key={index}
              className={`faq-item ${openIndex === index ? "open" : ""}`}
            >
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FAQ;
