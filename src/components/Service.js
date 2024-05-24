import React from "react";
import Image from "next/image";

const Service = () => {
  return (
    <div className="mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-4 py-4">
      <h2 className="">- Our Services</h2>
      <h1 className="text-3xl font-bold">
        Discover Our <br />{" "}
        <span className="text-lightgreen">Digital Solutions</span>
      </h1>
      <div className="grid grid-cols-1 gap-4">
        {/* Row 1 */}
        <div className="flex justify-between md:flex-row flex-col gap-4 bg-white shadow-md ring-2 ring-grey mt-4 items-start p-4">
          <div className="min-w-36 md:text-center">
            <h2 className="md:text-4xl text-2xl font-bold">01</h2>
          </div>
          <div className="flex-1 space-y-4 group cursor-pointer">
            <h1 className="md:text-3xl text-2xl font-bold">
              Website Development
            </h1>
            <div className="flex flex-wrap gap-2 md:text-xl text-sm">
              <span className="bg-lightgreen px-4 rounded-full py-2 shrink-0">
                React JS Development
              </span>
              <span className="bg-lightgreen px-4 rounded-full py-2 shrink-0">
                Angular JS Development
              </span>

              <span className="bg-lightgreen px-4 rounded-full py-2 shrink-0">
                Laravel Development
              </span>
              <span className="bg-lightgreen px-4 rounded-full py-2 shrink-0">
                Vue JS Development
              </span>
            </div>
            <p className="md:text-base text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
              dolorem temporibus? Odio, repellat alias magni voluptas debitis
              consequuntur ducimus saepe quasi aperiam voluptates nemo,
              exercitationem nulla necessitatibus quos soluta est?
            </p>
            {/* <div className="w-full h-full"> */}
            <div className="group-hover:h-48 md:group-hover:h-96 overflow-hidden duration-500 group-hover:translate-y-0 group-hover:opacity-100 opacity-0 translate-y-full relative w-full rounded-2xl">
              <Image
                src="/frontend_service.jpg" // Replace with your image path
                alt="Descriptive alt text"
                layout="fill"
                loading="lazy"
                className=" rounded-2xl md:bg-contain bg-cover"
              />
            </div>
            {/* </div> */}
          </div>
          <div className="">
            <div className="bg-grey inline-flex rounded-full sm:h-12 h-10 gap-2">
              <button className="bg-[#A6EB3C] h-full w-auto rounded-full px-8 text-sm">
                View Details
              </button>
              <div className="sm:w-10 sm:h-10 w-8 h-8 rounded-full shrink-0 bg-[#813CEB] m-1 flex items-center justify-center">
                <i className="fa-solid fa-arrow-right text-white text-lg"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex justify-between md:flex-row flex-col gap-4 bg-white shadow-md ring-2 ring-grey mt-4 items-start p-4">
          <div className="min-w-36 md:text-center">
            <h2 className="md:text-4xl text-2xl font-bold">02</h2>
          </div>
          <div className="flex-1 space-y-4 group cursor-pointer">
            <h1 className="md:text-3xl text-2xl font-bold">
              Mobile Application Development
            </h1>
            <div className="flex flex-wrap gap-2 md:text-xl text-sm">
              <span className="bg-lightgreen px-4 rounded-full py-2 shrink-0">
                Android App Development
              </span>
              <span className="bg-lightgreen px-4 rounded-full py-2 shrink-0">
                iOS App Development
              </span>

              <span className="bg-lightgreen px-4 rounded-full py-2 shrink-0">
                Flutter App Development
              </span>
              <span className="bg-lightgreen px-4 rounded-full py-2 shrink-0">
                React Native App Development
              </span>
            </div>
            <p className="md:text-base text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
              dolorem temporibus? Odio, repellat alias magni voluptas debitis
              consequuntur ducimus saepe quasi aperiam voluptates nemo,
              exercitationem nulla necessitatibus quos soluta est?
            </p>
            {/* <div className="w-full h-full"> */}
            <div className="group-hover:h-48 md:group-hover:h-96 overflow-hidden duration-500 group-hover:translate-y-0 group-hover:opacity-100 opacity-0 translate-y-full relative w-full rounded-2xl">
              <Image
                src="/frontend_service.jpg" // Replace with your image path
                alt="Descriptive alt text"
                layout="fill"
                loading="lazy"
                className=" rounded-2xl md:bg-contain bg-cover"
              />
            </div>
            {/* </div> */}
          </div>
          <div className="">
            <div className="bg-grey inline-flex rounded-full sm:h-12 h-10 gap-2">
              <button className="bg-[#A6EB3C] h-full w-auto rounded-full px-8 text-sm">
                View Details
              </button>
              <div className="sm:w-10 sm:h-10 w-8 h-8 rounded-full shrink-0 bg-[#813CEB] m-1 flex items-center justify-center">
                <i className="fa-solid fa-arrow-right text-white text-lg"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Row 3 */}
        <div className="flex justify-between md:flex-row flex-col gap-4 bg-white shadow-md ring-2 ring-grey mt-4 items-start p-4">
          <div className="min-w-36 md:text-center">
            <h2 className="md:text-4xl text-2xl font-bold">03</h2>
          </div>
          <div className="flex-1 space-y-4 group cursor-pointer">
            <h1 className="md:text-3xl text-2xl font-bold">UI/UX Design</h1>
            <div className="flex flex-wrap gap-2 md:text-xl text-sm">
              <span className="bg-lightgreen px-4 rounded-full py-2 shrink-0">
                User Research
              </span>
              <span className="bg-lightgreen px-4 rounded-full py-2 shrink-0">
                User Personas
              </span>
              <span className="bg-lightgreen px-4 rounded-full py-2 shrink-0">
                Usability Testing
              </span>
              <span className="bg-lightgreen px-4 rounded-full py-2 shrink-0">
                Wireframing
              </span>
              <span className="bg-lightgreen px-4 rounded-full py-2 shrink-0">
                Prototyping
              </span>
              <span className="bg-lightgreen px-4 rounded-full py-2 shrink-0">
                Visual Design
              </span>
            </div>
            <p className="md:text-base text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
              dolorem temporibus? Odio, repellat alias magni voluptas debitis
              consequuntur ducimus saepe quasi aperiam voluptates nemo,
              exercitationem nulla necessitatibus quos soluta est?
            </p>
            {/* <div className="w-full h-full"> */}
            <div className="group-hover:h-48 md:group-hover:h-96 overflow-hidden duration-500 group-hover:translate-y-0 group-hover:opacity-100 opacity-0 translate-y-full relative w-full rounded-2xl">
              <Image
                src="/frontend_service.jpg" // Replace with your image path
                alt="Descriptive alt text"
                layout="fill"
                loading="lazy"
                className=" rounded-2xl md:bg-contain bg-cover"
              />
            </div>
            {/* </div> */}
          </div>
          <div className="">
            <div className="bg-grey inline-flex rounded-full sm:h-12 h-10 gap-2">
              <button className="bg-[#A6EB3C] h-full w-auto rounded-full px-8 text-sm">
                View Details
              </button>
              <div className="sm:w-10 sm:h-10 w-8 h-8 rounded-full shrink-0 bg-[#813CEB] m-1 flex items-center justify-center">
                <i className="fa-solid fa-arrow-right text-white text-lg"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Row 4 */}
        <div className="flex justify-between md:flex-row flex-col gap-4 bg-white shadow-md ring-2 ring-grey mt-4 items-start p-4">
          <div className="min-w-36 md:text-center">
            <h2 className="md:text-4xl text-2xl font-bold">04</h2>
          </div>
          <div className="flex-1 space-y-4 group cursor-pointer">
            <h1 className="md:text-3xl text-2xl font-bold">Graphic Design</h1>
            <div className="flex flex-wrap gap-2 md:text-xl text-sm">
              <span className="bg-lightgreen px-4 rounded-full py-2 shrink-0">
                Packaging Design
              </span>
              <span className="bg-lightgreen px-4 rounded-full py-2 shrink-0">
                Infographic Design
              </span>
              <span className="bg-lightgreen px-4 rounded-full py-2 shrink-0">
                Illustration
              </span>
              <span className="bg-lightgreen px-4 rounded-full py-2 shrink-0">
                Brand Identity Design
              </span>
              <span className="bg-lightgreen px-4 rounded-full py-2 shrink-0">
                Print Design
              </span>
              <span className="bg-lightgreen px-4 rounded-full py-2 shrink-0">
                Digital Design
              </span>
            </div>
            <p className="md:text-base text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
              dolorem temporibus? Odio, repellat alias magni voluptas debitis
              consequuntur ducimus saepe quasi aperiam voluptates nemo,
              exercitationem nulla necessitatibus quos soluta est?
            </p>
            {/* <div className="w-full h-full"> */}
            <div className="group-hover:h-48 md:group-hover:h-96 overflow-hidden duration-500 group-hover:translate-y-0 group-hover:opacity-100 opacity-0 translate-y-full relative w-full rounded-2xl">
              <Image
                src="/frontend_service.jpg" // Replace with your image path
                alt="Descriptive alt text"
                layout="fill"
                loading="lazy"
                className=" rounded-2xl md:bg-contain bg-cover"
              />
            </div>
            {/* </div> */}
          </div>
          <div className="">
            <div className="bg-grey inline-flex rounded-full sm:h-12 h-10 gap-2">
              <button className="bg-[#A6EB3C] h-full w-auto rounded-full px-8 text-sm">
                View Details
              </button>
              <div className="sm:w-10 sm:h-10 w-8 h-8 rounded-full shrink-0 bg-[#813CEB] m-1 flex items-center justify-center">
                <i className="fa-solid fa-arrow-right text-white text-lg"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
