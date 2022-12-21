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
    <div className="max-w-screen-xl mx-auto  py-16">
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-[poppins] font-semibold">
          How We Build Websites?
        </h1>
        <p className="text-lg">
          We constantly refine our way to build applications.
        </p>
      </div>
      <div className="flex items-center flex-wrap text-center justify-evenly pt-16">
        {workProcess.map((item, index) => (
          <div className="space-y-2" key={index}>
            <Image
              src={item.img}
              alt="work process"
              width={150}
              height={150}
              objectFit="contain"
            />
            <h2 className="text-3xl font-semibold font-serif ">{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkProcess;
