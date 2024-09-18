"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Bubble from "../bubble-label/bubble-label";

import hero1 from "../../../public/home/hero-image-1.png";
import hero2 from "../../../public/heros/blog.png";
import hero3 from "../../../public/heros/employee.png";

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      image: hero1,
      bubbleText: "Compassionate IDD residential program",
      heading: "Compassionate IDD care.",
      description:
        "At our IDD residential program, we recognize the importance of compassionate care that extends beyond basic support.",
    },
    {
      image: hero2,
      bubbleText: "Passionate Caregivers",
      heading: "Your well-being is our priority",
      description:
        "Our direct support professionals (DSP) are highly skilled professionals dedicated to providing personalized care with a touch of compassion.",
    },
    {
      image: hero3,
      bubbleText: "Personalized care plans",
      heading: "Tailored care for every individual",
      description:
        "We create personalized care plans that cater to the unique needs of each individual. One to one relationship.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const currentSlide = slides[currentIndex];

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative">
      <div className="absolute inset-0" style={{ height: "80vh" }}>
        <Image
          src={currentSlide.image}
          alt="Hero Image"
          className="object-cover w-full"
          sizes="100vw"
          quality={100}
          priority={true}
          style={{ height: "80vh" }}
        />
      </div>
      <div
        className="w-72 md:w-96 ml-4 pb-4 md:pt-52 md:mb-0 md:ml-20 relative flex flex-col justify-end md:justify-center items-left"
        style={{ height: "80vh" }}
      >
        <Bubble text={currentSlide.bubbleText} />
        <h1 className="text-2xl md:text-4xl my-3 text-white font-semibold">
          {currentSlide.heading}
        </h1>
        <small className="text-white font-light">
          {currentSlide.description}
        </small>
        <div className="flex mt-3 md:ml-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`h-0.5 md:h-1 rounded-sm w-3 md:w-6 mr-2 ${
                currentIndex === index ? "bg-hero-dash-blue" : "bg-white"
              }`}
              onClick={() => handleDotClick(index)}
            />
          ))}
          {/* <div
            className={`h-0.5 md:h-1 rounded-sm w-3 md:w-6 ${
              currentIndex === 0 ? "bg-hero-dash-blue" : "bg-white"
            } mr-2`}
          ></div>
          <div
            className={`h-0.5 md:h-1 rounded-sm w-3 md:w-6 ${
              currentIndex === 1 ? "bg-hero-dash-blue" : "bg-white"
            } mr-2`}
          ></div>
          <div
            className={`h-0.5 md:h-1 rounded-sm w-3 md:w-6 ${
              currentIndex === 2 ? "bg-hero-dash-blue" : "bg-white"
            }`}
          ></div> */}
        </div>
      </div>
    </div>
  );
}






// import Image from "next/image";
// import Bubble from "../bubble-label/bubble-label"

// import hero from "../../../public/home/hero-image-1.png"

// export default function HeroSection() {
//   return (
//       <div className="relative">
//         <div className="absolute inset-0" style={{height: "80vh"}}>
//           <Image
//             src={hero}
//             alt="Hero Image"
//             className="object-cover w-full"
//             // height={100}
//             // width={10}
//             sizes="100vw"
//             quality={100}
//             priority={true}
//             style={{height: "80vh"}}
//           />
//           {/* <img
//             src="/home/hero-image-1.png"
//             alt="Hero Image"
//             className="object-cover w-full"
//             style={{height: "80vh"}}
//           /> */}
//         </div>
//         {/* <div className="absolute inset-y-0 left-0 w-96 bg-gradient-to-r from-black-opacity-10 via-black/1 to-black/0"></div> */}
//         <div className="w-72 md:w-96 ml-4 pb-4 md:pt-52 md:mb-0 md:ml-20 relative flex flex-col justify-end md:justify-center items-left" style={{height: "80vh"}}>
//             <Bubble text="Compassionate home nursing care"/>
//             <h1 className={"text-2xl md:text-4xl my-3 text-white font-semibold"}>Bringing heartfelt care to your doorstep</h1>
//             <small className={"text-white font-light"}>At Nursing Care, we understand the importance of compassionate care that goes beyond just medical assistance.</small>
//             <div className="flex mt-3 md:ml-2">
//               <div className="h-0.5 md:h-1 rounded-sm w-3 md:w-6 bg-hero-dash-blue mr-2"></div>
//               <div className="h-0.5 md:h-1 rounded-sm w-3 md:w-6 bg-white mr-2"></div>
//               <div className="h-0.5 md:h-1 rounded-sm w-3 md:w-6 bg-white"></div>
//             </div>
//         </div>
//       </div>
//   );
// }
