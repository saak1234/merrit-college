"use client";
import Image from "next/image";
import GlobalButton from "@/components/ui/global-button";
import Link from "next/link";
export default function AboutPage() {
  const programs = [
    {
      title: "Advanced Placement (AP) Courses",
      description: "College-level courses for ambitious high school students preparing for top universities.",
      image: "/about-image.jpg",
      alt: "AP Programs",
      href:"/menu/ap-course"
    },
    {
      title: "Visa Guidance",
      description: "Comprehensive visa application assistance for international education aspirants.",
      image: "/academic-9.jpg",
      alt: "Visa Support",
      href:"/international/visa"
    },
    {
      title: "Student Clubs",
      description: "Vibrant extracurricular activities to explore interests and develop leadership skills.",
      image: "/campus-life-5.jpg",
      alt: "Student Clubs",
      href:"/students/clubs"
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
      <section className="bg-secondary-green p-8 sm:p-12 lg:p-16 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="w-full md:w-1/2 text-left space-y-6">
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl text-green-900 font-bold leading-tight">
                  Welcome to Merit College
                </h1>
                <p className="text-grey-200 text-lg sm:text-xl">
                  Empowering Students to Achieve Excellence in Education
                </p>
                <p className="text-md sm:text-lg text-grey-200">
                  At Merit College, we are dedicated to fostering a world-class educational experience for students of all backgrounds.
                </p>
              </div>
              <div className="flex gap-4 flex-wrap">
                <GlobalButton 
                >
                  Explore Programs
                </GlobalButton>
                <GlobalButton 
                >
                  Contact Us
                </GlobalButton>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative h-56 sm:h-72 lg:h-[500px]">
              <Image
                src="/about-image.jpg"
                alt="Merit College Campus"
                layout="fill"
                className="rounded-2xl object-cover shadow-xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="bg-secondary-green2 p-8 sm:p-12 lg:p-16">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-green-900 mb-12">
            Our Programs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="relative h-48 mb-4">
                  <Image
                    src={program.image}
                    alt={program.alt}
                    layout="fill"
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
                <div className="flex justify-center mt-2">
                  <Link href={program.href}>
                  <GlobalButton>Visit this page</GlobalButton>
                  </Link>
                  
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-secondary-green p-8 sm:p-12 lg:p-16">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-green-900 mb-12">
            Student Testimonials
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
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
                <p className="text-green-shade italic">&#34;{testimonial.quote}&#34;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-secondary-green2 py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-green-900 mb-12">
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
