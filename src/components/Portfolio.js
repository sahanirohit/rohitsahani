import React from "react";
import Image from "next/image";
import Link from "next/link";

const portfolioData = [
  {
    imageURL: "/project1.png",
    tags: ["UI/UX Design", "Web Design", "Frontend"],
    projectURL: "#",
    title: "State of Frontend",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illumquas at doloribus architecto molestias.",
  },
  {
    imageURL: "/amazon-clone.jpg",
    tags: ["Next.js", "Redux Toolkit", "Tailwind CSS"],
    projectURL: "https://amazon-five-gamma.vercel.app/",
    title: "Amazon.com Clone",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illumquas at doloribus architecto molestias.",
  },
  {
    imageURL: "/project2.png",
    tags: ["Web Design", "Landing Page", "Wireframe"],
    projectURL: "#",
    title: "Medclass",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illumquas at doloribus architecto molestias.",
  },
];

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
          <div className="bg-grey flex rounded-full shrink-0 sm:h-12 h-10 gap-2">
            <div className="sm:w-10 sm:h-10 w-8 h-8 rounded-full shrink-0 bg-[#813CEB] m-1 flex items-center justify-center">
              <Link href="/portfolio">
                <i className="fa-solid fa-arrow-right text-white text-lg"></i>
              </Link>
            </div>
            <button className="bg-[#A6EB3C] h-full w-full rounded-full px-8 text-sm">
              <Link href="/portfolio">View All Projects</Link>
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          {portfolioData.map((portfolio, index) => (
            <div
              key={index}
              className={`flex bg-lightpurple p-4 rounded-2xl w-full h-full gap-4 flex-col items-center sm:min-h-96 sm:flex-row xl:max-w-screen-lg xl:mx-auto mt-6`}>
              <div
                className={`w-full h-full ${
                  index % 2 == 0 ? "sm:order-1" : "sm:order-2"
                }`}>
                <div className={`relative w-full rounded-2xl`}>
                  <Image
                    src={portfolio.imageURL} // Replace with your image path
                    alt="Descriptive alt text"
                    width={500}
                    height={500}
                    objectFit="cover"
                    loading="lazy"
                    className=" rounded-2xl"
                  />
                </div>
              </div>
              <div
                className={`space-y-2 h-full  ${
                  index % 2 == 0 ? "sm:order-2" : "sm:order-1"
                }`}>
                <div className="flex items-start flex-wrap gap-2">
                  {portfolio.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-lightgreen px-3 rounded-full text-sm py-1 shrink-0">
                      {tag}
                    </span>
                  ))}
                </div>
                <h1 className="text-2xl font-bold text-white">
                  {portfolio.title}
                </h1>
                <p className="text-white">{portfolio.para}</p>
                <div className="">
                  <div className="bg-grey inline-flex rounded-full sm:h-12 h-10 gap-2">
                    <div className="sm:w-10 sm:h-10 w-8 h-8 rounded-full shrink-0 bg-[#813CEB] m-1 flex items-center justify-center">
                      <Link href={portfolio.projectURL}>
                        <i className="fa-solid fa-arrow-right text-white text-lg"></i>
                      </Link>
                    </div>
                    <button className="bg-[#A6EB3C] h-full w-auto rounded-full px-8 text-sm">
                      <Link href={portfolio.projectURL}>View Details</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
