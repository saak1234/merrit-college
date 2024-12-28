"use client";

import ClubExploreMoreSection from "@/components/ClubsPage/club-explore-more-section";
import ClubHeroSection from "@/components/ClubsPage/club-hero-section";
// import ClubFAQSection from "@/components/ClubsPage/club-faq-section";
// import ClubDescription from "@/components/ClubsPage/club-description.";
import ClubUpcomingEvents from "@/components/ClubsPage/club-upcoming-event";

export type Club = {
    name: string;
    description: string;
    image: string;
    detailedContent: string;
    buttonLabel: string;
};


// Clubs data with the imported type
const clubs: Club[] = [
    {
        name: "Drama Club",
        description: "Unleash your creativity through the world of acting and storytelling.",
        image: "/club-drama.jpeg",
        detailedContent:
            "Dive deeper into the world of drama with experienced mentors. Join workshops, stage performances, and learn about the art of storytelling and expression.",
        buttonLabel: "Join Drama Club",
    },
    {
        name: "Robotics Club",
        description: "Build and innovate with robotics and technology enthusiasts.",
        image: "/club-robotics.jpg",
        detailedContent:
            "Collaborate with tech enthusiasts to build, program, and compete in robotics challenges. Stay at the forefront of innovation and technology.",
        buttonLabel: "Join Robotics Club",
    },
    {
        name: "Sports Club",
        description: "Stay active and competitive with a variety of sports and games.",
        image: "/club-sport.jpeg",
        detailedContent:
            "Participate in various sports activities and tournaments. Stay fit, build team spirit, and enjoy a healthy competitive environment.",
        buttonLabel: "Join Sports Club",
    },
    {
        name: "Music Club",
        description: "Discover your inner musician and collaborate with others to create magic.",
        image: "/club-music.jpg",
        detailedContent:
            "Learn, create, and perform music with fellow enthusiasts. From vocal training to instrumentals, explore the world of music in a collaborative space.",
        buttonLabel: "Join Music Club",
    },
];

export default function ClubsPage() {
    // const [selectedClub, setSelectedClub] = useState<Club | null>(null);

    // const handleClubClick = (club: Club) => {
    //     setSelectedClub(club);
    // };

    return (
        <div>
            <ClubHeroSection />
            <ClubExploreMoreSection
                clubs={clubs}
                // onClubClick={handleClubClick}
            />
            {/* {selectedClub && (
                <ClubDescription
                    imageSrc={selectedClub.image}
                    title={selectedClub.name}
                    content={selectedClub.detailedContent}
                    buttonLabel={selectedClub.buttonLabel}
                    onButtonClick={() => {}}
                />
            )} */}
            {/*<ClubFAQSection />*/}
            <ClubUpcomingEvents/>
        </div>
    );
}
