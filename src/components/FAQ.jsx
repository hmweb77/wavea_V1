"use client"
import { useState } from 'react';

const faqData = [
  {
    question: "What services does your agency specialize in?",
    answer: "We specialize in web development, digital marketing and graphic design services to help businesses enhance their online presence."
  },
  {
    question: "What kind of support can I expect after the project is completed?",
    answer: "We offer continuous support including maintenance, updates, and troubleshooting to ensure your project remains up-to-date and functional."
  },
  {
    question: "Do you provide training for the tools and strategies you implement?",
    answer: "Yes, we provide comprehensive training sessions and resources to ensure you can effectively use the tools and strategies we implement."
  },
  {
    question: "What forms of payment do you accept?",
    answer: "We accept various forms of payment including credit cards, PayPal, and bank transfers."
  },
];

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white-300 my-4 rounded-26">
      <button
        className="w-full text-center py-4 px-6 flex justify-between items-center focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className=" text-center font-montserrat text-xl text-black-100 leading-130 font-semibold my-2">{question}</span>
        <span className="text-center  text-gray-500">{isOpen ? '-' : '+'}</span>
      </button>
     
      {isOpen && <div className="text-center  font-montserrat text-black-200 text-xl leading-170 p-2 ">{answer}</div>}
    </div>
  );
};

const Faq = () => {
  return (
    <div id='faq' className="mx-6 ">
      <h2 className="text-center text-4xl md:text-5xl font-bold leading-130 font-montserrat text-blue-200 ">Frequently Asked Questions</h2>
      <div className="max-w-2xl mx-2 md:mx-auto ">
        {faqData.map((faq, index) => (
          <FaqItem key={index} {...faq} />
        ))}
      </div>
    </div>
  );
};

export default Faq;
