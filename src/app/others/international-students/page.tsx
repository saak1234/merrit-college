"use client";
import Image from "next/image";
// import GlobalButton from "@/components/ui/global-button";
// import Link from "next/link";

export default function InternationalPage() {
  const programs = [
    {
      title: "Visa & Immigration Support",
      description: "Comprehensive assistance with student visa applications, documentation, and immigration requirements.",
      image: "/i1.jpg",
      alt: "Visa Support",
      href: "/international/visa"
    },
    {   
      title: "English Language Programs",
      description: "Intensive English courses and language support services to enhance academic success.",
      image: "/i2.jpg",
      alt: "Language Programs",
      href: "/international/language"
    },
    {
      title: "Cultural Integration",
      description: "Programs and activities designed to help international students adapt to campus life and American culture.",
      image: "/i3.jpg",
      alt: "Cultural Programs",
      href: "/international/culture"
    }
  ];

  const testimonials = [
    {
      name: "Yuki Tanaka",
      initials: "YT",
      role: "Japan - Class of 2024",
      quote: "The international student support at Merit College made my transition to studying in the US smooth and enjoyable."
    },
    {
      name: "Maria Garcia",
      initials: "MG",
      role: "Spain - Class of 2023",
      quote: "From visa assistance to cultural activities, Merit College provided all the support I needed to succeed."
    }
  ];

  const faqs = [
    {
      question: "How do I apply for a student visa?",
      answer: "After acceptance, our international office will guide you through the F-1 visa process, including I-20 form preparation and visa interview preparation."
    },
    {
      question: "Is English language support available?",
      answer: "Yes, we offer comprehensive English language programs, including ESL courses, conversation partners, and academic writing support."
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
                  Welcome International Students
                </h1>
                <p className="text-grey-200 text-lg sm:text-xl">
                  Your Home Away From Home
                </p>
                <p className="text-md sm:text-lg text-grey-200">
                  Join our diverse community of international scholars from over 80 countries. Experience world-class education with comprehensive support.
                </p>
              </div>
              <div className="flex gap-4 flex-wrap">
                {/* <GlobalButton>
                  Apply Now
                </GlobalButton>
                <GlobalButton>
                  Virtual Tour
                </GlobalButton> */}
              </div>
            </div>
            <div className="w-full md:w-1/2 relative h-56 sm:h-72 lg:h-[500px]">
              <Image
                src="/international-hero.jpg"
                alt="International Students"
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
            International Student Services
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
                  {/* <Link href={program.href}> */}
                    {/* <GlobalButton>Learn More</GlobalButton> */}
                  {/* </Link> */}
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
            International Student Stories
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
