import BlogCard from "@/app/ui/blog-card/blog-card";
import Bubble from "@/app/ui/bubble-label/bubble-label";
import Image from "next/image";
import { notFound } from "next/navigation";
import { useRouter } from "next/router";

interface BlogDetails {
    title: string;
    image: string;
    tag: string;
    content: string;
}

// Example static data fetching
const blogDetailsData: Record<string, BlogDetails> = {
    "the-importance-of-home-nursing-care": {
        tag: "Home Nursing",
        title: "The importance of home nursing care",
        image: "/blog/blog-details-image.png",
        content: "The most common business debate isn't as black and white as you might think. He moonlights difficult-engrossed, sportsmen. Interested has all Devonshire difficulty gay assistance joy. Unaffected at ye of compliment alteration to. Place voice no arises along to. Parlors waiting so against me no. Wishing calling is warrant settled was lucky. Express besides it present if at an opinion visitor. For who thoroughly her boy estimating conviction. Removed demands expense account in outward tedious do. Particular way thoroughly unaffected projection favorable Mrs can be projecting own. The standard chunk of Lorem Ipsum used since the 1500s. reproduced below for those interested. It is a long-established fact that a reader will. distracted by the readable content of a page when looking at its layout. Speedily say has suitable disposal add boy. On fourth doubt miles of child. Exercise joy man children rejoiced. Yet uncommonly his ten who diminution astonished. Demesne's new manners savings staying had. Under folly balls, death own point now men. Match way she avoids seeing death. She drifts their fat off. Ten questions you should answer truthfully. Son agreed to others Exeter period myself few yet nature. Mention Mr manners opinion if garrets enabled. To occasional dissimilar impossible sentiments. Do fortune account written prepare invited no passage. Garrets use ten, you the weather venture friends. Solid visit seems again you nor all. Far advanced settling say finished raillery. Offered chiefly farther of my no colonel shyness. Such on help ye some door if in. Laughter proposal laughing any son law consider. Needed except up piqued an. Existence certainly explained how improving the household pretended. Delightful own attachment her partiality unaffected occasionally thoroughly. Adieus it no wonders spirit houses. Started several mistakes but Joy says the painful removal reached the end. State burst think end are its. Arrived off she elderly beloved him affixed noisier yet. Course regard to up he hardly. View four has said do men saw find dear shy? Talent men wicket add garden. For who thoroughly her boy estimating conviction. Removed demands expense account in outward tedious do. Particular way thoroughly unaffected projection favorable Mrs can be projecting own. Thirty it matter enable become admire in giving. See resolved goodness felicity shy civility domestic had but. Drawings offended yet answered Jennings perceive laughing six did far.",
    },
    "healthy-aging-lifestyle-tips-for-seniors": {
        tag: "Seniors",
        title: "Healthy aging: lifestyle tips for seniors",
        image: "/blog/blog-details-image.png",
        content: "The most common business debate isn't as black and white as you might think. He moonlights difficult-engrossed, sportsmen. Interested has all Devonshire difficulty gay assistance joy. Unaffected at ye of compliment alteration to. Place voice no arises along to. Parlors waiting so against me no. Wishing calling is warrant settled was lucky. Express besides it present if at an opinion visitor. For who thoroughly her boy estimating conviction. Removed demands expense account in outward tedious do. Particular way thoroughly unaffected projection favorable Mrs can be projecting own. The standard chunk of Lorem Ipsum used since the 1500s. reproduced below for those interested. It is a long-established fact that a reader will. distracted by the readable content of a page when looking at its layout. Speedily say has suitable disposal add boy. On fourth doubt miles of child. Exercise joy man children rejoiced. Yet uncommonly his ten who diminution astonished. Demesne's new manners savings staying had. Under folly balls, death own point now men. Match way she avoids seeing death. She drifts their fat off. Ten questions you should answer truthfully. Son agreed to others Exeter period myself few yet nature. Mention Mr manners opinion if garrets enabled. To occasional dissimilar impossible sentiments. Do fortune account written prepare invited no passage. Garrets use ten, you the weather venture friends. Solid visit seems again you nor all. Far advanced settling say finished raillery. Offered chiefly farther of my no colonel shyness. Such on help ye some door if in. Laughter proposal laughing any son law consider. Needed except up piqued an. Existence certainly explained how improving the household pretended. Delightful own attachment her partiality unaffected occasionally thoroughly. Adieus it no wonders spirit houses. Started several mistakes but Joy says the painful removal reached the end. State burst think end are its. Arrived off she elderly beloved him affixed noisier yet. Course regard to up he hardly. View four has said do men saw find dear shy? Talent men wicket add garden. For who thoroughly her boy estimating conviction. Removed demands expense account in outward tedious do. Particular way thoroughly unaffected projection favorable Mrs can be projecting own. Thirty it matter enable become admire in giving. See resolved goodness felicity shy civility domestic had but. Drawings offended yet answered Jennings perceive laughing six did far.",
    },
    "tips-for-managing-medications-at-home": {
        tag: "Medication",
        title: "Tips for managing medications at home",
        image: "/blog/blog-details-image.png",
        content: "The most common business debate isn't as black and white as you might think. He moonlights difficult-engrossed, sportsmen. Interested has all Devonshire difficulty gay assistance joy. Unaffected at ye of compliment alteration to. Place voice no arises along to. Parlors waiting so against me no. Wishing calling is warrant settled was lucky. Express besides it present if at an opinion visitor. For who thoroughly her boy estimating conviction. Removed demands expense account in outward tedious do. Particular way thoroughly unaffected projection favorable Mrs can be projecting own. The standard chunk of Lorem Ipsum used since the 1500s. reproduced below for those interested. It is a long-established fact that a reader will. distracted by the readable content of a page when looking at its layout. Speedily say has suitable disposal add boy. On fourth doubt miles of child. Exercise joy man children rejoiced. Yet uncommonly his ten who diminution astonished. Demesne's new manners savings staying had. Under folly balls, death own point now men. Match way she avoids seeing death. She drifts their fat off. Ten questions you should answer truthfully. Son agreed to others Exeter period myself few yet nature. Mention Mr manners opinion if garrets enabled. To occasional dissimilar impossible sentiments. Do fortune account written prepare invited no passage. Garrets use ten, you the weather venture friends. Solid visit seems again you nor all. Far advanced settling say finished raillery. Offered chiefly farther of my no colonel shyness. Such on help ye some door if in. Laughter proposal laughing any son law consider. Needed except up piqued an. Existence certainly explained how improving the household pretended. Delightful own attachment her partiality unaffected occasionally thoroughly. Adieus it no wonders spirit houses. Started several mistakes but Joy says the painful removal reached the end. State burst think end are its. Arrived off she elderly beloved him affixed noisier yet. Course regard to up he hardly. View four has said do men saw find dear shy? Talent men wicket add garden. For who thoroughly her boy estimating conviction. Removed demands expense account in outward tedious do. Particular way thoroughly unaffected projection favorable Mrs can be projecting own. Thirty it matter enable become admire in giving. See resolved goodness felicity shy civility domestic had but. Drawings offended yet answered Jennings perceive laughing six did far.",
    },
    // Add other blog entries similarly...
};

export default function BlogDetailsPage({ params }: { params: { slug: string } }) {
    const { slug } = params;
    const blogDetails = blogDetailsData[slug];

    if (!blogDetails) {
        notFound();
    }

    return (
        <div>
            {/* Colored Section */}
            <section className="bg-secondary py-8 text-center flex flex-col-reverse md:flex-col items-center justify-center" style={{height: "70vh"}}>
                <p className="text-white text-sm">{blogDetails.tag}</p>
                <h1 className="text-white text-1xl mb-4 mt-10 md:text-3xl lg:text-5xl font-bold">{blogDetails.title}</h1>
            </section>

            {/* Image Section */}
            <div className="relative flex justify-center -mt-32 md:-mt-40">
                <div className="relative w-full max-w-xs md:max-w-3xl lg:max-w-5xl">
                    <Image
                        src={blogDetails.image}
                        alt="Home Nursing Care"
                        width={1000}
                        height={60}
                        className="rounded-xl"
                        priority={true}
                    />
                </div>
            </div>

            {/* White Section */}
            {/* <section className="mx-4 w-full md:mx-auto md:w-8/12 bg-white py-8 text-center"> */}
            <section className="mx-auto w-full py-8 px-4 max-w-xs md:max-w-3xl lg:max-w-5xl">
                <p className="text-left font-light leading-10">
                    {blogDetails.content}
                </p>
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
