import Image from "next/legacy/image";
import React from "react";

import img1 from "../public/behance.png";
import img2 from "../public/dribbble.png";
import img3 from "../public/envato.png";
import img4 from "../public/linkedin.png";
import img5 from "../public/wordpress.png";

const companyImage = [img1, img2, img3, img4, img5];

const Company = () => {
  return (
    <div className="flex items-center py-8 justify-evenly max-w-screen-xl mx-auto flex-wrap">
      {companyImage.map((item, index) => (
        <div className="relative md:w-36 md:h-20 w-24 h-14" key={index}>
          <Image
            src={item}
            alt="company image"
            layout="fill"
            objectFit="contain"
            placeholder="blur"
          />
        </div>
      ))}
    </div>
  );
};

export default Company;
