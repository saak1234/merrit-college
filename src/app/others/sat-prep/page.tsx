"use client";
import Image from "next/image";
// import GlobalButton from "@/components/ui/global-button";
// import Link from "next/link";

export default function SATPrepPage() {
  const programs = [
    {
      title: "Comprehensive SAT Course",
      description: "Complete preparation covering Math, Reading, Writing, and Essay with personalized study plans.",
      image: "/s3.jpg",
      alt: "Comprehensive SAT",
      href: "/sat/comprehensive"
    },
    {
      title: "Weekend Boot Camps",
      description: "Intensive weekend sessions focusing on specific SAT sections and test-taking strategies.",
      image: "/s2.jpg",
      alt: "SAT Boot Camp",
      href: "/sat/bootcamp"
    },
    {
      title: "One-on-One Tutoring",
      description: "Personalized tutoring sessions tailored to your specific needs and target score goals.",
      image: "/s1.jpg",
      alt: "SAT Tutoring",
      href: "/sat/tutoring"
    }
  ];

  const testimonials = [
    {
      name: "Alex Thompson",
      initials: "AT",
      role: "Score: 1550/1600",
      quote: "The SAT prep program at Merit College helped me achieve my dream score. The strategies and practice tests were invaluable."
    },
    {
      name: "Emily Rodriguez",
      initials: "ER",
      role: "Score: 1500/1600",
      quote: "Thanks to Merit College's SAT program, I improved my score by 200 points. The instructors were exceptional."
    }
  ];

  const faqs = [
    {
      question: "How long are the SAT preparation courses?",
      answer: "Our comprehensive course runs for 12 weeks, boot camps are weekend-intensive, and tutoring sessions can be scheduled flexibly according to your needs."
    },
    {
      question: "What materials are included in the program?",
      answer: "Students receive official College Board practice tests, custom study materials, online resources, and detailed performance analytics."
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
                  Excel in Your SAT
                </h1>
                <p className="text-grey-200 text-lg sm:text-xl">
                  Achieve Your Dream Score with Expert Guidance
                </p>
                <p className="text-md sm:text-lg text-grey-200">
                  Our proven SAT prep programs combine expert instruction, personalized attention, and extensive practice to help you succeed.
                </p>
              </div>
              <div className="flex gap-4 flex-wrap">
                {/* <GlobalButton>
                  Free Practice Test
                </GlobalButton>
                <GlobalButton>
                  View Programs
                </GlobalButton> */}
              </div>
            </div>
            <div className="w-full md:w-1/2 relative h-56 sm:h-72 lg:h-[500px]">
              <Image
                src="/sat-hero.jpg"
                alt="SAT Preparation"
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
            SAT Prep Programs
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
                  {/* <Link href={program.href}>
                    <GlobalButton>Visit this page</GlobalButton>
                  </Link> */}
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
            Success Stories
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
