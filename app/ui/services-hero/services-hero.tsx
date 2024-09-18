import Image from "next/image";
import hero from "../../public/heros/join-team.png"

const ServicesHero = () => {
  return (
      <div className="relative">
        <div className="bg-secondary-14-opacity absolute inset-0">
        </div>
        {/* <div className="absolute inset-y-0 left-0 w-96 bg-gradient-to-r from-black-opacity-10 via-black/1 to-black/0"></div> */}
        <div className="w-full md:w-11/12 flex flex-col mx-auto text-center relative md:top-0 justify-center md:flex md:flex-row md:justify-around gap-8 items-center h-full pt-32 pb-10 md:pt-40 md:pb-16 lg:pt-40 lg:pb-16">
          <div className="w-72 tiny:w-80 md:w-96">
            <h1 className="text-3xl md:text-2xl lg:text-4xl my-3 text-left text-blue font-semibold">Comprehensive residential services</h1>
            <p className={"text-xs text-blue text-left font-light"}>Comprehensive residential services and other home and community based services .</p>
          </div>
          <div className="w-72 tiny:w-80 md:w-96">
            <Image
              src="/heros/services.png"
              alt=""
              width={800}
              height={200}
              priority={true}
              quality={100}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
  );
}

export default ServicesHero;