import {Cpu, Brain, Code} from "lucide-react"
const AIProgramsSection = () => {
    const features = [
        {
            icon: <Cpu className="text-green-600 w-10 h-10"/>,
            title: "AI Fundamentals.",
            description:
                "Introduce children to the basics of artificial intelligence with fun, interactive activities that spark curiosity and creativity.",
        },
        {
            icon: <Brain className="text-green-600 w-10 h-10"/>,
            title: "Machine Learning.",
            description:
                "Kids get hands-on experience in building simple machine learning models, learning how data drives decisions and predictions.",
        },
        {
            icon: <Code className="text-green-600 w-10 h-10"/>,
            title: "Coding for AI.",
            description:
                "Children learn how to code with AI in mind, using beginner-friendly tools and languages to build their own smart applications.",
        },
    ];
    
    return (
        <section className="bg-secondary-green2 py-16">
            <div className="container mx-auto px-6">
                <div className="text-center">
                    <span className="text-green-600 font-semibold uppercase tracking-wide">
                        Explore Our Programs
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-black mt-2">
                        AI Programs for Every Learner
                    </h2>
                    <p className="text-gray-700 mt-4 text-lg leading-relaxed max-w-3xl mx-auto">
                        Our tailored AI courses are designed to suit various learning levels, from beginners to advanced learners. 
                        Children will engage in interactive lessons, coding challenges, and collaborative projects, helping them 
                        develop the skills necessary to thrive in a tech-driven world.
                    </p>
                </div>

                {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {[{
                        title: "AI Basics",
                        description: "Introduction to AI concepts like machine learning, data analysis, and automation. Perfect for beginners."
                    }, {
                        title: "Machine Learning Mastery",
                        description: "Dive deeper into machine learning algorithms, predictive modeling, and AI applications."
                    }, {
                        title: "AI Ethics & Society",
                        description: "Explore the ethical implications of AI and its impact on society, fostering responsible innovation."
                    }].map((program, index) => (
                        <div
                            key={index}
                            className="bg-green-900 text-white rounded-lg p-6 shadow-md text-center transform hover:scale-105 hover:shadow-xl transition duration-300"
                        >
                            <h3 className="text-xl font-bold mb-4">{program.title}</h3>
                            <p className="text-lg leading-relaxed">{program.description}</p>
                        </div>
                    ))}
                </div> */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-2xl transition-shadow duration-300"
                        >
                            <div className="flex justify-center items-center mb-4">
                                {feature.icon}
                            </div>
                            <h4 className="text-xl font-bold text-black mb-2">
                                {feature.title}
                            </h4>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AIProgramsSection;
