import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div className="mx-auto grid md:grid-cols-2 sm:mt-12 mt-6 gap-8 max-w-screen-lg px-4 sm:px-6 lg:px-4">
      <div className="mt-6 md:w-full max-w-lg mx-auto">
        <img
          src="/about_img.jpg"
          alt=""
          className="ring-2 ring-lightgreen bg-contain rounded-tl-[5rem] md:h-80 rounded-br-[5rem]"
        />
      </div>
      <div className="max-w-lg md:w-full mx-auto space-y-4">
        <h2 className="text-lg font-[serif] font-bold">- About Me</h2>
        <h1 className="sm:text-5xl md:text-6xl text-4xl font-medium font-[serif]">
          Who is <span className="text-purple">Rohit</span> <br />{" "}
          <span className="text-purple">Sahani?</span>
        </h1>
        <p className="">
          With 1.5 years experience as a professinal Web developer. I have
          acquired the skills and kowledge necessary to make your project a
          success. I enjoy every step of the design process. For discussion and
          collaboration.
        </p>
        <div className="flex justify-between">
          <div className="">
            <h2 className="text-2xl font-medium">150+</h2>
            <p className="text-lg">Project Completed</p>
          </div>
          <div className="">
            <h2 className="text-2xl font-medium">35+</h2>
            <p className="text-lg">Industry Covered</p>
          </div>
        </div>
        <div className="flex w-full flex-col sm:flex-row justify-between sm:h-12 h-10 rounded-full gap-4 items-start sm:items-center">
          <div className="bg-grey flex rounded-full h-full gap-2">
            <div className="sm:w-10 sm:h-10 w-8 h-8 rounded-full shrink-0 bg-[#813CEB] m-1 flex items-center justify-center">
              <i className="fa-solid fa-arrow-right text-white text-lg"></i>
            </div>
            <button className="bg-[#A6EB3C] px-4 h-full w-full rounded-full text-sm">
              <Link href="https://wa.me/918957912038">Let's Talk</Link>
            </button>
          </div>
          {/* <h2 className="hidden sm:block shrink-0">Rohit Sahani</h2> */}
        </div>
      </div>
    </div>
  );
};

export default About;
