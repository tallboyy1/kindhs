"use client"; 

import Image from "next/image";
import { useState } from "react";

interface FAQItem {
    question: string;
    answer: string;
  }
  
  const faqData: FAQItem[] = [
    {
      question: "Experienced caregivers",
      answer: "Our team consists of highly skilled nurses with years of experience in home healthcare.",
    },
    {
      question: "Compassionate approach",
      answer: "Our team consists of highly skilled nurses with years of experience in home healthcare.",
    },
    {
      question: "Personalized care plans",
      answer: "Our team consists of highly skilled nurses with years of experience in home healthcare.",
    },
    // Add more FAQs as needed
  ];

export default function WhyChoose(){

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
      setOpenIndex(index === openIndex ? null : index);
    };

    return (
        <>
            <main className="bg-other-blue py-6 md:py-20 px-4 md:px-10 my-8 mx-4 md:mx-5 rounded-xl flex-none md:flex gap-10 justify-around">
                <section className="my-auto mb-4 md:mb-0">
                    <div className="mb-10">
                        <h1 className="text-2xl md:text-3xl lg:text-3xl font-semibold">Why choose Nursing Care</h1>
                    </div>
                    <div>
                        <div className="h-64">

                        <div className="h-full w-full max-w-xl mx-auto md:my-auto space-y-4">
                            {faqData.map((faq, index) => (
                                <div key={index} className="bg-white rounded-xl">
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
                                            <div className="px-6 pb-4 text-black text-xs w-96">
                                                {faq.answer}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
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