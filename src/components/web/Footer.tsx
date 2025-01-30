"use client";

import Link from "next/link";
import {
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-6 lg:px-20 text-center md:text-left">
        <h2 className="text-2xl font-bold mb-6 text-center">
          GET CONNECTED WITH US
        </h2>

        <div className="flex justify-center space-x-6 mb-6">
          <Link href="#" className="text-gray-400 hover:text-white">
            <FaLinkedin size={28} />
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white">
            <FaFacebook size={28} />
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white">
            <FaTwitter size={28} />
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white">
            <FaYoutube size={28} />
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white">
            <FaEnvelope size={28} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="text-gray-400 space-y-3">
              <li>
                <Link href="#" className="hover:text-white">
                  About Lumeview
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Awards
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">News & Events</h3>
            <ul className="text-gray-400 space-y-3">
              <li>
                <Link href="#" className="hover:text-white">
                  Blogs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Stories</h3>
            <ul className="text-gray-400 space-y-3">
              <li>
                <Link href="#" className="hover:text-white">
                  Customer Stories
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col lg:flex-row justify-between items-start lg:items-center">
          <p className="text-gray-400 text-center lg:text-left max-w-lg">
            Sign up to receive Lumeview marketing emails. You can modify your
            subscription or unsubscribe at any time.
          </p>
          <div className="flex flex-col items-center lg:items-end w-full max-w-lg mt-6 lg:mt-0">
            <div className="flex w-full">
              <input
                type="email"
                placeholder="Enter your E-mail Address"
                className="bg-gray-800 text-white px-4 py-3 rounded-l-md w-full focus:outline-none"
              />
              <button className="bg-white text-black px-6 py-3 rounded-r-md font-semibold">
                SUBMIT
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 text-gray-400 text-center lg:text-left">
          <p>21076 Bake Parkway, Suite 106, Lake Forest, CA 92630</p>
          <p className="mt-2">
            <Link href="#" className="hover:text-white">
              Web Policy
            </Link>{" "}
            |{" "}
            <Link href="#" className="hover:text-white">
              Cookies Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
