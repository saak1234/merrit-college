const CourseSection=()=>{
    const courses = [
        "Technology & Programming",
        "Business & Management",
        "Creative Arts & Design",
        "Health & Wellness",
        "Language Learning",
    ];
    return (
        <section className="bg-secondary-green2 p-16">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold text-green-shade mb-6">Courses We Offer</h2>
                <p className="text-green-shade mb-8">
                    Explore a variety of courses tailored to suit your interests and career aspirations.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {courses.map((course, index) => (
                        <div
                            key={index}
                            className="bg-secondary-green2 p-6 rounded-lg shadow-md text-green-shade"
                        >
                            <h3 className="text-lg font-semibold mb-2">{course}</h3>
                            <p>Start learning today and gain valuable skills to advance your career</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default CourseSection;