"use client";
import Image from "next/image";
import GlobalButton from "@/components/ui/global-button";
export default function AboutPage() {
  const programs = [
    {
      title: "Advanced Placement (AP) Courses",
      description: "College-level courses for ambitious high school students preparing for top universities.",
      image: "/about-image.jpg",
      alt: "AP Programs"
    },
    {
      title: "Visa Guidance",
      description: "Comprehensive visa application assistance for international education aspirants.",
      image: "/academic-9.jpg",
      alt: "Visa Support"
    },
    {
      title: "Student Clubs",
      description: "Vibrant extracurricular activities to explore interests and develop leadership skills.",
      image: "/campus-life-5.jpg",
      alt: "Student Clubs"
    }
  ];

  const testimonials = [
    {
      name: "John Doe",
      initials: "JD",
      role: "Class of 2024",
      quote: "Merit College transformed my academic journey with its exceptional AP programs and supportive faculty."
    },
    {
      name: "Jane Smith",
      initials: "JS",
      role: "Class of 2023",
      quote: "The personalized guidance and innovative teaching methods helped me achieve my academic goals."
    }
  ];

  const faqs = [
    {
      question: "What programs does Merit College offer?",
      answer: "Merit College offers Advanced Placement (AP) courses, Visa Guidance, and various Student Clubs to enhance both academic and extracurricular experiences."
    },
    {
      question: "How do I apply?",
      answer: "You can apply through our online application portal. Our admissions team provides step-by-step guidance throughout the process."
    }
  ];

  return (
    <div className="text-green-shade">
      {/* Hero Section */}
      <section className="bg-secondary-green py-16 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="w-full md:w-1/2 text-left space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl text-green-900 font-bold leading-tight">
                  Welcome to Merit College
                </h1>
                <p className="text-green-900 text-lg md:text-xl">
                  Empowering Students to Achieve Excellence in Education
                </p>
                <p className="text-md md:text-lg text-green-shade">
                  At Merit College, we are dedicated to fostering a world-class educational experience for students of all backgrounds.
                </p>
              </div>
              <div className="flex gap-4">
                <GlobalButton 
                // className="bg-green-900 text-white px-8 py-3 rounded-full hover:bg-green-800 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  Explore Programs
                </GlobalButton>
                <GlobalButton 
                // className="border-2 border-green-900 text-green-900 px-8 py-3 rounded-full hover:bg-green-900 hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  Contact Us
                </GlobalButton>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative h-[400px] md:h-[500px]">
              <div className="absolute inset-0 bg-green-900/10 rounded-2xl z-10" />
              <Image
                src="/about-image.jpg"
                alt="Merit College Campus"
                fill
                className="rounded-2xl object-cover shadow-xl"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="bg-secondary-green2 py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-green-900 mb-12">
            Our Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="relative h-48 mb-4">
                  <Image
                    src={program.image}
                    alt={program.alt}
                    fill
                    className="rounded-lg object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h3 className="text-xl font-bold text-green-900">
                  {program.title}
                </h3>
                <p className="mt-2 text-gray-700">
                  {program.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-secondary-green py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-green-900 mb-12">
            Student Testimonials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gray-100 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-green-900 flex items-center justify-center text-white text-2xl font-bold">
                    {testimonial.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-green-900">{testimonial.name}</h4>
                    <p className="text-green-shade">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-green-shade italic">{testimonial.quote}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-secondary-green2 py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-green-900 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <h4 className="font-bold text-green-900 text-lg">{faq.question}</h4>
                <p className="mt-2 text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
