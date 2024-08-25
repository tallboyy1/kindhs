import OurValue from "../ui/about-us-value/about-us-our-value"
import Statistics from "../ui/statistics/statistics"
import DedicatedTeamNBG from "../ui/team-card-no-bg/dedicated-team-nbg"
import hero from "../../public/heros/about.png"
import HeroComponent from "../ui/hero-component/hero-component"
import JoinCommunity from "../ui/join-community/joincomm"
import AboutMission from "../ui/about-mission/about-mission"

export default function Page(){
    return(<>
    <HeroComponent image={hero} title="About Nursing Care" content="Brief introduction or mission statement that encapsulates the essence of Nursing Care." />
        <main>
            <AboutMission />
            <div className="md:hidden">
                <JoinCommunity />
            </div>
            <OurValue />
            <Statistics/>
            <DedicatedTeamNBG />
        </main>
    </>)
}