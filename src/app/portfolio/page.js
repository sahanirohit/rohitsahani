import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Link from "next/link";
import React from "react";

const filterCategories = [
  "All",
  "Development",
  "Graphic Design",
  "UI/UX Design",
];

const page = () => {
  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-screen-lg text-center gap-4 flex flex-col justify-center mt-12 w-full px-4 sm:px-6 lg:px-4">
        <h1 className="text-5xl font-semibold text-center text-lightgreen">
          My Portfolio
        </h1>
        <div className="">
          <ul className="flex sm:gap-8 gap-2 flex-wrap sm:justify-center font-semibold">
            {filterCategories.map((categories, index) => (
              <li className=" shrink-0" key={index}>
                <Link href="#">{categories}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Portfolio />
      <Footer />
    </>
  );
};

export default page;
