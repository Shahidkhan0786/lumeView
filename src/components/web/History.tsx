"use client";
import { motion } from "framer-motion";
const HistoryHonor = () => {
  const milestones = [
    {
      year: "2008",
      text: "Shenzhen Lumeview officially enters the LED display manufacturing industry.",
    },
    {
      year: "2011",
      text: "Establishment of LUMEVIEW SMART BUSINESS DISPLAY SHANGHAI CO., LTD.",
    },
    {
      year: "2012",
      text: "LUMEVIEW LED display screen successfully passes 3C certification and obtains CE/FCC/ROHS certification.",
    },
    {
      year: "2013",
      text: "Obtained national high-tech certification and multiple product patents.",
    },
    {
      year: "2014",
      text: "Awarded '3.15 Integrity Member Unit' and established offices in Hefei, Beijing, Xi’an, and Chengdu.",
    },
    {
      year: "2015",
      text: "Recognized as '3.15 Integrity System Trusted Unit' and recommended for Chinese Engineering Construction.",
    },
    {
      year: "2016",
      text: "Rated as an innovative benchmark enterprise in Yangtze River Delta.",
    },
    {
      year: "2017",
      text: "Established Lumeview Culture Media to enter the entertainment industry.",
    },
    {
      year: "2018",
      text: "Became a first-tier engineering supplier of Liad Group in Shanghai.",
    },
    {
      year: "2019",
      text: "Acquired R&D company 'Shanghai Chujie Intelligent Technology Co., Ltd.'",
    },
  ];

  const certificates = [
    "/images/certificates/cert1.png",
    "/images/certificates/cert2.png",
    "/images/certificates/cert3.png",
    "/images/certificates/cert4.png",
    "/images/certificates/cert5.png",
    "/images/certificates/cert6.png",
    "/images/certificates/cert7.png",
    "/images/certificates/cert8.png",
    "/images/certificates/cert9.png",
    "/images/certificates/cert10.png",
  ];

  return (
    <div className="bg-gray-50 py-12">
      {/* Section Title */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        🏆 History & Honor
        <span className="block text-sm text-gray-600">
          Looking back on achievements and innovations
        </span>
      </motion.h2>

      {/* Timeline */}
      <div className="relative max-w-6xl mx-auto">
        <div className="border-l-4 border-blue-500 absolute h-full left-6 md:left-1/2 transform -translate-x-1/2"></div>
        <div className="space-y-8">
          {milestones.map((item, index) => (
            <motion.div
              key={index}
              className="relative flex items-center md:flex-row flex-col"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-lg font-bold absolute left-0 md:left-1/2 transform -translate-x-1/2">
                {item.year}
              </div>
              <div className="bg-white shadow-md p-6 rounded-lg w-full md:w-1/2 ml-auto">
                <p className="text-gray-700 p-2">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certificate Gallery */}
      {/* <motion.div
          className="max-w-6xl mx-auto mt-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-center text-gray-800">
            🏅 Certifications & Awards
          </h3>
          <p className="text-gray-600 text-center mb-6">
            Sowing trust, continuous innovation
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {certificates.map((src, index) => (
              <motion.div
                key={index}
                className="bg-white shadow-md rounded-lg overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={src}
                  alt={`Certificate ${index + 1}`}
                  className="w-full h-40 object-cover"
                />
              </motion.div>
            ))}
          </div>
        </motion.div> */}
    </div>
  );
};

export default HistoryHonor;
