import Image from 'next/image';
import GlobalButton from '../ui/global-button';
const HeroSection=()=>{
    return(
        <section className="bg-secondary-green py-16">
        <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-8">
            <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-green-shade mb-4">
                    Transform Your Future with Our Scholarship Program
                </h2>
                <p className="text-green-shade leading-relaxed mb-6">
                    Apply for our scholarship program and unlock opportunities to pursue your educational dreams. 
                    We provide financial support, mentorship, and resources to help you achieve your goals.
                </p>
                <GlobalButton 
                >
                    Learn More
                </GlobalButton>
            </div>
            <div className="md:w-1/2">
                <Image
                    src="/scholarship.jpg"
                    alt="Scholarship Program"
                    width={500}
                    height={500}
                    className="rounded-lg shadow-lg w-full object-cover"
                />
            </div>
        </div>
    </section>
    )
}
export default HeroSection;