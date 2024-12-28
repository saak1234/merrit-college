"use client";

import {FC, useState} from "react";
import Image from "next/image";
import ClubDescription from "@/components/ClubsPage/club-description.";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import {Club} from "@/app/students/clubs/page";

export type Club = {
    name: string;
    description: string;
    image: string;
    detailedContent: string;
    buttonLabel: string;
};

interface ClubExploreMoreProps {
    clubs: Club[],
    onClubClick?: (club: Club) => void
}

const ClubExploreMoreSection: FC<ClubExploreMoreProps> = ({clubs, onClubClick}) => {
    const [selectedClub, setSelectedClub] = useState<Club | null>(null);

    const handleClubClick = (club: Club) => {
        setSelectedClub(club);
    };

    return (
        <section className="bg-secondary-green py-16">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center mb-12 space-y-4">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-900">
                        Explore More
                    </h2>
                    <p className="text-base sm:text-lg text-green-shade max-w-2xl mx-auto">
                        Discover our vibrant student clubs and choose your passion.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {clubs.map((club, index) => (
                        <div
                            key={index}
                            className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
                        >
                            <div className="relative h-56 sm:h-64 lg:h-72 w-full">
                                <Image
                                    src={club.image}
                                    alt={club.name}
                                    fill
                                    className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                                />
                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
                            </div>
                            <div
                                className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                                    {club.name}
                                </h3>
                                <p className="text-white/90 text-sm mb-4 line-clamp-2">
                                    {club.description}
                                </p>
                                <button
                                    onClick={() => handleClubClick(club)}
                                    className="w-full px-4 py-2 sm:px-6 sm:py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transform hover:-translate-y-1 transition-all duration-300 shadow-md hover:shadow-lg opacity-0 group-hover:opacity-100"
                                >
                                    Explore More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {selectedClub && (
                    <div className="mt-12">
                        <ClubDescription
                            imageSrc={selectedClub.image}
                            title={selectedClub.name}
                            content={selectedClub.detailedContent}
                        />
                    </div>
                )}
            </div>
        </section>
    );
};

export default ClubExploreMoreSection;
