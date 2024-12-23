import Image from "next/image";

const Section = () => {
  return (
    <div className="bg-green-50 min-h-screen py-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-green-900 mb-4">Merit Leadership Program</h1>
          <div className="h-1 w-20 bg-green-600 mx-auto mb-6"></div>
           <p className="text-lg text-green-800">
            Empowering leaders with communication, critical thinking, and leadership skills.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-semibold text-green-800 mb-4">Toastmasters International</h2>
            <p className="text-green-700 leading-7 mb-6">
              Toastmasters International is a world leader in communication and leadership
              development. Our membership is more than 358,000, with members improving their
              speaking and leadership skills by attending one of 16,800 clubs in 143 countries. 
            </p>
            <p className="text-green-700 leading-7">
              The Toastmasters Merit Education Club provides students with opportunities to practice
              oral English skills, develop critical thinking, and gain valuable leadership experience.
            </p>
          </div>

          <div className="relative w-full h-96">
            <Image
              src="/merit-leadership-program.jpg"
              alt="Merit Leadership Program"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="bg-green-100 rounded-lg p-8 mt-16">
          <h3 className="text-2xl font-semibold text-green-900 mb-4 text-center">
            Become a Leader Today
          </h3>
          <p className="text-green-700 leading-7 text-center mb-6">
            Join our Merit Leadership Program to improve your communication skills, build confidence,
            and become an effective leader in your community.
          </p>
          <div className="flex justify-center">
            <a
              href="#apply"
              className="bg-green-600 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-green-700 transition duration-300"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
