import Image from "next/image";
import { Users, Book } from "lucide-react";

const counsellors = [
    {
        name: "Rover Smith",
        role: "SEO Manager",
        image: "/con-1.jpg", // Replace with actual image paths
        lessons: 10,
        students: 64,
    },
    {
        name: "Milieu Hard",
        role: "Web Developer",
        image: "/con-2.jpg", // Replace with actual image paths
        lessons: 10,
        students: 64,
    },
    {
        name: "Jacek Jon",
        role: "UI/UX Designer",
        image: "/con-3.jpg", // Replace with actual image paths
        lessons: 10,
        students: 64,
    },
    {
        name: "Hard son Khan",
        role: "SEO Manager",
        image: "/con-4.jpg", // Replace with actual image paths
        lessons: 10,
        students: 64,
    },
];

const ConsultationCounsellorSection = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* Section Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800">Our Professional Counsellors</h2>
                    <p className="text-gray-600 mt-2">
                        Meet our expert counsellors who are here to guide you.
                    </p>
                </div>

                {/* Counsellor Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {counsellors.map((counsellor, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-lg rounded-lg overflow-hidden text-center transition-transform transform hover:scale-105"
                        >
                            {/* Counsellor Image */}
                            <Image
                                src={counsellor.image}
                                alt={counsellor.name}
                                width={300}
                                height={300}
                                className="w-full h-72 object-cover"
                            />

                            {/* Counsellor Details */}
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800">{counsellor.name}</h3>
                                <p className="text-gray-500">{counsellor.role}</p>

                                {/* Stats */}
                                <div className="flex justify-center items-center mt-4 text-sm text-gray-600 space-x-4">
                                    <div className="flex items-center">
                                        <Book className="w-4 h-4 mr-1 text-green-600" />
                                        {counsellor.lessons} Lessons
                                    </div>
                                    <div className="flex items-center">
                                        <Users className="w-4 h-4 mr-1 text-green-600" />
                                        {counsellor.students} Students
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ConsultationCounsellorSection;
