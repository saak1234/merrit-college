import Image from 'next/image';
const Activities = () => {
    const activities = [
      {
        icon: "Zap",
        title: "Mid-Autumn Festival Celebration",
        description: "13th September: Celebrate the traditions of the Mid-Autumn Festival with cultural activities.",
        image: "/mac.jpg",
      },
      {
        icon: "Leaf",
        title: "Thanksgiving Event",
        description: "11th October: A festive gathering to give thanks and enjoy the spirit of the holiday.",
        image: "/te.jpg",
      },
      {
        icon: "CheckSquare",
        title: "Student Council Election",
        description: "29th October: An opportunity for students to participate in leadership and decision-making.",
        image: "/sce.jpg",
      },
      {
        icon: "Ghost",
        title: "Halloween Event",
        description: "31st October: A spooky and fun-filled day with costumes, games, and treats.",
        image: "/he.jpg",
      },
      {
        icon: "Calendar",
        title: "Birthday Celebration",
        description: "1st November: A day to celebrate and recognize students’ special days.",
        image: "/bdc.jpg",
      },
      {
        icon: "GraduationCap",
        title: "Seminar on Higher Education",
        description:
          "11th November: A seminar by the Admission Officer of the University of Western Ontario.",
        image: "/sohe.jpg",
      },
    ];
  
    return (
      <div className="bg-[#E6F4EA] py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-3xl font-bold text-green-900 mb-6">
            Events & Celebrations
          </h2>
          <p className="text-center text-green-800 mb-12">
            At Little Learners Academy, we celebrate every milestone and create cherished memories for our students.
            Throughout the year, we host a variety of events and celebrations that bring the entire school community
            together. Some of our memorable events include:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg border border-gray-200 p-4 relative flex flex-col"
              >
                <Image
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4 flex flex-col justify-between flex-grow">
                  <h3 className="text-xl font-bold text-green-900">{activity.title}</h3>
                  <p className="text-green-800 mt-2">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Activities;
  