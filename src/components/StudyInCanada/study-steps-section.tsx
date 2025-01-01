import { BookOpen, FileCheck, Plane } from 'lucide-react';
import GlobalButton from '../ui/global-button';

const Steps = () => {
  const steps = [
    {
      title: "Research Programs and Universities",
      description: "Explore different programs and institutions to find the right fit for your goals.",
      icon: BookOpen
    },
    {
      title: "Apply for Admission",
      description: "Prepare and submit your application along with required documents like transcripts and letters of recommendation.",
      icon: FileCheck
    },
    {
      title: "Get Your Study Permit",
      description: "Once accepted, apply for a study permit and arrange your travel plans.",
      icon: Plane
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 bg-secondary-green">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-green-shade mb-12 text-center">
          Your Path to Study in Canada
        </h2>
        
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div 
                key={index}
                className="relative p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 bg-green-50 rounded-full">
                    <IconComponent 
                      className="w-8 h-8 text-green-600" 
                      strokeWidth={1.5}
                    />
                  </div>
                  <span className="flex items-center justify-center w-8 h-8 text-sm font-bold text-white bg-green-600 rounded-full">
                    {index + 1}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <GlobalButton
        //    className="bg-green-600 text-white px-8 py-4 rounded-lg shadow-lg hover:bg-green-700 transform hover:-translate-y-1 transition-all duration-300 text-lg font-medium"
           >
            Start Your Journey Today
          </GlobalButton>
        </div>
      </div>
    </section>
  );
};

export default Steps;
