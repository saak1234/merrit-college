const FacilitiesSection = () => {
    const facilities = [
        "State-of-the-art Library",
        "Modern Science Labs",
        "Fully Equipped Fitness Center",
        "On-campus Cafeterias",
        "Student Lounges and Study Rooms",
    ];

    return (
        <section className="bg-secondary-green p-12 sm:p-16 lg:p-20">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-shade mb-6">
                    Campus Facilities
                </h2>
                <p className="text-green-shade mb-8 text-md sm:text-sm">
                    Our campus offers world-class facilities to enhance your learning and living experience.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {facilities.map((facility, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-md text-green-shade transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                        >
                            <h3 className="text-lg sm:text-xl font-semibold mb-2">{facility}</h3>
                            <p className="text-sm sm:text-base">
                                Experience a comfortable and enriching environment for all your needs.
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FacilitiesSection;
