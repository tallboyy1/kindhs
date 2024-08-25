import OurValue from "../ui/about-us-value/about-us-our-value"
import HeroSection from "../ui/hero-section/hero-section"
import Statistics from "../ui/statistics/statistics"
import DedicatedTeamNBG from "../ui/team-card-no-bg/dedicated-team-nbg"
import hero from "../../public/heros/about.png"
import HeroComponent from "../ui/hero-component/hero-component"
import DiscoverServiceCard from "../ui/services-card/services-card"

export default function Page(){
    return(<>
    <HeroComponent image={hero} title="About Nursing Care" content="Brief introduction or mission statement that encapsulates the essence of Nursing Care." />
        <main>
            <OurValue />
            <Statistics/>
            <DedicatedTeamNBG />
            <DiscoverServiceCard />
        </main>
    </>)
}