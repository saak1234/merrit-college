import {steps} from '@/lib/data';

export default function AdmissionProcess() {
    return (
        <div className="bg-secondary-green py-6 sm:py-8 md:py-10 px-4 sm:px-6">
            <h2 className="text-center text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 md:mb-10 text-gray-800">
                Our Admission Process
            </h2>

            <div className="relative max-w-4xl mx-auto">
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-gray-300"></div>

                <div className="md:hidden absolute left-4 top-0 h-full border-l-4 border-gray-300"></div>

                {steps.map((step, index) => (
                    <div
                        key={step.id}
                        className={`flex flex-col md:flex-row items-start md:items-center mb-6 sm:mb-8 md:mb-10 ${
                            index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                        } relative`}
                    >
                        <div className="hidden md:block relative w-1/2 px-4 sm:px-6">
                            {index % 2 === 0 && (
                                <div className="text-right">
                                    <h3 className="text-lg sm:text-xl font-semibold mb-2">{step.title}</h3>
                                    <p className="text-sm sm:text-base text-gray-700">{step.description}</p>
                                </div>
                            )}
                        </div>

                        <div className="relative z-10 w-8 h-8 sm:w-10 sm:h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base ml-0 md:ml-0 flex-shrink-0">
                            {step.id}
                        </div>

                        <div className="relative w-full md:w-1/2 pl-4 sm:pl-6 md:px-6 mt-2 md:mt-0">
                            <div className="md:hidden">
                                <h3 className="text-lg sm:text-xl font-semibold mb-2">{step.title}</h3>
                                <p className="text-sm sm:text-base text-gray-700">{step.description}</p>
                            </div>

                            {index % 2 !== 0 && (
                                <div className="hidden md:block text-left">
                                    <h3 className="text-lg sm:text-xl font-semibold mb-2">{step.title}</h3>
                                    <p className="text-sm sm:text-base text-gray-700">{step.description}</p>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
