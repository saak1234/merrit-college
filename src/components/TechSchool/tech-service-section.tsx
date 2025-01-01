import Image from "next/image";

const TechSchool = () => {
  return (
    <section className="py-16 bg-secondary-green2 text-green-shade p-16">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-8 text-green-900">About TechSchool</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center text-left">
            <p className="text-base sm:text-lg mb-6 leading-relaxed">
              At TechSchool, we are committed to empowering the next generation of tech professionals. Our mission is to provide high-quality education in the fields of technology and innovation, bridging the gap between theory and real-world application.
            </p>
            <p className="text-base sm:text-lg mb-6 leading-relaxed">
              We believe in hands-on learning, enabling our students to work on real-world projects, build portfolios, and acquire practical skills that will make them job-ready. Our dedicated instructors bring years of industry experience and offer personalized guidance throughout the learning journey.
            </p>
            <p className="text-base sm:text-lg leading-relaxed">
              Join TechSchool and gain the skills, confidence, and network needed to thrive in the fast-paced world of technology.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/tech-school-2.jpg"
              alt="TechSchool"
              width={500}
              height={500}
              className="rounded-lg shadow-xl transform hover:scale-105 transition duration-500 ease-in-out"
            />
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl sm:text-3xl font-semibold mb-6 text-green-900">Our Impact</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-4xl text-green-900">&#x1F91D;</span>
                <h4 className="text-lg sm:text-xl font-semibold ">Collaborative Environment</h4>
              </div>
              <p className="text-base sm:text-lg text-gray-600">
                We foster a collaborative learning environment where students can work together on projects and help each other succeed.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-4xl text-green-900">&#x1F4BB;</span>
                <h4 className="text-lg sm:text-xl font-semibold ">Cutting-Edge Technology</h4>
              </div>
              <p className="text-base sm:text-lg text-gray-600">
                Students have access to the latest technologies and tools to stay ahead of the curve and work with industry-standard software.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-4xl text-green-900">&#x1F4C8;</span>
                <h4 className="text-lg sm:text-xl font-semibold ">Real-World Experience</h4>
              </div>
              <p className="text-base sm:text-lg text-gray-600">
                We emphasize practical experience through internships and hands-on projects, ensuring students gain valuable skills they can apply immediately.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSchool;
