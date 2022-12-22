import Image from "next/legacy/image";
import React from "react";

import profile from "../public/profile.jpg";

const Testimonials = () => {
  const col = 3;
  return (
    <div className="max-w-screen-xl mx-auto px-4 lg:px-0 py-16">
      <div className="text-center space-y-3 pb-16">
        <h1 className="md:text-5xl text-4xl font-[poppins] font-semibold">
          Testimonials
        </h1>
        <p className="text-lg">
          We constantly refine our way to build applications.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array(col)
          .fill(col)
          .map((_, i) => (
            <div
              key={i}
              className="min-h-[400px] bg-gray-50 p-10 flex flex-col justify-around">
              <i className="fa-sharp text-5xl text-pink-500 fa-solid fa-quote-left"></i>
              <p className=" line-clamp-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                error reprehenderit temporibus aut iure, commodi, vitae delectus
                laboriosam dolorem minus magnam, deleniti maxime. Soluta velit
                veritatis rerum aspernatur repellat quia.
              </p>
              <div className="flex gap-4">
                <Image
                  src={profile}
                  width={50}
                  height={50}
                  layout="intrinsic"
                  objectFit="contain"
                  className=" rounded-full"
                />
                <div className="">
                  <p className=" font-bold">Rohit Sahani</p>
                  <p className=" text-gray-400 font-semibold">22 Dec</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Testimonials;
