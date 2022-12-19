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
    <div className="flex items-center justify-evenly max-w-screen-xl mx-auto flex-wrap">
      {companyImage.map((item, index) => (
        <div className="relative w-36 h-20" key={index}>
          <Image
            src={item}
            alt="company image"
            layout="fill"
            objectFit="contain"
          />
        </div>
      ))}
    </div>
  );
};

export default Company;
