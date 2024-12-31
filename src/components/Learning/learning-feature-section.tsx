const FeatureSection=()=>{
    const features = [
        "Learn Anywhere, Anytime",
        "Expert-Led Courses",
        "Community Forums",
        "Gamified Learning Experiences",
        "Certificates of Completion",
    ];
    return (
        <section className="bg-secondary-green p-16">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold text-green-shade mb-6">Why Choose Us?</h2>
                <p className="text-green-shade mb-8">
                    Our platform offers a range of features to enhance your learning journey.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-secondary-green2 p-6 rounded-lg shadow-md text-gray-700"
                        >
                            <h3 className="text-lg font-bold mb-2">{feature}</h3>
                            <p>Learn how this feature makes your learning experience better.</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default FeatureSection;