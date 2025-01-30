"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    title: "Transform Your Business ",
    subtitle:
      "with Cutting-Edge Interactive Displays.Enhance your business environment with our versatile display solutions",
    image: "/images/lumeview_hero_1.jpg", // Update with actual image path
    link: "/learn-more",
  },
  {
    title: "Seamless Collaboration",
    subtitle: "Experience next-gen video conferencing",
    image: "/images/lumeview_hero_2.jpg", // Update with actual image path
    link: "/collaboration",
  },
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Auto slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="relative w-full h-screen bg-cover bg-center text-white flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="absolute inset-0 flex items-center justify-between px-6">
        <button
          onClick={prevSlide}
          className="p-2 bg-black bg-opacity-30 rounded-full z-10"
        >
          <ArrowLeft size={24} className="text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="p-2 bg-black bg-opacity-30 rounded-full z-10"
        >
          <ArrowRight size={24} className="text-white" />
        </button>
      </div>
      <div className="absolute text-left max-w-2xl px-12 z-10">
        <AnimatePresence mode="wait">
          <motion.h1
            key={slides[currentIndex].title}
            className="text-5xl font-bold"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            {slides[currentIndex].title}
          </motion.h1>
        </AnimatePresence>
        <AnimatePresence mode="wait">
          <motion.p
            key={slides[currentIndex].subtitle}
            className="text-lg mt-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {slides[currentIndex].subtitle}
          </motion.p>
        </AnimatePresence>
        <Button className="mt-6 bg-accent hover:bg-highlight px-6 py-3 text-lg rounded-lg">
          <a href={slides[currentIndex].link}>Learn More</a>
        </Button>
      </div>
      <div className="absolute bottom-6 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
