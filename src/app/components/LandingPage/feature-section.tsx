import { GraduationCap, Home, School, QrCode } from "lucide-react";

const FeatureSection = () => {
    const features = [
        {
            icon: <Home className="text-white w-10 h-10" />,
            title: "SSAT/SAT/AP/AEP",
            description: "College Board Audited Official AP",
            link: "#",
        },
        {
            icon: <School className="text-white w-10 h-10" />,
            title: "Expert Instructors",
            description: "CB® AP Graders",
            link: "#",
        },
        {
            icon: <GraduationCap className="text-white w-10 h-10" />,
            title: "Application Consulting",
            description: "Customized Service",
            link: "#",
        },
        {
            icon: <QrCode className="text-white w-10 h-10" />,
            title: "Connect On WeChat",
            description: "",
            link: "#",
        },
    ];

    return (
        <section className="bg-green-900 text-white py-10">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center bg-green-800 rounded-lg shadow-lg p-6 hover:scale-105 transition-transform duration-300 text-center"
                    >
                        <div className="mb-4">{feature.icon}</div>
                        <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                        {feature.description && (
                            <p className="text-sm mb-4">{feature.description}</p>
                        )}
                        <a
                            href={feature.link}
                            className="text-green-200 hover:text-white font-semibold flex items-center"
                        >
                            Learn More &rarr;
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeatureSection;
