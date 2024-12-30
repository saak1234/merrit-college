"use client";

import { useState } from "react";
import { PlusCircle, MinusCircle } from "lucide-react";
import Image from "next/image"

const eventsData = [
    {
        id: 1,
        title: "Working with the greater than/less than equations",
        date: "12-12-2024",
        time: "7:00 PM",
        location: "North York",
        image: "/campus-life-1.jpg",
        description:
            "This is the first item's accordion body. It is shown by default until the collapse plugin adds the appropriate classes to style each element. These classes control the appearance as well as showing and hiding via CSS transitions.",
    },
    {
        id: 2,
        title: "Introduction to Advanced Calculus",
        date: "15-12-2024",
        time: "6:30 PM",
        location: "Downtown Toronto",
        image: "/campus-life-2.jpg",
        description:
            "Learn the fundamentals of advanced calculus, explore its applications, and understand its significance in various fields.",
    },
    {
        id: 3,
        title: "Interactive Physics Workshop",
        date: "20-12-2024",
        time: "5:00 PM",
        location: "Vancouver",
        image: "/campus-life-3.jpg",
        description:
            "Join us for an interactive physics workshop focusing on real-world applications and hands-on experiments to enhance your learning experience.",
    },
];

const UpcomingEvents = () => {
    const [activeEvent, setActiveEvent] = useState<number | null>(null);

    const toggleEvent = (id: number) => {
        setActiveEvent(activeEvent === id ? null : id);
    };

    return (
        <div className="bg-secondary-green2 w-full">
            <section className="py-8 justify-center mx-auto w-full px-4 sm:px-6 lg:max-w-[60vw]">
                <div className="container mx-auto">
                    <h2 className="text-2xl sm:text-3xl font-bold text-green-shade mb-6 text-center">
                        Upcoming Event
                    </h2>

                    <div className="space-y-4 sm:space-y-6">
                        {eventsData.map((event) => (
                            <div
                                key={event.id}
                                className={`border border-green-900 rounded-lg shadow-md p-3 sm:p-4 ${
                                    activeEvent === event.id ? "bg-green-50" : "bg-white"
                                }`}
                            >
                                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                                    <Image
                                        src={event.image}
                                        alt={event.title}
                                        width={96}
                                        height={96}
                                        className="w-full sm:w-24 h-48 sm:h-24 rounded-md object-cover"
                                    />
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-green-shade mb-2">
                                            {event.title}
                                        </h3>
                                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-gray-600">
                                            <p>{event.date}</p>
                                            <p className="hidden sm:block">•</p>
                                            <p>{event.time}</p>
                                            <p className="hidden sm:block">•</p>
                                            <p>{event.location}</p>
                                        </div>
                                    </div>
                                    <button 
                                        onClick={() => toggleEvent(event.id)}
                                        className="self-start sm:self-center"
                                    >
                                        {activeEvent === event.id ? (
                                            <MinusCircle className="w-6 h-6 text-green-shade" />
                                        ) : (
                                            <PlusCircle className="w-6 h-6 text-green-shade" />
                                        )}
                                    </button>
                                </div>
                                {activeEvent === event.id && (
                                    <div className="mt-4 text-gray-700 text-sm sm:text-base">
                                        <p>{event.description}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default UpcomingEvents;
