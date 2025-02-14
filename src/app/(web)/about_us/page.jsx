"use client";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import CloudinaryVideo from "@/components/web/CloudinaryVideo";

export default function AboutUs() {
  return (
    <div className="bg-white text-gray-800 mt-24">
      {/* Hero Section with Background Image & Dark Overlay */}
      <section
        className="relative w-full min-h-[80vh] flex items-center justify-center text-center p-8 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/about_us/about.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-3xl text-white"
        >
          <h1 className="text-4xl md:text-6xl font-bold">
            Lumeview Smart Business Display
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-4 text-lg md:text-xl text-gray-300"
          >
            Innovating LED Display Solutions for a Brighter Future
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button className="mt-6 px-6 py-3 bg-primary hover:bg-accent text-lg font-medium text-white rounded-lg">
              Get in Touch
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl font-bold text-center mb-6"
        >
          Who We Are
        </motion.h2>
        <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto">
          Lumeview is a high-tech enterprise specializing in{" "}
          <strong>cutting-edge LED display technology</strong>, offering
          innovative and high-quality solutions worldwide.
        </p>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
            Why Choose Lumeview?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Cutting-Edge Technology",
              "Certified & Industry-Recognized",
              "Customization & Flexibility",
              "Expert Team & Global Reach",
              "Commitment to Sustainability",
              "Full-Service Solutions",
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-6 shadow-lg rounded-lg flex items-center"
              >
                <FaCheckCircle className="text-blue-500 text-3xl mr-4" />
                <span className="text-lg font-medium text-gray-700">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Core Values */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-900">
          Our Core Values
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {[
            "Integrity",
            "Innovation",
            "Cooperation",
            "Win-Win Partnerships",
          ].map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="p-6 bg-blue-100 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold text-blue-600">{value}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary text-center py-16 px-6 text-white">
        <h2 className="text-3xl font-bold mb-4">
          Experience the Future of LED Displays
        </h2>
        <p className="text-lg mb-6">
          Partner with Lumeview for world-class LED solutions tailored to your
          business needs.
        </p>
        <Button className="px-6 py-3 bg-white text-blue-700 hover:bg-gray-100 text-lg font-medium rounded-lg">
          Contact Us
        </Button>
      </section>

      {/* Video Section */}
      <main className="flex flex-col items-center justify-center text-white p-4">
        <CloudinaryVideo src="https://res.cloudinary.com/dwuxbwxdx/video/upload/v1739499936/WeChat_20240826143207_qbnppa.mp4" />
      </main>
    </div>
  );
}
