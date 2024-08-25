import Image from "next/image";
import HeroSection from "../ui/hero-section/hero-section";
import JoinCommunity from "../ui/join-community/joincomm";
import ServicesHero from "../ui/services-hero/services-hero";
import DiscoverServiceCard from "../ui/services-card/services-card";

export default function Page () {
    return (
        <>
            {/* <HeroSection /> */}
            <ServicesHero />
            <div className="mt-6 md:mt-20 mb-14">
                <DiscoverServiceCard />
            </div>
            <div className="">
                <JoinCommunity />
            </div>

            {/* <section className="grid grid-cols-2 gap-4 mx-12 my-24 h-5/6"> */}
            <section className="flex-none lg:justify-around lg:flex gap-4 mx-4 md:mx-8 mt-6 mb-20">
                <div className="tiny:w-80 sm:w-80 md:w-96 mx-auto mt-20">
                    <h3 className="text-lg md:text-2xl font-bold">Why choose Nursing Care?</h3>
                    <p className="text-xs font-light leading-6 my-4">We uphold the highest standards of medical excellence and patient safety, ensuring that every patient receives personalized attention and support throughout their healthcare journey.</p>
                    <div className="flex mb-12 items-center">
                        <div className="w-max">
                            <Image 
                                // src={"/services/experienced-team.png"} 
                                src={"/services/flexible-scheduling.png"} 
                                alt="" 
                                width={100}
                                height={60}
                            />
                        </div>
                        <div className="ml-2">
                            <p className="text-lg font-semibold mb-1">Experienced Team</p>
                            <p className="text-xs font-light ">Our caregivers are trained professionals who truly care about your well-being.</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="w-max">
                            <Image 
                                src={"/services/flexible-scheduling.png"} 
                                // src={"/services/experienced-team.png"}
                                alt="" 
                                width={100}
                                height={60}
                            />
                        </div>
                        <div className="ml-2">
                            <p className="text-lg font-semibold mb-1">Flexible Scheduling</p>
                            <p className="text-xs font-light ">Our caregivers are trained professionals who truly care about your well-being.</p>
                        </div>
                    </div>
                </div>
                <div className="mt-10 w-max mx-auto">
                    <div className="w-72 tiny:w-80 sm:w-80 md:w-96 lg:w-full">
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
        </>
    )
}