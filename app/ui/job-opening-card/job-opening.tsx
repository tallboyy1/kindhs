import Image from "next/image";
import Link from "next/link";


interface JobItem {
    role: string;
    department: string;
    status: string;
    slug: string;
}
  
const jobData: JobItem[] = [
    {
        role: "Registered Nurse",
        department: "ER",
        status: "Open",
        slug: "registered-nurse"
    },
    {
        role: "Registered Nurse",
        department: "ER",
        status: "Open",
        slug: "registered-nurse"
    },
    {
        role: "Registered Nurse",
        department: "ER",
        status: "Open",
        slug: "registered-nurse"
    },
];

export default function JobOpeningCard() {
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
                                        <div><span className="text-xs font-normal">{job.status}</span></div>
                                        <div className="my-auto">
                                            <Image 
                                                src={"/home/explore-blog-arrow.png"} 
                                                alt="explore blog"
                                                width={30} 
                                                height={30}
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