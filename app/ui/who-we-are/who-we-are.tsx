import Bubble from "../bubble-label/bubble-label";

export default function WhoWeAre() {
    return(
        <>
            <main className="w-10/12 bg-white my-14 flex-none md:flex mx-auto gap-6">
                <div className="mt-auto mb-4 md:mb-0">
                    <img 
                        src="/home/who-we-are-1.png" 
                        alt=""
                         className="rounded-3xl"
                    />
                </div>
                <div className="mb-8 md:mb-0">
                    <img 
                        src="/home/who-we-are-2.png" 
                        alt="" className="rounded-3xl"
                    />
                </div>
                <div className="my-auto ml-0 md:ml-8">
                    <div>
                        <Bubble text="Who we are"/>
                        <h2 className="text-3xl md:text-2xl font-bold my-3">About Kind Heart Services</h2>
                        <p className="text-xs leading-7 font-light">Kind Heart Services, LLC is a human Service company that provides residential services to individuals with intellectual developmental disabilities in Pennsylvania. We are committed to providing quality care and exceptional services to the individuals and families we serve.</p>
                        <button className="bg-secondary text-white text-xs mt-3 py-2 px-6 rounded-full">Learn more</button>
                    </div>
                </div>
            </main>
        </>
    )
}