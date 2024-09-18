// "use client";

import DedicatedTeam from "@/app/ui/team-card/dedicated-team";
import Image from "next/image";
import { notFound } from "next/navigation";
import { useRouter } from "next/router";

// import { motion } from 'framer-motion';
// import { useAnimationInView } from "@/app/ui/framer-stuff/useAnimationView";
import { Metadata } from "next";

// const fadeFromLeft = {
//   hidden: { opacity: 0, x: -30 },
//   visible: { opacity: 1, x: 0 },
// };

// const fadeFromLeft1 = {
//     hidden: { opacity: 0, x: -40 },
//     visible: { opacity: 1, x: 0 },
// };  

// const fadeFromRight1 = {
//     hidden: { opacity: 0, x: 40 },
//     visible: { opacity: 1, x: 0 },
// };  

// const fadeUpward = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 },
// };
  

interface serviceInterface {
    slug: string;
    title: string;
    image: string;
    content1: string;
    content2?: string;
}

interface Params {
    slug: string;
}

const slugify = (title: string) => {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
};


// Example static data fetching
const serviceDetailsData: serviceInterface[] = [
    {
        title: "Adult Residential Program",
        image: "/services/details/service-1.png",
        content1:  " Through the residential program offered by Kind Heart Services, individuals with disabilities can live autonomous lives in their own homes. The people we assist in our residential program are capable of choosing where and how they choose to live. Kind Heart services collaborate with families to make sure the people we serve fulfill their dream of having a comfortable place to call home. ",
        content2: "Our personalized living spaces prioritize the individuals we assist, giving them every chance to create the life they envision in a house of their choosing and a neighborhood they adore. They make the decisions as homeowners; our job is to just provide them with the resources they require to succeed. In order to provide the best support possible, we work closely with the individuals we support to design fully customized programs that take into account their behavioral, mental, social, and medical needs. The results of our Residential Program show how important it is for individuals with disabilities to live independently, especially when they are supported by Direct Support Professionals who are empathetic and will value their choices above all else. Together, we develop and learn, and we have a strong commitment to helping the people we serve succeed in their communities.",
        slug: slugify("Adult Residential Program"),
    },
    {
        title: "Community Support",
        image: "/services/discover/service-2.png",
        content1:  "The Community Supports Program at Kind Heart Services provides specialized services to assist individuals with disabilities in carrying out daily duties.",
        content2: "Our personalized living spaces prioritize the individuals we assist, giving them every chance to create the life they envision in a house of their choosing and a neighborhood they adore. They make the decisions as homeowners; our job is to just provide them with the resources they require to succeed. In order to provide the best support possible, we work closely with the individuals we support to design fully customized programs that take into account their behavioral, mental, social, and medical needs. The results of our Residential Program show how important it is for individuals with disabilities to live independently, especially when they are supported by Direct Support Professionals who are empathetic and will value their choices above all else. Together, we develop and learn, and we have a strong commitment to helping the people we serve succeed in their communities.",
        slug: slugify("Community Support"),
    },
    {
        title: "Respite",
        image: "/services/discover/service-3.png",
        content1:  "Families that care for a disabled person can take a break from the daily grind that comes with being a caregiver for a disabled person thanks to respite care.",
        content2: "Our personalized living spaces prioritize the individuals we assist, giving them every chance to create the life they envision in a house of their choosing and a neighborhood they adore. They make the decisions as homeowners; our job is to just provide them with the resources they require to succeed. In order to provide the best support possible, we work closely with the individuals we support to design fully customized programs that take into account their behavioral, mental, social, and medical needs. The results of our Residential Program show how important it is for individuals with disabilities to live independently, especially when they are supported by Direct Support Professionals who are empathetic and will value their choices above all else. Together, we develop and learn, and we have a strong commitment to helping the people we serve succeed in their communities.",
        slug: slugify("Respite"),
    },
    // Add other blog entries similarly...
];

const getServiceBySlug = (slug: string): serviceInterface | undefined => {
    return serviceDetailsData.find((service) => service.slug === slug);
};

export function generateMetadata({ params }: { params: Params }): Metadata {
    const service = getServiceBySlug(params.slug);

    if (!service) {
        return {
            title: 'Service not found',
        };
    }

    return {
        title: service.title,
        description: service.content1,
    };
}

export default function ServiceDetailsPage({ params }: { params: { slug: string } }) {
    const service = getServiceBySlug(params.slug);

    if (!service) {
        // If no service is found, show a 404 page
        notFound();
    }

    // const { ref, shouldAnimate } = useAnimationInView({ triggerOnce: false, threshold: 0.1 });

    return (
        <div>
            {/* Colored Section */}
            <section className="bg-secondary-24-opacity py-8 text-center flex flex-col items-center justify-center" style={{height: "80vh"}}>
            {/* <section className="bg-secondary py-8 text-center flex flex-col items-center justify-center"> */}
                <h1 
                    // initial="hidden"
                    // animate="visible"
                    // variants={fadeUpward}
                    // transition={{ duration: 1 }} 
                    className="text-secondary text-2xl mb-4 mt-10 md:text-3xl lg:text-5xl font-bold"
                >
                    {service.title}
                </h1>
                <p 
                    // initial="hidden"
                    // animate="visible"
                    // variants={fadeUpward}
                    // transition={{ duration: 3 }} 
                    className="text-secondary text-xs w-9/12 mb-4 leading-6"
                >
                    {service.content1}
                </p>
                <button
                    // initial="hidden"
                    // animate="visible"
                    // variants={fadeUpward}
                    // transition={{ duration: 5 }} 
                    className="py-3 px-12 bg-blue text-xs text-white rounded-full">Schedule your consultation</button>
            </section>

            {/* Image Section */}
            <div className="relative flex justify-center -mt-8 tiny:-mt-12 sm:-mt-24 md:-mt-32">
                <div className="relative max-w-lg sm:max-w-2xl md:max-w-2xl lg:max-w-5xl mx-4">
                    <Image
                        src={service.image}
                        alt="Home Nursing Care"
                        width={1000}
                        height={600}
                        className="rounded-lg md:rounded-3xl"
                        priority={true}
                    />
                </div>
            </div>

            {/* White Section */}
            {/* <section className="mx-4 w-full md:mx-auto md:w-8/12 bg-white py-8 text-center"> */}
            <section className="px-4 mx-auto w-full py-8 max-w-xl md:max-w-3xl lg:max-w-5xl">
                <p className="text-left font-light text-xs text-blue leading-6">
                    {service.content2}
                </p>
            </section>
            
            <section className="flex-none lg:justify-around lg:flex gap-20 mx-4 md:mx-12 mt-15 mb-20">
                <div
                    // ref={ref}
                    // initial="hidden"
                    // animate={shouldAnimate ? "visible" : "hidden"}
                    // variants={fadeFromLeft}
                    // transition={{ duration: 1 }} 
                    className="tiny:w-96 md:w-96 mx-auto mt-20">
                    <h3 className="text-lg md:text-2xl font-bold">Who can benefit</h3>
                    <p className="text-xs font-light leading-5 my-4">Our values guide everything we do. We believe in Compassion, Integrity, Excellence, Respect, and Innovation.</p>
                    <div className="flex mb-4 items-center">
                        <div className="">
                            <Image 
                                src={"/services/details/benefit.svg"} 
                                alt="benefit icon" 
                                width={30}
                                height={60}
                            />
                        </div>
                        <div className="ml-2">
                            <p className="text-xs font-light text-black">Seniors who wish to age in place and maintain their independence.</p>
                        </div>
                    </div>
                    <div className="flex mb-4 items-center">
                        <div className="">
                            <Image 
                                src={"/services/details/benefit.svg"} 
                                alt="benefit icon" 
                                width={30}
                                height={60}
                            />
                        </div>
                        <div className="ml-2">
                            <p className="text-xs font-light text-black">People recovering from illness, injury, or surgery who require.</p>
                        </div>
                    </div>
                    <div className="flex mb-4 items-center">
                        <div className="">
                            <Image 
                                src={"/services/details/benefit.svg"} 
                                alt="benefit icon" 
                                width={30}
                                height={60}
                            />
                        </div>
                        <div className="ml-2">
                            <p className="text-xs font-light text-black">People with chronic conditions or disabilities who need ongoing.</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="">
                            <Image 
                                src={"/services/details/benefit.svg"} 
                                alt="benefit icon" 
                                width={30}
                                height={60}
                            />
                        </div>
                        <div className="ml-2">
                            <p className="text-xs font-light text-black">Family caregivers who require respite and support in caring for.</p>
                        </div>
                    </div>
                </div>
                <div className="mt-10 w-max mx-auto">
                    <div className="w-72 also-tiny:w-80 tiny:w-96 md:w-96 mx-auto lg:w-full">
                        <img 
                            src={"/services/services-why-choose-image.png"} 
                            alt="" 
                            style={{
                                width: "720px",
                            }}
                            className="rounded-lg"
                        />
                    </div>
                </div>
            </section>

            <section className="my-5 md:my-20">
                <h1 className="text-black text-3xl w-max mx-auto font-semibold">How it works</h1>
                <main className="w-9/12 my-10 mx-auto bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 lg:gap-16">
                    <div className="mb-4 lg:mb-0 text-center">
                        <Image src={"/services/details/how-1.svg"} className="mx-auto" alt="image of step 1" width={50} height={30} priority={true}/>
                        <h1 className="text-secondary w-max mx-auto text-2xl my-4 font-bold">Consultation</h1>
                        <span className="text-black leading-1 w-max text-xs">Thorough assessments conducted by our care team to understand your medical history</span>
                    </div>

                    <div className="mb-10 lg:mb-0 text-center">
                        <Image src={"/services/details/how-2.svg"} className="mx-auto" alt="image of step 2" width={50} height={30} priority={true}/>
                        <h1 className="text-secondary w-max mx-auto text-2xl my-4 font-bold">Customized care plan</h1>
                        <span className="text-black w-max text-xs">A customized care plan is a personalized healthcare strategy designed to meet the unique needs of each patient.</span>
                    </div>

                    <div className="mb-10 lg:mb-0 text-center">
                        <Image src={"/services/details/how-3.svg"} className="mx-auto" alt="image of step 3" width={50} height={30} priority={true}/>
                        <h1 className="text-secondary w-max mx-auto text-2xl my-4 font-bold">Care Implementation</h1>
                        <span className="text-black w-max text-xs">Schedule a consultation with our team to discuss your healthcare needs and preferences.</span>
                    </div>
                </main>
            </section>

            <div className="mb-20">
                <DedicatedTeam />
            </div>
        </div>
    );
}

export async function generateStaticParams() {
    return serviceDetailsData.map((service) => ({
        slug: service.slug,
    }));
}