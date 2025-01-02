const AITestimonialsSection = () => {
    return (
        <section className="bg-secondary-green2 py-16">
            <div className="container mx-auto px-6">
                <div className="text-center">
                    <span className="text-green-600 font-semibold uppercase tracking-wide">
                        What Parents Say
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-black mt-2">
                        Transformative Learning Experiences
                    </h2>
                    <p className="text-gray-700 mt-4 text-lg leading-relaxed max-w-3xl mx-auto">
                        Hear from parents about how our AI programs are shaping their children’s futures. Real stories of growth, confidence, and learning.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {[{
                        name: "Priya Sharma",
                        feedback: "AI Academy has been an incredible experience for my son. The courses are engaging and well-structured."
                    }, {
                        name: "John Doe",
                        feedback: "My daughter loves learning about AI. She has gained so much confidence and knowledge!"
                    }, {
                        name: "Amara Khan",
                        feedback: "The hands-on projects make learning AI fun and interactive. Highly recommend it!"
                    }].map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-green-900 text-white rounded-lg p-6 shadow-md text-center transform hover:scale-105 transition duration-300 hover:shadow-xl"
                        >
                            <p className="text-lg italic mb-4">&#34;{testimonial.feedback}&#34;</p>
                            <h3 className="text-xl font-bold">- {testimonial.name}</h3>
                            <div className="mt-4">
                                <span className="inline-block bg-green-700 py-1 px-3 rounded-full text-sm text-white shadow-md">
                                    Verified Parent
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default AITestimonialsSection;
