"use client";

import Image from "next/image";
import {FC} from "react";

interface ClubDescriptionProps {
    imageSrc: string;
    title: string;
    content: string;
    buttonLabel: string;
    onButtonClick: () => void;
}

const ClubDescription: FC<ClubDescriptionProps> = ({
                                                       imageSrc,
                                                       title,
                                                       content,
                                                       buttonLabel,
                                                       onButtonClick,
                                                   }) => {
    return (
        <section className="bg-gray-200 py-12">
            <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-8">
                {/* Image Section */}
                <div className="lg:w-1/2 flex justify-center">
                    <div className="relative w-full h-64 lg:h-96 rounded-lg overflow-hidden shadow-md">
                        <Image
                            src={imageSrc}
                            alt={title}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                        />
                    </div>
                </div>

                {/* Text Content Section */}
                <div className="lg:w-1/2 text-center lg:text-left space-y-6">
                    <h2 className="text-3xl font-bold text-green-900">{title}</h2>
                    <p className="text-green-900 text-lg">{content}</p>
                    <button
                        onClick={onButtonClick}
                        className="px-6 py-3 bg-green-900 text-white rounded-lg shadow-md hover:bg-green-700 transition"
                    >
                        {buttonLabel}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ClubDescription;
