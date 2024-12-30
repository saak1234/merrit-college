"use client";

import Image from "next/image";

const classes = [
    {
        title: "AI-Powered Robotics Engineering.",
        description:
            "Children will learn how to create robots with artificial intelligence, enabling them to make decisions, adapt to environments, and perform complex tasks.",
        image: "/robotics-class-1.webp",
    },
    {
        title: "AI with LEGO WEDO® 2.0.",
        description:
            "This course introduces AI and robotics to children using the Lego WeDo 2.0 kit, where they will learn how robots can use sensors to interact with their environment.",
        image: "/robotics-class-2.webp",
    },
    {
        title: "Junior Robotics with AI.",
        description:
            "A fun and engaging introduction for younger kids to robotics and artificial intelligence, where they will create simple AI-powered robots that react to stimuli.",
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
                    What Your Children Do at RoboTech with AI.
                    </h2>
                    <p className="text-gray-700 mt-4 text-lg">
                    Our courses combine the excitement of robotics with the power of
                     AI, providing a hands-on experience for children to explore the future of technology.
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
