export default function JoinCommunity() {
    return (
        <>
            <main className="relative bg-blue-100 py-10">
                <div 
                    className="relative w-full h-96 bg-center bg-cover" 
                    style={{ 
                        backgroundImage: `url('/home/join-comm.png')` 
                    }}
                >
                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black via-black/40 to-black/1"></div>
                    <div className="relative flex flex-col justify-end items-center h-full text-center text-white px-4 pb-10">
                        <h2 className="text-4xl md:text-4xl font-semibold mb-2">Join our community of care</h2>
                        <p className="text-sm mb-4">At Kind Heart Services, we&apos;re here to provide compassionate and personalized care to you or your loved ones.</p>
                        <button className="bg-secondary text-white text-sm py-2 px-4 rounded-full">Join our Team</button>
                    </div>
                </div>
            </main>
        </>
    )
}
