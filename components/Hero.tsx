import React from "react";
import heroImage from "../public/hero.jpg";
import Image from "next/legacy/image";

const Hero = () => {
  return (
    <div className="w-full pt-16 sm:pt-32 pb-8 z-40 bg-white overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-4 w-full h-full max-w-screen-xl mx-auto place-content-center text-center px-4 xl:px-0">
        <div className="text-center lg:order-1 order-2 lg:text-left flex items-center justify-center lg:items-start flex-col space-y-4">
          <h1 className="text-5xl sm:text-7xl max-w-sm sm:max-w-xl  font-serif font-bold">
            Frontend Developer
          </h1>
          <p className="max-w-lg">
            I'm a front-end developer with a focus on clean, lightweight design.
            I love to work with startups and small businesses to help them
            establish their brand identity.
          </p>
          <h2 className="font-semibold text-lg italic">
            Want to know more about me? Connect with me!
          </h2>
          <div className="flex gap-4 text-lg">
            <a
              href="http://twitter.com/rohit_sahani11"
              target="_blank"
              rel="noopener noreferrer">
              <i className="fa-brands hover:bg-sky-400 hover:text-white cursor-pointer ring-2 ring-sky-400 text-sky-400 icons fa-twitter"></i>
            </a>
            <a
              href="http://instagram.com/cleanuidesign"
              target="_blank"
              rel="noopener noreferrer">
              <i className="fa-brands hover:bg-pink-500 hover:text-white cursor-pointer ring-2 ring-pink-500 text-pink-500 icons fa-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/rohitsahani01/"
              target="_blank"
              rel="noopener noreferrer">
              <i className="fa-brands hover:bg-blue-600 hover:text-white cursor-pointer ring-2 ring-blue-600 text-blue-600 icons fa-linkedin"></i>
            </a>
            <a
              href="http://youtube.com"
              target="_blank"
              rel="noopener noreferrer">
              <i className="fa-brands hover:bg-red-600 hover:text-white cursor-pointer ring-2 ring-red-600 text-red-600 icons fa-youtube"></i>
            </a>
          </div>
          <div className="pt-6">
            <a
              href="http://wa.me/918957912038"
              target="_blank"
              rel="noopener noreferrer">
              <button className="px-4 hover:text-white hover:bg-black duration-200 text-lg py-1.5 ring-2 ring-black rounded-md flex items-center">
                <i>Let's Talk!</i>
                <i className="fa-brands fa-whatsapp text-green-500 pl-2"></i>
              </button>
            </a>
          </div>
        </div>
        <div className="lg:order-2 order-1">
          <div className="relative h-96 heroImage">
            <Image
              src={heroImage}
              alt="hero image"
              layout="fill"
              objectFit="contain"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
