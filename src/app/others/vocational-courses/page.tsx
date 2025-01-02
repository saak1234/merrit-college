"use client";
import Image from "next/image";
import GlobalButton from "@/components/ui/global-button";
// import Link from "next/link";

export default function VocationalPage() {
  const programs = [
    {
      title: "Information Technology",
      description: "Industry-aligned courses in web development, cybersecurity, and cloud computing with hands-on training.",
      image: "/v1.jpg",
      alt: "IT Training",
      href: "/vocational/it"
    },
    {
      title: "Healthcare Services",
      description: "Comprehensive training for medical assistants, pharmacy technicians, and healthcare administration.",
      image: "/v2.jpg",
      alt: "Healthcare Training",
      href: "/vocational/healthcare"
    },
    {
      title: "Skilled Trades",
      description: "Professional certification programs in electrical, plumbing, HVAC, and automotive technology.",
      image: "/v3.jpg",
      alt: "Skilled Trades",
      href: "/vocational/trades"
    }
  ];

  const testimonials = [
    {
      name: "David Martinez",
      initials: "DM",
      role: "IT Certification Graduate",
      quote: "The hands-on training and industry partnerships helped me secure a job at a leading tech company right after graduation."
    },
    {
      name: "Rachel Chen",
      initials: "RC",
      role: "Healthcare Program Alumni",
      quote: "Merit College's vocational program provided me with practical skills and real-world experience in healthcare administration."
    }
  ];

  const faqs = [
    {
      question: "How long are the vocational programs?",
      answer: "Programs range from 6 months to 2 years, depending on the field of study and certification level. Many courses offer flexible scheduling options."
    },
    {
      question: "Are job placement services available?",
      answer: "Yes, we provide comprehensive career services including job placement assistance, interview preparation, and industry networking opportunities."
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
                  Launch Your Career
                </h1>
                <p className="text-grey-200 text-lg sm:text-xl">
                  Industry-Focused Training for Tomorrow's Professionals
                </p>
                <p className="text-md sm:text-lg text-grey-200">
                  Get hands-on training and practical skills for in-demand careers. Our vocational programs combine expert instruction with real-world experience.
                </p>
              </div>
              {/* <div className="flex gap-4 flex-wrap">
                <GlobalButton>
                  Explore Programs
                </GlobalButton>
                <GlobalButton>
                  Career Guide
                </GlobalButton>
              </div> */}
            </div>
            <div className="w-full md:w-1/2 relative h-56 sm:h-72 lg:h-[500px]">
              <Image
                src="/vocational-hero.jpg"
                alt="Vocational Training"
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
            Vocational Programs
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
                    {/* <GlobalButton>Program Details</GlobalButton> */}
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
            Graduate Success Stories
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


