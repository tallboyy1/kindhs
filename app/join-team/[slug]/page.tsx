import { notFound } from "next/navigation";
import HeroComponent from "@/app/ui/hero-component/hero-component";
import hero from "../../../public/heros/join-team.png"

import { sanityClient } from "@/sanity/lib/client";
import { PortableText } from '@portabletext/react';


interface jobInterface {
    role: string;
    description: any;
}

async function getData(slug: string){
    const query = `
        *[_type == "job" && slug.current == '${slug}']{
            role,
            description,
        }[0]`;

    const data = await sanityClient.fetch(query);

    return data;
}

// // Example static data fetching
// const jobDetailsData: Record<string, JobDetails> = {
//     "registered-nurse": {
//         role: "Registered Nurse ER",
//         description: "We are looking for a Registered Nurse to care for our patients and facilitate their speedy recovery. You will also be responsible for educating them and their families on prevention and healthy habits. The ideal candidate will be a responsible and well-trained professional able to give the best nursing care with little supervision. You will be compassionate and cool-tempered. You will also be able to follow health and safety guidelines faithfully and consistently. The goal is to promote patient’s well-being by providing high quality nursing care. Responsibilities Monitor patient’s condition and assess their needs to provide the best possible care and advice Observe and interpret patient’s symptoms and communicate them to physicians Collaborate with physicians and nurses to devise individualized care plans for patients Perform routine procedures (blood pressure measurements, administering injections etc.) and fill in patients’ charts Adjust and administer patient’s medication and provide treatments according to physician’s orders Inspect the facilities and act to maintain excellent hygiene and safety (decontaminating equipment, sanitizing surfaces, preparing beds etc.) Provide instant medical care in emergencies Assist surgeons during operations Supervise and train LPNs and nursing assistants Foster a supportive and compassionate environment to care for patients and their families Expand knowledge and capabilities by attending educational workshops, conferences etc. Requirements and skills Proven experience as a registered nurse Excellent knowledge of nursing care methods and procedures Excellent knowledge of emergency care In-depth knowledge of health and safety guidelines and procedures (sanitation, decontamination etc.) and willingness to follow them at all times A team player with excellent communication and interpersonal skills Responsible and compassionate Outstanding organizational and multi-tasking skills Patient with excellent problem-solving skills BSc or other diploma from a nursing program Valid nursing license",
//     },
//     // Add other blog entries similarly...
// };

export default async function BlogDetailsPage({ params }: { params: { slug: string } }) {
    const { slug } = params;
    const jobDetails: jobInterface = await getData(slug);

    if (!jobDetails) {
        notFound();
    }
    
    return (
        <>
            <HeroComponent image={hero} title="We provide professional care for your best quality of life"/>
            <main className="mt-16 mx-4 mb-12">
                <h2 className="mb-8 text-xl md:text-2xl text-center font-semibold">Our current job openings</h2>
            
                <h3 className="text-center text-xl font-semibold">{jobDetails.role}</h3>
                <div className="max-w-5xl mx-auto mt-8">
                    {/* <p className="text-xs leading-10"> */}
                    <div className="leading-10 prose prose-black prose-sm prose-li:marker:text-secondary prose-a:text-blue prose-a:underline max-w-3xl md:max-w-3xl lg:max-w-5xl mx-auto">
                        <PortableText value={jobDetails.description} />
                    </div>
                </div>

                <div className="w-max mx-auto mt-12 mb-16">
                    <button className="bg-secondary text-white text-sm rounded-lg font-medium py-4 px-24 md:px-20">Apply</button>
                </div>
            </main>
        </>
    );
}