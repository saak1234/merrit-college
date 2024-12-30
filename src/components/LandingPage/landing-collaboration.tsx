"use client";

import * as React from 'react';
import { motion, useMotionValue } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import GlobalButton from '../ui/global-button';
import Image from "next/image";

const Collaboration = () => {
  const universities = [
    { name: "Western University", country: "Canada", logo: "u1.jpg" },
    { name: "University of Waterloo", country: "Canada", logo: "u2.jpg" },
    { name: "University of Toronto", country: "Canada", logo: "u3.jpg" },
    { name: "McGill University", country: "Canada", logo: "u4.jpg" },
    { name: "Queen's University", country: "Canada", logo: "u5.jpg" },
    { name: "University of British Columbia", country: "Canada", logo: "u1.jpg" },
    { name: "University of Alberta", country: "Canada", logo: "u2.jpg" },
    { name: "University of Montreal", country: "Canada", logo: "u3.jpg" },
    { name: "York University", country: "Canada", logo: "u4.jpg" },
    { name: "Simon Fraser University", country: "Canada", logo: "u5.jpg" },
  ];

  const [imgIndex, setImgIndex] = React.useState(0);
  const dragX = useMotionValue(0);
  const [cardsToShow, setCardsToShow] = React.useState(3);

  React.useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth < 640) {
        setCardsToShow(6);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(6); // Compact cards for medium screens
      } else {
        setCardsToShow(6); // Compact cards for large screens
      }
    };

    updateCardsToShow();
    window.addEventListener('resize', updateCardsToShow);
    return () => window.removeEventListener('resize', updateCardsToShow);
  }, []);

  const maxIndex = universities.length - cardsToShow;

  React.useEffect(() => {
    const timer = setInterval(() => {
      setImgIndex((prevIndex) => 
        prevIndex >= maxIndex ? 0 : prevIndex + 1
      );
    }, 3000);
    
    return () => clearInterval(timer);
  }, [maxIndex]);

  const onDragEnd = () => {
    const x = dragX.get();
    if (x <= -10 && imgIndex < maxIndex) {
      setImgIndex((prev) => prev + 1);
    } else if (x >= 10 && imgIndex > 0) {
      setImgIndex((prev) => prev - 1);
    }
  };

  return (
    <section className="bg-secondary-green py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 max-w-12xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-shade mb-6 sm:mb-8 tracking-tight text-center">
          Our University Collaborations
        </h2>

        <div className="max-w-12xl mx-auto">
          <div className="group relative overflow-hidden rounded-2xl bg-white shadow-xl">
            <div className="pointer-events-none absolute inset-0 z-10">
              {imgIndex > 0 && (
                <div className="absolute left-2 sm:left-5 top-1/2 -translate-y-1/2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="pointer-events-auto h-8 w-8 sm:h-12 sm:w-12 rounded-full bg-green-800 text-white opacity-0 transition-all duration-300 hover:bg-green-700 group-hover:opacity-100"
                    onClick={() => setImgIndex((prev) => Math.max(0, prev - 1))}
                  >
                    <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
                  </Button>
                </div>
              )}
              
              {imgIndex < maxIndex && (
                <div className="absolute right-2 sm:right-5 top-1/2 -translate-y-1/2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="pointer-events-auto h-8 w-8 sm:h-12 sm:w-12 rounded-full bg-green-800 text-white opacity-0 transition-all duration-300 hover:bg-green-700 group-hover:opacity-100"
                    onClick={() => setImgIndex((prev) => Math.min(maxIndex, prev + 1))}
                  >
                    <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
                  </Button>
                </div>
              )}
            </div>

            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragMomentum={false}
              style={{ x: dragX }}
              animate={{ translateX: `-${imgIndex * (100 / cardsToShow)}%` }}
              onDragEnd={onDragEnd}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="flex cursor-grab items-center active:cursor-grabbing"
            >
              {universities.map((university, i) => (
                <motion.div
                  key={i}
                  className={`h-full ${cardsToShow === 1 ? 'w-full' : 'w-1/6'} shrink-0 p-2 sm:p-3`} // Adjusted widths
                >
                  <div className="h-full bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
                    <div className="relative h-24  flex items-center justify-center">
                      <Image 
                        src={`/${university.logo}`}
                        alt={`${university.name} Logo`}
                        width={200}
                        height={200}
                        priority={i < 3}
                        className="object-contain"
                      />
                    </div>
                    <div className="p-3 sm:p-4 bg-white">
                      {/* <h3 className="text-sm sm:text-base font-bold text-emerald-800 line-clamp-2 text-center">
                        {university.name}
                      </h3> */}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="flex justify-center mt-6 sm:mt-8">
          <Link href="#">
            <GlobalButton>
              Explore More Universities
            </GlobalButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Collaboration;
