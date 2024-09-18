"use client";

import styles from "@/app/ui/styles/contact.module.css"
import { useState } from "react";

import { motion } from 'framer-motion';
import { useAnimationInView } from "../framer-stuff/useAnimationView";

const answerFadeUpward = {
  hidden: { opacity: 0, y:15 },
  visible: { opacity: 1, y: 0 },
};


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



export default function BookAppointment(){

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
      setOpenIndex(index === openIndex ? null : index);
    };



    const [formData, setFormData] = useState({
        name: "",
        contactNumber: "",
        service: "",
        location: "",
        message: "",
        agreeToPolicy: false,
      });
    
      const [loading, setLoading] = useState(false);
      const [response, setResponse] = useState<string | null>(null);
    
      const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
      ) => {
        const { name, value, type } = e.target;
      
        if (type === "checkbox" && e.target instanceof HTMLInputElement) {
          const { checked } = e.target;
          setFormData((prevData) => ({
            ...prevData,
            [name]: checked,
          }));
        } else {
          setFormData((prevData) => ({
            ...prevData,
            [name]: value,
          }));
        }
      };
      
    
      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    
        if (!formData.agreeToPolicy) {
          alert("Please agree to the privacy policy before submitting.");
          return;
        }
    
        setLoading(true);
        setResponse(null);
    
        try {
          const res = await fetch("/api/book-appointment", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          });
    
          const result = await res.json();
          if (result.success) {
            setResponse("Your appointment request has been sent successfully.");
            setFormData({
              name: "",
              contactNumber: "",
              service: "",
              location: "",
              message: "",
              agreeToPolicy: false,
            });
          } else {
            setResponse("There was an error sending your request. Please try again.");
          }
        } catch (error) {
          setResponse("There was an error sending your request. Please try again.");
        } finally {
          setLoading(false);
        }
      };
      
      const { ref, shouldAnimate } = useAnimationInView({ triggerOnce: false, threshold: 0.1 });

    return (
        <>
            <main className="px-4 pb-4 pt-6 md:p-8 rounded-3xl mx-4 md:mx-16 flex-none md:flex bg-secondary">
                <section className="bg-white px-2 pt-4 pb-4 md:p-8 rounded-lg basis-2/3">
                    <h3 className="text-2xl text-secondary font-medium">Referral Contact</h3>
                    <div className="mt-4">
                        {/* <form>
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
                                    <select className={`${styles.input} rounded-lg mt-50 py-3 px-1 text-sm w-full`}>
                                        <option value="">Choose a service</option>
                                        <option value="adult-residential-program">Adult Residential Program</option>
                                        <option value="community-support">Community Support</option>
                                        <option value="respite">Respite</option>
                                    </select>
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
                        </form> */}
                        <form onSubmit={handleSubmit}>
                            <div className="flex md:gap-5 lg:gap-5 flex-wrap">
                            <div className="w-full md:flex-1 lg:flex-1 mb-5">
                                <label className="text-xs ml-3 font-medium">Full Name</label>
                                <input
                                className={`${styles.input} rounded-lg mt-50 py-3 px-3 text-xs w-full`}
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your name"
                                required
                                />
                            </div>
                            <div className="w-full md:flex-1 lg:flex-1 mb-5">
                                <label className="text-xs ml-3 font-medium">Contact Number</label>
                                <input
                                className={`${styles.input} rounded-lg mt-50 py-3 px-3 text-xs w-full`}
                                type="tel"
                                name="contactNumber"
                                value={formData.contactNumber}
                                onChange={handleChange}
                                placeholder="Phone number"
                                required
                                />
                            </div>
                            </div>
                            <div className="flex md:gap-5 lg:gap-5 flex-wrap">
                            <div className="w-full md:flex-1 lg:flex-1 mb-5">
                                <label className="text-xs ml-3 font-medium">Choose service</label>
                                <select
                                className={`${styles.input} rounded-lg mt-50 py-3 px-1 text-sm w-full`}
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                                required
                                >
                                <option value="">Choose a service</option>
                                <option value="adult-residential-program">Adult Residential Program</option>
                                <option value="community-support">Community Support</option>
                                <option value="respite">Respite</option>
                                </select>
                            </div>
                            <div className="w-full md:flex-1 lg:flex-1 mb-5">
                                <label className="text-xs ml-3 font-medium">Location</label>
                                <input
                                className={`${styles.input} rounded-lg mt-50 py-3 px-3 text-xs w-full`}
                                type="text"
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                                placeholder="Enter Location"
                                required
                                />
                            </div>
                            </div>
                            <div>
                            <label className="text-xs ml-3 font-medium">Message</label>
                            <textarea
                                rows={7}
                                className={`${styles.input} rounded-lg mt-50 py-3 px-3 text-xs w-full`}
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Additional Information"
                            ></textarea>
                            </div>
                            <div className="mt-2 flex-none lg:flex lg:justify-between flex-wrap">
                            <div className="flex items-start md:mb-4">
                                <input
                                id="privacy-policy-checkbox"
                                type="checkbox"
                                name="agreeToPolicy"
                                checked={formData.agreeToPolicy}
                                onChange={handleChange}
                                className="mr-2"
                                required
                                />
                                <span className="flex align-top flex-wrap"><label htmlFor="privacy-policy-checkbox" className="text-xs">
                                By submitting this form, you agree to our friendly...</label>
                                <span className="underline text-xs text-blue">{" "}privacy policy</span>
                                </span>
                            </div>
                            <button
                                type="submit"
                                className="mt-4 md:mt-0 md:w-max px-8 py-2 rounded-full bg-secondary text-white text-sm"
                                disabled={loading}
                            >
                                {loading ? "Submitting..." : "Submit"}
                            </button>
                            </div>
                        </form>
                        {response && <p className="mt-4 text-sm rounded-lg bg-green text-white py-4 px-8">{response}</p>}
                    </div>
                </section>
                <section className="flex-1">
                    <div className=" w-2/3 mx-4 md:mx-auto mt-8 md:mt-16">
                    <h2 className="text-white text-xl mb-12 font-semibold">How we <span className="text-blue">work</span></h2>
                    {faqData.map((faq, index) => {
                      return(
                              <motion.div 
                                ref={ref}
                                initial="hidden"
                                animate={shouldAnimate ? "visible" : "hidden"}
                                variants={answerFadeUpward}
                                transition={{ duration: 1 }} 
                                key={index} className="border-l-2 border-white mb-8">
                                        <button
                                            className="w-full text-left pb-0 px-3 flex justify-between items-center"
                                            onClick={() => toggleFAQ(index)}
                                        >
                                            <span className="font-normal text-white text:lg md:text-xl font-regular">{faq.question}</span>
                                        </button>
                                    {openIndex === index && (
                                        <motion.div 
                                          initial="hidden"
                                          animate="visible"
                                          variants={answerFadeUpward}
                                          transition={{ duration: 1 }}
                                          className="px-3 pt-4 text-white text-xs"
                                        >
                                          <span className="font-extralight">{faq.answer}</span>
                                        </motion.div>
                                    )}
                              </motion.div>
                            )})}
                    </div>
                </section>
            </main>
        </>
    )
}