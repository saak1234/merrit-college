import { 
    GraduationCap, 
    DollarSign, 
    Globe2, 
    BookOpen, 
    Shield, 
    MapPin 
  } from 'lucide-react';
  
  const WhyCanada = () => {
    const benefits = [
      {
        title: "World-Class Education",
        description: "Canadian universities rank among the global elite, offering cutting-edge research and diverse academic programs.",
        icon: GraduationCap
      },
      {
        title: "Affordable Education",
        description: "Competitive tuition fees and living costs compared to other major study destinations.",
        icon: DollarSign
      },
      {
        title: "Multicultural Environment",
        description: "Experience a vibrant, diverse community that welcomes students from all around the world.",
        icon: Globe2
      },
      {
        title: "Academic Excellence",
        description: "Access to state-of-the-art facilities and internationally recognized degrees.",
        icon: BookOpen
      },
      {
        title: "Safe Environment",
        description: "One of the safest countries globally with high standards of living.",
        icon: Shield
      },
      {
        title: "Strategic Location",
        description: "Beautiful landscapes and proximity to major global destinations.",
        icon: MapPin
      }
    ];
  
    return (
      <section className="bg-secondary-green2 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-green-shade  mb-4">
              Why Study in Canada?
            </h2>
            <p className=" text-gray-600 max-w-2xl mx-auto">
              Discover the advantages of choosing Canada as your educational destination
            </p>
          </div>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div 
                  key={index} 
                  className="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="p-3  rounded-full mb-4">
                      <IconComponent 
                        className="w-8 h-8 sm:w-10 sm:h-10 text-green-700" 
                        strokeWidth={1.5}
                      />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  };
  
  export default WhyCanada;
  