"use client";

const courses = [
    {
        title: "Biology",
        description:
            "Study the core scientific principles, theories, and processes that govern living organisms and biological systems.",
        link: "#",
    },
    {
        title: "Calculus AB",
        description:
            "Explore the concepts, methods, and applications of differential and integral calculus.",
        link: "#",
    },
    {
        title: "Calculus BC",
        description:
            "Explore the concepts, methods, and applications of differential and integral calculus, including topics such as parametric, polar, and vector functions, and series.",
        link: "#",
    },
    {
        title: "Chemistry",
        description:
            "Learn about the fundamental concepts of chemistry including structure and states of matter, intermolecular forces, and reactions.",
        link: "#",
    },
    {
        title: "Computer Science A",
        description:
            "Get familiar with the concepts and tools of computer science as you learn a subset of the Java programming language.",
        link: "#",
    },
    {
        title: "Computer Science Principles",
        description:
            "Learn to design and evaluate solutions and to apply computer science to solve problems through the development of algorithms and programs.",
        link: "#",
    },
    {
        title: "English Literature",
        description:
            "Learn how to understand and evaluate works of fiction, poetry, and drama from various periods and cultures.",
        link: "#",
    },
    {
        title: "English Language and Composition",
        description:
            "Learn to improve your writing ability, become skilled at analyzing texts, and present your ideas through written arguments.",
        link: "#",
    },
    {
        title: "US Government and Politics",
        description:
            "Study the key concepts and institutions of the political system and culture of the United States.",
        link: "#",
    },
    {
        title: "Macroeconomics",
        description:
            "Explore the principles of economics that apply to an economic system as a whole.",
        link: "#",
    },
    {
        title: "Microeconomics",
        description:
            "Study the principles of economics that apply to the behavior of individuals within an economic system.",
        link: "#",
    },
    {
        title: "Physics 1",
        description:
            "Learn about the foundational principles of physics as you explore Newtonian mechanics, work, energy, power; mechanical waves and sound; and introductory, simple circuits.",
        link: "#",
    },
    {
        title: "Physics C: Mechanics",
        description:
            "Explore concepts such as kinematics, Newton’s laws of motion, work, energy, and power; systems of particles and linear momentum.",
        link: "#",
    },
    {
        title: "Psychology",
        description:
            "Explore the ideas, theories, and methods of the scientific study of behavior and mental processes.",
        link: "#",
    },
    {
        title: "Statistics",
        description:
            "Learn about the major concepts and tools used for collecting, analyzing, and drawing conclusions from data.",
        link: "#",
    },
];

const ESchoolAboutSection = () => {
    return (
        <section className="py-16 bg-secondary-green">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-green-900">
                        What AP courses are on offer?
                    </h2>
                </div>

                {/* Courses Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courses.map((course, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-lg p-6 text-center transition-transform hover:scale-105"
                        >
                            <h3 className="text-xl font-bold text-green-900 mb-4">
                                {course.title}
                            </h3>
                            <p className="text-gray-700 mb-4">
                                {course.description}
                            </p>
                            <a
                                href={course.link}
                                className="text-green-700 hover:underline font-semibold"
                            >
                                Learn more
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ESchoolAboutSection;
