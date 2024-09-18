import React, { useState } from 'react';
import './FaqComponent.css';

const FaqComponent = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: ' In what way does a consultation service, like one provided by Sloane Virtual Hospital, eliminate geographical barriers for the patients? ',
      answer: 'Our online consultation facility connects the patient to the doctors from any corner of the country on secure video calls that remove all forms of traveling and make healthcare accessible even in remote areas. ',
    },
    {
      question: 'How do virtual consultations improve patients waiting times?',
      answer: ' You can, at your convenience, schedule a virtual consultation without having to wait in queues, which is usually the case in clinics and hospitals. In other words, you get to consult a doctor without much ado by bypassing the waiting rooms. ',
    },
    {
      question: 'What are the benefits of costs to patients on the Sloane Virtual Hospital platform? ',
      answer:  'Our platform offers inexpensive consultation fees, avoids travel costs, and reduces the cost of hospital admissions. We also make available a good deal of health packages at very reasonable prices, including insurance cover, to ensure that quality care is within reach for every class of people',
    },
    {
      question: 'What are the possibilities in a virtual consultation service for urgent conditions of the patients? ',
      answer: 'In emergencies, for example, our online portal connects patients with the doctors immediately through video calls, allowing them to obtain preliminary medical advice and treatment without wasting even a single moment. ',
    },
    {
      question: 'How does the hospital ensure consistent monitoring of patients health through its virtual platform?',
      answer: 'It ensures follow-up consultations, remote monitoring, and virtual wards for continuous and convenient care. Our healthcare team is available 24/7 to extend ongoing support and monitoring. ',
    },
  ];

  return (
    <div className="faq-container">
      {/* <span className="faq-span">Top FAQs</span> */}
      <h2 className="faq-heading">Top FAQs</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleQuestion(index)}>
            <span className="faq-question-text">{faq.question}</span>
            <span className="faq-toggle">{activeIndex === index ? '-' : '+'}</span>
          </div>
          {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
        </div>
      ))}
    </div>
  );
};

export default FaqComponent;
