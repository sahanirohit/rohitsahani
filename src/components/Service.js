import React from "react";
import Image from "next/image";

const serviceData = [
  {
    serial: 1,
    title: "Website Development",
    tags: [
      "React JS Development",
      "Angular JS Development",
      "Laravel Development",
      "Vue JS Development",
    ],
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, dolorem temporibus? Odio, repellat alias magni voluptas debitis consequuntur ducimus saepe quasi aperiam voluptates nemo, exercitationem nulla necessitatibus quos soluta est?",
    imageURL: "/frontend_service.jpg",
  },
  {
    serial: 2,
    title: "Mobile App Development",
    tags: [
      "Android App Development",
      "iOS App Development",
      "Flutter App Development",
      "React Native App Development",
    ],
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, dolorem temporibus? Odio, repellat alias magni voluptas debitis consequuntur ducimus saepe quasi aperiam voluptates nemo, exercitationem nulla necessitatibus quos soluta est?",
    imageURL: "/frontend_service.jpg",
  },
  {
    serial: 3,
    title: "UI/UX Design",
    tags: [
      "User Research",
      "User Persona",
      "Usability Testing",
      "Wireframing",
      "Prototyping",
      "Visual Design",
    ],
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, dolorem temporibus? Odio, repellat alias magni voluptas debitis consequuntur ducimus saepe quasi aperiam voluptates nemo, exercitationem nulla necessitatibus quos soluta est?",
    imageURL: "/frontend_service.jpg",
  },
  {
    serial: 4,
    title: "Graphic Design",
    tags: [
      "Packaging Design",
      "Infographic Design",
      "Illustration",
      "Brand Identity Design",
      "Print Design",
      "Digital Design",
    ],
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, dolorem temporibus? Odio, repellat alias magni voluptas debitis consequuntur ducimus saepe quasi aperiam voluptates nemo, exercitationem nulla necessitatibus quos soluta est?",
    imageURL: "/frontend_service.jpg",
  },
];

const Service = () => {
  return (
    <div className="mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-4 py-4">
      <h2 className="">- Our Services</h2>
      <h1 className="text-3xl font-bold">
        Discover Our <br />{" "}
        <span className="text-lightgreen">Digital Solutions</span>
      </h1>
      <div className="grid grid-cols-1 gap-4">
        {serviceData.map((service, serviceIndex) => (
          <div
            key={serviceIndex}
            className="flex justify-between group md:flex-row flex-col gap-4 bg-white shadow-md ring-2 ring-grey mt-4 items-start p-4">
            <div className="min-w-36 md:text-center">
              <h2 className="md:text-4xl text-2xl font-bold">
                0{service.serial}
              </h2>
            </div>
            <div className="flex-1 space-y-4 cursor-pointer">
              <h1 className="md:text-3xl text-2xl font-bold">
                {service.title}
              </h1>
              <div className="flex flex-wrap gap-2 md:text-xl text-sm">
                {service.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-lightgreen px-4 rounded-full py-2 shrink-0">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="md:text-base text-sm">{service.para}</p>
              {/* <div className="w-full h-full"> */}
              <div className="group-hover:h-48 md:group-hover:h-96 overflow-hidden duration-500 group-hover:translate-y-0 group-hover:opacity-100 opacity-0 translate-y-full relative w-full rounded-2xl">
                <Image
                  src={service.imageURL} // Replace with your image path
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
        ))}
      </div>
    </div>
  );
};

export default Service;
