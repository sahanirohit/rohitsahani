import React from "react";

import planning from "../public/planning.png";
import design from "../public/design.png";
import development from "../public/development.png";
import test from "../public/test.png";
import deployment from "../public/deployment.png";
import Image from "next/legacy/image";

const workProcess = [
  {
    img: planning,
    name: "Planning",
  },
  {
    img: design,
    name: "Design",
  },
  {
    img: development,
    name: "Development",
  },
  {
    img: test,
    name: "Test",
  },
  {
    img: deployment,
    name: "Deployment",
  },
];

const WorkProcess = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-16">
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-[poppins] font-semibold">
          How We Build Websites?
        </h1>
        <p className="text-lg">
          We constantly refine our way to build applications.
        </p>
      </div>
      <div className="flex items-center flex-wrap text-center gap-16 justify-evenly pt-16">
        {workProcess.map((item, index) => (
          <div
            className="space-y-2 md:w-36 md:h-36 w-24 h-24 relative"
            key={index}>
            <Image
              src={item.img}
              alt="work process"
              layout="fill"
              objectFit="contain"
            />
            <h2 className="md:text-3xl absolute -bottom-8 left-0 right-0 font-semibold font-serif ">
              {item.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkProcess;
