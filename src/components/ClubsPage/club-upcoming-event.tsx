"use client";

import { useState } from "react";
import { PlusCircle, MinusCircle } from "lucide-react";
import Image from "next/image";
const clubEventsData = [
    {
        id: 1,
        title: "Chess Club Tournament Finals",
        date: "15-01-2025",
        time: "2:00 PM",
        location: "Student Center",
        image: "/club-event-1.jpg",
        description:
            "Join us for the exciting finals of our annual chess tournament. Watch the top players compete for the championship title. Refreshments will be served, and all club members are welcome to attend and support their fellow players.",
    },
    {
        id: 2,
        title: "Chess Strategy Workshop",
        date: "20-01-2025",
        time: "4:30 PM",
        location: "Room 204",
        image: "/club-event-2.jpg",
        description:
            "Learn advanced chess strategies from our club's senior members. This workshop will cover opening techniques, middle game tactics, and endgame strategies. Perfect for both beginners and intermediate players.",
    },
    {
        id: 3,
        title: "Friendly Match Night",
        date: "25-01-2025",
        time: "6:00 PM",
        location: "Recreation Hall",
        image: "/club-event-3.jpg",
        description:
            "A casual evening of chess matches and socializing. Bring your own board or use the club's equipment. This is a great opportunity to practice your skills and meet other chess enthusiasts.",
    },
];

const ClubUpcomingEvents = () => {
    const [activeEvent, setActiveEvent] = useState<number | null>(null);

    const toggleEvent = (id: number) => {
        setActiveEvent(activeEvent === id ? null : id);
    };

    return (
        <div className="bg-secondary-green max-w-full">
            <section className="py-8 justify-center mx-auto max-w-[60vw]">
                <div className="container mx-auto px-6">
                    {/* Heading */}
                    <h2 className="text-3xl font-bold text-green-shade mb-4 text-center">
                        Club Events
                    </h2>

                    {/* Event Cards */}
                    <div className="space-y-6">
                        {clubEventsData.map((event) => (
                            <div
                                key={event.id}
                                className={`border border-green-300 rounded-lg shadow-md p-3 ${
                                    activeEvent === event.id ? "bg-blue-50" : "bg-white"
                                }`}
                            >
                                {/* Header */}
                                <div className="flex items-center">
                                    {/* Image */}
                                    <Image
                                        src={event.image}
                                        alt={event.title}
                                        width={100}
                                        height={100}
                                        className="w-24 h-24 rounded-md mr-4 object-cover"
                                    />
                                    {/* Content */}
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-green-shade">
                                            {event.title}
                                        </h3>
                                        <div className="flex items-center text-gray-600 space-x-4">
                                            <p>{event.date}</p>
                                            <p>{event.time}</p>
                                            <p>{event.location}</p>
                                        </div>
                                    </div>
                                    {/* Expand/Collapse Icon */}
                                    <button onClick={() => toggleEvent(event.id)}>
                                        {activeEvent === event.id ? (
                                            <MinusCircle className="w-6 h-6 text-green-shade" />
                                        ) : (
                                            <PlusCircle className="w-6 h-6 text-green-shade" />
                                        )}
                                    </button>
                                </div>
                                {/* Collapsible Content */}
                                {activeEvent === event.id && (
                                    <div className="mt-4 text-gray-700">
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

export default ClubUpcomingEvents;
