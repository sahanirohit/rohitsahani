import About from "@/components/About";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Service from "@/components/Service";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-screen-lg text-center gap-4 flex flex-col justify-center mt-8 w-full px-4 sm:px-6 lg:px-4">
        <h2 className="sm:text-lg text-base font-bold">- Hello</h2>
        <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold">
          I'm <span className="text-lightgreen">Rohit,</span> <br /> Frontend
          Developer
        </h1>
        <p className="text-sm max-w-screen-sm text-center self-center font-medium">
          With 1.5 years experience as a professinal Web developer. I have
          acquired the skills and kowledge necessary to make your project a
          success. I enjoy every step of the design process. For discussion and
          collaboration.
        </p>
        <div className="md:text-3xl text-xl space-x-4">
          <Link href="https://x.com/Rohit_Sahani11">
            <i className="fa-brands fa-twitter hover:text-twitter"></i>
          </Link>
          <Link href="https://www.instagram.com/rohit.sahani11">
            <i className="fa-brands fa-instagram hover:text-instagram"></i>
          </Link>
          <Link href="https://www.linkedin.com/in/rohitsahani01/">
            <i className="fa-brands fa-linkedin hover:text-linkedin"></i>
          </Link>
        </div>
        <div className="">
          <button className="px-6 py-2 bg-lightgreen font-bold rounded-md shrink-0">
            <Link href="https://wa.me/918957912038">Hire Me</Link>
          </button>
        </div>
        <div className="flex justify-between bg-purple p-8 text-white flex-wrap gap-4">
          <div className="space-y-2">
            <h2 className="text-5xl font-semibold">1.5+</h2>
            <p className="font-medium text-sm">
              Years of Experience <br /> in Development
            </p>
          </div>
          <div className="space-y-2">
            <h2 className="text-5xl font-semibold">150+</h2>
            <p className="font-medium text-sm">
              Successful Projects <br /> Completed
            </p>
          </div>
          <div className="space-y-2">
            <h2 className="text-5xl font-semibold">30+</h2>
            <p className="font-medium text-sm">
              Global Industry <br /> Covered
            </p>
          </div>
          <div className="space-y-2">
            <h2 className="text-5xl font-semibold">60+</h2>
            <p className="font-medium text-sm">Global Clients</p>
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
