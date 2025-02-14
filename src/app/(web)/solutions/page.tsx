"use client";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function SolutionsPage() {
  return (
    <div className="bg-white text-gray-800 mt-24">
      {/* Hero Section with Background Image & Dark Overlay */}
      <section
        className="relative w-full min-h-[85vh] flex items-center justify-center text-center p-8 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/solutions/Led.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Innovative LED Solutions
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300">
            The elegance that is hidden or visible, the brilliance that is clear
            and shocking. High-end brands trust our LED solutions to redefine
            digital experiences.
          </p>
          <Button className="mt-6 px-6 py-3 bg-primary hover:bg-accent text-lg font-medium text-white rounded-lg">
            Explore Solutions
          </Button>
        </motion.div>
      </section>

      {/* Solutions Overview Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl font-bold text-center mb-6"
        >
          Our LED Solutions
        </motion.h2>
        <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto">
          Our cutting-edge LED technology is transforming industries by
          providing unparalleled clarity, flexibility, and efficiency in display
          solutions.
        </p>
      </section>

      {/* Solutions Showcase */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Luxury Retail Displays",
                desc: "Showcase products with vibrant clarity.",
                image: "/images/solutions/luxury.png",
              },
              {
                title: "Corporate LED Walls",
                desc: "Enhance presentations with impactful visuals.",
                image: "/images/solutions/corporate.png",
              },
              {
                title: "Outdoor LED Billboards",
                desc: "Advertise with high-brightness displays.",
                image: "/images/solutions/outdoor.png",
              },
              {
                title: "Event & Stage Screens",
                desc: "Create immersive event experiences.",
                image: "/images/solutions/stage.png",
              },
              {
                title: "Sports Arena Screens",
                desc: "Engage audiences with real-time updates.",
                image: "/images/solutions/sports.png",
              },
              {
                title: "Custom LED Solutions",
                desc: "Tailored LED technology for unique needs.",
                image: "/images/solutions/custom-led.png",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-6 shadow-lg rounded-lg flex flex-col items-center text-center"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600 mt-2">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-500 text-center py-16 px-6 text-white">
        <h2 className="text-3xl font-bold mb-4">
          Redefine Digital Experiences with Our LED Solutions
        </h2>
        <p className="text-lg mb-6">
          Partner with Lumeview for cutting-edge, high-quality LED displays
          tailored for your business needs.
        </p>
        <Button className="px-6 py-3 bg-white text-blue-700 hover:bg-gray-100 text-lg font-medium rounded-lg">
          Contact Us
        </Button>
      </section>
    </div>
  );
}
