"use client";

import Image from "next/image";

import { motion } from 'framer-motion';
import { useAnimationInView } from "../framer-stuff/useAnimationView";

const answerFadeUpward = {
  hidden: { opacity: 0, x:-35 },
  visible: { opacity: 1, x: 0 },
};


export default function AboutMission() {
    const { ref, shouldAnimate } = useAnimationInView({ triggerOnce: false, threshold: 0.1 });
    return (
        <>
            <main className="grid mt-10 sm:grid-cols-1 sm:max-w-2xl md:mx-auto md:max-w-1xl lg:grid-cols-2 gap-4  lg:max-w-7xl mx-auto px-4 md:px-10 my:12 md:my-24">
                <div className="lg:h-max lg:mb-auto">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={answerFadeUpward}
                        transition={{ duration: 1 }} 
                        className="mb-8"
                    >
                        <h2 className="text-2xl md:mx-auto md:max-w-lg font-semibold mb-4">Dedicated to providing  exceptional care with compassion and inclusion</h2>
                        <p className="text-xs md:mx-auto md:max-w-lg leading-7">Kind Heart Services, LLC is a human Service company that provides residential services to individuals with intellectual developmental disabilities in Pennsylvania. We are committed to providing quality care and exceptional services to the individuals and families we serve. Our goal is to provide an environment that promotes respect, independence, and inclusion regardless of race, gender, religion, sexual orientation, or medical condition. We strive to ensure that everyone who enters our doors is treated with compassion, respect, and dignity. Kind Heart Services promote community engagement to ensure the individuals we serve have a meaningful, productive, and fulfilling life.</p>
                    </motion.div>
                    <div>
                        <div className="md:max-w-lg md:mx-auto">
                            <img src="/about/mission-archery.svg" alt="" className="w-12"/>
                        </div>
                        <motion.div
                        ref={ref}
                        initial="hidden"
                        animate={shouldAnimate ? "visible" : "hidden"}
                        variants={answerFadeUpward}
                        transition={{ duration: 1 }}>
                            <h2 className="text-2xl md:mx-auto md:max-w-lg font-semibold mt-6 mb-4">Our mission</h2>
                            <p className="text-xs md:mx-auto md:max-w-lg leading-7">To improve the quality of life and personal growth of the individuals we serve through supporting individual choice and independence. We are dedicated to meeting the needs of individuals while maintaining a vision towards each person’s independence, desire, ability, and right to be a productive and valued member of the community. Kind Heart Services, LLC. passionately believes in each individual’s ability to succeed in life, through personal empowerment given with dignity and respect.</p>
                        </motion.div>
                    </div>
                </div>
                <div>
                    <div className="md:max-w-lg md:mx-auto lg:w-max lg:mx-auto">
                        <Image src="/about/mission.png" alt="mission png" quality={100} priority={true} width={500} height={200} className="rounded-3xl"/>
                    </div>
                </div>
            </main>
        </>
    )
}