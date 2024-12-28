"use client";

import Image from "next/image";

const VisaDescriptionSection = () => {
    return (
        <section className="bg-secondary-green py-16">
            <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-center gap-12">
                {/* Left Section: Content */}
                <div className="lg:w-2/4">
                    <h2 className="text-3xl font-bold text-green-shade mb-6">
                        Visa Application
                    </h2>
                    <p className="text-gray-700 text-lg">
                        Navigating the complexities of international visa applications can be overwhelming.
                    </p>
                    <p className="text-gray-700 text-lg mb-4">
                        Our comprehensive visa assistance service ensures a hassle-free experience.
                    </p>
                    <ul className="space-y-4">
                        <li className="flex items-center space-x-4">
                            <div
                                className="w-6 h-6 bg-green-900 text-white flex items-center justify-center rounded-full font-bold">
                                ✓
                            </div>
                            <p className="text-gray-700">
                                Expert guidance on application requirements and document preparation.
                            </p>
                        </li>
                        <li className="flex items-center space-x-4">
                            <div
                                className="w-6 h-6 bg-green-900 text-white flex items-center justify-center rounded-full font-bold">
                                ✓
                            </div>
                            <p className="text-gray-700">
                                Tailored support for student, work, and travel visas.
                            </p>
                        </li>
                        <li className="flex items-center space-x-4">
                            <div
                                className="w-6 h-6 bg-green-900 text-white flex items-center justify-center rounded-full font-bold">
                                ✓
                            </div>
                            <p className="text-gray-700">
                                Transparent process with regular updates at every step.
                            </p>
                        </li>
                    </ul>
                </div>

                {/* Right Section: Image */}
                <div className="lg:w-2/4">
                    <Image
                        src="/visa-desc.jpeg"
                        alt="Visa Assistance"
                        width={600}
                        height={300}
                        className="rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
};

export default VisaDescriptionSection;
