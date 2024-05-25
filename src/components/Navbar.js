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
      <div className="mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-4">
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
            <div className="flex space-x-4 items-center justify-center">
              <Link
                href="/"
                className="rounded-md px-3 py-2 text-base font-medium  hover:text-purple">
                Home
              </Link>
              <Link
                href="/about"
                className="rounded-md px-3 py-2 text-base font-medium  hover:text-purple">
                About
              </Link>
              <Link
                href="/portfolio"
                className="block rounded-md px-3 py-2 text-base font-medium hover:text-purple">
                Portfolio
              </Link>
              <Link
                href="/services"
                className="block rounded-md px-3 py-2 text-base font-medium hover:text-purple">
                Services
              </Link>
              <Link
                href="/contact"
                className="rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:text-purple">
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
            className="block rounded-md px-3 py-2 text-base font-medium hover:text-purple">
            Home
          </Link>
          <Link
            href="/about"
            className="block rounded-md px-3 py-2 text-base font-medium hover:text-purple">
            About
          </Link>
          <Link
            href="/portfolio"
            className="block rounded-md px-3 py-2 text-base font-medium hover:text-purple">
            Portfolio
          </Link>
          <Link
            href="/services"
            className="block rounded-md px-3 py-2 text-base font-medium hover:text-purple">
            Services
          </Link>
          <Link
            href="/contact"
            className="block rounded-md px-3 py-2 text-base font-medium hover:text-purple">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
