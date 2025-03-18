"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const reviews = [
  {
    name: "Pakistan",
    review: "STARTECH BUSINESS",
    avatar: "/images/reviews/alice.png",
  },
  {
    name: "NIGERIA",
    review: "INSPIRED GLOBAL MEDIA ",
    avatar: "/images/reviews/alice.png",
  },
  {
    name: "Saudia Arabia ",
    review: "The Elite ",
    avatar: "/images/reviews/alice.png",
  },
  {
    name: "CANADA",
    review: "10323349 CANADA INC",
    avatar: "/images/reviews/alice.png",
  },
  {
    name: "Bangladesh",
    review: "Osmo Corporation",
    avatar: "/images/reviews/alice.png",
  },
  {
    name: "MORROCO",
    review: "ATLAS YAHYA TRADING",
    avatar: "/images/reviews/alice.png",
  },
  {
    name: "UK",
    review: "ATLAS YAHYA TRADING",
    avatar: "/images/reviews/alice.png",
  },
  {
    name: "GHANA",
    review: "Sama Firma Company Limited",
    avatar: "/images/reviews/alice.png",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextReview, 5000);
    return () => clearInterval(interval);
  }, [nextReview]);

  return (
    <section className="py-20 bg-primary-light text-white text-center relative clip-section">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 uppercase">
          Countries We Are Working
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
              <Card className="bg-gray-900 p-6 rounded-xl shadow-lg relative">
                <div className="absolute inset-0 bg-gray-700 opacity-20 clip-design" />
                <CardContent className="relative z-10 flex flex-col items-center text-center">
                  <Image
                    src={reviews[currentIndex].avatar}
                    alt={`Review by ${reviews[currentIndex].name}`}
                    width={64} // 16 * 4 = 64px
                    height={64} // 16 * 4 = 64px
                    className="w-16 h-16 rounded-full mb-4 border-2 border-white shadow-md object-cover"
                  />
                  <p className="text-lg font-medium text-white italic">
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
