import BlogCard from "@/app/ui/blog-card/blog-card";
import Bubble from "@/app/ui/bubble-label/bubble-label";
import Image from "next/image";
import { notFound } from "next/navigation";
import { useRouter } from "next/router";
import { sanityClient } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from '@portabletext/react';

export const revalidate = 0;
export const dynamic = "force-dynamic";

interface blogInterface {
    currentSlug: string;
    title: string;
    tag: string;
    coverImage: any;
    content: any;
}

async function getData(slug: string){
    const query = `
        *[_type == "blog" && slug.current == '${slug}'] {
            "currentSlug": slug.current,
            title,
            tag,
            coverImage,
            content,
        }[0]`;

    const data = await sanityClient.fetch(query);
    return data;
}

export default async function BlogDetailsPage({ params, }: { params: { slug: string }; }) {
    const { slug } = params;
    
    const blogDetails: blogInterface = await getData(slug);

    if (!blogDetails) {
        notFound();
    }
    return (
        <div>
            <section className="bg-secondary py-8 text-center flex flex-col-reverse md:flex-col items-center justify-center" style={{height: "70vh"}}>
                <p className="text-white text-sm">{blogDetails.tag}</p>
                <h1 className="text-white text-1xl mb-4 mt-10 md:text-3xl lg:text-5xl font-bold">{blogDetails.title}</h1>
            </section>

            <div className="relative flex justify-center -mt-32 md:-mt-40">
                <div className="relative w-full max-w-xs new-tiny:max-w-xs md:max-w-3xl lg:max-w-5xl">
                    <Image
                        src={urlFor(blogDetails.coverImage).url()}
                        alt="Home Nursing Care"
                        width={1000}
                        height={60}
                        className="rounded-xl object-cover aspect-[16/9] md:aspect-[16/9"
                        priority={true}
                        style={{
                            // aspectRatio: "16/6",
                            objectFit: "cover"
                        }}
                    />
                </div>
            </div>

            <section className="mx-auto w-full py-8 px-4 max-w-3xl md:max-w-3xl lg:max-w-5xl">
                {/* <div className="text-left text-xs md:text-md font-normal leading-10"> */}
                <div className="text-left leading-10 prose prose-black prose-sm prose-li:marker:text-secondary prose-a:text-blue prose-a:underline max-w-3xl md:max-w-3xl lg:max-w-5xl mx-auto">
                    <PortableText value={blogDetails.content} />
                </div>
            </section>

            <div className="my-12">
                <h3 className="text-lg md:text-2xl font-bold text-center">Recent Blog</h3>
                <div className="mt-14">
                    <BlogCard />
                </div>
            </div>
        </div>
    );
}
