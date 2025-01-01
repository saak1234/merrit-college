import TransportSection from "@/components/TorontoSurroundings/toronto-transport";
import Visit from "@/components/TorontoSurroundings/toronto-visit";
import HeroSection from "@/components/ui/hero-section";
const TorrontoSurroundingsPage = () => {
return (
    <div>
        <HeroSection
        header="Toronto Surroundings"
        description="Discover the beauty of Toronto and its surrounding areas. From the
          bustling city streets to the serene natural landscapes, there is so much to explore and enjoy."
        image="toronto-surroundings.jpg"/>
        <Visit/>
        <TransportSection/>
    </div>
)
}
export default TorrontoSurroundingsPage;