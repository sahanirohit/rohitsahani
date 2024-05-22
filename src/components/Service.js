import React from "react";
import Image from "next/image";

const Service = () => {
  return (
    <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-4 py-4">
      <h1 className="text-center text-4xl font-bold mb-8">My Service</h1>
      <div className="grid gap-4 md:grid-cols-2 grid-cols-1">
        <div className=" space-y-2 row-start-2 md:row-start-1">
          <h1 className="md:text-3xl text-2xl font-bold">
            Pixel Perfect Frontend Design
          </h1>
          <p className="font-medium text-sm">
            Enhance your online presence with modern, user-friendly web designs
            that captivate and engage your audience. Let’s work together to
            create a seamless digital experience that makes your brand stand
            out.
          </p>
          <p className="font-medium text-sm">
            As a proficient Frontend Developer, I specialize in crafting
            dynamic, user-friendly web interfaces. With expertise in HTML, CSS,
            and JavaScript, I create responsive, accessible designs that ensure
            seamless user experiences across devices. My experience includes
            leveraging modern frameworks like React and Next.js, optimizing
            performance, and implementing intuitive UI/UX principles. Committed
            to staying updated with the latest industry trends and technologies,
            I thrive in collaborative environments and am dedicated to
            translating creative concepts into interactive digital solutions.
          </p>
          <div className=" md:space-x-6 flex justify-evenly md:justify-start pt-4 w-full">
            <button className="md:px-14 px-6 py-2 font-medium ring-2 bg-white ring-[#FF6B01] rounded-full hover:bg-[#FF6B01] duration-200 hover:text-white">
              Book a Call
            </button>
            <button className="md:px-14 px-6 py-2 rounded-full ring-2 ring-[#FF6B01] bg-[#FF6B01] hover:bg-white hover:text-black duration-200 text-white font-medium">
              View Case Study
            </button>
          </div>
        </div>
        <div className="h-96 relative w-full">
          <Image
            src="/frontend_service.jpg" // Replace with your image path
            alt="Descriptive alt text"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="md:py-8 py-4 items-center w-full place-content-center flex">
        <button className="md:px-12 px-8 py-2 font-bold ring-2 ring-orange-500 rounded-full">
          MORE SERVICES
        </button>
      </div>
    </div>
  );
};

export default Service;
