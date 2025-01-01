import { Train, Bus, Bike, Car, Clock, MapPin } from 'lucide-react';
import GlobalButton from '../ui/global-button';

const TransportSection = () => {
  const transportOptions = [
    {
      title: "Public Transit (TTC)",
      icon: Train,
      description: "Toronto's TTC connects the entire city with efficient buses, streetcars, and subways. Regular service to Markham, North York, and surrounding areas.",
      features: [
        { text: "24/7 Service", icon: Clock },
        { text: "Integrated Network", icon: Bus },
        { text: "Regional Connections", icon: MapPin }
      ]
    },
    {
      title: "Cycling Network",
      icon: Bike,
      description: "Explore Toronto and surrounding areas through extensive bike lanes and trails. Bike Share Toronto stations available throughout the city.",
      features: [
        { text: "Dedicated Lanes", icon: MapPin },
        { text: "Bike Share Stations", icon: Bike },
        { text: "Scenic Routes", icon: Car }
      ]
    }
  ];

  return (
    <section className="py-16 bg-secondary-green">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-green-shade mb-4">
            Getting Around Toronto
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Multiple convenient options to explore the Greater Toronto Area
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {transportOptions.map((option, index) => {
            const IconComponent = option.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-green-50 rounded-full mr-4">
                    <IconComponent className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {option.title}
                  </h3>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {option.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {option.features.map((feature, idx) => {
                    const FeatureIcon = feature.icon;
                    return (
                      <div 
                        key={idx}
                        className="flex items-center space-x-2 text-gray-700"
                      >
                        <FeatureIcon className="w-4 h-4 text-green-600" />
                        <span className="text-sm">{feature.text}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center flex justify-center">
            <GlobalButton>Learn More</GlobalButton>
        </div>
      </div>
    </section>
  );
};

export default TransportSection;
