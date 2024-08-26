"use client";

import styles from "@/app/ui/styles/contact.module.css"
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



export default function BookAppointment(){

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
      setOpenIndex(index === openIndex ? null : index);
    };

    return (
        <>
            <main className="px-4 pb-4 pt-6 md:p-8 rounded-3xl mx-4 md:mx-16 flex-none md:flex bg-secondary">
                <section className="bg-white px-2 pt-4 pb-4 md:p-8 rounded-lg basis-2/3">
                    <h3 className="text-2xl text-secondary font-medium">Book appointment</h3>
                    <div className="mt-4">
                        <form>
                            <div className="flex md:gap-5 lg:gap-5 flex-wrap">
                                <div className="w-full md:flex-1 lg:flex-1 mb-5">
                                    <label className="text-xs ml-3 font-medium">Full Name</label>
                                    <input className={`${styles.input} rounded-lg mt-50 py-3 px-3 text-xs w-full`} type="text" placeholder="Enter your name"/>
                                </div>
                                <div className="w-full md:flex-1 lg:flex-1 mb-5">
                                    <label className="text-xs ml-3 font-medium">Contact Number</label>
                                    <input className={`${styles.input} rounded-lg mt-50 py-3 px-3 text-xs w-full`} type="phone" placeholder="Phone number"/> 
                                </div>
                            </div>
                            <div className="flex md:gap-5 lg:gap-5 flex-wrap">
                                <div className="w-full md:flex-1 lg:flex-1 mb-5">
                                    <label className="text-xs ml-3 font-medium">Choose service</label>
                                    <input className={`${styles.input} rounded-lg mt-50 py-3 px-3 text-xs w-full`} type="text" placeholder="Enter your name"/>
                                </div>
                                <div className="w-full md:flex-1 lg:flex-1 mb-5">
                                    <label className="text-xs ml-3 font-medium">Location</label>
                                    <input className={`${styles.input} rounded-lg mt-50 py-3 px-3 text-xs w-full`} type="phone" placeholder="Enter Location"/> 
                                </div>
                            </div>
                            <div>
                                <label className="text-xs ml-3 font-medium">Message</label>
                                <textarea rows={7} className={`${styles.input} rounded-lg mt-50 py-3 px-3 text-xs w-full`} name="message" placeholder="Additional Information" required></textarea>
                            </div>
                            <div className="mt-2 flex-none lg:flex lg:justify-between flex-wrap">
                                <div className="flex items-start">
                                    <input type="checkbox" className="mr-2"/>
                                    <span className="text-xs">By submitting this form, you agree to our friendly <span className="underline">privacy policy</span></span>
                                </div>
                                <button type="submit" className="mt-4 md:mt-0 md:w-max px-8 py-2 rounded-full bg-secondary text-white text-sm">Submit</button>
                            </div>
                        </form>
                    </div>
                </section>
                <section className="flex-1">
                    <div className=" w-2/3 mx-4 md:mx-auto mt-8 md:mt-16">
                    <h2 className="text-white text-xl mb-12 font-semibold">How we <span className="text-blue">work</span></h2>
                    {faqData.map((faq, index) => (
                                <div key={index} className="border-l-2 border-white mb-8">
                                        <button
                                            className="w-full text-left pb-0 px-3 flex justify-between items-center"
                                            onClick={() => toggleFAQ(index)}
                                        >
                                            <span className="font-normal text-white text:lg md:text-xl font-regular">{faq.question}</span>
                                        </button>
                                    {openIndex === index && (
                                        <div className="px-3 pt-4 text-white text-xs">
                                        <span className="font-extralight">{faq.answer}</span>
                                        </div>
                                    )}
                                </div>
                            ))}
                    </div>
                </section>
            </main>
        </>
    )
}