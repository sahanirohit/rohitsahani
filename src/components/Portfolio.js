import React from "react";
import Image from "next/image";

const Portfolio = () => {
  return (
    <div className="bg-purple my-4 w-full h-full">
      <div className="mx-auto max-w-screen-lg w-full h-full px-4 sm:px-6 lg:px-4 py-4">
        <div className="flex flex-col sm:flex-row justify-between items-start space-y-4 md:items-end">
          <div className="">
            <h2 className="text-lg text-white">- Projects</h2>
            <h1 className="md:text-6xl text-5xl">
              My <span className="text-lightgreen">Latest Projects</span>
            </h1>
          </div>
          <div className="bg-black flex rounded-full shrink-0 sm:h-12 h-10 gap-2">
            <div className="sm:w-10 sm:h-10 w-8 h-8 rounded-full shrink-0 bg-[#813CEB] m-1 flex items-center justify-center">
              <i className="fa-solid fa-arrow-right text-white text-lg"></i>
            </div>
            <button className="bg-[#A6EB3C] h-full w-full rounded-full px-8 text-sm">
              View All Projects
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          {/* Row 1 */}
          <div className="grid bg-lightpurple p-4 rounded-2xl w-full h-full gap-4 grid-cols-1 sm:min-h-96 sm:grid-cols-2 xl:max-w-screen-lg xl:mx-auto mt-6">
            <div className="w-full h-full">
              <div className="sm:h-full h-56 relative w-full rounded-2xl">
                <Image
                  src="/project1.png" // Replace with your image path
                  alt="Descriptive alt text"
                  layout="fill"
                  objectFit="cover"
                  loading="lazy"
                  className=" rounded-2xl"
                />
              </div>
            </div>
            <div className="space-y-2 h-full place-content-center">
              <div className="flex items-start flex-wrap gap-2">
                <span className="bg-lightgreen px-3 rounded-full text-sm py-1 shrink-0">
                  UI/UX Design
                </span>
                <span className="bg-lightgreen px-3 rounded-full text-sm py-1 shrink-0">
                  Web Design
                </span>
                <span className="bg-lightgreen px-3 rounded-full text-sm py-1 shrink-0">
                  Frontend
                </span>
              </div>
              <h1 className="text-2xl font-bold text-white">
                State of Frontend
              </h1>
              <p className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                quas at doloribus architecto molestias.
              </p>
              <div className="">
                <div className="bg-black inline-flex rounded-full sm:h-12 h-10 gap-2">
                  <div className="sm:w-10 sm:h-10 w-8 h-8 rounded-full shrink-0 bg-[#813CEB] m-1 flex items-center justify-center">
                    <i className="fa-solid fa-arrow-right text-white text-lg"></i>
                  </div>
                  <button className="bg-[#A6EB3C] h-full w-auto rounded-full px-8 text-sm">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid bg-lightpurple p-4 rounded-2xl w-full h-full gap-4 grid-cols-1 sm:min-h-96 sm:grid-cols-2 xl:max-w-screen-lg xl:mx-auto mt-6">
            <div className="space-y-2 h-full place-content-center">
              <div className="flex items-start flex-wrap gap-2">
                <span className="bg-lightgreen px-3 rounded-full text-sm py-1 shrink-0">
                  Web Design
                </span>
                <span className="bg-lightgreen px-3 rounded-full text-sm py-1 shrink-0">
                  Landing Page
                </span>
                <span className="bg-lightgreen px-3 rounded-full text-sm py-1 shrink-0">
                  Wireframe
                </span>
              </div>
              <h1 className="text-2xl font-bold text-white">Medclass</h1>
              <p className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                quas at doloribus architecto molestias.
              </p>
              <div className="">
                <div className="bg-black inline-flex rounded-full sm:h-12 h-10 gap-2">
                  <div className="sm:w-10 sm:h-10 w-8 h-8 rounded-full shrink-0 bg-[#813CEB] m-1 flex items-center justify-center">
                    <i className="fa-solid fa-arrow-right text-white text-lg"></i>
                  </div>
                  <button className="bg-[#A6EB3C] h-full w-auto rounded-full px-8 text-sm">
                    View Details
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full h-full">
              <div className="sm:h-full h-56 relative w-full rounded-2xl">
                <Image
                  src="/project2.png" // Replace with your image path
                  alt="Descriptive alt text"
                  layout="fill"
                  objectFit="cover"
                  loading="lazy"
                  className=" rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
