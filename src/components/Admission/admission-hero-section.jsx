import Image from "next/image";
import { Phone, Mail } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="bg-gradient-to-r from-green-100 to-blue-100 flex flex-col md:flex-row items-center justify-center text-center md:text-left p-10 gap-10">
      {/* Text Content */}
      <div className="md:w-1/2">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
          Welcome to <span className="text-green-700">Merit College</span> Admission Department
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          We are here to assist you in planning your academic journey and help you discover the opportunities waiting for you!
        </p>
        <div className="flex items-center space-x-6 mb-8">
          <div className="flex items-center space-x-2">
            <div className="bg-green-200 rounded-full p-4">
              <Phone className="w-6 h-6 text-green-600" />
            </div>
            <p className="text-gray-800 font-medium">Call Us</p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="bg-blue-200 rounded-full p-4">
              <Mail className="w-6 h-6 text-blue-600" />
            </div>
            <p className="text-gray-800 font-medium">Email Us</p>
          </div>
        </div>
        <button className="bg-green-700 text-white py-3 px-8 rounded-lg font-bold text-lg shadow-lg hover:bg-green-800 transition">
          Book a Tour
        </button>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center">
        <Image
          src="/application-hero.jpg"
          alt="Student"
          width={500}
          height={500}
          className="rounded-xl shadow-lg"
        />
      </div>
    </div>
  );
}
