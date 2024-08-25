import Footer from "../ui/footer/footer";
import FAQAccordion from "../ui/faq/faq";

import styles from "@/app/ui/styles/employee.module.css"
import HeroComponent from "../ui/hero-component/hero-component";
import hero from "../../public/heros/employee.png";
import DedicatedTeam from "../ui/team-card/dedicated-team";


export default function EmployeePortal(){
    return(
        <>
        <HeroComponent image={hero}/>
            <main className="">
                <section className="w-72 new-tiny:w-80 also-tiny:w-80 md:w-80 mx-auto mt-24 mb-60">
                    <form className="">
                        <div className="mt-4">
                            <label className="ml-4 text-xs font-light">Email</label><br/>
                            <input className={`${styles.input} rounded-lg py-3 px-3 text-xs w-full`} type="email" placeholder="" required/>
                        </div>
                        <div className="mt-3">
                            <label className="ml-4 text-xs font-light">Password</label><br/>
                            <input className={`${styles.input} rounded-lg py-3 px-3 text-xs w-full`} type="password" placeholder="" required/>
                        </div>
                        <button className="w-full py-3 my-4 rounded-lg bg-secondary text-xs text-white">Log In</button>
                        <p className="w-full text-xs text-red-600 font-semibold text-center">Forgotten your password</p>
                    </form>
                </section>
                <div className="md:hidden mb-12">
                    <DedicatedTeam/>
                </div>
                <FAQAccordion />
            </main>
        </>
    )
}