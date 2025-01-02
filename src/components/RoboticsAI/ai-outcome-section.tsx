"use client";

import Image from "next/image";

const outcomes = [
    {
        outcome: "95%",
        description: "Students master fundamental AI concepts through hands-on projects",
        image: "/o1.jpg", 
    },
    {
        outcome: "92%",
        description: "Learners successfully build and deploy their first ML models",
        image: "/o2.jpg", 
    },
    {
        outcome: "88%",
        description: "Graduates pursue advanced studies in AI and Data Science",
        image: "/o3.jpg", 
    },
];

const AIOutcomesSection = () => {
    return (
        <section className="bg-secondary-green2 py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1 bg-green-100 text-green-shade font-semibold rounded-full text-sm uppercase tracking-wider">
                        Learning Outcomes
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-4">
                        Transforming Future AI Leaders
                    </h2>
                    <p className="text-gray-600 mt-6 text-lg leading-relaxed max-w-3xl mx-auto">
                        Our comprehensive AI curriculum combines theoretical foundations with practical 
                        applications, enabling students to master machine learning, neural networks, 
                        and data analysis while building real-world AI solutions.
                    </p>
                </div>

                {/* Outcome Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
                    {outcomes.map((outcomeItem, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300"
                        >
                            <div className="relative h-48">
                                <Image
                                    src={outcomeItem.image}
                                    alt={`AI Learning Outcome ${index + 1}`}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                            <div className="p-6">
                                {/* <h3 className="text-3xl font-bold text-gren-shade mb-3">
                                    {outcomeItem.outcome}
                                </h3> */}
                                <p className="text-gray-700 text-lg">
                                    {outcomeItem.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AIOutcomesSection;
