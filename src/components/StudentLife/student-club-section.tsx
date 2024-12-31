const ClubsSection = () => {
    const clubs = [
        "Tech Enthusiasts Club",
        "Cultural Arts Society",
        "Sports Teams and Fitness Groups",
        "Environmental Awareness Club",
        "Literature and Debate Society",
    ];

    return (
        <section className="bg-secondary-green2 p-12 sm:p-16 lg:p-20">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-shade mb-6">
                    Explore Clubs and Organizations
                </h2>
                <p className="text-green-shade mb-8 text-md sm:text-sm">
                    Join a club or organization to connect with like-minded peers, explore your interests, 
                    and contribute to the community.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {clubs.map((club, index) => (
                        <div
                            key={index}
                            className="bg-gray-100 p-6 rounded-lg shadow-md text-green-shade transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                        >
                            <h3 className="text-lg sm:text-xl font-semibold mb-2">{club}</h3>
                            <p className="text-sm sm:text-base">
                                Participate in exciting events and make unforgettable memories.
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClubsSection;
