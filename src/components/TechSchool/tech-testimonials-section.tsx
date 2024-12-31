import Image from "next/image";
import GlobalButton from "../ui/global-button";

const TechSchoolFinalSection = () => {
  return (
    <section className="bg-secondary-green text-green-shade p-8 sm:p-12 md:p-16">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-8 text-green-900">What Our Students Say</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center space-x-4 mb-4">
              <Image
                src="/student-3.jpg"
                alt="Student 1"
                width={500}
                height={500}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold">John Doe</p>
                <p className="text-gray-600">Web Development Graduate</p>
              </div>
            </div>
            <p className="text-lg text-gray-700">
              &#34;TechSchool gave me the hands-on experience I needed to start my career. The mentors were so supportive and gave me the tools to succeed in the tech world. I landed my first job right after graduation!&#34;
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center space-x-4 mb-4">
              <Image
                src="/student-2.jpg"
                alt="Student 2"
                width={500}
                height={500}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold">Emily Smith</p>
                <p className="text-gray-600">Data Science Graduate</p>
              </div>
            </div>
            <p className="text-lg text-gray-700">
              &#34;The hands-on projects at TechSchool were amazing. The curriculum was up-to-date with industry standards, and the projects were challenging but fun. I feel more than ready to take on the data science field!&#34;
            </p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center space-x-4 mb-4">
              <Image
                src="/student-1.jpg"
                alt="Student 3"
                width={500}
                height={500}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold">Samuel Lee</p>
                <p className="text-gray-600">AI & Machine Learning Graduate</p>
              </div>
            </div>
            <p className="text-lg text-gray-700">
              &#34;TechSchool provided me with invaluable experience and networking opportunities. Thanks to the advanced machine learning courses, I’m now working at one of the leading tech companies in the industry!&#34;
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12">
          <h3 className="text-2xl sm:text-3xl font-semibold mb-6 text-green-900">Ready to Take the Next Step?</h3>
          <p className="text-base sm:text-lg mb-8">
            Join a community of passionate learners at TechSchool and gain the skills to excel in your tech career. Our programs are designed to give you the hands-on experience needed to succeed in today’s competitive job market.
          </p>
          <div className="flex justify-center">
            <GlobalButton
              // href="/contact"
              // className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-lg transition duration-300 ease-in-out"
            >
              Contact Us Today
            </GlobalButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSchoolFinalSection;
