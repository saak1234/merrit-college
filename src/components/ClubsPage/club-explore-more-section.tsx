import { FC } from "react";
import Image from "next/image";


export type Club = {
    name: string;
    description: string;
    image: string;
    detailedContent: string;
    buttonLabel: string;
};


interface ClubExploreMoreProps {
    clubs: Club[];
    onClubClick: (club: Club) => void;
}

const ClubExploreMoreSection: FC<ClubExploreMoreProps> = ({ clubs, onClubClick }) => {
    return (
        <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-green-900">Explore More</h2>
                    <p className="text-lg text-green-900 mt-4">
                        Discover our vibrant student clubs and choose your passion.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {clubs.map((club, index) => (
                        <div
                            key={index}
                            onClick={() => onClubClick(club)}
                            className="relative group rounded-lg overflow-hidden shadow-md bg-white hover:scale-105 transition transform duration-300 cursor-pointer"
                        >
                            <Image
                                src={club.image}
                                alt={club.name}
                                width={300}
                                height={200}
                                className="w-full h-48 object-cover"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-20 group-hover:opacity-100 transition duration-300"></div>
                            <div className="absolute bottom-4 left-4 z-10">
                                <h3 className="text-xl text-white font-bold">{club.name}</h3>
                                <p className="text-sm text-white mt-2 font-bold">{club.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClubExploreMoreSection;
