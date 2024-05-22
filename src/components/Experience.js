import React from "react";

const WorkExperience = () => {
  const experiences = [
    {
      company: "Self-Employed, NYC",
      date: "Sep 2020 - July 2023",
      role: "Visual Designer",
      description:
        "Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra.",
      color: "bg-orange-500",
    },
    {
      company: "Insightancer",
      date: "Aug 2015 - Sep 2020",
      role: "UI/UX Designer",
      description:
        "Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra.",
      color: "bg-black",
    },
    {
      company: "KG Design Studio",
      date: "Sep 2020 - Aug 2016",
      role: "Web Designer",
      description:
        "Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra.",
      color: "bg-orange-500",
    },
  ];

  return (
    <div className="max-w-screen-2xl w-full px-4 sm:px-6 lg:px-4 mx-auto p-12">
      <h2 className="text-3xl font-bold mb-8 text-center">
        My Work Experience
      </h2>
      <div className="relative">
        <div className="absolute top-0 left-1/2 transform hidden md:block -translate-x-1/2 w-1 bg-gray-300 h-full"></div>
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="flex md:items-center text-center md:text-left flex-col md:flex-row justify-between md:gap-4">
            <div className="flex-1 md:text-right md:pr-8">
              <h3 className="text-xl font-semibold">{exp.company}</h3>
              <p className="text-gray-500">{exp.date}</p>
            </div>
            <div className="relative hidden md:block">
              <div
                className={`w-8 h-8 rounded-full border-4 border-dashed ${exp.color} z-10`}></div>
              {/* <div
                className={`absolute top-1/2 transform -translate-y-1/2 left-1/2 w-8 h-8 rounded-full ${exp.color}`}></div> */}
            </div>
            <div className="bg-slate-200 h-px my-4 md:hidden"></div>
            <div className="md:pl-8 flex-1">
              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <p className="text-gray-600 md:max-w-96">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
