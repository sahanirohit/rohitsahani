import React from "react";
import Image from "next/image";

const Portfolio = () => {
  return (
    <div className="mx-auto max-w-screen-2xl w-full px-4 sm:px-6 lg:px-0 py-4">
      <h1 className="text-center text-4xl font-bold mb-8">My Portfolio</h1>
      <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        <div className="bg-slate-50 rounded-lg">
          <div className="w-full h-96 relative">
            <Image
              src="/project1.png" // Replace with your image path
              alt="Descriptive alt text"
              layout="fill"
              objectFit="contain"
            />
          </div>

          <div className="p-4">
            <h2 className="text-2xl font-bold">State of Frontend</h2>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              temporibus commodi vel neque voluptate ex.
            </p>
          </div>
        </div>
        <div className="w-full bg-slate-50 rounded-lg">
          <div className="w-full h-96 relative">
            <Image
              src="/project2.png" // Replace with your image path
              alt="Descriptive alt text"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="p-4">
            <h2 className="text-2xl font-bold">Medclass</h2>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              temporibus commodi vel neque voluptate ex.
            </p>
          </div>
        </div>
        <div className="w-full bg-slate-50 rounded-lg">
          <div className="w-full h-96 relative">
            <Image
              src="/project3.png" // Replace with your image path
              alt="Descriptive alt text"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="p-4">
            <h2 className="text-2xl font-bold">Project Showcase</h2>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              temporibus commodi vel neque voluptate ex.
            </p>
          </div>
        </div>
      </div>
      <div className="items-center py-4 w-full place-content-center flex">
        <button className="px-12 py-3 font-bold ring-2 ring-orange-500 rounded-full">
          VIEW ALL
        </button>
      </div>
    </div>
  );
};

export default Portfolio;
