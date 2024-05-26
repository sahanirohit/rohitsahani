import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Service from "@/components/Service";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const serviceList = [
  {
    imageURL: "/frontend_service.jpg",
    title: "Web Development Services",
    para: [
      "Bring your online vision to life with our professional web development services. Our experienced developers specialize in creating robust, responsive, and high-performing websites tailored to your specific needs. From e-commerce platforms to dynamic web applications, we build solutions that are not only visually appealing but also optimized for speed, security, and scalability.",
      "We work closely with you to understand your business goals and deliver a website that enhances your online presence and user experience. Trust us to provide the technical expertise and innovative solutions that drive growth and achieve your digital objectives.",
    ],
  },
  {
    imageURL: "/mobile-app-design.jpg",
    title: "Mobile App Design Services",
    para: [
      "Transform your ideas into engaging mobile experiences with our innovative mobile app design services. Our team of talented designers excels in creating intuitive, user-centric app interfaces that captivate users and enhance usability. From concept to final design, we focus on aesthetics, functionality, and seamless navigation to deliver apps that stand out in the competitive mobile landscape.",
      "We collaborate closely with you to understand your vision and business goals, ensuring every design element aligns with your brand identity and user expectations. Trust us to create visually stunning and highly functional mobile apps that drive user engagement and satisfaction.",
    ],
  },
  {
    imageURL: "/user-interface-design.jpg",
    title: "User Interface Design Services",
    para: [
      "Enhance your digital presence with our expert user interface design services. Our skilled designers specialize in creating intuitive, user-friendly interfaces that ensure a seamless and engaging experience for your audience. From web applications to mobile apps, we focus on usability, aesthetics, and functionality to deliver designs that not only look stunning but also enhance user satisfaction.",
      "We take a user-centric approach, meticulously crafting every element to align with your brand and meet your users' needs. Trust us to transform your vision into a functional and beautiful interface that drives user engagement and achieves your business objectives.",
    ],
  },
  {
    imageURL: "/user-experience-design.jpg",
    title: "User Experience Design",
    para: [
      "We specialize in Uswer Experience (UX) Design services tailored to elevate your digital presence. Our approach is simple: putting your users at the heart of every design decision.",
      "Empower your digital presence with my User Experience Design services. We prioritize user-centric solutions, leveraging research and prototyping to enhance engagement.",
    ],
  },
  {
    imageURL: "/graphic-design-service.jpg",
    title: "Expert Graphic Design Services",
    para: [
      "Elevate your brand with our professional graphic design services. Our team of creative experts specializes in crafting visually captivating designs that communicate your message with clarity and impact. Whether you need a striking logo, engaging social media graphics, or eye-catching marketing materials, we deliver customized solutions that make your business stand out.",
      "From concept to completion, we bring your ideas to life with creativity and precision. Our goal is to ensure every design element aligns seamlessly with your brand identity and goals. Trust us to provide the visual edge your business needs to connect with your audience and leave a lasting impression.",
    ],
  },
];

const page = () => {
  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-screen-lg w-full px-4 space-y-4 sm:px-6 lg:px-4 py-4 mt-6">
        <h1 className="sm:text-5xl text-3xl font-semibold text-center">
          Explore <span className=" text-lightgreen">My Offerings</span> for You
        </h1>
        <p className="text-center md:mx-28 text-sm sm:text-base">
          Embark on a Design Journey: Discovering Tailored Solutions Infused
          with Passion, Precision, and Purpose to Shape Tommorrow's Experiences
        </p>
        <div className="py-12 space-y-8">
          {serviceList.map((service, serviceIndex) => (
            <div
              className="flex flex-col gap-6 md:flex-row items-center "
              key={serviceIndex}>
              <div
                className={`sm:h-full basis-1/2 h-56 relative rounded-2xl ${
                  serviceIndex % 2 == 0 ? "md:order-1" : "md:order-2"
                }`}>
                <Image
                  src={service.imageURL} // Replace with your image path
                  alt="Descriptive alt text"
                  width={500}
                  height={500}
                  objectFit="cover"
                  loading="lazy"
                  className=" rounded-2xl"
                />
              </div>
              <div
                className={`space-y-4 basis-1/2 ${
                  serviceIndex % 2 == 0 ? "md:order-2" : "md:order-1"
                }`}>
                <h1 className="text-2xl font-semibold">{service.title}</h1>
                {service.para.map((p, pIndex) => (
                  <p className="text-sm" key={pIndex}>
                    {p}
                  </p>
                ))}

                <div className="space-x-4">
                  <button className="px-4 text-sm rounded-md py-2 border-2 border-purple bg-purple text-white font-semibold">
                    <Link href="https://wa.me/918957912038">Let's Talk</Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
