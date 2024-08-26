"use client";

import Bubble from "../bubble-label/bubble-label";

import { motion } from 'framer-motion';
import { useAnimationInView } from "../framer-stuff/useAnimationView";

const fadeFromRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0 },
};

export default function OurValue() {

    const { ref, shouldAnimate } = useAnimationInView({ triggerOnce: false, threshold: 0.1 });

    return(
        <>
            <main className="w-10/12 bg-white mt-2 mb-14 flex-none md:flex mx-auto gap-6">
                <div className="my-auto mb-4 md:mb-0">
                    <img 
                        src="/home/who-we-are-1.png" 
                        alt=""
                         className="rounded-3xl"
                    />
                </div>
                <div>
                    <img 
                        src="/home/who-we-are-2.png" 
                        alt="" className="rounded-3xl"
                    />
                </div>
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={shouldAnimate ? "visible" : "hidden"}
                    variants={fadeFromRight}
                    transition={{ duration: 1 }} 
                    className="my-auto ml-0 md:ml-8"
                >
                    <div>
                        <h2 className="text-2xl font-bold my-3">Our value</h2>
                        <p className="text-xs font-light leading-6">To provide the best and valuable services, peaceful and safe environment for the individual we serve. This organization will always assess and improve on services that provide exceptional person-centered support plans to achieve the highest quality of life for the individuals we serve. We strive to create a community where everyone is respected, loved for who they are, and are supported to accomplish the goals of their lives.</p>
                    </div>
                </motion.div>
            </main>
        </>
    )
}