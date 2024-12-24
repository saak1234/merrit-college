"use client";

const newsData = [
    {
        id: 1,
        title: "Professor Tom Comments On The Volunteer B. Snack Brand",
        author: "Admin",
        category: "Social Sciences",
        image: "/campus-life-3.jpg", // Replace with your image path in public folder
        link: "#",
    },
    {
        id: 2,
        title: "How To Use Technology To Adapt Your Talent To The World",
        author: "Admin",
        category: "Social Sciences",
        image: "/campus-life-4.jpg", // Replace with your image path in public folder
        link: "#",
    },
    {
        id: 3,
        title: "Here Are The Things To Look For When Selecting Course",
        author: "Admin",
        category: "Social Sciences",
        image: "/campus-life-5.jpg", // Replace with your image path in public folder
        link: "#",
    },
    {
        id: 4,
        title: "How to Balance Studies with Extracurricular Activities",
        author: "Admin",
        category: "Social Sciences",
        image: "/campus-life-6.jpg", // Replace with your image path in public folder
        link: "#",
    },
];

const LatestNewsSection = () => {
    return (
        <section className="bg-gray-200 py-16">
            <div className="container mx-auto px-6">
                {/* Heading */}
                <h2 className="text-3xl font-bold text-green-900 mb-4 text-center">
                    Latest News
                </h2>
                <p className="text-center text-gray-700 mb-10">
                    Stay updated with the latest happenings and stories.
                </p>

                {/* News Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                    {newsData.map((news) => (
                        <div
                            key={news.id}
                            className="bg-white rounded-lg shadow-lg overflow-hidden"
                        >
                            {/* Image */}
                            <img
                                src={news.image}
                                alt={news.title}
                                className="w-full h-48 object-cover"
                            />
                            {/* Content */}
                            <div className="p-4">
                                <div className="flex items-center text-sm text-gray-500 space-x-4 mb-2">
                                    <span>
                                        <i className="text-green-900">By {news.author}</i>
                                    </span>
                                    <span>
                                        <i className="text-green-900">{news.category}</i>
                                    </span>
                                </div>
                                <h3 className="text-lg font-semibold text-green-900 mb-2">
                                    {news.title}
                                </h3>
                                <a
                                    href={news.link}
                                    className="text-green-600 font-semibold hover:underline"
                                >
                                    read more →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LatestNewsSection;
