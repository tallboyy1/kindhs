import Link from "next/link";
import Bubble from "../bubble-label/bubble-label";

interface BlogCard {
    title: string;
    image: string;
    tag: string;
    date: string;
    slug: string;
}

const blogData: BlogCard[] = [
    {
        title: "The importance of home nursing care",
        image: "/blog/blog-1-image.png",
        tag: "Home Nursing",
        date: "January 24, 2024",
        slug: "the-importance-of-home-nursing-care",
    },
    {
        title: "Healthy aging: lifestyle tips for seniors",
        image: "/blog/blog-2-image.png",
        tag: "Seniors",
        date: "January 24, 2024",
        slug: "healthy-aging-lifestyle-tips-for-seniors",
    },
    {
        title: "Tips for managing medications at home",
        image: "/blog/blog-3-image.png",
        tag: "Medication",
        date: "January 24, 2024",
        slug: "tips-for-managing-medications-at-home",
    },
    {
        title: "The importance of home nursing care",
        image: "/blog/blog-1-image.png",
        tag: "Home Nursing",
        date: "January 24, 2024",
        slug: "the-importance-of-home-nursing-care",
    },
    {
        title: "Healthy aging: lifestyle tips for seniors",
        image: "/blog/blog-2-image.png",
        tag: "Seniors",
        date: "January 24, 2024",
        slug: "healthy-aging-lifestyle-tips-for-seniors",
    },
    {
        title: "Tips for managing medications at home",
        image: "/blog/blog-3-image.png",
        tag: "Medication",
        date: "January 24, 2024",
        slug: "tips-for-managing-medications-at-home",
    },
];

export default function BlogCard () {
    return (
        <>
            <main>
                <div className="flex justify-center flex-wrap gap-4">
                    { blogData.map((blog, index) => (
                        <Link key={index} href={`/blog/${blog.slug}`}>
                            <div className="w-72 md:w-96 mb-8">
                                <img src={blog.image} alt="Blog card image" className="rounded-xl" />
                                <div className="flex-none md:flex justify-between items-center mt-4 mb-2 md:mb-4">
                                    <div className="mb-2 md:mb-0">
                                        <Bubble text={blog.tag}/>
                                    </div>
                                    <span className="text-xs text-secondary font-normal">{blog.date}</span>
                                </div>
                                <h3 className="text-secondary font-semibold text-lg">{blog.title}</h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </main>
        </>
    )
}