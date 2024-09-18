"use client"; 

import { motion } from 'framer-motion';

const answerFadeUpward = {
  hidden: { opacity: 0, y:15 },
  visible: { opacity: 1, y: 0 },
};

const faqInFromLeftSide = {
    hidden: { opacity: 0, x:-15 },
    visible: { opacity: 1, x: 0 },
};

// const faqInFromRightSide = {
//     hidden: { opacity: 0, x:-15 },
//     visible: { opacity: 1, x: 0 },
// };

import Image from "next/image";
import { useState } from "react";
import { useAnimationInView } from '../framer-stuff/useAnimationView';

interface FAQItem {
    question: string;
    answer: string;
  }
  
  const faqData: FAQItem[] = [
    {
        question: "What is Kind Heart Services?",
        answer: "Kind Heart Services, LLC is a human Service company that provides residential services to individuals with intellectual developmental disabilities in Pennsylvania.",
      },
      {
        question: "What is the mission of Kind Heart Services?",
        answer: "Our mission is to enhance the quality of life and promote personal growth for the individuals we support by encouraging independence and personal choice. We are dedicated to helping each person achieve their fullest potential, ensuring they are valued, respected, and empowered to lead fulfilling lives within their community.",
      },
      {
        question: "What values guide Kind Heart Services?",
        answer: "At Kind Heart Services, we value the creation of a peaceful and safe environment where every individual is respected and supported. We continuously assess and improve our person-centered support plans, striving to deliver exceptional care that enhances the quality of life for those we serve. Our commitment is to build a community where everyone is loved for who they are and encouraged to achieve their life goals.",
      },
    // Add more FAQs as needed
  ];

export default function WhyChoose(){

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
      setOpenIndex(index === openIndex ? null : index);
    };
    const { ref, shouldAnimate } = useAnimationInView({ triggerOnce: false, threshold: 0.1 });

    return (
        <>
            <main className="bg-other-blue py-6 md:py-20 px-4 md:px-10 my-8 mx-4 md:mx-5 rounded-xl flex-none md:flex gap-10 justify-around">
                <section className="my-auto mb-4 md:mb-0">
                    <div className="mb-10">
                        <h1 className="text-2xl md:text-3xl lg:text-3xl font-semibold">Why choose Kind Heart Services</h1>
                    </div>
                    <div>
                        <div className="h-64">

                        <div className="h-full w-full max-w-xl mx-auto md:my-auto space-y-4">
                            {faqData.map((faq, index) =>{ 
                                return (
                                <motion.div 
                                    ref={ref}
                                    initial="hidden"
                                    animate={shouldAnimate ? "visible" : "hidden"}
                                    variants={faqInFromLeftSide}
                                    transition={{ duration: 1 }}        
                                    key={index} className="bg-white rounded-xl"
                                >
                                    <div className="w-full md:w-96">
                                        <button
                                            className="w-full text-left py-4 px-6 flex justify-between items-center"
                                            onClick={() => toggleFAQ(index)}
                                            >
                                            <span className="font-medium text-black text-sm font-regular">{faq.question}</span>
                                            <span>{openIndex === index ?
                                             <>
                                                <Image src="/home/why-choose-close.png" priority={true} quality={100} alt="Close Accordion Icon" width={20} height={30}/>
                                             </> : 
                                             <>
                                                <Image src="/home/why-choose-open.png" priority={true} quality={100} alt="Open Accordion Icon" width={20} height={30}/>
                                             </>
                                             }</span>
                                        </button>
                                        {openIndex === index && (
                                            <motion.div 
                                                initial="hidden"
                                                animate="visible"
                                                variants={answerFadeUpward}
                                                transition={{ duration: 1 }}
                                                className="px-6 pb-4 text-black text-xs w-96"
                                            >
                                                {faq.answer}
                                            </motion.div>                                        )}
                                    </div>
                                </motion.div>
                            )})}
                        </div>
                        </div>

                    </div>
                </section>
                <section className="md:my-auto">
                            <div>
                                <Image 
                                    src={"/home/why-choose.png"} 
                                    alt="Why Choose us Image" 
                                    width={600} 
                                    height={100}
                                    priority={true}
                                    quality={100}
                                    className="rounded-xl"
                                />
                            </div>
                </section>
            </main>
        </>
    )
}