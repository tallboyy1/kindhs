import Image from "next/image";
import Link from "next/link";


interface BlogItem {
    title: string;
    namePosition: string;
    date: string;
    slug: string;
}
  
const blogData: BlogItem[] = [
    {
        title: "The importance of home nursing care",
        namePosition: "Amanda Reed, RN",
        date: "May 23, 2024",
        slug: "the-importance-of-home-nursing-care",
    },
    {
        title: "The importance of home nursing care",
        namePosition: "Amanda Reed, RN",
        date: "May 23, 2024",
        slug: "the-importance-of-home-nursing-care",
    },
    {
        title: "The importance of home nursing care",
        namePosition: "Amanda Reed, RN",
        date: "May 23, 2024",
        slug: "the-importance-of-home-nursing-care",
    },
];

export default function ExploreBlog() {
    return (
        <>
            <main className="p-4 md:p-8">
                <h2 className="text-xl font-semibold">Explore our <span className="text-blue">blog</span></h2>
                <div>
                    {blogData.map((blog, index) => (
                        <Link key={index} href={`/blog/${blog.slug}`}>
                            <div className="py-8 border-b border-black">
                                <h4 className="text-lg md:text-sm font-medium">{blog.title}</h4>
                                <div className="flex-none md:flex items-center">
                                    <div className="basis-2/3">
                                        <span className="text-xs font-normal">{blog.namePosition}</span>
                                    </div>
                                    <div className="basis-1/3 flex justify-between">
                                        <div><span className="text-xs font-normal">{blog.date}</span></div>
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