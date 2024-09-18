"use client";
import Image from "next/image";

interface DedicatedTeam {
    name: string;
    position: string;
    image: string;
}

const teamData: DedicatedTeam[] = [
    {
        name: "Amanda Reed",
        position: "Chief Executive Officer",
        image: "/team/team-1.png",
    },
    {
        name: "Amanda Reed",
        position: "IDD Program Director",
        image: "/team/team-2.png",
    },
    {
        name: "Amanda Reed",
        position: "IDD Programme Specialist",
        image: "/team/team-3.png",
    },
    {
        name: "Amanda Reed",
        position: "IDD Programme Manager",
        image: "/team/team-4.png",
    }
]

export default function DedicatedTeamNBG () {



    return (
        <>
            <main className="bg-white py-12">
                <div className="w-10/12 mx-auto">
                    <h2 className="text-3xl font-semibold text-secondary md:ml-4 text-center md:text-left">Meet our dedicated <span className="text-blue">team</span></h2>
                    {/* <div className="my-20 mx-auto bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-around"> */}
                    <div className="mt-10 flex-none md:flex flex-wrap gap-4">
                        {teamData.map((team, index) => (
                            <div key={index} className={`w-64 mx-auto mb-12 md:mb-0 overflow-hidden`}>
                            <img 
                            src={team.image} 
                            alt={`${team.name} 's picture`} 
                            style={{
                                width: "100%",
                                height: "auto",
                            }}/>
                            <div className={`mt-4 pl-4`}>
                                <p className="text-lg font-semibold">{team.name}</p>
                                <p className="text-xs">{team.position}</p>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </main>
        </>
    )
}