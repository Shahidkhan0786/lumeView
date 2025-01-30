"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import {
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  Facebook,
  Twitter,
  Instagram,
  Phone,
} from "lucide-react";

export default function Navbar() {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSubmenuOpen, setIsMobileSubmenuOpen] = useState(false);
  const [isMobileSubSubmenuOpen, setIsMobileSubSubmenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  return (
    <>
      {/* Top Bar */}
      <div className="w-full  bg-primary text-white py-2 text-sm flex justify-between items-center px-6 md:px-12 fixed top-0 left-0 right-0 z-50">
        <div className="flex space-x-4">
          <a href="tel:+123456789" className="flex items-center space-x-1">
            <Phone size={16} />
            <span>+123 456 789</span>
          </a>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-accent">
            <Facebook size={16} />
          </a>
          <a href="#" className="hover:text-accent">
            <Twitter size={16} />
          </a>
          <a href="#" className="hover:text-accent">
            <Instagram size={16} />
          </a>
        </div>
      </div>

      {/* Navbar */}
      <nav className="w-full bg-white text-black fixed top-[32px] left-0 right-0 z-50 shadow-md">
        <div className="container mx-auto flex justify-between items-center py-3 px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="LumeView Logo"
              width={40}
              height={20}
              className="h-auto w-auto max-w-[150px] md:max-w-[180px] rounded-xl"
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden block text-black"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="absolute top-full left-0 w-full bg-white shadow-lg border-t md:hidden flex flex-col items-center space-y-4 py-4 z-50">
              <button
                className="flex items-center space-x-1 hover:text-accent"
                onClick={() => setIsMobileSubmenuOpen(!isMobileSubmenuOpen)}
              >
                <span>Products</span>
                <ChevronDown size={16} />
              </button>
              {isMobileSubmenuOpen && (
                <div className="w-full bg-gray-50 shadow-md flex flex-col items-center py-2">
                  <button
                    className="flex items-center space-x-1 hover:text-accent"
                    onClick={() =>
                      setIsMobileSubSubmenuOpen(!isMobileSubSubmenuOpen)
                    }
                  >
                    <span>XBoard V7 Series</span>
                    <ChevronRight size={16} />
                  </button>
                  {isMobileSubSubmenuOpen && (
                    <div className="w-full bg-gray-100 shadow-md flex flex-col items-center py-2">
                      <Link
                        href="/products/xboard-v7/variant1"
                        className="hover:text-accent"
                      >
                        Variant 1
                      </Link>
                      <Link
                        href="/products/xboard-v7/variant2"
                        className="hover:text-accent"
                      >
                        Variant 2
                      </Link>
                    </div>
                  )}
                  <Link
                    href="/products/v6-classic"
                    className="hover:text-accent"
                  >
                    V6 Classic Series
                  </Link>
                  <Link
                    href="/products/v6-viewpro"
                    className="hover:text-accent"
                  >
                    V6 ViewPro Series
                  </Link>
                  <Link
                    href="/products/smart-blackboard"
                    className="hover:text-accent"
                  >
                    Smart Blackboard
                  </Link>
                </div>
              )}
              <Link href="/solutions" className="hover:text-accent">
                Solutions
              </Link>
              <Link href="/partners" className="hover:text-accent">
                Partners
              </Link>
              <Link href="/support" className="hover:text-accent">
                Support
              </Link>
              <Link href="/explore" className="hover:text-accent">
                Explore
              </Link>
            </div>
          )}

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center mx-auto">
            <div
              className="relative"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <button className="flex items-center space-x-1 hover:text-accent">
                <span>Products</span>
                <ChevronDown size={16} />
              </button>
              {isProductsOpen && (
                <div className="absolute left-0 mt-2 w-56 bg-white text-black shadow-lg border rounded-md py-2">
                  <div
                    className="relative group"
                    onMouseEnter={() => setOpenSubmenu("xboard")}
                    onMouseLeave={() => setOpenSubmenu(null)}
                  >
                    <div className="flex justify-between items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      <span>XBoard V7 Series</span>
                      <ChevronRight size={16} />
                    </div>
                    {openSubmenu === "xboard" && (
                      <div className="absolute left-full top-0 w-56 bg-white text-black shadow-lg border rounded-md py-2">
                        <Link
                          href="/products/xboard-v7/variant1"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Variant 1
                        </Link>
                        <Link
                          href="/products/xboard-v7/variant2"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Variant 2
                        </Link>
                      </div>
                    )}
                  </div>
                  <Link
                    href="/products/v6-classic"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    V6 Classic Series
                  </Link>
                  <Link
                    href="/products/v6-viewpro"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    V6 ViewPro Series
                  </Link>
                  <Link
                    href="/products/smart-blackboard"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Smart Blackboard
                  </Link>
                </div>
              )}
            </div>

            <Link href="/solutions" className="hover:text-accent">
              Solutions
            </Link>
            <Link href="/partners" className="hover:text-accent">
              Partners
            </Link>
            <Link href="/support" className="hover:text-accent">
              Support
            </Link>
            <Link href="/explore" className="hover:text-accent">
              Explore
            </Link>
          </div>

          {/* Contact Sales Button */}
          <Button
            variant="default"
            className="hidden md:block bg-secondary text-white hover:bg-highlight"
          >
            Contact Sales
          </Button>
        </div>
      </nav>
    </>
  );
}
