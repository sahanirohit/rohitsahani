import React from "react";
import Image from "next/image";
import Link from "next/link";

const serviceData = [
  {
    serial: 1,
    imageURL: "/frontend_service.jpg",
    title: "Web Development Services",
    tags: [
      "React JS Development",
      "Angular JS Development",
      "Laravel Development",
      "Vue JS Development",
    ],
    para: "Bring your online vision to life with our professional web development services. Our experienced developers specialize in creating robust, responsive, and high-performing websites tailored to your specific needs. From e-commerce platforms to dynamic web applications, we build solutions that are not only visually appealing but also optimized for speed, security, and scalability.",
  },
  {
    serial: 2,
    imageURL: "/mobile-app-design.jpg",
    title: "Mobile App Design Services",
    tags: [
      "Android App Development",
      "iOS App Development",
      "Flutter App Development",
      "React Native App Development",
    ],
    para: "Transform your ideas into engaging mobile experiences with our innovative mobile app design services. Our team of talented designers excels in creating intuitive, user-centric app interfaces that captivate users and enhance usability. From concept to final design, we focus on aesthetics, functionality, and seamless navigation to deliver apps that stand out in the competitive mobile landscape.",
  },
  {
    serial: 3,
    imageURL: "/user-interface-design.jpg",
    title: "User Interface Design Services",
    tags: [
      "User Research",
      "User Persona",
      "Usability Testing",
      "Wireframing",
      "Prototyping",
      "Visual Design",
    ],
    para: "Enhance your digital presence with our expert user interface design services. Our skilled designers specialize in creating intuitive, user-friendly interfaces that ensure a seamless and engaging experience for your audience. From web applications to mobile apps, we focus on usability, aesthetics, and functionality to deliver designs that not only look stunning but also enhance user satisfaction.",
  },
  {
    serial: 4,
    imageURL: "/graphic-design-service.jpg",
    title: "Expert Graphic Design Services",
    tags: [
      "Packaging Design",
      "Infographic Design",
      "Illustration",
      "Brand Identity Design",
      "Print Design",
      "Digital Design",
    ],
    para: "Elevate your brand with our professional graphic design services. Our team of creative experts specializes in crafting visually captivating designs that communicate your message with clarity and impact. Whether you need a striking logo, engaging social media graphics, or eye-catching marketing materials, we deliver customized solutions that make your business stand out.",
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
            className="flex justify-between rounded-xl overflow-hidden group md:flex-row flex-col gap-4 bg-white shadow-md ring-2 ring-grey mt-4 items-start p-4">
            <div className="min-w-36 md:text-center">
              <h2 className="md:text-4xl text-2xl font-bold">
                0{service.serial}
              </h2>
            </div>
            <div className="flex-1 space-y-4 cursor-pointer">
              <h1 className="md:text-3xl text-2xl font-bold">
                {service.title}
              </h1>
              <div className="flex flex-wrap gap-2 text-sm">
                {service.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-lightgreen px-3 rounded-full py-1 shrink-0">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="md:text-base text-sm group-hover:translate-x-0 group-hover:opacity-100 opacity-0 translate-x-full h-0 group-hover:h-full transition-all">
                {service.para}
              </p>
              {/* <div className="w-full h-full"> */}
              <div className="overflow-hidden duration-500 group-hover:translate-x-0 group-hover:opacity-100 opacity-0 translate-x-full h-0 group-hover:h-full transition-all w-full rounded-2xl">
                <Image
                  src={service.imageURL} // Replace with your image path
                  alt="Descriptive alt text"
                  width={500}
                  height={350}
                  loading="lazy"
                  className=" rounded-2xl md:bg-contain bg-cover"
                />
              </div>
              {/* </div> */}
            </div>
            <div className="">
              <div className="bg-grey inline-flex rounded-full sm:h-12 h-10 gap-2">
                <button className="bg-[#A6EB3C] h-full w-auto rounded-full px-8 text-sm">
                  <Link href="/services">View Details</Link>
                </button>
                <div className="sm:w-10 sm:h-10 w-8 h-8 rounded-full shrink-0 bg-[#813CEB] m-1 flex items-center justify-center">
                  <Link href="/services">
                    <i className="fa-solid fa-arrow-right text-white text-lg"></i>
                  </Link>
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
