"use client";

import * as React from 'react';
import { motion, useMotionValue } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';
import GlobalButton from '../ui/global-button';
import Image from "next/image";
const Collaboration = () => {
  const universities = [
    { name: "Western University", country: "Canada", image: "/University1.jpg" },
    { name: "University of Waterloo", country: "Canada", image: "/University2.jpg" },
    { name: "University of Toronto", country: "Canada", image: "/University3.jpg" },
    { name: "McGill University", country: "Canada", image: "/University4.jpg" },
    { name: "Queen's University", country: "Canada", image: "/University1.jpg" },
    { name: "University of British Columbia", country: "Canada", image: "/University2.jpg" },
    { name: "University of Alberta", country: "Canada", image: "/University3.jpg" },
    { name: "University of Montreal", country: "Canada", image: "/University4.jpg" },
    { name: "York University", country: "Canada", image: "/University1.jpg" },
    { name: "Simon Fraser University", country: "Canada", image: "/University2.jpg" },
  ];

  const [imgIndex, setImgIndex] = React.useState(0);
  const dragX = useMotionValue(0);

  useEffect(() => {
    const timer = setInterval(() => {
        setImgIndex((prevIndex) => 
          prevIndex === universities.length - 1 ? 0 : prevIndex + 1
        );
      }, 2000);
  
      return () => clearInterval(timer);
  },[universities.length])
  const onDragEnd = () => {
    const x = dragX.get();
    if (x <= -10 && imgIndex < universities.length - 1) {
      setImgIndex((prev) => prev + 1);
    } else if (x >= 10 && imgIndex > 0) {
      setImgIndex((prev) => prev - 1);
    }
  };

  return (
    <section className="bg-secondary-green py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-green-shade mb-8 tracking-tight">
          Our University Collaborations
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="group relative h-[500px] overflow-hidden rounded-2xl bg-emerald-50/50 backdrop-blur-sm shadow-xl">
            <div className="pointer-events-none absolute inset-0 z-10">
              {imgIndex > 0 && (
                <div className="absolute left-5 top-1/2 -translate-y-1/2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="pointer-events-auto h-12 w-12 rounded-full bg-green-800 text-white opacity-0 transition-all duration-300 hover:bg-green-700 group-hover:opacity-100"
                    onClick={() => setImgIndex((prev) => prev - 1)}
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </Button>
                </div>
              )}
              
              {imgIndex < universities.length - 1 && (
                <div className="absolute right-5 top-1/2 -translate-y-1/2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="pointer-events-auto h-12 w-12 rounded-full bg-green-800 text-white opacity-0 transition-all duration-300 hover:bg-green-700 group-hover:opacity-100"
                    onClick={() => setImgIndex((prev) => prev + 1)}
                  >
                    <ChevronRight className="h-6 w-6" />
                  </Button>
                </div>
              )}

              <div className="absolute bottom-4 w-full flex justify-center">
                <div className="flex items-center gap-2 rounded-full bg-green-800 px-4 py-2 opacity-0 transition-opacity group-hover:opacity-100">
                  {universities.map((_, idx) => (
                    <button
                      key={idx}
                      className={`h-2 w-2 rounded-full transition-all ${
                        idx === imgIndex ? 'bg-white w-4' : 'bg-white/50'
                      }`}
                      onClick={() => setImgIndex(idx)}
                    />
                  ))}
                </div>
              </div>
            </div>

            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragMomentum={false}
              style={{ x: dragX }}
              animate={{ translateX: `-${imgIndex * 100}%` }}
              onDragEnd={onDragEnd}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="flex h-full cursor-grab items-center active:cursor-grabbing"
            >
              {universities.map((university, i) => (
                <motion.div
                  key={i}
                  className="h-full w-full shrink-0 p-6"
                >
                  <div className="h-full rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
                    <Image 
                      src={university.image} 
                      alt={university.name}
                      width={500}
                      height={500}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6 bg-secondary-green2">
                      <h3 className="text-2xl font-bold text-emerald-800 mb-3">
                        {university.name}
                      </h3>
                      {/* <p className="text-green-shade font-medium">{university.country}</p> */}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <Link href="#">
            <GlobalButton
            //   whileHover={{ scale: 1.05 }}
            //   whileTap={{ scale: 0.95 }}
            //   className="px-8 py-4 bg-green-800 text-white font-semibold rounded-full shadow-lg transform transition-all duration-200 hover:bg-green-700 hover:shadow-xl"
            >
              Explore More Universities
            </GlobalButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Collaboration;
