import HeroSection from "@/components/ui/hero-section";
import WhyCanada from "@/components/StudyInCanada/study-why-canada";
import Steps from "@/components/StudyInCanada/study-steps-section";
const studyInCanadaPage = () => {
    return (
        <div>
        <HeroSection 
        header="Study in Canada" 
        description="Study in Canada and experience 
        the high-quality education system, multicultural 
        environment, and excellent post-graduation opportunities." 
        image="study-in-canada-hero.jpg"/>
        <WhyCanada/>
        <Steps/>
        </div>
        
    )
}
export default studyInCanadaPage;