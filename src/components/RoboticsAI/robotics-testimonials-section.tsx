import Image from "next/image";
import {Quote} from "lucide-react";

const testimonials = [
    {
        name: "Ronald Richards",
        role: "Web Designer",
        feedback:
            "Objectively redefine out-of-the-box for online multimedia-based networks. Proactively architect economically sound synergy with its progressive value.",
        rating: 4,
        image: "/student-1.jpg", // Replace with actual image paths
    },
    {
        name: "William Smith",
        role: "Market Manager",
        feedback:
            "Objectively redefine out-of-the-box for online multimedia-based networks. Proactively architect economically sound synergy with its progressive value.",
        rating: 4,
        image: "/student-2.jpg", // Replace with actual image paths
    },
    {
        name: "Arlene McCoy",
        role: "Dog Trainer",
        feedback:
            "Objectively redefine out-of-the-box for online multimedia-based networks. Proactively architect economically sound synergy with its progressive value.",
        rating: 4,
        image: "/student-3.jpg", // Replace with actual image paths
    },
];

const RoboticsTestimonialSection = () => {
    return (
        <section className="py-16 bg-gray-200">
            <div className="container mx-auto px-4">
                {/* Section Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800">What Future Robotics and AI Engineers Say</h2>
                    <p className="text-gray-600 mt-2">We love receiving feedback from our young students!</p>
                </div>

                {/* Testimonials */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
                        >
                            {/* Rating */}
                            <div className="flex items-center mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <span
                                        key={i}
                                        className={`w-4 h-4 inline-block ${
                                            i < testimonial.rating ? "text-yellow-400" : "text-gray-300"
                                        }`}
                                    >
                                        ★
                                    </span>
                                ))}
                            </div>

                            {/* Feedback */}
                            <Quote className="text-green-700 w-10 h-10 mb-4"/>
                            <p className="text-gray-600 mb-6">{testimonial.feedback}</p>

                            {/* User Info */}
                            <div className="flex flex-col items-center">
                                <Image
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    width={80}
                                    height={80}
                                    className="rounded-full mb-2"
                                />
                                <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
                                <p className="text-sm text-gray-500">{testimonial.role}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center mt-8 space-x-2">
                    {[...Array(3)].map((_, i) => (
                        <button
                            key={i}
                            className={`w-3 h-3 rounded-full ${
                                i === 0 ? "bg-gray-800" : "bg-gray-400"
                            } transition duration-300`}
                        ></button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RoboticsTestimonialSection;
