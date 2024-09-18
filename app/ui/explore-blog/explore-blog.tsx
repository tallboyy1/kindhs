import Image from "next/image";
import Link from "next/link";
import { format } from 'date-fns';

export const revalidate = 0;
// export const dynamic = "force-dynamic";

interface blogInterface {
    title: string;
    namePosition: string;
    date: string;
    slug: string;
}

const slugify = (title: string) => {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
};
  
const blogData: blogInterface[] = [
    {
        title: "Tips for managing medications at home",
        namePosition: "Amanda Reed, RN",
        date: "May 23, 2024",
        slug: slugify("Tips for managing medications at home"),
    },
    {
        title: "Healthy aging: lifestyle tips for seniors",
        namePosition: "Amanda Reed, RN",
        date: "May 23, 2024",
        slug: slugify("Healthy aging: lifestyle tips for seniors"),
    },
    {
        title: "The importance of home nursing care",
        namePosition: "Amanda Reed, RN",
        date: "May 23, 2024",
        slug: slugify("The importance of home nursing care"),
    },
];

// async function getData(){
//     const query = `
//         *[_type == "blog"] | order(_createdAt desc){
//             title,
//             by,
//             date,
//             "currentSlug": slug.current
//         }`;

//     const data = await sanityClient.fetch(query);

//     return data;
// }

export default function ExploreBlog() {

    // const blogData: blogInterface[] = await getData();

    return (
        <>
            <main className="p-4 md:p-8">
                <h2 className="text-2xl font-semibold">Explore our <span className="text-blue">blog</span></h2>
                <div>
                    {blogData.map((blog) => (
                        <Link key={blog.slug} href={`/blog/${blog.slug}`}>
                            <div className="py-8 border-b border-black">
                                <h4 className="text-lg md:text-sm font-medium">{blog.title}</h4>
                                <div className="flex-none md:flex items-center">
                                    <div className="basis-2/3">
                                        <span className="text-xs font-normal">{blog.namePosition}</span>
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