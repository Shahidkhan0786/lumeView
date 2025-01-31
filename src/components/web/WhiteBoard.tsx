"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function WhiteBoardSection() {
  return (
    <div className="flex flex-col items-center">
      <Section
        title="Enhance meetings with interactive whiteboards"
        text="Boost team creativity and productivity with seamless meetings and presentations."
        imageSrc="/images/whiteboard.png"
        bgColor="bg-primary-light"
        reverse={false}
      />
      <Section
        title="Leveraging both LED and LCD technologies"
        text="Supports conference rooms, production studios, and companies with different presentation environments."
        imageSrc="/images/LED-LCD.png"
        bgColor="bg-secondary-light"
        reverse={true}
      />
      <Section
        title="HDMI, USB, and wireless connections"
        text="Seamless integration with other devices for enhanced productivity and collaboration."
        imageSrc="/images/hdmi-usb.png"
        // bgColor="bg-accent-light"
        reverse={false}
      />
    </div>
  );
}

function Section({ title, text, imageSrc, bgColor, reverse }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className={`w-full flex flex-col md:flex-row items-center justify-center p-6 md:p-8 min-h-[50vh] ${bgColor} ${
        reverse ? "md:flex-row-reverse" : ""
      } relative overflow-hidden`}
      //   style={{ clipPath: "polygon(0 0, 75% 0, 100% 50%, 75% 100%, 0 100%)" }}
    >
      <div className="md:w-1/2 p-4 relative z-10">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-lg">{text}</p>
      </div>
      <div className="md:w-1/2 p-4 relative z-10">
        <Image
          src={imageSrc}
          alt={title}
          width={400}
          height={250}
          className="rounded-lg"
        />
      </div>
      <div
        className="absolute inset-0 bg-white z-0"
        // style={{ clipPath: "polygon(0 0, 75% 0, 100% 50%, 75% 100%, 0 100%)" }}
      ></div>
    </motion.div>
  );
}
