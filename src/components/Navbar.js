"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img className="h-14" src="/logo.png" alt="Logo" />
          </div>

          {/* Menu button for mobile */}
          <div className="block md:hidden">
            <button
              className="text-gray-700 hover:text-black focus:text-black focus:outline-none"
              onClick={toggleMobileMenu}>
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>

          {/* Navigation links */}
          <div className="md:block hidden">
            <div className="flex space-x-4">
              <Link
                href="/"
                className="rounded-md px-3 py-2 text-sm font-medium  text-[#FF6B01]  hover:text-[#FF6B01]">
                Home
              </Link>
              <Link
                href="/about"
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-700  hover:text-[#FF6B01]">
                About
              </Link>
              <div className="relative group">
                <button className="rounded-md px-3 py-2 text-sm font-medium text-gray-700  hover:text-[#FF6B01]">
                  Services
                  <svg
                    className="-mt-1 ml-1 inline-block h-4 w-4 transform rotate-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 9l7 7 7-7"></path>
                  </svg>
                </button>
                <div className="absolute hidden min-w-max group-hover:block bg-white rounded-md shadow-lg">
                  <Link
                    href="/services/web-development"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300">
                    Web Development
                  </Link>
                  <Link
                    href="/services/app-development"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300">
                    App Development
                  </Link>
                  <Link
                    href="/services/software-development"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300">
                    Software Development
                  </Link>
                  <Link
                    href="/services/ecommerce-website"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300">
                    Ecommerce Website
                  </Link>
                </div>
              </div>
              <Link
                href="/contact"
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#FF6B01]">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, toggle visibility with state */}
      <div
        className={`md:hidden w-full ${isMobileMenuOpen ? "block" : "hidden"}`}>
        <div className="space-y-1 px-2 pb-3 pt-2">
          <Link
            href="/"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-300 hover:text-black">
            Home
          </Link>
          <Link
            href="/about"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-300 hover:text-black">
            About
          </Link>
          <div className="relative group">
            <button className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300 hover:text-black">
              Services
              <svg
                className="-mt-1 ml-1 inline-block h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
            <div className="absolute hidden group-hover:block rounded-md bg-gray-200 shadow-lg">
              <Link
                href="/services/web-development"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300">
                Web Development
              </Link>
              <Link
                href="/services/app-development"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300">
                App Development
              </Link>
              <Link
                href="/services/software-development"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300">
                Software Development
              </Link>
              <Link
                href="/services/ecommerce-website"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300">
                Ecommerce Website
              </Link>
            </div>
          </div>
          <Link
            href="/contact"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-300 hover:text-black">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
