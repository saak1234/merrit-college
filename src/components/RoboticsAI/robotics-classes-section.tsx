"use client";

import Image from "next/image";

const classes = [
    {
        title: "Extreme Robot Engineering.",
        description:
            "Children will learn how to create robots that can climb walls, wobble in waves, etc.",
        image: "/robotics-class-1.webp",
    },
    {
        title: "Robotics LEGO WEDO® 2.0.",
        description:
            "This course introduces Robotics to children using the Lego WeDo 2.0 training kit.",
        image: "/robotics-class-2.webp",
    },
    {
        title: "Kidbots for Juniors.",
        description:
            "This course is a great introduction for 1st and 2nd graders interested in robotics.",
        image: "/robotics-class-3.webp",
    },
];

const RoboticsClassesSection = () => {
    return (
        <section className="bg-gray-200 py-16">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-10">
                    <span className="text-green-600 font-semibold uppercase tracking-wide">
                        Classes
                    </span>
                    <h2 className="text-4xl font-bold text-black mt-2">
                        What Your Children Do at RoboTech.
                    </h2>
                    <p className="text-gray-700 mt-4 text-lg">
                        We have created a place to study, learn new things, and have fun with
                        other kids.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {classes.map((classItem, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center bg-gray-50 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105"
                        >
                            <Image
                                src={classItem.image}
                                alt={classItem.title}
                                width={400}
                                height={250}
                                className="rounded-lg shadow-md"
                            />
                            <h3 className="text-xl font-bold text-black mt-4">
                                {classItem.title}
                            </h3>
                            <p className="text-gray-600 mt-2 text-center">
                                {classItem.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RoboticsClassesSection;
