import About from "@/components/About";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Service from "@/components/Service";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-screen-lg text-center mt-8 w-full px-4 sm:px-6 lg:px-4">
        <h2 className="sm:text-lg text-base font-bold">- Hello</h2>
        <h1 className="md:text-6xl sm:text-4xl text-2xl font-bold">
          I'm <span className="text-lightgreen">Rohit,</span> <br /> Frontend
          Developer
        </h1>
        <div className=" w-full h-full flex items-center justify-center">
          <div className="relative w-auto">
            <Image
              src="/hero.png" // Replace with your image path
              alt="Descriptive alt text"
              width={500}
              height={500}
              loading="lazy"
              className=" shrink-0 bg-contain"
            />
            <div className="z-50 relative">
              <div className="bg-white shrink-0 absolute bottom-0 left-0 rounded-full right-0">
                <div className="flex items-center justify-center rounded-full shrink-0 gap-2">
                  <button className="bg-purple sm:text-lg flex items-center justify-center gap-2 px-3 py-1 sm:px-6 sm:py-2 rounded-full shrink-0 text-white">
                    Portfolio
                    <div className="sm:p-2 p-1 rounded-full shrink-0 bg-lightgreen flex items-center justify-center">
                      <i className="fa-solid fa-arrow-right text-black text-sm"></i>
                    </div>
                  </button>
                  <button className="ring-2 ring-black rounded-full text-black sm:px-6 sm:py-2 px-3 py-1 sm:text-lg">
                    Hire Me
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <About />
      <Portfolio />
      <Service />
      <Footer />
    </>
  );
};

export default page;
