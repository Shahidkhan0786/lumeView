"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const reviews = [
  {
    name: "John Doe",
    review:
      "Amazing service! The team went above and beyond to deliver a fantastic experience.",
    avatar: "/images/1.png",
  },
  {
    name: "Jane Smith",
    review:
      "Absolutely loved the professionalism and quality of work. Highly recommended!",
    avatar: "/images/1.png",
  },
  {
    name: "Michael Brown",
    review:
      "Exceptional service and outstanding attention to detail. Would definitely use again!",
    avatar: "/images/1.png",
  },
];

export default function ClientReview() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-primary-light text-white text-center relative clip-section">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          WHAT OUR CLIENTS SAY
        </h2>
        <div className="relative w-full max-w-2xl mx-auto overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <Card className="bg-gray-800 p-6 rounded-xl shadow-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gray-700 opacity-30 clip-design" />
                <CardContent className="relative z-10">
                  <img
                    src={reviews[currentIndex].avatar}
                    alt={reviews[currentIndex].name}
                    className="w-16 h-16 mx-auto rounded-full mb-4"
                  />
                  <p className="text-lg font-medium text-white">
                    "{reviews[currentIndex].review}"
                  </p>
                  <h4 className="mt-4 text-xl font-semibold text-white">
                    - {reviews[currentIndex].name}
                  </h4>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <style jsx>{`
        .clip-design {
          clip-path: polygon(0% 10%, 100% 0%, 100% 90%, 0% 100%);
        }
        .clip-section {
          clip-path: polygon(0 0, 100% 5%, 100% 95%, 0 100%);
        }
      `}</style>
    </section>
  );
}
