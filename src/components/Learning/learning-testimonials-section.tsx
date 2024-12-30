import Image from "next/image";
const TestimonialsSection=()=>{
    const testimonials = [
        {
            name: "Alice Johnson",
            content: "This platform provided me with the skills I needed to land my dream job.",
            image: "/student-3.jpg",
        },
        {
            name: "Mark Spencer",
            content: "Learning was never this easy and enjoyable! Highly recommend it to everyone.",
            image: "/student-2.jpg",
        },
    ];
    return (
        <section className="bg-secondary-green2 py-16">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold text-green-shade mb-6">Student Success Stories</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-sedondary-green2 p-6 rounded-lg shadow-md text-center"
                        >
                            <Image
                                src={testimonial.image}
                                alt={testimonial.name}
                                width={100}
                                height={100}
                                className="w-20 h-20 rounded-full mx-auto mb-4"
                            />
                            <p className="text-green-shade mb-4">&quot;{testimonial.content}&quot;</p>
                            <h3 className="text-green-shade font-bold">{testimonial.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default TestimonialsSection