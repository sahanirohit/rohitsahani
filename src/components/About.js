import React from "react";

const About = () => {
  return (
    <div className="mx-auto grid md:grid-cols-2 mt-6 gap-4 max-w-screen-2xl h-full px-4 sm:px-6 lg:px-4">
      <div className="mt-6 md:w-full max-w-lg mx-auto">
        <img
          src="/about_img.jpg"
          alt=""
          className="ring-2 ring-[#FF6B01] bg-contain rounded-tl-[5rem] h-80 rounded-br-[5rem]"
        />
      </div>
      <div className="max-w-lg md:w-full mx-auto">
        <h2 className="text-3xl font-bold">About Me</h2>
        <p className="text-gray-600 mb-4">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus
          pharetra.
        </p>
        <div className="space-y-4">
          {[
            { label: "UX", value: 80 },
            { label: "Website Design", value: 95 },
            { label: "App Design", value: 90 },
            { label: "Graphic Design", value: 85 },
          ].map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-700 font-bold">{skill.label}</span>
              </div>
              <div className="relative h-2 rounded-full bg-gray-200">
                <div
                  className="absolute h-2 rounded-full bg-[#FF6B01]"
                  style={{ width: `${skill.value}%` }}></div>
                <div
                  className="absolute top-1 right-0 h-5 w-5 transform ring-2 ring-[#FF6B01] translate-x-1/2 -translate-y-1/2 rounded-full bg-gray-100"
                  style={{ left: `${skill.value}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
