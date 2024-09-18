"use client"

import { motion } from 'framer-motion';

import { useState } from 'react';

import styles from "@/app/ui/styles/faq.module.css";
import Image from 'next/image';
import { useAnimationInView } from '../framer-stuff/useAnimationView';

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
    question: " How do I apply for the IDD residential program at Kind Heart Services?",
    answer: "To apply for our IDD residential program, start by contacting our admissions team to schedule an initial assessment. During this assessment, we’ll review your loved one's needs and determine if our program is a good fit. You’ll need to provide relevant documentation, such as medical records and proof of eligibility. Our team will guide you through the application process and help you complete any necessary forms.",
  },
  {
    question: "What types of services are included in the IDD residential program?",
    answer: "Our IDD residential program offers a range of services designed to support individuals with intellectual and developmental disabilities. This includes personalized care plans, daily living support, medical care, therapeutic services, and community engagement activities. Our goal is to provide comprehensive support that enhances the quality of life and promotes independence.",
  },
  {
    question: "How does Kind Heart Services ensure the safety and well-being of individuals in the IDD residential program?  ",
    answer: "At Kind Heart Services, we prioritize the safety and well-being of all individuals in our residential program. We maintain a secure and supportive environment with trained staff who provide constant supervision and care. Regular assessments and monitoring ensure that each individual’s needs are met effectively. Additionally, we have protocols in place for emergencies and strive to create a nurturing atmosphere that promotes respect and dignity.",
  },
  // Add more FAQs as needed
];

const FAQAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  const { ref, shouldAnimate } = useAnimationInView({ triggerOnce: false, threshold: 0.1 });
  
  return (
    <div className="w-full max-w-4xl mx-auto mb-20 space-y-4">
        <h2 className='text-center mb-14 text-2xl md:text-2xl font-semibold'>Have questions? (FAQs)</h2>
      {faqData.map((faq, index) => {
        return (
          <motion.div 
          ref={ref}
          initial="hidden"
          animate={shouldAnimate ? "visible" : "hidden"}
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
