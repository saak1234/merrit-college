"use client";

import { FC, useState, useEffect } from "react";
import Image from "next/image";
import GlobalButton from "@/components/ui/global-button";
import { X } from "lucide-react"; 

export type Club = {
    name: string;
    description: string;
    image: string;
    detailedContent: string;
    buttonLabel: string;
};

interface ClubSectionProps {
    clubs: Club[];
}

const ClubExploreMoreSection: FC<ClubSectionProps> = ({ clubs }) => {
    const [selectedClub, setSelectedClub] = useState<Club | null>(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);

        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const handleClubClick = (club: Club) => {
        setSelectedClub(club);
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    const PopupModalContent = () => (
        <>
            <div className="fixed inset-0 z-40 bg-black/50"></div>
            <div className="fixed inset-0 z-50 flex items-center justify-center">
                <div className="bg-white w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 max-h-[80vh] overflow-auto rounded-lg shadow-lg">
                    <div className="flex justify-between items-center p-4 border-b">
                        <h2 className="text-lg font-bold text-green-900">
                            {selectedClub?.name}
                        </h2>
                        <button
                            className="p-2 rounded-full text-green-900 hover:bg-gray-100"
                            onClick={handleClosePopup}
                        >
                            <X size={24} />
                        </button>
                    </div>
                    <div className="p-4">
                        {selectedClub && (
                            <>
                                <div className="relative w-full h-64 mb-4">
                                    <Image
                                        src={selectedClub.image}
                                        alt={selectedClub.name}
                                        fill
                                        className="object-cover rounded-lg"
                                    />
                                </div>
                                <p className="text-green-shade">
                                    {selectedClub.detailedContent}
                                </p>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );

    return (
        <>
            <section className="bg-secondary-green2 p-12">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="text-center mb-12 space-y-4">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-900">
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
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                                        {club.name}
                                    </h3>
                                    <p className="text-white/90 text-sm mb-4 line-clamp-2">
                                        {club.description}
                                    </p>
                                    <GlobalButton onClick={() => handleClubClick(club)}>
                                        Explore More
                                    </GlobalButton>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {!isMobile && selectedClub && (
                <section className="bg-secondary-green2 py-12">
                    <div className="container mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center gap-8">
                        <div className="lg:w-1/2 w-full flex justify-center">
                            <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden shadow-md">
                                <Image
                                    src={selectedClub.image}
                                    alt={selectedClub.name}
                                    fill
                                    className="object-cover rounded-lg"
                                />
                            </div>
                        </div>
                        <div className="lg:w-1/2 w-full text-center lg:text-left space-y-4">
                            <h2 className="text-2xl sm:text-3xl font-bold text-green-900">
                                {selectedClub.name}
                            </h2>
                            <p className="text-green-shade text-base sm:text-lg">
                                {selectedClub.detailedContent}
                            </p>
                        </div>
                    </div>
                </section>
            )}

            {isPopupOpen && isMobile && <PopupModalContent />}
        </>
    );
};

export default ClubExploreMoreSection;
