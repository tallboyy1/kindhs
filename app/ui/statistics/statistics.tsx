export default function Statistics() {
    return (
        <>
            <main className="w-9/12 my-20 mx-auto bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="mb-10 lg:mb-0 text-center">
                    <h1 className="text-secondary w-max mx-auto text-6xl font-bold">300</h1>
                    <span className="text-blue w-max text-sm">Patients served</span>
                </div>

                <div className="mb-10 lg:mb-0 text-center">
                    <h1 className="text-secondary w-max mx-auto text-6xl font-bold">30</h1>
                    <span className="text-blue w-max text-sm">Caregivers</span>
                </div>

                <div className="mb-10 lg:mb-0 text-center">
                    <h1 className="text-secondary w-max mx-auto text-6xl font-bold">10</h1>
                    <span className="text-blue w-max text-sm">Service offered</span>
                </div>

                <div className=" text-center">
                    <h1 className="text-secondary w-max mx-auto text-6xl font-bold">95%</h1>
                    <span className="text-blue w-max text-sm">Client Satisfaction</span>
                </div>
            </main>
        </>
    )
}