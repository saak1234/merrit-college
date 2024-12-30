import Image from "next/image";

const TestimonialsSection = () => {
    const testimonials = [
        {
            name: "John Doe",
            content:
                "This scholarship completely changed my life. The mentorship and financial support allowed me to focus entirely on my studies. I graduated with top honors and secured a prestigious job in my field.",
            image: "/student-1.jpg",
        },
        {
            name: "Jane Smith",
            content:
                "I’m incredibly grateful for the opportunities this scholarship opened up for me. It made my dream education a reality, and I was able to study abroad and connect with brilliant minds from across the globe.",
            image: "/student-2.jpg",
        },
        {
            name: "Emily Johnson",
            content:
                "The mentorship programs helped me identify my strengths and navigate my career path. The financial support gave me the freedom to pursue internships and gain real-world experience.",
            image: "/student-3.jpg",
        },
    ];

    return (
        <section className="bg-secondary-green py-16">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-green-shade text-center mb-12">
                    Success Stories
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-secondary-green2 p-8 rounded-lg shadow-md flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-lg"
                        >
                            <Image
                                src={testimonial.image}
                                alt={testimonial.name}
                                width={120}
                                height={120}
                                className="w-24 h-24 rounded-full mb-6"
                            />
                            <p className="text-green-shade mb-6 text-sm leading-relaxed">
                                &#34;{testimonial.content}&#34;
                            </p>
                            <h3 className="text-green-shade font-bold text-lg">
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
