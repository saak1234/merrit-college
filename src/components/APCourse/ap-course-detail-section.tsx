"use client";

import Image from "next/image";

const APCourseDetailSection = () => {
    return (
        <section className="bg-green-900 py-16">
            <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-8">
                {/* Left Section: Content */}
                <div className="lg:w-1/2 text-white">
                    <h2 className="text-4xl font-bold mb-6">
                        What Are Advanced Placement Courses?
                    </h2>
                    <p className="text-lg mb-4">
                        Advanced Placement (AP) courses are rigorous, college-level courses and assessments
                        offered in US high schools. Administered by the College Board, they have now replaced
                        the SAT Subject Tests for college applications. Doing well on AP courses can translate
                        to college credit in US and Canadian universities.
                    </p>
                    <p className="text-lg mb-4">
                        AP courses are structured to be self-study material with a standardized exam offered
                        once a year. As such, many high schools might not offer the correct guidance or teaching
                        for AP courses.
                    </p>
                    <p className="text-lg mb-4">
                        Taking online AP courses with a good teacher will help students with their schoolwork
                        while ensuring they score well in the exams. A good score demonstrates a student’s ability
                        to study a rigorous curriculum and also ensures college credit.
                    </p>
                    <p className="text-lg mb-4">
                        CGA is a College Board registered school approved to deliver the AP curriculum (school
                        code 703001). We offer part-time intensive online AP classes on weekends taught by our
                        world-class teachers.
                    </p>
                    <button className="mt-6 py-3 px-6 bg-orange-500 text-green-900 font-bold rounded-lg shadow-md hover:bg-orange-600 transition">
                        View the AP Prospectus
                    </button>
                </div>

                {/* Right Section: Image */}
                <div className="lg:w-1/2 relative">
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-500 via-transparent to-green-900 blur-xl -z-10"></div>
                    <Image
                        src="/ap-course.webp"
                        alt="Advanced Placement Courses"
                        width={500}
                        height={500}
                        className="rounded-lg shadow-lg"
                        priority
                    />
                </div>
            </div>
        </section>
    );
};

export default APCourseDetailSection;
