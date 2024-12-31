import Image from "next/image";

const TestimonialsSection = () => {
    const testimonials = [
        {
            name: "Emma Wilson",
            content: "Joining the Tech Enthusiasts Club helped me develop my coding skills and network with amazing peers.",
            image: "/student-1.jpg",
        },
        {
            name: "David Miller",
            content: "The campus facilities are top-notch, and the student lounges are perfect for group study sessions.",
            image: "/student-2.jpg",
        },
    ];

    return (
        <section className="bg-white p-12 sm:p-16 lg:p-20">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-shade mb-8">
                    Student Testimonials
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 p-6 rounded-lg shadow-md text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                        >
                            <Image
                                src={testimonial.image}
                                alt={testimonial.name}
                                width={100}
                                height={100}
                                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                            />
                            <p className="text-gray-600 mb-4 text-md sm:text-sm">
                                &quot;{testimonial.content}&quot;
                            </p>
                            <h3 className="text-gray-800 font-semibold text-lg sm:text-xl">
                                {testimonial.name}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
