import React, { useState } from 'react';
import './CommanQ.css'; // Import your CSS file
 
function CommanQ() {
  // State to track which question is active
  const [activeIndex, setActiveIndex] = useState(null);
 
  // Toggle function for showing answers and switching the icon
  const toggleAnswer = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close if the same question is clicked again
    } else {
      setActiveIndex(index); // Open the selected question
    }
  };
 
  const questions = [
    { question: "How do I book an appointment with a doctor through Sloane Virtual Hospital?", answer: "Simply download our app, select your preferred doctor, choose a convenient time slot, and book your appointment with just a few clicks!" },
    { question: "What should I do if I need urgent medical assistance?", answer: "For urgent medical situations, you can instantly connect with our doctors through video calls to receive immediate advice and preliminary treatment." },
    { question: "Can I get a prescription through a virtual consultation?", answer: "Yes, after your consultation, the doctor will provide a digital prescription, which can be accessed directly through the app." },
    { question: "How does home diagnostic service work?", answer: "You can schedule a home sample collection for diagnostic tests through our app. A trained professional will visit your home to collect samples, and results will be available online." },
    { question: "Is Sloane Virtual Hospital available 24/7?", answer: "Absolutely! Our platform offers round-the-clock access to medical professionals, so you can receive care whenever you need it." },
    { question: "What payment options are available for consultations and services?", answer: "We offer multiple payment options, including credit/debit cards, net banking, UPI, and EMI plans for select healthcare packages." },
    // { question: "Can I use the platform for follow-up consultations?", answer: "Yes, you can easily schedule follow-up consultations with the same doctor to ensure consistent care and health monitoring." },
    { question: "Is my information secure on Sloane Virtual Hospital?", answer: "Yes, we prioritize patient privacy and use advanced encryption technology to keep all your data secure and confidential." }
  ];
  
 
  return (
    <>
      <div className="commanq-container">
      <div className="bt_bb_image bt_bb_shape_hard-rounded bt_bb_target_self bt_bb_hover_style_simple bt_bb_content_display_always bt_bb_content_align_middle bt_bb_align_inherit">
        <span>
          <img
            loading="lazy"
            decoding="async"
            width="580"
            height="620"
            src="https://cliniq.bold-themes.com/curves/wp-content/uploads/sites/4/2021/10/home_03_image_02.png"
            alt="Neonatal Care"
            className="commanq-image"
          />
        </span>
      </div>
 
      <div className="commanq-content">
        <h1>Common <span className='commanq-span'>Questions</span></h1>
        <div className="questions">
          {questions.map((item, index) => (
            <div key={index} className="question-container">
              <div className="question" onClick={() => toggleAnswer(index)}>
                <p>{item.question}</p>
                <span className="plus">{activeIndex === index ? '-' : '+'}</span>
              </div>
              {activeIndex === index && (
                <div className="answer">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  
  );
}
 
export default CommanQ;
 