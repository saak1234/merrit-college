const FacilitiesSection = () => {
    const facilities = [
        "State-of-the-art Library",
        "Modern Science Labs",
        "Fully Equipped Fitness Center",
        "On-campus Cafeterias",
        "Student Lounges and Study Rooms",
    ];

    return (
        <section className="bg-secondary-green py-16">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Campus Facilities</h2>
                <p className="text-gray-600 mb-8">
                    Our campus offers world-class facilities to enhance your learning and living experience.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {facilities.map((facility, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-md text-gray-700"
                        >
                            <h3 className="text-lg font-bold mb-2">{facility}</h3>
                            <p>Experience a comfortable and enriching environment for all your needs.</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FacilitiesSection;
