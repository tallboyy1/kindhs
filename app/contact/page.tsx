import styles from "@/app/ui/styles/contact.module.css"
import HeroComponent from "../ui/hero-component/hero-component"
import hero from "../../public/heros/contact.png"



export default function Page(){
    return(
        <>
        <HeroComponent image={hero} title="We provide professional care for your best quality of life"/>
            <main className="md:flex flex-none md:flex-1 mx-4 md:mx-32 my-8 md:my-32">
                <section className="text-blue flex-1 text-xs mx-8">
                    <div className="w-max mb-10 md:mb-20">
                        <h2 className="text-secondary text-2xl font-medium mb-2">Corporate Office</h2>
                        <p>1013 Centre Road, Suite 403S</p>
                        <p>Willmington DE, 19805</p>
                        <p>Phone . 484-229-4771</p>
                        <p>Fax 484-229-7930</p>
                        <p>Email kindheartservices.com</p>
                    </div>
                    <div  className="w-max mb-20 md:mb-0 lg:mb-0">
                        <h2 className="text-secondary text-2xl font-medium mb-2">Reading Office</h2>
                        <p>3608 St Lawrence Ave</p>
                        <p>Avenue Reading PA, 19606</p>
                        <p>Phone . 484-229-4771</p>
                        <p>Fax 484-229-7930</p>
                        <p>Email kindheartservices.com</p>
                    </div>
                </section>
                <section className="flex-1">
                    <form className={styles.contactForm}>
                        <div className="mb-5">
                            <input className={`${styles.input} rounded-lg py-3 px-3 text-xs w-full`} type="text" placeholder="Your Name" required />
                        </div>
                        <div className="flex md:gap-5 lg:gap-5 flex-wrap">
                            <div className="w-full md:flex-1 lg:flex-1 mb-5">
                                <input className={`${styles.input} rounded-lg py-3 px-3 text-xs w-full`} type="email" placeholder="Your Email"/>
                            </div>
                            <div className="w-full md:flex-1 lg:flex-1 mb-5">
                                <input className={`${styles.input} rounded-lg py-3 px-3 text-xs w-full`} type="phone" placeholder="Your Phone"/>
                            </div>
                        </div>
                        <div className="mb-5">
                            <textarea rows={10} className={`${styles.input} rounded-lg py-3 px-3 text-xs w-full`} name="message" placeholder="Your Message" required></textarea>
                        </div>
                        <button type="submit" className="w-full md:w-max px-8 py-4 rounded-lg bg-secondary text-white text-sm">Submit Message</button>
                    </form>
                </section>
            </main>

            <div>
                <iframe className="w-screen mb-12" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.1932861417636!2d-75.60947112397963!3d39.75776849548223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6fdc30dbfffff%3A0xebeb51b6df203be!2s1013%20Centre%20Rd%20Suite%20403S%2C%20Wilmington%2C%20DE%2019805%2C%20USA!5e0!3m2!1sen!2sgh!4v1724623499567!5m2!1sen!2sgh" width="800" height="600" style={{border:"0"}} loading="lazy"></iframe>
            </div>
        </>
    )
}