import Image from "next/legacy/image";
import React from "react";
import webDevelopment from "../public/web-development.jpg";
import webDesign from "../public/web-design.jpg";
import appDevelopment from "../public/app-development.jpg";
import digitalMarketing from "../public/digital-marketing.jpg";
import androidDevelopment from "../public/android-app-development.jpg";
import iosDevelopment from "../public/ios-app-development.jpg";

const serviceData = [
  webDevelopment,
  appDevelopment,
  digitalMarketing,
  webDesign,
  androidDevelopment,
  iosDevelopment,
];

const Services = () => {
  return (
    <div className="bg-gray-200">
      <div className=" max-w-screen-xl px-4 pt-16 mx-auto">
        <h1 className="text-center text-3xl text-gray-900 font-serif font-medium uppercase">
          Services
        </h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 py-8">
          {serviceData.map((item, index) => (
            <div
              key={index}
              className="rounded-md flex flex-col justify-around p-10">
              <Image
                src={item}
                alt="service"
                width={350}
                height={350}
                objectFit="contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
