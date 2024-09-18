"use client"

import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { FaStar } from "react-icons/fa";

interface Testimonial {
    rating: number;
    text: string;
    name: string;
    image: string;
  }

const testimonials = [
  {
    rating: 5,
    text: "Great service and amazing experience!",
    name: "Emily Davis",
    image: "/testimonials/testifier-1.png",
  },
  {
    rating: 4,
    text: "Really enjoyed the quality and support.",
    name: "Donald Smith",
    image: "/testimonials/testifier-2.png",
  },
  {
    rating: 4.5,
    text: "Kind Heart Services, LLC is a human Service company that provides residential services to individuals with intellectual developmental disabilities in Pennsylvania.",
    name: "Lois Ferguson",
    image: "/testimonials/testifier-3.png",
  },
  {
    rating: 5,
    text: "Highly recommend this to everyone!",
    name: "Michael Brown",
    image: "/testimonials/testifier-4.png",
  },
  {
    rating: 4,
    text: "Good overall, but some areas could improve.",
    name: "Carl Jackson",
    image: "/testimonials/testifier-5.png",
  },
];



interface DedicatedTeam {
    name: string;
    position: string;
    image: string;
}

const teamData: DedicatedTeam[] = [
  {
    name: "Amanda Reed",
    position: "Chief Executive Officer",
    image: "/team/team-1.png",
},
{
    name: "Amanda Reed",
    position: "IDD Program Director",
    image: "/team/team-2.png",
},
{
    name: "Amanda Reed",
    position: "IDD Programme Specialist",
    image: "/team/team-3.png",
},
{
    name: "Amanda Reed",
    position: "IDD Programme Manager",
    image: "/team/team-4.png",
}
]

export default function TeamTestimonial () {
    const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const getVisibleTestimonials = () => {
    const total = testimonials.length;
    const prevIndex = (current - 1 + total) % total;
    const nextIndex = (current + 1) % total;
    const prevPrevIndex = (current - 2 + total) % total;
    const nextNextIndex = (current + 2) % total;

    return [
      testimonials[prevPrevIndex],
      testimonials[prevIndex],
      testimonials[current],
      testimonials[nextIndex],
      testimonials[nextNextIndex],
    ];
  };

  const currentTestimonial = testimonials[current];
  const fillPercentage = (currentTestimonial.rating / 5) * 100;

    return (
        <>
<main className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 md:gap-4 mx-4 md:mx-8">
  <section className="bg-blue-31-opacity px-4 md:px-0 py-14 rounded-3xl">
    <div className="h-max md:mt-5 my-auto md:w-max md:mx-auto">
      <h2 className="text-sm new-tiny:text-xl w-max font-semibold text-secondary">
        Meet our dedicated <span className="text-blue">team</span>
      </h2>
      <div className=" my-4 flex overflow-x-auto md:overflow-auto space-x-6">
        {teamData.map((team, index) => (
          <div key={index} className="flex-shrink-0" style={{ width: "90px" }}>
            <img
              src={team.image}
              alt={`${team.name}'s picture`}
              style={{
                width: "100%",
                objectFit: "cover",
                objectPosition: "top",
              }}
              className="h-24 rounded-lg"
            />
            <div className="my-2">
              <p className="text-xs font-semibold">{team.name}</p>
              <p className="text-[8px]">{team.position}</p>
            </div>
          </div>
        ))}
      </div>
      <Link href="join-team">
        <button className="text-white bg-secondary text-xs py-2 px-4 rounded-full">
            View our team members
        </button>
      </Link>
    </div>
  </section>
  <section className="bg-blue-31-opacity py-2 md:py-8 rounded-3xl">
    {/* <div className="w-max mx-auto"> */}
    <div className="p-4">
    <h2 className="text-lg mb-5 new-tiny:text-xl w-max mx-auto font-semibold text-blue">What our clients say</h2>
      {/* Star Ratings */}
      <div className="flex justify-center mb-4 w-max mx-auto">
        {[...Array(5)].map((_, i) => (
        <svg
            key={i}
            viewBox="0 0 24 24"
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            className="star-icon"
            style={{marginLeft: "3px", marginRight: "3px"}}
        >
            <defs>
            <linearGradient id={`half-fill-${i}`} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset={i < Math.floor(fillPercentage / 20) ? "100%" : `${fillPercentage % 20 * 5}%`} stopColor="#0040ae" />
                <stop offset={i < Math.floor(fillPercentage / 20) ? "100%" : `${fillPercentage % 20 * 5}%`} stopColor="transparent" />
            </linearGradient>
            </defs>
            <polygon
                fill={`url(#half-fill-${i})`}
                stroke="#0040ae"
                strokeWidth="2"
                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"
            />
        </svg>
        ))}
      </div>

      <div className="max-w-sm mb-8 mx-auto text-center">
        <p className="text-xs h-12 text-center w-full mx-auto text-blue font-light mb-4 overflow-hidden text-ellipsis">
          {testimonials[current].text}
        </p>
      </div>

      <p className="text-sm w-max mx-auto text-blue text-center font-semibold">
        {testimonials[current].name}
      </p>

      <div className="mx-auto w-max flex justify-center items-center mt-6 md:mt-10 space-x-2 md:space-x-4">
        {getVisibleTestimonials().map((testimonial, index) => (
          <div
            key={index}
            className={`transition-transform duration-500 ${
              index === 2
                ? "transform scale-125 rounded-full border-2 border-blue"
                : "opacity-75"
            }`}
          >
            <img
              src={testimonial.image}
              alt={`${testimonial.name}'s photo`}
              className="w-10 h-10 md:w-16 md:h-16 rounded-full object-cover"
            //   style={{ width: "64px", height: "64px" }}
            />
          </div>
        ))}
      </div>
    </div>
    {/* </div> */}
    </section>
</main>
        </>
    )
}