import FAQAccordion from "../ui/faq/faq"
import HeroComponent from "../ui/hero-component/hero-component"
import JobOpeningCard from "../ui/job-opening-card/job-opening"
import DedicatedTeam from "../ui/team-card/dedicated-team"
import hero from "../../public/heros/join-team.png"

export const revalidate = 0;
// export const dynamic = "force-dynamic";

export default function Page(){
    return (
        <>
            <HeroComponent image={hero} title="We provide professional care for your best quality of life" />
            <div className="mt-8">
                <JobOpeningCard />
            </div>
            <div className="mt-32 mb-20">
                <DedicatedTeam />
            </div>
            <FAQAccordion />
        </>
    )
}