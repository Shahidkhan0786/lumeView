"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

export default function FactoryTour() {
  const [isVideoModalOpen, setVideoModalOpen] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    reset();
  };

  return (
    <div className="bg-gray-50 mt-24">
      {/* Hero Section with Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative w-full h-[500px] overflow-hidden"
      >
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source
            src="https://res.cloudinary.com/dwuxbwxdx/video/upload/v1739431007/factory2_vpse74.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center text-white px-6">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl font-bold mb-4"
          >
            Experience Innovation & Precision
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg max-w-2xl"
          >
            Take a closer look at our advanced manufacturing, quality control,
            and innovative display solutions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-4 space-x-4"
          >
            <button
              onClick={() => setVideoModalOpen(true)}
              className="px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg"
            >
              🎥 Watch Virtual Tour
            </button>
            <a
              href="#contact"
              className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 rounded-lg"
            >
              📅 Book a Visit
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* About Factory Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-6 py-12 text-center"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          🏭 About Our Factory
        </h2>
        <p className="text-gray-600 mb-8">
          Pioneering display technology for over 15 years with excellence in
          manufacturing.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "🛠️ 15+ Years of Expertise",
              desc: "Trusted leader in digital signage & display technology.",
            },
            {
              title: "🏭 Advanced Production Facility",
              desc: "High-tech equipment and skilled professionals.",
            },
            {
              title: "📏 Stringent Quality Control",
              desc: "Ensuring premium, durable, and reliable products.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-6 bg-white rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-500">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Gallery Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-6 py-12"
      >
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          📸 Factory Tour Gallery
        </h2>
        <Swiper
          spaceBetween={20}
          slidesPerView={1.5}
          breakpoints={{ 768: { slidesPerView: 3 } }}
        >
          {[1, 2, 3, 4, 5].map((num, index) => (
            <SwiperSlide key={index}>
              <motion.img
                src={`/images/factory_tour/${num}.png`}
                alt={`Factory ${num}`}
                className="rounded-lg shadow-md"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      {/* Contact Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        id="contact"
        className="bg-gray-100 py-12"
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            📞 Get in Touch
          </h2>
          <p className="text-gray-600 mb-8">
            Schedule a factory visit or request more information.
          </p>
          <motion.form
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-lg mx-auto bg-white p-6 shadow-lg rounded-lg"
          >
            <input
              {...register("name")}
              type="text"
              placeholder="Your Name"
              className="w-full p-3 mb-4 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <input
              {...register("email")}
              type="email"
              placeholder="Your Email"
              className="w-full p-3 mb-4 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              {...register("message")}
              placeholder="Your Message"
              className="w-full p-3 mb-4 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
            >
              📅 Book a Tour
            </button>
          </motion.form>
        </div>
      </motion.div>
    </div>
  );
}
