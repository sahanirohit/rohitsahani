import React from "react";

const Contact = () => {
  return (
    <div className="mx-auto max-w-screen-2xl w-full px-4 sm:px-6 lg:px-4 py-4">
      <h1 className="text-center text-4xl font-bold">Contact</h1>
      <h1 className="text-center text-4xl font-bold mb-8 text-orange-500">
        Let's Discuss Your Project
      </h1>
      <div className="grid gap-8 md:grid-cols-3">
        <div className=" space-y-4">
          <div className="flex items-center p-4 bg-white rounded-lg shadow-md">
            <div className="flex items-center justify-center w-12 h-12 bg-orange-500 rounded-full">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5.879A1.879 1.879 0 014.879 4h2.243a1.879 1.879 0 011.878 1.633l.417 3.746a1.879 1.879 0 01-.544 1.601l-1.372 1.372a11.042 11.042 0 005.368 5.368l1.372-1.372a1.879 1.879 0 011.601-.544l3.746.417A1.879 1.879 0 0120 16.879v2.243A1.879 1.879 0 0118.121 21H18A15 15 0 013 5.879z"></path>
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-gray-800">Mobile</p>
              <p className="text-gray-500">+91 89579 12038</p>
            </div>
          </div>
          <div className="flex items-center p-4 bg-white rounded-lg shadow-md">
            <div className="flex items-center justify-center w-12 h-12 bg-orange-500 rounded-full">
              <i className="fa-solid text-lg text-white fa-envelope"></i>
            </div>
            <div className="ml-4">
              <p className="text-gray-800">Email</p>
              <p className="text-gray-500">rohitjobeis@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center p-4 bg-white rounded-lg shadow-md">
            <div className="flex items-center justify-center w-12 h-12 bg-orange-500 rounded-full">
              <i className="fa-solid text-lg text-white fa-location-dot"></i>
            </div>
            <div className="ml-4">
              <p className="text-gray-800">Address</p>
              <p className="text-gray-500">Surat, Gujarat - India</p>
            </div>
          </div>
        </div>
        <div className=" md:col-span-2">
          <form action="#" method="POST">
            <div className="grid grid-cols-2 gap-4">
              <div className="mb-4">
                <label
                  htmlFor="full_name"
                  className="block text-gray-700 font-semibold mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="full_name"
                  name="full_name"
                  className="form-input w-full rounded-lg ring-2 ring-gray-200 py-3 px-4"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-semibold mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input w-full py-3 rounded-lg px-4 ring-2 ring-gray-200"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-gray-700 font-semibold mb-2">
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  className="form-input w-full py-3 rounded-lg px-4 ring-2 ring-gray-200"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="budget"
                  className="block text-gray-700 font-semibold mb-2">
                  Budget
                </label>
                <input
                  type="text"
                  id="budget"
                  name="budget"
                  className="form-input w-full py-3 rounded-lg px-4 ring-2 ring-gray-200"
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-700 font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="form-textarea w-full px-4 py-3 ring-2 ring-gray-200 rounded-lg"
              />
            </div>
            <div className="flex justify-center md:justify-end">
              <button className="px-14 py-2 rounded-full ring-2 ring-[#FF6B01] bg-[#FF6B01] hover:bg-white hover:text-black duration-200 text-white font-bold">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
