import styles from "@/app/ui/styles/footer.module.css"
import Image from "next/image"
import Link from "next/link"

export default function Footer(){
    const date = new Date();
    const year = date.getFullYear();
    return (
        <>
            <footer className="flex-none md:flex-none lg:flex gap-5 mx-4">
                <section className="mb-5 md:basis-2/5 rounded-2xl px-2 md:px-4 pb-4 pt-8 bg-secondary-14-opacity ">
                    <div className="mr-auto mb-4 md:mb-10 w-max">
                        <Image 
                            src="/navbar-logo.png"
                            alt="navbar-logo.png"
                            width="255"
                            height="60"
                            className="mx-auto"
                            quality={100}
                            priority={true}
                        />
                    </div>
                    <div className="mb-4">
                        <small>Stay updated with our newletter</small>
                        <form className={`${styles.newsletter_input} flex justify-between mt-6 md:mt-4 py-1 pl-3 md:pl-5 pr-1 w-full rounded-full bg-white`}>
                            <input type="email" className="rounded-full outline-none text-xs w-4/6" placeholder="Enter your email address"/>
                            <button type="submit" className="px-4 py-2 md:px-8 md:py-4 rounded-full bg-secondary text-white text-sm">Subscribe</button>
                        </form>
                    </div>
                    <div>
                        <div className={`${""} w-max flex`}>
                            <a href="" className="mr-4">
                                <Image 
                                    src="/footer/facebook.png"
                                    alt="facebook logo"
                                    width="44"
                                    height="24"
                                    priority={true}
                                />
                            </a>
                            <a href="" className="mr-4">
                                <Image 
                                    src="/footer/instagram.png"
                                    alt="instagram logo"
                                    width="44"
                                    height="24"
                                    priority={true}
                                />
                            </a>
                            <a href="" className="mr-4">
                                <Image 
                                    src="/footer/linkedin.png"
                                    alt="linkedin logo"
                                    width="44"
                                    height="24"
                                    priority={true}
                                />
                            </a>
                            <a href="" className="mr-4">
                                <Image 
                                    src="/footer/x.png"
                                    alt="x formerly twitter logo"
                                    width="44"
                                    height="24"
                                    priority={true}
                                />
                            </a>
                        </div>
                    </div>
                </section>
                <section className="mb-5 md:basis-3/5 rounded-2xl px-10 pb-5 pt-8 bg-blue-31-opacity text-blue">
                    <div className="flex-none md:flex gap-8 mb-8 ml-4 md:ml-0">
                        <div className="mb-10 md:mb-0 flex-1">
                            <ul className="list-none">
                                <h3 className="mb-5 font-medium">Menu</h3>
                                <div className="flex gap-10">
                                    <div>
                                        <li className="mb-3"><Link href="/"><small>Home</small></Link></li>
                                        <li className="mb-3"><Link href="about"><small>About Us</small></Link></li>
                                        <li className="mb-3"><Link href="services"><small>Services</small></Link></li>
                                        <li className="mb-3"><Link href="join-team"><small>Join our Team</small></Link></li>
                                    </div>
                                    <div> 
                                        <li className="mb-3"><Link href="employee-portal"><small>Employee Portal</small></Link></li>
                                        <li className="mb-3"><Link href="blog"><small>Blog</small></Link></li>
                                        <li className="mb-3"><Link href="contact"><small>Contact</small></Link></li>
                                    </div>
                                </div>
                            </ul>
                        </div>
                        <div  className="mb-10 md:mb-0 flex-1">
                            <ul className="list-none">
                                <h3 className="mb-5 font-medium">Corporate Office</h3>
                                <li className="mb-2"><small>1013 Centre Road, Suite 403S</small></li>
                                <li className="mb-2"><small>Willmington DE, 19805</small></li>
                                <li className="mb-2"><small>Phone: 484-229-4771</small></li>
                                <li className="mb-2"><small>Fax: 484-229-7930</small></li>
                                <li className="mb-2"><small>Email: kindheartservices.com</small></li>
                            </ul>
                        </div>
                        <div  className="flex-1">
                            <ul className="list-none">
                                <h3 className="mb-5 font-medium">Reading Office</h3>
                                <li className="mb-2"><small>3608 Saint Lawrence Ave, </small></li>
                                <li className="mb-2"><small>suite 109 Reading PA, 19606</small></li>
                                <li className="mb-2"><small>Phone: 484-229-4771</small></li>
                                <li className="mb-2"><small>Fax: 484-229-7930</small></li>
                                <li className="mb-2"><small>Email: kindheartservices.com</small></li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex-none lg:flex">
                        <div className="mb-3 lg:mr-5">
                            <small>Kind heart services llc © {year} | All Rights Reserved</small>
                        </div>
                        <div>
                            <small className="">Terms of Use</small>
                            <small className="mx-3">|</small>
                            <small className="">Privacy Policy</small>
                        </div>
                    </div>
                </section>
            </footer>
        </>
    )
}