"use client"

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { useState } from 'react';

import styles from "@/app/ui/styles/faq.module.css";
import Image from 'next/image';

const answerFadeUpward = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Are there any benefits to volunteering?",
    answer: "Next.js is a React framework that enables server-side rendering and static site generation.",
  },
  {
    question: "Are there any benefits to volunteering?",
    answer: "React creates a virtual DOM, which is a representation of the real DOM. It updates the DOM based on changes in state and props efficiently.",
  },
  {
    question: "Are there any benefits to volunteering?",
    answer: "Tailwind CSS is a utility-first CSS framework that allows for rapid UI development.",
  },
  // Add more FAQs as needed
];

const FAQAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };
  
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });
  
  return (
    <div className="w-full max-w-4xl mx-auto mb-20 space-y-4">
        <h2 className='text-center mb-14 text-2xl md:text-2xl font-semibold'>Have questions? (FAQs)</h2>
      {faqData.map((faq, index) => {
        return (
          <motion.div 
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={answerFadeUpward}
          transition={{ duration: 1 }} 
        key={index} className="mx-5">
          <button
            className="w-full mb-5 bg-secondary-14-opacity rounded-xl text-left py-4 px-6 md:px-12 flex justify-between items-center"
            onClick={() => toggleFAQ(index)}
          >
            <span className="font-medium mr-4 md:mr-0 text-xl md:text-2xl">{faq.question}</span>
            <span>{openIndex === index ? 
            <>
                <Image 
                    alt='Close Answer'
                    src={"/faq/faq-close-arrow.png"}
                    width={50}
                    height={50} 
                    quality={100}
                    priority={true}
                />
            </>
             : 
            <>
                <Image 
                    alt='Open Answer'
                    src={"/faq/faq-open-arrow.png"}
                    width={50}
                    height={50}
                    quality={100}
                    priority={true}
                />
            </>
            }</span>
          </button>
          {openIndex === index && (
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={answerFadeUpward}
              transition={{ duration: 1 }}
              className="px-6 pb-4 text-gray-600"
            >
              {faq.answer}
            </motion.div>
          )}
        </motion.div>
      )})}
    </div>
  );
};

export default FAQAccordion;
