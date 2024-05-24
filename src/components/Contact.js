import React from "react";

const Contact = () => {
  return (
    <div className="bg-[#813CEB]">
      <div className="mx-auto grid max-w-screen-lg md:grid-cols-2 gap-4  px-6 py-8 lg:px-4">
        <div className="">
          <h2 className="text-lg font-medium text-white font-serif">
            - Contact Us
          </h2>
          <h1 className="sm:text-4xl text-3xl text-white font-bold font-serif">
            Let's <span className="text-[#A6EB3C]">Connect</span> & <br />{" "}
            <span className="text-[#A6EB3C]">Collaborate</span>
          </h1>
          <p className="text-white mt-4 sm:text-base text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            officia dolores odio consectetur facere enim explicabo dignissimos
            repudiandae ab officiis at dicta tenetur voluptas perferendis
            voluptatum, cupiditate eius ea harum!
          </p>
          <div className="font-normal mt-6 flex flex-col gap-y-4 text-white text-base sm:text-lg">
            <div className="inline-flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <i className="fa-solid fa-phone text-purple "></i>
              </div>
              <p className="">+91 89579 12038</p>
            </div>
            <div className="inline-flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <i className="fa-solid fa-envelope text-purple "></i>
              </div>
              <p className="">rohitjobeis@gmail.com</p>
            </div>
            <div className="inline-flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <i className="fa-solid fa-globe text-purple "></i>
              </div>
              <p className="">rohitsahani.com</p>
            </div>
            <div className="inline-flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <i className="fa-solid fa-location-dot text-purple "></i>
              </div>
              <p className="">Surat, Gujarat - India</p>
            </div>
          </div>
        </div>
        <div className="">
          <form action="" className="grid grid-cols-2 gap-4 text-sm sm:text-lg">
            <input
              type="text"
              className="px-4 py-4 bg-[#ae7afc] rounded-xl placeholder:text-white focus:outline-none text-white"
              placeholder="First Name *"
            />
            <input
              type="text"
              className="px-4 py-4 bg-[#ae7afc] rounded-xl placeholder:text-white focus:outline-none text-white"
              placeholder="Last Name *"
            />
            <input
              type="email"
              className="px-4 py-4 bg-[#ae7afc] rounded-xl placeholder:text-white focus:outline-none text-white"
              placeholder="Email *"
            />
            <input
              type="number"
              className="px-4 py-4 bg-[#ae7afc] rounded-xl placeholder:text-white focus:outline-none text-white"
              placeholder="Phone Number *"
            />
            <input
              type="text"
              className="px-4 py-4 bg-[#ae7afc] rounded-xl placeholder:text-white col-span-2 focus:outline-none text-white"
              placeholder="Subject *"
            />
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="6"
              className="col-span-2 px-4 py-4 bg-[#ae7afc] rounded-xl placeholder:text-white"
              placeholder="Message *"></textarea>
            <div className="relative inline-flex w-52 shrink-0 bg-white rounded-full gap-2">
              <div className="w-10 h-10 rounded-full shrink-0 bg-[#813CEB] m-1 flex items-center justify-center">
                <i className="fa-solid fa-arrow-right text-white text-lg"></i>
              </div>
              <button className="bg-[#A6EB3C] h-full w-full rounded-full text-sm">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
