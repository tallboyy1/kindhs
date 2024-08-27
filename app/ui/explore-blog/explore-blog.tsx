import Image from "next/image";
import Link from "next/link";
import { format } from 'date-fns';

import { sanityClient } from "@/sanity/lib/client";

export const revalidate = 30; //revalidate every 30 seconds. this enables new stuff to show and prevents the default next js caching behavior


interface blogInterface {
    title: string;
    by: string;
    date: string;
    currentSlug: string;
}
  
// const blogData: BlogItem[] = [
//     {
//         title: "The importance of home nursing care",
//         namePosition: "Amanda Reed, RN",
//         date: "May 23, 2024",
//         slug: "the-importance-of-home-nursing-care",
//     },
//     {
//         title: "The importance of home nursing care",
//         namePosition: "Amanda Reed, RN",
//         date: "May 23, 2024",
//         slug: "the-importance-of-home-nursing-care",
//     },
//     {
//         title: "The importance of home nursing care",
//         namePosition: "Amanda Reed, RN",
//         date: "May 23, 2024",
//         slug: "the-importance-of-home-nursing-care",
//     },
// ];

async function getData(){
    const query = `
        *[_type == "blog"] | order(_createdAt desc){
            title,
            by,
            date,
            "currentSlug": slug.current
        }`;

    const data = await sanityClient.fetch(query);

    return data;
}

export default async function ExploreBlog() {

    const blogData: blogInterface[] = await getData();

    return (
        <>
            <main className="p-4 md:p-8">
                <h2 className="text-2xl font-semibold">Explore our <span className="text-blue">blog</span></h2>
                <div>
                    {blogData.map((blog) => (
                        <Link key={blog.currentSlug} href={`/blog/${blog.currentSlug}`}>
                            <div className="py-8 border-b border-black">
                                <h4 className="text-lg md:text-sm font-medium">{blog.title}</h4>
                                <div className="flex-none md:flex items-center">
                                    <div className="basis-2/3">
                                        <span className="text-xs font-normal">{blog.by}</span>
                                    </div>
                                    <div className="basis-1/3 flex justify-between">
                                        <div><span className="text-xs font-normal">
                                            {/* {blog.date} */}
                                            {format(new Date(blog.date), 'MMMM d, yyyy')}
                                        </span></div>
                                        <div className="my-auto">
                                            <Image 
                                                src={"/home/explore-blog-arrow.png"} 
                                                alt="explore blog arrow"
                                                width={30} 
                                                height={30}
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