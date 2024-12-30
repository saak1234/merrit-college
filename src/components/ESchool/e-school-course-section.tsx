"use client";

import { FC } from "react";
import { GraduationCap, BookOpen, Building, BarChart2, ArrowUpRight, Star } from "lucide-react";

const reasons = [
    {
        icon: <GraduationCap className="w-10 h-10 text-orange-500" />,
        title: "Boost your candidacy for college applications",
        description: "Earning top scores in an AP course is the best way to demonstrate your academic ability to colleges.",
    },
    {
        icon: <Building className="w-10 h-10 text-orange-500" />,
        title: "Gain a head start in high school",
        description: "Study college-level material early and gain exposure to the academic expectations of college.",
    },
    {
        icon: <BarChart2 className="w-10 h-10 text-orange-500" />,
        title: "Give yourself an edge in college",
        description: "APs allow students to earn college credit and pursue more advanced courses.",
    },
    {
        icon: <BookOpen className="w-10 h-10 text-orange-500" />,
        title: "Take a deep-dive into areas of passion",
        description: "Explore areas of interest, such as Psychology or Computer Science, and provide a clear indication of your academic passions.",
    },
    {
        icon: <ArrowUpRight className="w-10 h-10 text-orange-500" />,
        title: "Maximise the return on your time",
        description: "Our AP courses are designed to be fast-paced at convenient weekend times, perfect for students looking to go the extra mile.",
    },
    {
        icon: <Star className="w-10 h-10 text-orange-500" />,
        title: "Challenge yourself",
        description: "AP classes are rigorous and demanding, offering an intellectual stimulation that you won't get elsewhere.",
    },
];

const ESchoolCourseSection: FC = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-10">
                    <h2 className="text-4xl font-bold text-green-900 mb-4">
                        Why take an AP course?
                    </h2>
                    <p className="text-lg text-gray-700">
                        Improve your admissions profile, challenge yourself, and earn college credit with our Advanced Placement (AP) courses.
                    </p>
                </div>

                {/* Reasons Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((reason, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center bg-gray-100 rounded-lg p-6 shadow-lg hover:shadow-xl transition duration-300"
                        >
                            {/* Icon */}
                            <div className="mb-4">{reason.icon}</div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-green-900 mb-2">{reason.title}</h3>

                            {/* Description */}
                            <p className="text-gray-700">{reason.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ESchoolCourseSection;
