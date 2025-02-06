"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import ProductApplication from "@/components/web/IndoorDigitalSignage/ProductApplication";
import Link from "next/link";

export default function HeroSection() {
  const sections = ["Overview", "Features", "Specifications"];
  const [activeSection, setActiveSection] = useState("Overview");
  const [isSticky, setIsSticky] = useState(false);
  const navbarRef = useRef(null);
  const placeholderRef = useRef(null);
  const debounceTimeout = useRef(null);
  const lastStickyPosition = useRef(0); // Store the last position where it became sticky

  useEffect(() => {
    const handleScroll = () => {
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
      }

      debounceTimeout.current = setTimeout(() => {
        const scrollPosition = window.scrollY;
        const navbar = navbarRef.current;
        const placeholder = placeholderRef.current;

        if (navbar && placeholder) {
          const navbarOffset = placeholder.offsetTop;

          if (!isSticky && scrollPosition >= navbarOffset - 103) {
            console.log("set sticky true");
            setIsSticky(true);
            lastStickyPosition.current = scrollPosition; // Store the position where it became sticky
          } else if (
            isSticky &&
            scrollPosition < lastStickyPosition.current - 50
          ) {
            console.log("set sticky false");
            setIsSticky(false);
          }
        }

        const offsets = sections.map((id) => {
          const element = document.getElementById(
            id.toLowerCase().replace(/\s/g, "-")
          );
          return element ? element.offsetTop : 0;
        });

        for (let i = offsets.length - 1; i >= 0; i--) {
          if (scrollPosition >= offsets[i] - 80) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }, 200); // 200ms debounce time
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
      }
    };
  }, [isSticky]);

  const scrollToSection = (id) => {
    const element = document.getElementById(
      id.toLowerCase().replace(/\s/g, "-")
    );
    if (element) {
      const offset = id === "Overview" ? 0 : element.offsetTop - 70;
      window.scrollTo({
        top: offset,
        behavior: id === "Overview" ? "instant" : "smooth",
      });
    }
  };

  return (
    <>
      <section className="relative w-full h-80 mt-24 flex items-center justify-start px-6 md:px-12 lg:px-20 xl:px-32 bg-black">
        <div className="absolute inset-0">
          <Image
            src="/images/digital_signage/indoor-digital-signage.png"
            alt="Digital Signage Display"
            layout="fill"
            objectFit="cover"
            className="opacity-80"
          />
          <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-lg text-white">
          <h4 className="text-gray font-extrabold text-lg">
            Indoor Digital Signage
          </h4>
          <p className="text-gray font-bold text-sm mb-2">
            Touch Inquiry Interactive All-in-One Machine
          </p>
          <h1 className="text-4xl font-bold leading-tight">
            Elevate Advertising with Smart Displays
          </h1>
          <Link
            href="/files/DataSheet-Indoor Digital Signage-20250122.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-lg rounded-md">
              Download Brochure
            </button>
          </Link>
        </div>
      </section>

      <div className="min-h-screen bg-white">
        <div ref={placeholderRef}></div>

        <nav
          ref={navbarRef}
          className={`w-full bg-white shadow-md z-50 transition-all duration-300 ${
            isSticky ? "fixed top-24 left-0 w-full" : "relative"
          }`}
        >
          <div className="max-w-7xl mx-auto flex justify-center space-x-6 p-4">
            {sections.map((section) => (
              <button
                key={section}
                className={`px-4 py-2 text-sm font-medium transition ${
                  activeSection === section
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-600"
                }`}
                onClick={() => scrollToSection(section)}
              >
                {section}
              </button>
            ))}
          </div>
        </nav>

        <div className="mt-20">
          <section id="overview" className="min-h-screen p-10 bg-white">
            <h2 className="text-3xl font-bold">Overview</h2>
            <p className="text-lg mt-4">
              Reassured IPS anti-explosive screen with A+ panel technology.
              Covering RGB wide color gamut for rich and vivid colors.
            </p>
            <p className="mt-2">
              Supports **remote management**, **multi-point advertising**, and
              **intelligent split-screen playback**.
            </p>
          </section>

          <section id="features" className="min-h-screen p-20 bg-gray-50 ">
            <h2 className="text-3xl font-bold">Key Features</h2>
            <ul className="list-disc mt-4 ml-6">
              <li>HD & Ultra-HD vision (2K/4K resolution)</li>
              <li>Remote management and unified control</li>
              <li>Thick tempered glass</li>
              <li>Auto-loop playback with intelligent split-screen modes</li>
              <li>Supports remote management & control</li>
              <li>Multi-touch precise touchscreen (IR/Capacitive Touch)</li>
              <li>24/7 uninterrupted operation</li>
              <li>Custom power on/off scheduling</li>
              <li>Horizontal & vertical screen switching</li>
            </ul>

            <ProductApplication />
          </section>

          <section id="specifications" className="min-h-screen p-10 bg-white">
            <h2 className="text-3xl font-bold text-center mb-6">
              Product Specifications
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 text-sm text-center">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border border-gray-300 p-2">Feature</th>
                    {["Model 1", "Model 2", "Model 3"].map((model, index) => (
                      <th key={index} className="border border-gray-300 p-2">
                        {model}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {["Resolution", "Brightness", "Contrast Ratio"].map(
                    (feature, rowIndex) => (
                      <tr key={rowIndex}>
                        <td className="border border-gray-300 p-2 font-semibold">
                          {feature}
                        </td>
                        {["1920x1080", "350 cd/m²", "1200:1"].map(
                          (value, colIndex) => (
                            <td
                              key={colIndex}
                              className="border border-gray-300 p-2"
                            >
                              {value}
                            </td>
                          )
                        )}
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
