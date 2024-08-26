"use client"
import Bubble from "../bubble-label/bubble-label";

import { motion } from 'framer-motion';
import { useAnimationInView } from "../framer-stuff/useAnimationView";

const fadeInFromRightSide = {
    hidden: { opacity: 0, x:25 },
    visible: { opacity: 1, x: 0 },
};

export default function WhoWeAre() {

    const { ref, shouldAnimate } = useAnimationInView({ triggerOnce: false, threshold: 0.1 });

    return(
        <>
            <main className="w-10/12 bg-white my-14 flex-none md:flex mx-auto gap-6">
                <div className="mt-auto mb-4 md:mb-0">
                    <img 
                        src="/home/who-we-are-1.png" 
                        alt=""
                         className="rounded-3xl"
                    />
                </div>
                <div className="mb-8 md:mb-0">
                    <img 
                        src="/home/who-we-are-2.png" 
                        alt="" className="rounded-3xl"
                    />
                </div>
                <div className="my-auto ml-0 md:ml-8">
                    <motion.div
                        ref={ref}
                        initial="hidden"
                        animate={shouldAnimate ? "visible" : "hidden"}
                        variants={fadeInFromRightSide}
                        transition={{ duration: 1 }}
                    >
                        <Bubble text="Who we are"/>
                        <h2 className="text-3xl md:text-2xl font-bold my-3">About Kind Heart Services</h2>
                        <p className="text-xs leading-7 font-light">Kind Heart Services, LLC is a human Service company that provides residential services to individuals with intellectual developmental disabilities in Pennsylvania. We are committed to providing quality care and exceptional services to the individuals and families we serve.</p>
                        <button className="bg-secondary text-white text-xs mt-3 py-2 px-6 rounded-full">Learn more</button>
                    </motion.div>
                </div>
            </main>
        </>
    )
}