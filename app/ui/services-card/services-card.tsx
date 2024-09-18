import Image from 'next/image';
import Link from 'next/link';

interface ServiceInterface {
    title: string;
    image: string;
    content: string;
    slug: string;
}

const slugify = (title: string) => {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
};

const serviceData: ServiceInterface[] = [
    {
        title: "Adult Residential Program",
        image: "/services/discover/service-1.png",
        content:  "Through the residential program offered by Kind Heart Services, individuals with disabilities can live autonomous lives in their own homes.",
        slug: slugify("Adult Residential Program")
    },
    {
        title: "Community Support",
        image: "/services/discover/service-2.png",
        content:  "The Community Supports Program at Kind Heart Services provides specialized services to assist individuals with disabilities in carrying out daily duties.",
        slug: slugify("Community Support")
    },
    {
        title: "Respite",
        image: "/services/discover/service-3.png",
        content:  "Families that care for a disabled person can take a break from the daily grind that comes with being a caregiver for a disabled person thanks to respite care.",
        slug: slugify("Respite")
    }
]

export default function DiscoverServiceCard() {
  return (
    <div className="flex justify-center mx-4 flex-wrap gap-4">
      {serviceData.map((service, index) => (
        <Link key={index} href={`/services/${service.slug}`} passHref>
            <div className="relative w-full max-w-sm overflow-hidden rounded-2xl shadow-lg">
                <Image
                    src={service.image}
                    alt={service.title}
                    layout="responsive"
                    width={500}
                    height={300}
                    priority={true}
                    quality={100}
                    className="object-cover w-full h-full"
                />
                <div className="absolute inset-x-0 bottom-0 h-60 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                <div className="text-left absolute bottom-0 left-0 right-0 mx-4 mb-2">
                <h2 className="text-xl md:text-2xl font-medium text-white">
                    {service.title}
                </h2>
                <p className="text-white text-xs mt-2">{service.content}</p>
                <div className='w-max ml-auto'>
                    <span className="inline-block mt-4 text-white text-xs font-semibold">
                    Read more <span aria-hidden="true"><Image className='float-right my-auto mt-1 ml-2' src="/services/discover/external-arrow.svg" alt='external link arrow' width={8} height={6}/> </span>
                    </span>
                </div>
                </div>
            </div>
        </Link>
      ))}
    </div>
  );
}




// import Image from 'next/image';
// import Link from 'next/link';

// interface serviceInterface {
//     title: string;
//     image: string;
//     content: string;
//     slug: string;
// }

// const serviceData: serviceInterface[] = [
//     {
//         title: "Adult Residential Program",
//         image: "/services/discover/service-1.png",
//         content:  "Through the residential program offered by Kind Heart Services, individuals with disabilities can live autonomous lives in their own homes.",
//         slug: "adult-residential-program",
//     },
//     {
//         title: "Community Support",
//         image: "/services/discover/service-2.png",
//         content:  "The Community Supports Program at Kind Heart Services provides specialized services to assist individuals with disabilities in carrying out daily duties.",
//         slug: "community-support",
//     },
//     {
//         title: "Respite",
//         image: "/services/discover/service-3.png",
//         content:  "Families that care for a disabled person can take a break from the daily grind that comes with being a caregiver for a disabled person thanks to respite care.",
//         slug: "respite",
//     }
// ]

// export default function DiscoverServiceCard () {
//   return (
//     <>
//         <div className="flex justify-center mx-4 flex-wrap gap-4">
//             {serviceData.map((service, index) => (
//                 <Link key={index} href={`/services/${service.slug}`}>
//                         <a className="relative w-full max-w-sm overflow-hidden rounded-2xl shadow-lg">
//                             <Image
//                                 src={service.image}
//                                 alt="Adult Residential Program"
//                                 layout="responsive"
//                                 width={500}
//                                 height={300}
//                                 className="object-cover w-full h-full"
//                             />
//                             {/* <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-6"> */}
//                             <div className="absolute inset-x-0 bottom-0 h-60 bg-gradient-to-t from-black via-black/40 to-black/1"></div>
//                             <div className="text-left absolute bottom-0 left-0 right-0 mx-4 mb-2">
//                                 <h2 className="text-xl md:text-2xl font-medium text-white">{service.title}</h2>
//                                 <p className="text-white text-xs mt-2">{service.content}</p>
//                                 <div className='w-max ml-auto'>
//                                     <a href="#" className="inline-block mt-4 text-white text-xs font-semibold">
//                                     Read more <span aria-hidden="true">→</span>
//                                     </a>
//                                 </div>
//                             </div>
//                         </a>
//                 </Link>
//             ))}
//         </div>
//     </>
//   );
// };



