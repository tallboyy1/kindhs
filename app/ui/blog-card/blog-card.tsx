import Link from "next/link";
import Bubble from "../bubble-label/bubble-label";
import { sanityClient } from "@/sanity/lib/client";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { format } from 'date-fns';


interface blogInterface {
    title: string;
    coverImage: any;
    tag: string;
    date: string;
    currentSlug: string;
}

// const sblogData: BlogCard[] = [
//     {
//         title: "The importance of home nursing care",
//         image: "/blog/blog-1-image.png",
//         tag: "Home Nursing",
//         date: "January 24, 2024",
//         slug: "the-importance-of-home-nursing-care",
//     },
//     {
//         title: "Healthy aging: lifestyle tips for seniors",
//         image: "/blog/blog-2-image.png",
//         tag: "Seniors",
//         date: "January 24, 2024",
//         slug: "healthy-aging-lifestyle-tips-for-seniors",
//     },
//     {
//         title: "Tips for managing medications at home",
//         image: "/blog/blog-3-image.png",
//         tag: "Medication",
//         date: "January 24, 2024",
//         slug: "tips-for-managing-medications-at-home",
//     },
//     {
//         title: "The importance of home nursing care",
//         image: "/blog/blog-1-image.png",
//         tag: "Home Nursing",
//         date: "January 24, 2024",
//         slug: "the-importance-of-home-nursing-care",
//     },
//     {
//         title: "Healthy aging: lifestyle tips for seniors",
//         image: "/blog/blog-2-image.png",
//         tag: "Seniors",
//         date: "January 24, 2024",
//         slug: "healthy-aging-lifestyle-tips-for-seniors",
//     },
//     {
//         title: "Tips for managing medications at home",
//         image: "/blog/blog-3-image.png",
//         tag: "Medication",
//         date: "January 24, 2024",
//         slug: "tips-for-managing-medications-at-home",
//     },
// ];

async function getData(){
    const query = `
        *[_type == "blog"] | order(_createdAt desc){
            title,
            coverImage,
            tag,
            date,
            "currentSlug": slug.current
        }`;

    const data = await sanityClient.fetch(query);

    return data;
}

export default async function BlogCard () {

    const blogData: blogInterface[] = await getData();
    return (
        <>
            <main>
                <div className="flex justify-center flex-wrap gap-4">
                    {blogData.map(({title, tag, coverImage, currentSlug, date}) => (
                        <Link key={currentSlug} href={`/blog/${currentSlug}`}>
                            <div className="w-72 md:w-96 mb-8 relative">
                                <div className="w-full h-64 relative rounded-xl">
                                    <Image src={urlFor(coverImage).url()} priority={true} quality={100} layout="fill" objectFit="cover" alt="Blog card image" className="rounded-xl" />
                                </div>
                                {/* <img src={urlFor(coverImage).url()} alt="Blog card image" className="rounded-xl" /> */}
                                <div className="flex-none md:flex justify-between items-center mt-4 mb-2 md:mb-4">
                                    <div className="mb-2 md:mb-0">
                                        <Bubble text={tag}/>
                                    </div>
                                    <span className="text-xs text-secondary font-normal">
                                        {/* {date} */}
                                        {format(new Date(date), 'MMMM d, yyyy')}
                                    </span>
                                </div>
                                <h3 className="text-secondary font-semibold text-lg">{title}</h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </main>
        </>
    )
}