import BlogCard from "@/app/ui/blog-card/blog-card";
import Bubble from "@/app/ui/bubble-label/bubble-label";
import Image from "next/image";
import { notFound } from "next/navigation";
// import { useRouter } from "next/router";
// import { sanityClient } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image";
// import { PortableText } from '@portabletext/react';
import { Metadata } from "next";

export const revalidate = 0;
// export const dynamic = "force-dynamic";

interface blogInterface {
    slug: string;
    title: string;
    tag: string;
    image: any;
    content: any;
}

interface Params {
    slug: string;
}

const slugify = (title: string) => {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
};


const blogData: blogInterface[] = [
    {
        title: "The importance of home nursing care",
        image: "/blog/blog-1-image.png",
        tag: "Home Nursing",
        slug: slugify("The importance of home nursing care"),
        content: "The most common business debate isn't as black and white as you might think. He moonlights difficult-engrossed, sportsmen. Interested has all Devonshire difficulty gay assistance joy. Unaffected at ye of compliment alteration to. Place voice no arises along to. Parlors waiting so against me no. Wishing calling is warrant settled was lucky. Express besides it present if at an opinion visitor. For who thoroughly her boy estimating conviction. Removed demands expense account in outward tedious do. Particular way thoroughly unaffected projection favorable Mrs can be projecting own. The standard chunk of Lorem Ipsum used since the 1500s. reproduced below for those interested. It is a long-established fact that a reader will. distracted by the readable content of a page when looking at its layout. Speedily say has suitable disposal add boy. On fourth doubt miles of child. Exercise joy man children rejoiced. Yet uncommonly his ten who diminution astonished. Demesne's new manners savings staying had. Under folly balls, death own point now men. Match way she avoids seeing death. She drifts their fat off. Ten questions you should answer truthfully Son agreed to others Exeter period myself few yet nature. Mention Mr manners opinion if garrets enabled. To occasional dissimilar impossible sentiments. Do fortune account written prepare invited no passage. Garrets use ten, you the weather venture friends. Solid visit seems again you nor all. Far advanced settling say finished raillery. Offered chiefly farther of my no colonel shyness. Such on help ye some door if in. Laughter proposal laughing any son law consider. Needed except up piqued an. Existence certainly explained how improving the household pretended. Delightful own attachment her partiality unaffected occasionally thoroughly. Adieus it no wonders spirit houses. Started several mistakes but Joy says the painful removal reached the end. State burst think end are its. Arrived off she elderly beloved him affixed noisier yet. Course regard to up he hardly. View four has said do men saw find dear shy? Talent men wicket add garden. For who thoroughly her boy estimating conviction. Removed demands expense account in outward tedious do. Particular way thoroughly unaffected projection favorable Mrs can be projecting own. Thirty it matter enable become admire in giving. See resolved goodness felicity shy civility domestic had but. Drawings offended yet answered Jennings perceive laughing six did far.",
    },
    {
        title: "Healthy aging: lifestyle tips for seniors",
        image: "/blog/blog-2-image.png",
        tag: "Seniors",
        slug: slugify("Healthy aging: lifestyle tips for seniors"),
        content: "The most common business debate isn't as black and white as you might think. He moonlights difficult-engrossed, sportsmen. Interested has all Devonshire difficulty gay assistance joy. Unaffected at ye of compliment alteration to. Place voice no arises along to. Parlors waiting so against me no. Wishing calling is warrant settled was lucky. Express besides it present if at an opinion visitor. For who thoroughly her boy estimating conviction. Removed demands expense account in outward tedious do. Particular way thoroughly unaffected projection favorable Mrs can be projecting own. The standard chunk of Lorem Ipsum used since the 1500s. reproduced below for those interested. It is a long-established fact that a reader will. distracted by the readable content of a page when looking at its layout. Speedily say has suitable disposal add boy. On fourth doubt miles of child. Exercise joy man children rejoiced. Yet uncommonly his ten who diminution astonished. Demesne's new manners savings staying had. Under folly balls, death own point now men. Match way she avoids seeing death. She drifts their fat off. Ten questions you should answer truthfully Son agreed to others Exeter period myself few yet nature. Mention Mr manners opinion if garrets enabled. To occasional dissimilar impossible sentiments. Do fortune account written prepare invited no passage. Garrets use ten, you the weather venture friends. Solid visit seems again you nor all. Far advanced settling say finished raillery. Offered chiefly farther of my no colonel shyness. Such on help ye some door if in. Laughter proposal laughing any son law consider. Needed except up piqued an. Existence certainly explained how improving the household pretended. Delightful own attachment her partiality unaffected occasionally thoroughly. Adieus it no wonders spirit houses. Started several mistakes but Joy says the painful removal reached the end. State burst think end are its. Arrived off she elderly beloved him affixed noisier yet. Course regard to up he hardly. View four has said do men saw find dear shy? Talent men wicket add garden. For who thoroughly her boy estimating conviction. Removed demands expense account in outward tedious do. Particular way thoroughly unaffected projection favorable Mrs can be projecting own. Thirty it matter enable become admire in giving. See resolved goodness felicity shy civility domestic had but. Drawings offended yet answered Jennings perceive laughing six did far.",
    },
    {
        title: "Tips for managing medications at home",
        image: "/blog/blog-3-image.png",
        tag: "Medication",
        slug: slugify("Tips for managing medications at home"),
        content: "The most common business debate isn't as black and white as you might think. He moonlights difficult-engrossed, sportsmen. Interested has all Devonshire difficulty gay assistance joy. Unaffected at ye of compliment alteration to. Place voice no arises along to. Parlors waiting so against me no. Wishing calling is warrant settled was lucky. Express besides it present if at an opinion visitor. For who thoroughly her boy estimating conviction. Removed demands expense account in outward tedious do. Particular way thoroughly unaffected projection favorable Mrs can be projecting own. The standard chunk of Lorem Ipsum used since the 1500s. reproduced below for those interested. It is a long-established fact that a reader will. distracted by the readable content of a page when looking at its layout. Speedily say has suitable disposal add boy. On fourth doubt miles of child. Exercise joy man children rejoiced. Yet uncommonly his ten who diminution astonished. Demesne's new manners savings staying had. Under folly balls, death own point now men. Match way she avoids seeing death. She drifts their fat off. Ten questions you should answer truthfully Son agreed to others Exeter period myself few yet nature. Mention Mr manners opinion if garrets enabled. To occasional dissimilar impossible sentiments. Do fortune account written prepare invited no passage. Garrets use ten, you the weather venture friends. Solid visit seems again you nor all. Far advanced settling say finished raillery. Offered chiefly farther of my no colonel shyness. Such on help ye some door if in. Laughter proposal laughing any son law consider. Needed except up piqued an. Existence certainly explained how improving the household pretended. Delightful own attachment her partiality unaffected occasionally thoroughly. Adieus it no wonders spirit houses. Started several mistakes but Joy says the painful removal reached the end. State burst think end are its. Arrived off she elderly beloved him affixed noisier yet. Course regard to up he hardly. View four has said do men saw find dear shy? Talent men wicket add garden. For who thoroughly her boy estimating conviction. Removed demands expense account in outward tedious do. Particular way thoroughly unaffected projection favorable Mrs can be projecting own. Thirty it matter enable become admire in giving. See resolved goodness felicity shy civility domestic had but. Drawings offended yet answered Jennings perceive laughing six did far.",
    },
];


const getBlogBySlug = (slug: string): blogInterface | undefined => {
    return blogData.find((blog) => blog.slug === slug);
};

export function generateMetadata({ params }: { params: Params }): Metadata {
    const blog = getBlogBySlug(params.slug);

    if (!blog) {
        return {
            title: 'Blog not found',
        };
    }

    return {
        title: blog.title,
        description: blog.content,
    };
}




// async function getData(slug: string){
//     const query = `
//         *[_type == "blog" && slug.current == '${slug}'] {
//             "currentSlug": slug.current,
//             title,
//             tag,
//             coverImage,
//             content,
//         }[0]`;

//     const data = await sanityClient.fetch(query);
//     return data;
// }

export default function BlogDetailsPage({ params, }: { params: { slug: string }; }) {
    const blog = getBlogBySlug(params.slug);

    if (!blog) {
        // If no service is found, show a 404 page
        notFound();
    }

    return (
        <div>
            <section className="bg-secondary py-8 text-center flex flex-col-reverse md:flex-col items-center justify-center" style={{height: "70vh"}}>
                <p className="text-white text-sm">{blog.tag}</p>
                <h1 className="text-white text-1xl mb-4 mt-10 md:text-3xl lg:text-5xl font-bold">{blog.title}</h1>
            </section>

            <div className="relative flex justify-center -mt-32 md:-mt-40">
                <div className="relative w-full max-w-xs new-tiny:max-w-xs md:max-w-3xl lg:max-w-5xl">
                    <Image
                        src={blog.image}
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
                    {/* <PortableText value={blog.content} /> */}
                    <p>{blog.content}</p>
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

export async function generateStaticParams() {
    return blogData.map((blog) => ({
        slug: blog.slug,
    }));
}