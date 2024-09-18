// import styles from "@/app/ui/styles/home.module.css"
import Bubble from "./ui/bubble-label/bubble-label";
import { useEffect, useState } from "react";
import HeroSection from "./ui/hero-section/hero-section";
import WhyChoose from "./ui/why-choose/why-choose";
import JoinCommunity from "./ui/join-community/joincomm";
import WhoWeAre from "./ui/who-we-are/who-we-are";
import Statistics from "./ui/statistics/statistics";
import BookAppointment from "./ui/book-appointment/book-appointment";
import ExploreBlog from "./ui/explore-blog/explore-blog";
import FAQAccordion from "./ui/faq/faq";
import DiscoverServiceCard from "./ui/services-card/services-card";
import TeamTestimonial from "./ui/team-testimonial/team-testimonial";

export const revalidate = 0;
// export const dynamic = "force-dynamic";

export default function Home() {

  return (
    <>
    <HeroSection />
    <main>
        <section className="mt-10 md:mt-24 md:mb-16 mx-auto">
          <div className="w-max mx-auto text-center">
            <Bubble text="Discover the heart behind Nursing Care"/>
            <h1 className="mb-6 md:mb-10 mt-8 text-3xl md:text-4xl font-bold">Discover our services</h1>
          </div>
          <DiscoverServiceCard />
        </section>

        <WhyChoose />
        <JoinCommunity />
        <WhoWeAre />
        <TeamTestimonial />
        <Statistics />
        <BookAppointment />
        <div className="mt-12">
          <ExploreBlog />
        </div>
        <div className="mt-16">
          <FAQAccordion />
        </div>

    </main>
    </>
  );
}
