import { BookOpen, Users, Clock, Target, Star, Laptop } from 'lucide-react';
import GlobalButton from '../ui/global-button';

const WhyTutoring = () => {
  const benefits = [
    {
      title: "Personalized Learning Plans",
      description: "Customized study programs designed to match each student's unique learning style, goals, and pace of learning.",
      icon: Target,
      highlights: ["Individual Assessment", "Custom Curriculum", "Progress Tracking"]
    },
    {
      title: "Expert Tutors",
      description: "Certified professionals with extensive teaching experience and deep subject matter expertise in their respective fields.",
      icon: Users,
      highlights: ["Certified Teachers", "Subject Specialists", "Mentoring Skills"]
    },
    {
      title: "Flexible Scheduling",
      description: "Convenient scheduling options that accommodate your busy lifestyle, with both online and in-person sessions available.",
      icon: Clock,
      highlights: ["24/7 Availability", "Online Sessions", "In-Person Options"]
    },
    {
      title: "Advanced Learning Tools",
      description: "Access to cutting-edge educational resources and interactive learning materials to enhance understanding.",
      icon: Laptop,
      highlights: ["Digital Resources", "Interactive Tools", "Practice Materials"]
    },
    {
      title: "Proven Results",
      description: "Track record of helping students achieve significant improvements in their academic performance.",
      icon: Star,
      highlights: ["Grade Improvement", "Confidence Building", "Success Stories"]
    },
    {
      title: "Comprehensive Support",
      description: "Complete academic support including homework help, exam preparation, and skill development.",
      icon: BookOpen,
      highlights: ["Homework Help", "Exam Prep", "Skill Building"]
    }
  ];

  return (
    <section className="py-16 bg-secondary-green2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-green-shade mb-4">
            Why Choose Our Tutoring Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Unlock your full potential with personalized support and expert guidance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-green-50 rounded-full mr-4">
                    <IconComponent className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {benefit.title}
                  </h3>
                </div>

                <p className="text-gray-600 mb-6">
                  {benefit.description}
                </p>

                <div className="space-y-2">
                  {benefit.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center flex justify-center">
          <GlobalButton
          >
            Start Your Learning Journey
          </GlobalButton>
        </div>
      </div>
    </section>
  );
};

export default WhyTutoring;
