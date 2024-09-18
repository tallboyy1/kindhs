import Image from "next/image";
import Link from "next/link";
// import { sanityClient } from "@/sanity/lib/client";
import clsx from "clsx"

export const revalidate = 0;
// export const dynamic = "force-dynamic";

interface jobInterface {
    role: string;
    department: string;
    status: string;
    slug: string;
}

const slugify = (title: string) => {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
};
  
const jobData: jobInterface[] = [
    //Status has only 2 values - "Open" or "Closed"
    {
        role: "Registered Nurse",
        department: "ER",
        status: "Closed",
        slug: slugify("Registered Nurse")
    },
    {
        role: "Registered Nurse",
        department: "ER",
        status: "Open",
        slug:  slugify("Registered Nurse")
    },
    {
        role: "Registered Nurse",
        department: "ER",
        status: "Open",
        slug: slugify("Registered Nurse")
    },

    // Add more jobs here as needed. Don't forget to add to the job details to the job details page after coming here.
];

// async function getData(){
//     const query = `
//         *[_type == "job"] | order(_createdAt desc){
//             role,
//             department,
//             status,
//             "currentSlug": slug.current
//         }`;

//     const data = await sanityClient.fetch(query);

//     return data;
// }

export default function JobOpeningCard() {
    // const jobData: jobInterface[] = await getData();

    return (
        <>
            <main className="p-4 md:p-8">
                <h2 className="text-xl md:text-2xl text-center font-semibold">Our current job openings</h2>
                <div className="mt-12">
                    {jobData.map((job, index) => (
                        <Link key={index} href={`/join-team/${job.slug}`}>
                            <div key={index} className="py-8 border-b border-black">
                                <h4 className="text-lg md:text-sm font-medium">{job.role}</h4>
                                <div className="flex-none md:flex items-center">
                                    <div className="basis-2/3">
                                        <span className="text-xs font-normal">{job.department}</span>
                                    </div>
                                    <div className="basis-1/3 flex justify-between">
                                        <div><span className={clsx("text-xs font-normal",
                                            {
                                                "bg-green text-white px-3 py-1": job.status === "Open",
                                                "bg-red-500 text-white px-3 py-1": job.status === "Closed"
                                            }
                                        )}>{job.status}</span></div>
                                        <div className="my-auto">
                                            <Image 
                                                src={"/home/explore-blog-arrow.png"} 
                                                alt="explore blog"
                                                width={30} 
                                                height={30}
                                                quality={100}
                                                priority={true}
                                                />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </main>
        </>
    )
}