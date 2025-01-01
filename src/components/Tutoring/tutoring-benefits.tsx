import { TrendingUp, Award, Brain, Clock, Target, Users } from 'lucide-react';
import GlobalButton from '../ui/global-button';

const TutoringBenefits: React.FC = () => {
  const benefits = [
    {
      title: "Improved Academic Performance",
      description: "Experience significant grade improvements through personalized learning strategies and expert guidance.",
      icon: TrendingUp,
      stats: "90% of students improve within 3 months",
      features: ["Better Grades", "Enhanced Understanding", "Regular Progress Reports"]
    },
    {
      title: "Confidence Building",
      description: "Develop self-assurance and motivation through overcoming academic challenges with professional support.",
      icon: Award,
      stats: "Build lasting confidence",
      features: ["Reduced Anxiety", "Increased Participation", "Personal Growth"]
    },
    {
      title: "Critical Thinking Development",
      description: "Master advanced problem-solving skills and analytical thinking through structured learning approaches.",
      icon: Brain,
      stats: "Develop lifelong skills",
      features: ["Problem Solving", "Analytical Skills", "Strategic Thinking"]
    },
    {
      title: "Personalized Learning",
      description: "Get customized attention and learning plans tailored to your unique needs and learning style.",
      icon: Target,
      stats: "100% customized approach",
      features: ["Individual Focus", "Custom Materials", "Adaptive Learning"]
    },
    {
      title: "Expert Guidance",
      description: "Learn from experienced tutors who are passionate about helping students succeed.",
      icon: Users,
      stats: "Certified professionals",
      features: ["Qualified Tutors", "Subject Experts", "Mentoring Support"]
    },
    {
      title: "Flexible Schedule",
      description: "Study at your own pace with convenient scheduling options that fit your lifestyle.",
      icon: Clock,
      stats: "Available 7 days a week",
      features: ["Flexible Timing", "Online Options", "Regular Sessions"]
    }
  ];

  return (
    <section className="py-16 bg-secondary-green">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-green-shade mb-4">
            Transform Your Learning Journey
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the advantages of our comprehensive tutoring program
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
                <div className="flex flex-col items-center mb-6">
                  <div className="p-3 bg-blue-50 rounded-full mb-4">
                    <IconComponent className="w-8 h-8 text-green-700" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 text-center">
                    {benefit.title}
                  </h3>
                  <div className="text-sm text-green-700 font-medium mt-2">
                    {benefit.stats}
                  </div>
                </div>

                <p className="text-gray-600 text-center mb-6">
                  {benefit.description}
                </p>

                <div className="space-y-2">
                  {benefit.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-green-700 rounded-full mr-2"></div>
                      {feature}
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
            Start Your Learning Journey Today
          </GlobalButton>
        </div>
      </div>
    </section>
  );
};

export default TutoringBenefits;
