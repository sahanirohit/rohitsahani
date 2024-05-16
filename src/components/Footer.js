import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="mx-auto max-w-screen-2xl w-full md:p-12 p-4 bg-[#424242]">
      <div className="flex items-start space-y-2 flex-col md:flex-row md:items-center flex-wrap justify-between">
        <div className="flex-shrink-0">
          <img className="h-20" src="/logo_white.png" alt="Logo" />
        </div>
        <div className="flex">
          <input
            type="text"
            className="px-4 py-3 ring-2 ring-gray-50 focus:ring-orange-500 focus:outline-none rounded-tl-lg rounded-bl-lg placeholder:text-gray-400 w-full"
            placeholder="Enter your email address"
          />
          <button className="px-4 py-3 ring-2 ring-orange-500 bg-orange-500 text-white font-bold rounded-tr-lg rounded-br-lg">
            SUBSCRIBE
          </button>
        </div>
        <div className="pt-2">
          <h2 className="text-3xl font-bold text-white">
            Get in touch with us
          </h2>
          <div className="text-xl text-white space-x-4">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-linkedin"></i>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-4 mt-6">
        <div className="">
          <h2 className="text-white font-bold text-2xl">Company</h2>
          <ul className="text-gray-300 mt-2">
            <li className="hover:text-gray-50">
              <Link href={"/"}>How to make an order?</Link>
            </li>
            <li className="hover:text-gray-50">
              <Link href={"/"}>Live Auctions</Link>
            </li>
            <li className="hover:text-gray-50">
              <Link href={"/"}>Terms & Conditions</Link>
            </li>
            <li className="hover:text-gray-50">
              <Link href={"/"}> Item Details</Link>
            </li>
            <li className="hover:text-gray-50">
              <Link href={"/"}>Activity</Link>
            </li>
          </ul>
        </div>

        <div className="">
          <h2 className="text-white font-bold text-2xl">Quick Links</h2>
          <ul className="text-gray-300 mt-2">
            <li className="hover:text-gray-50">
              <Link href={"/"}>Facebook</Link>
            </li>
            <li className="hover:text-gray-50">
              <Link href={"/"}>Instagram</Link>
            </li>
            <li className="hover:text-gray-50">
              <Link href={"/"}>Linkedin</Link>
            </li>
            <li className="hover:text-gray-50">
              <Link href={"/"}>Twitter</Link>
            </li>
            <li className="hover:text-gray-50">
              <Link href={"/"}>Github</Link>
            </li>
          </ul>
        </div>

        <div className="">
          <h2 className="text-white font-bold text-2xl">Shop</h2>
          <ul className="text-gray-300 mt-2">
            <li className="hover:text-gray-50">
              <Link href={"/"}>Products</Link>
            </li>
            <li className="hover:text-gray-50">
              <Link href={"/"}>Cart</Link>
            </li>
            <li className="hover:text-gray-50">
              <Link href={"/"}>Wishlist</Link>
            </li>
            <li className="hover:text-gray-50">
              <Link href={"/"}>My Account</Link>
            </li>
            <li className="hover:text-gray-50">
              <Link href={"/"}>Contact</Link>
            </li>
          </ul>
        </div>

        <div className="">
          <h2 className="text-white font-bold text-2xl">Services</h2>
          <ul className="text-gray-300 mt-2">
            <li className="hover:text-gray-50">
              <Link href={"/"}>Website Development</Link>
            </li>
            <li className="hover:text-gray-50">
              <Link href={"/"}>App Development</Link>
            </li>
            <li className="hover:text-gray-50">
              <Link href={"/"}>Software Development</Link>
            </li>
            <li className="hover:text-gray-50">
              <Link href={"/"}>Ecommerce Development</Link>
            </li>
            <li className="hover:text-gray-50">
              <Link href={"/"}>Personal Branding</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
