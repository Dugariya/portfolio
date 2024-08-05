import React from "react";

const Contact = () => {
  return (
    <div className="bg-[#00000055]  min-h-[100%] flex flex-col  ">
      <div className="p-4 mt-[70px] md:ml-[100px]">
        <span className="text-[#63c8ff] text-2xl font-semibold">
          Contact Me
        </span>
        {/* <hr className="w-[60%] my-5 bg-gray-600 text-black" /> */}
        <hr className="h-px my-4 bg-gray-400 border-0 dark:bg-gray-70 w-[60%]" />

        <div className="flex flex-1 flex-col">
          <div className="flex flex-col md:flex-row my-5">
            <div className=" border-0 border-blue-500 flex-1 text-white">
              <div className="text-white font-light text-2xl">Get in touch</div>
              <div className="flex text-white gap-2 items-center mt-10 max-w-[80%]">
                I am actively seeking full-time opportunities. Let's connect to
                discuss how I can contribute to your team.
              </div>
              <div className="flex text-white gap-2 items-center mt-5">
                <a className="text-gray-400 text-[20px]">Email: </a>
                <a className="text-white text-[16px] font-light">
                  pawandugariya@gmail.com
                </a>
              </div>
              <div className="flex text-white gap-2 items-center mt-3">
                <a className="text-gray-400 text-[20px]">Phone: </a>
                <a className="text-white text-[16px] font-light">
                  +91 8224855676
                </a>
              </div>
              <br />
              &#8592;
            </div>
            <div className="border-2 rounded-lg border-blue-500 shadow-xl shadow-[#8e8eff] flex flex-col flex-[2]">
              <form className=" p-6">
                <div className="flex items-center gap-5">
                  <div className="mb-4 flex-1">
                    <label
                      htmlFor="name"
                      className="block text-white text-sm font-bold mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Your Name"
                      className="form-input w-full border-2 border-blue-300 p-2"
                    />
                  </div>
                  <div className="mb-4 flex-1">
                    <label
                      htmlFor="email"
                      className="block text-white text-sm font-bold mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Your Email"
                      className="form-input w-full border-2 border-blue-300 p-2"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-white text-sm font-bold mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Your Message"
                    className="form-textarea w-full border-2 border-blue-300 p-2"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Send Me
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
