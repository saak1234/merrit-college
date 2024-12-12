"use client";

import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="bg-gray-50 text-gray-800">
            {/* Hero Section */}
            <section className="bg-green-700 text-white py-16">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl font-bold">Welcome to Merit College</h1>
                    <p className="mt-4 text-lg">
                        Empowering Students to Achieve Excellence in Education
                    </p>
                    <p className="mt-4 text-md max-w-2xl mx-auto">
                        At Merit College, we are dedicated to fostering a world-class educational
                        experience for students of all backgrounds. Our mission is to create leaders
                        of tomorrow by providing quality education, practical skills, and a nurturing
                        environment.
                    </p>
                </div>
            </section>

            {/* Vision and Mission Section */}
            <section className="py-12">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-green-900">
                        Vision and Mission
                    </h2>
                    <p className="mt-4 text-center max-w-3xl mx-auto text-lg">
                        <strong>Vision:</strong> Our vision is to shape the future by empowering
                        students to reach their full potential through exceptional education.
                    </p>
                    <p className="mt-4 text-center max-w-3xl mx-auto text-lg">
                        <strong>Mission:</strong> Our mission is to provide a holistic education
                        that combines academic excellence, practical experiences, and a focus on
                        individual growth.
                    </p>
                </div>
            </section>

            {/* Programs Section */}
            <section className="py-12 bg-gray-100">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-green-900">
                        Our Programs
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                        {/* AP Programs */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <Image
                                src="/about-image.jpg"
                                alt="AP Programs"
                                width={400}
                                height={200}
                                className="rounded-lg"
                            />
                            <h3 className="text-xl font-bold text-green-900 mt-4">
                                Advanced Placement (AP) Courses
                            </h3>
                            <p className="mt-2 text-gray-700">
                                College-level courses for ambitious high school students aiming to
                                attend top universities.
                            </p>
                        </div>
                        {/* Visa Support */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <Image
                                src="/academic-9.jpg"
                                alt="Visa Guidance"
                                width={400}
                                height={200}
                                className="rounded-lg"
                            />
                            <h3 className="text-xl font-bold text-green-900 mt-4">
                                Visa Guidance
                            </h3>
                            <p className="mt-2 text-gray-700">
                                Comprehensive visa application assistance for students seeking
                                international education.
                            </p>
                        </div>
                        {/* Clubs */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <Image
                                src="/campus-life-5.jpg"
                                alt="Student Clubs"
                                width={400}
                                height={200}
                                className="rounded-lg"
                            />
                            <h3 className="text-xl font-bold text-green-900 mt-4">
                                Student Clubs
                            </h3>
                            <p className="mt-2 text-gray-700">
                                A vibrant extracurricular environment where students can explore
                                their interests and passions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-12">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-green-900">
                        What Our Students Say
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                        {/* Testimonial 1 */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <p className="text-gray-700">
                                &#34;Merit College transformed my academic journey. The AP programs and
                                supportive faculty prepared me for university life.&#34;
                            </p>
                            <h4 className="mt-4 font-bold text-green-900">- John Doe</h4>
                        </div>
                        {/* Testimonial 2 */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <p className="text-gray-700">
                                &#34;My child excelled in the supportive environment at Merit College.
                                The personalized guidance made all the difference.&#34;
                            </p>
                            <h4 className="mt-4 font-bold text-green-900">- Jane Smith</h4>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-12 bg-gray-100">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-green-900">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-6 mt-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h4 className="font-bold text-green-900">
                                What programs does Merit College offer?
                            </h4>
                            <p className="mt-2 text-gray-700">
                                Merit College offers Advanced Placement (AP) courses, Visa Guidance,
                                and a variety of Student Clubs to enhance both academic and
                                extracurricular experiences.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h4 className="font-bold text-green-900">How do I apply?</h4>
                            <p className="mt-2 text-gray-700">
                                You can apply by filling out our online application form and
                                contacting our admissions team for guidance.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
