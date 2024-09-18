import BlogCard from "../ui/blog-card/blog-card";
import FAQAccordion from "../ui/faq/faq";
import DedicatedTeam from "../ui/team-card/dedicated-team";
import hero from "../../public/heros/blog.png"
import HeroComponent from "../ui/hero-component/hero-component";

export const revalidate = 0;
// export const dynamic = "force-dynamic";


export default function Page () {
    return (
        <>
            <HeroComponent image={hero} title="Blog & article" content="Gain expert perspectives and in-depth analysis of the latest trends and developments in Nursing Care."/>
            <div className="my-20">
                <BlogCard />
            </div>
            <DedicatedTeam />
            <div className="mt-14">
                <FAQAccordion />
            </div>
        </>
    )
}