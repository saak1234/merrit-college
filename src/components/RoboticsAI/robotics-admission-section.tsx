"use client";

import { FC } from "react";
import {Bot} from "lucide-react";

const admissions = [
    {
        date: "01",
        month: "APRIL",
        title: "Kidbots for Juniors",
        time: "10:30 - 14:00",
        color: "bg-green-900 text-white",
        icon: Bot,
    },
    {
        date: "22",
        month: "APRIL",
        title: "Robotics LEGO Mindstorms® EV3",
        time: "10:30 - 14:00",
        color: "bg-green-900 text-white",
        icon: Bot,
    },
    {
        date: "29",
        month: "APRIL",
        title: "Robotics LEGO WEDO® 2.0",
        time: "10:30 - 14:00",
        color: "bg-green-900 text-white",
        icon: Bot,
    },
];

const RoboticsAdmissionSection: FC = () => {
    return (
        <section className="py-16 bg-gray-200">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-10">
                    <span className="text-green-900 font-semibold uppercase tracking-wide">
                        Schedule
                    </span>
                    <h2 className="text-4xl font-bold text-green-900 mt-2">
                        Admission.
                    </h2>
                    <p className="text-gray-700 mt-4 text-lg">
                        We are announcing the new groups you can join very soon!
                    </p>
                </div>

                {/* Admission List */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {admissions.map((admission, index) => (
                        <div
                            key={index}
                            className="relative flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition-all duration-300"
                        >
                            {/* Top Section */}
                            <div
                                className={`w-full h-24 ${admission.color} flex items-center justify-center`}
                            >
                                <Bot/>
                            </div>

                            {/* Content */}
                            <div className="p-6 text-center">
                                <div className="flex items-center justify-center gap-2 mb-4">
                                    <div className="text-4xl font-bold text-green-900">
                                        {admission.date}
                                    </div>
                                    <div className="text-sm text-red-500 uppercase font-semibold">
                                        {admission.month}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-green-900 mb-2">
                                    {admission.title}
                                </h3>
                                <p className="text-gray-600 mb-4">{admission.time}</p>

                                <button className="bg-green-900 text-white py-2 px-6 rounded-lg font-semibold hover:bg-green-700 transition">
                                    Join Group
                                </button>

                            </div>

                            {/* Decorative Overlay */}
                            <div
                                className="absolute inset-0 from-transparent via-transparent to-gray-100 pointer-events-none opacity-70"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RoboticsAdmissionSection;
