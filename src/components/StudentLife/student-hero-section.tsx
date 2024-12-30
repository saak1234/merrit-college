import Image from "next/image";

const IntroductionSection = () => {
    return (
        <section className="bg-secondary-green p-20">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
                <div className="md:w-1/2">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Welcome to the Vibrant World of Student Life</h2>
                    <p className="text-gray-600 mb-4">
                        Student life is a journey filled with learning, growth, and memorable experiences. 
                        It where you shape your future while building lasting friendships and developing essential skills.
                    </p>
                    <p className="text-gray-600">
                        Discover opportunities to connect, grow, and excel in every aspect of your academic and personal journey.
                    </p> 
                </div>
                <div className="md:w-1/2 mt-6 md:mt-0 md:pl-10">
                <Image
                        src="/student-life-intro.jpg"
                        alt="Student Life Introduction"
                        width={500}
                        height={500}
                        className="rounded-lg shadow-lg"
                    />
                    
                </div>
            </div>
        </section>
    );
};

export default IntroductionSection;
