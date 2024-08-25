import Image from "next/image";

export default function JoinCommunity() {
    return (
        <>
            {/* <main>
                <div className="w-full h-400px absolute">
                    <Image 
                        src={"/home/join-comm.png"} 
                        alt={"Join community of nurses"} 
                        width={700}
                        height={200}
                        style={{
                            // objectFit: "cover",
                            // objectPosition: "center",
                            // width: "100%",
                            // height: "400px",
                        }}
                    />
                </div>
                <div className="absolute top-0 left-auto">
                    <p className="text">Hi htecasdcasdc asd asd ca sdca sd ca sdc as dcasdc ads casd casd casdc asdc as dcas dc asd cas dc asd ca sdca dsc asd ca sdc asd cas dc sd csd fvs dfvdsf vsdfvsdf v sdfvsdfvsdf v sdfvsdfvsdf vsdfvsdfvdsfvsdfvsdfvsdfvsd fv sdfv sdfv sdfvsd fvs dfv sdfv sdfvs  asdcasdcasd asdc asd c asd c asd ca sdc a sdc as dc as dc </p>
                </div>
            </main> */}


<div className="relative bg-blue-100 py-10">
      <div className="relative w-full h-96 bg-center bg-cover" style={{ backgroundImage: "url('/home/join-comm.png')" }}>
        {/* <div className="absolute inset-x-0 bottom-0 h-8 bg-black opacity-70 bg-gradient-to-t from-black to-black-opacity-10"></div> */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black via-black/40 to-black/1"></div>
        <div className="relative flex flex-col justify-end items-center h-full text-center text-white px-4 pb-10">
          <h2 className="text-3xl md:text-2xl font-medium mb-2">Join our community of care</h2>
          <p className="text-sm mb-4">At Nursing Care, we're here to provide compassionate and personalized care to you or your loved ones.</p>
          <button className="bg-secondary text-white text-sm py-2 px-4 rounded-full">Join our Team</button>
        </div>
      </div>
    </div>
        </>
    )
}
