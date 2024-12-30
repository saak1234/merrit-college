import Image from "next/image"
const HeroSection=()=>{
    return (
        <section className="bg-secondary-green py-16">
            <div className="container mx-auto p-20 flex flex-col md:flex-row justify-center items-center">
                <div className="md:w-1/2">
                <h2 className="text-4xl font-bold text-green-shade mb-4">Welcome to Our Learning Platform</h2>
                    <p className="text-green-shade mb-4">
                        Discover a world of learning at your fingertips. Our platform is designed to provide 
                        interactive, engaging, and effective courses across various domains.
                    </p>
                    <p className="text-green-shade">
                        Learn at your own pace, access high quality resources, and achieve your goals with us. 
                        Get started today and unlock your potential
                    </p>
                </div>
                <div className="md:w-1/2 mt-6 md:mt-0 md:pl-10">
                <Image
                        src="/learning.jpg"
                        alt="Welcome to E-Learning"
                        width={500}
                        height={500}
                        className="rounded-lg shadow-lg"
                    />
                   
                </div>
            </div>
        </section>
    );
};

export default HeroSection