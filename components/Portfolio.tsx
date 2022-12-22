import Image from "next/legacy/image";
import React from "react";
import project from "../public/Amazon-2-0.png";

const projectData = [
  {
    content: {
      logo: "Logo",
      title: "Amazon Clone",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque tenetur dolor aliquid dolores pariatur tempore rem quibusdam iure laudantium porro amet ipsum at recusandae ea ullam sapiente aspernatur, laboriosam labore!",
      url: "https://amazon-five-gamma.vercel.app/",
    },
    image: project,
  },
  {
    content: {
      logo: "Logo",
      title: "Amazon Clone",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque tenetur dolor aliquid dolores pariatur tempore rem quibusdam iure laudantium porro amet ipsum at recusandae ea ullam sapiente aspernatur, laboriosam labore!",
      url: "https://amazon-five-gamma.vercel.app/",
    },
    image: project,
  },
];

const Portfolio = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="px-4 lg:px-0 max-w-screen-xl mx-auto">
        <div className="text-center space-y-3">
          <h1 className="md:text-5xl text-4xl font-[poppins] font-semibold">
            Some of my recent Projects!
          </h1>
          <p className="text-lg">
            We constantly refine our way to build applications.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 pt-16 gap-6">
          {" "}
          {/* grid lg:grid-cols-2 pt-16 gap-6 */}
          {projectData.map((project, index) => (
            <>
              <div
                key={index}
                className="space-y-6 border p-6 bg-orange-100 flex flex-col justify-center">
                <h1 className="text-4xl font-black">{project.content.logo}</h1>
                <h1 className="md:text-2xl text-xl font-semibold font-[manrope]">
                  {project.content.title}
                </h1>
                <p className="text-lg max-w-lg">
                  {project.content.description}
                </p>
                <div className="flex gap-4 text-sm font-semibold">
                  <button className="bg-gradient-to-b text-white active:from-sky-900 active:to-sky-500 active:ring-1 active:ring-sky-400 rounded-sm from-sky-400 to-sky-700 w-28 py-2 px-4">
                    <a
                      href={project.content.url}
                      target="_blank"
                      rel="noopener noreferrer">
                      Live
                    </a>
                  </button>
                  <button className="bg-gradient-to-b text-white active:from-yellow-900 active:to-yellow-500 active:ring-1 active:ring-yellow-400 rounded-sm from-yellow-400 to-yellow-700 w-28 py-2 px-4">
                    Let's Talk
                  </button>
                </div>
              </div>

              {/* Image Section */}
              <div className="relative basis-1/2 h-[36rem] border">
                <Image
                  src={project.image}
                  alt="amazon-clone"
                  layout="fill"
                  objectFit="cover"
                  className="object-top cursor-pointer hover:object-bottom duration-[3s]"
                  placeholder="blur"
                />
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
