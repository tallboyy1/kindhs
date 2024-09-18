"use client";
import {
    KeyframeOptions,
    animate,
    useInView,
    useIsomorphicLayoutEffect,
  } from "framer-motion";
  import { useRef } from "react";
  
  type AnimatedCounterProps = {
    from: number;
    to: number;
    animationOptions?: KeyframeOptions;
  };
  
  const AnimatedCounter = ({
    from,
    to,
    animationOptions,
  }: AnimatedCounterProps) => {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true });
  
    useIsomorphicLayoutEffect(() => {
      const element = ref.current;
  
      if (!element) return;
      if (!inView) return;
  
      // Set initial value
      element.textContent = String(from);
  
      // If reduced motion is enabled in system's preferences
      if (window.matchMedia("(prefers-reduced-motion)").matches) {
        element.textContent = String(to);
        return;
      }
  
      const controls = animate(from, to, {
        duration: 5,
        ease: "easeOut",
        ...animationOptions,
        onUpdate(value) {
          element.textContent = value.toFixed(0);
        },
      });
  
      // Cancel on unmount
      return () => {
        controls.stop();
      };
    }, [ref, inView, from, to]);
  
    return <span ref={ref} />;
  };
  
  


export default function Statistics() {
  return (
    <main className="w-9/12 my-20 mx-auto bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="mb-10 lg:mb-0 text-center">
        <h1 className="text-secondary w-max mx-auto text-6xl font-bold">
            <span className="flex">
                <AnimatedCounter from={0} to={24} />
                <span>+</span>
            </span>
        </h1>
        <span className="text-blue w-max text-sm">Years of Experience</span>
      </div>

      <div className="mb-10 lg:mb-0 text-center">
        <h1 className="text-secondary w-max mx-auto text-6xl font-bold">
          <AnimatedCounter from={0} to={20} />
          <span>+</span>
        </h1>
        <span className="text-blue w-max text-sm">Caregivers</span>
      </div>

      <div className="mb-10 lg:mb-0 text-center">
        <h1 className="text-secondary w-max mx-auto text-6xl font-bold">
          <AnimatedCounter from={0} to={15} />
          <span>+</span>
        </h1>
        <span className="text-blue w-max text-sm">Service offered</span>
      </div>

      <div className="text-center">
        <h1 className="text-secondary w-max mx-auto text-6xl font-bold">
            <span className="flex">
                <AnimatedCounter from={0} to={99} />
                <span>%</span>
            </span>
        </h1>
        <span className="text-blue w-max text-sm">Client Satisfaction</span>
      </div>
    </main>
  );
}



// export default function Statistics() {
//     return (
//         <>
//             <main className="w-9/12 my-20 mx-auto bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//                 <div className="mb-10 lg:mb-0 text-center">
//                     <h1 className="text-secondary w-max mx-auto text-6xl font-bold">300</h1>
//                     <span className="text-blue w-max text-sm">Patients served</span>
//                 </div>

//                 <div className="mb-10 lg:mb-0 text-center">
//                     <h1 className="text-secondary w-max mx-auto text-6xl font-bold">30</h1>
//                     <span className="text-blue w-max text-sm">Caregivers</span>
//                 </div>

//                 <div className="mb-10 lg:mb-0 text-center">
//                     <h1 className="text-secondary w-max mx-auto text-6xl font-bold">10</h1>
//                     <span className="text-blue w-max text-sm">Service offered</span>
//                 </div>

//                 <div className=" text-center">
//                     <h1 className="text-secondary w-max mx-auto text-6xl font-bold">95%</h1>
//                     <span className="text-blue w-max text-sm">Client Satisfaction</span>
//                 </div>
//             </main>
//         </>
//     )
// }