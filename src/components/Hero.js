import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="flex flex-col bg-[url('/bg.png')] bg-cover bg-no-repeat">
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-2 text-center place-items-center md:place-items-start md:p-8 md:text-left mx-auto max-w-screen-lg w-full px-4 sm:px-6 lg:px-4">
        <div className="flex flex-col place-content-center mt-4 md:mt-0 md:row-start-1 space-y-2 h-full row-start-2">
          <h2 className=" text-3xl text-lightgreen font-medium">Hello I'm</h2>
          <h1 className=" md:text-6xl text-5xl font-bold">Rohit Sahani</h1>
          <h4 className=" text-xl font-bold">
            A Frontend Developer from India
          </h4>
          <p className=" text-base max-w-96">
            I'm a{" "}
            <strong className="text-lightgreen">frontend developer</strong> from
            India and I'm very passionate and dedicated to my work.
          </p>
          <div className=" pt-4 grid grid-cols-1 md:grid-cols-2 gap-4 justify-evenly">
            <button className="md:px-10 px-8 py-2 shrink-0 block font-medium ring-2 ring-purple bg-white rounded-full hover:bg-purple duration-200 hover:text-white">
              Portfolio
            </button>
            <button className="md:px-10 px-8 py-2 rounded-full ring-2 ring-lightgreen bg-lightgreen hover:bg-white hover:ring-lightgreen hover:text-purple duration-200 text-black font-medium">
              Hire Me
            </button>
          </div>
          <h2 className="text-2xl font-bold pt-4">Get in touch with us</h2>
          <div className="md:text-3xl text-xl space-x-4">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-linkedin"></i>
          </div>
        </div>
        <div className="bg-[url('/hero.png')] bg-contain bg-no-repeat order-1 md:order-2 h-80 md:h-[32rem] w-full bg-center "></div>
      </div>
      <div className="shadow-lg mx-auto max-w-screen-lg sm:px-6 w-full bg-white ring-2 ring-grey flex items-center md:flex-row flex-col flex-wrap justify-evenly md:p-12 p-4 mt-6 lg:px-4 rounded-xl">
        <div className="flex flex-col place-content-center items-center text-center space-y-2 p-2">
          <i className="fa-solid fa-bullseye text-6xl text-lightgreen"></i>
          <h4 className="text-lg font-bold">Pixel Perfect</h4>
          <p className="max-w-72">
            It is a long established fact that a reader will be distracted by
            the readable content of
          </p>
        </div>
        <div className="flex flex-col place-content-center items-center text-center space-y-2 p-2">
          <i className="fa-solid fa-shield text-6xl text-lightgreen"></i>
          <h4 className="text-lg font-bold">High Quality</h4>
          <p className="max-w-72">
            It is a long established fact that a reader will be distracted by
            the readable content of
          </p>
        </div>
        <div className="flex flex-col place-content-center items-center text-center space-y-2 p-2">
          <i className="fa-solid fa-lightbulb text-6xl text-lightgreen"></i>
          <h4 className="text-lg font-bold">Awesone Idea</h4>
          <p className=" max-w-72">
            It is a long established fact that a reader will be distracted by
            the readable content of
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
