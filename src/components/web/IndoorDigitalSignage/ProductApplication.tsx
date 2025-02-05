"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ProductApplication() {
  const cases = [
    {
      title: "Retail Display Solutions",
      description: "High-quality LED and OLED screens for retail environments.",
      image: "/images/digital_signage/elevator-advertising.png",
    },
    {
      title: "Corporate Conference Displays",
      description:
        "Advanced display solutions for conference and corporate spaces.",
      image: "/images/digital_signage/exhibition-demonstration.png",
    },
    {
      title: "Outdoor Advertising Screens",
      description:
        "Durable and high-visibility advertising screens for outdoor use.",
      image: "/images/digital_signage/catering-industry.png",
    },
    {
      title: "Interactive Learning Displays",
      description:
        "Smart displays for enhanced learning experiences in classrooms.",
      image: "/images/digital_signage/medical-clinic.png",
    },
    {
      title: "Digital Menu Boards",
      description:
        "Dynamic and engaging digital menus for restaurants and cafes.",
      image: "/images/digital_signage/public-scene.png",
    },
    {
      title: "Hospitality Display Solutions",
      description:
        "High-resolution screens for hotels, lounges, and reception areas.",
      image: "/images/digital_signage/sales-center.png",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Product Applications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {cases.map((caseItem, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-2xl p-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={caseItem.image}
                alt={caseItem.title}
                width={400}
                height={250}
                className="rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold mb-3">{caseItem.title}</h3>
              <p className="text-gray-600 text-sm mb-4">
                {caseItem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
