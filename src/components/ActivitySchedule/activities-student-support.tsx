import { Lightbulb, BookOpen, Users } from "lucide-react";

const StudentSupport = () => {
  const supportItems = [
    {
      icon: <Lightbulb className="w-6 h-6 text-green-shade" />,
      title: "Counseling",
      description: "Professional counselors offer guidance and support to students, addressing their emotional and social well-being.",
    },
    {
      icon: <BookOpen className="w-6 h-6 text-green-shade" />,
      title: "Learning Support",
      description: "Our educators provide additional assistance to students who may require extra support in their academic journey.",
    },
    {
      icon: <Users className="w-6 h-6 text-green-shade" />,
      title: "Parent-Teacher Collaboration",
      description: "We foster a strong partnership with parents to ensure seamless communication and mutual support in a child's development.",
    },
  ];

  return (
    <div className="bg-secondary-green py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-green-shade mb-4">Student Support</h2>
        <p className="text-green-shade mb-8">
          At Little Learners Academy, we are committed to
          providing a supportive and nurturing environment that
          meets the unique needs of each student. Our student support services include:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {supportItems.map((item, index) => (
            <div
              key={index}
              className="bg-secondary-green2 shadow-md rounded-lg border border-gray-200 p-6 relative"
            >
              <div className="absolute -top-6 left-6 bg-[#C8E6C9] w-12 h-12 flex items-center justify-center rounded-full">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-green-shade mt-8">
                {item.title}
              </h3>
              <p className="text-green-shade mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentSupport;
