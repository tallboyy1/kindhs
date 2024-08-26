import Image from "next/image";
import Bubble from "../bubble-label/bubble-label"

import hero from "../../../public/home/hero-image-1.png"

export default function HeroSection() {
  return (
      <div className="relative">
        <div className="absolute inset-0" style={{height: "80vh"}}>
          <Image
            src={hero}
            alt="Hero Image"
            className="object-cover w-full"
            // height={100}
            // width={10}
            sizes="100vw"
            quality={100}
            priority={true}
            style={{height: "80vh"}}
          />
          {/* <img
            src="/home/hero-image-1.png"
            alt="Hero Image"
            className="object-cover w-full"
            style={{height: "80vh"}}
          /> */}
        </div>
        {/* <div className="absolute inset-y-0 left-0 w-96 bg-gradient-to-r from-black-opacity-10 via-black/1 to-black/0"></div> */}
        <div className="w-72 md:w-96 ml-4 pb-4 md:pt-52 md:mb-0 md:ml-20 relative flex flex-col justify-end md:justify-center items-left" style={{height: "80vh"}}>
            <Bubble text="Compassionate home nursing care"/>
            <h1 className={"text-2xl md:text-4xl my-3 text-white font-semibold"}>Bringing heartfelt care to your doorstep</h1>
            <small className={"text-white font-light"}>At Nursing Care, we understand the importance of compassionate care that goes beyond just medical assistance.</small>
            <div className="flex mt-3 md:ml-2">
              <div className="h-0.5 md:h-1 rounded-sm w-3 md:w-6 bg-hero-dash-blue mr-2"></div>
              <div className="h-0.5 md:h-1 rounded-sm w-3 md:w-6 bg-white mr-2"></div>
              <div className="h-0.5 md:h-1 rounded-sm w-3 md:w-6 bg-white"></div>
            </div>
        </div>
      </div>
  );
}
