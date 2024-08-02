import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { MdClose } from "react-icons/md";

const header_options = [
  { title: "Home", link: "#home" },
  { title: "About", link: "#about" },
  { title: "Portfolio", link: "#portfolio" },
  { title: "Service", link: "#service" },
  { title: "Contact", link: "#contact" },
];

const Header = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const [open, setOpen] = useState(false);
  const handleTabClick = (title) => {
    setActiveTab(title);
    // You can add further logic here when a tab is clicked
  };

  return (
    <nav className="p-3 md:flex md:items-center fixed w-full z-50">
      <div className="flex justify-between items-center p-3">
        <div className="text-white  ">
          <a href="#home">
            {/* <img
              className="w-[50px] h-[50px] rounded-[50px] hover:scale-[1.1]"
              // src="/bg-image.png"
              src="https://avatars.githubusercontent.com/u/77154885?v=4&size=64"
            /> */}
            <p>PAVAN</p>
          </a>
        </div>
        <div className="md:hidden">
          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setOpen((e) => !e)}
            className="text-[#63c8ff] m-5"
          >
            {/* You can use a hamburger menu icon here */}
            {/* Menu */}
            {/* {open ? (
              <MdClose color="#63c8ff" size={30} />
            ) : (
              <CiMenuFries color="#63c8ff" size={30} />
            )} */}
            <div
              aria-hidden="true"
              className={`absolute h-0.5 w-5 bg-current transition duration-300 ease-in-out ${
                open ? "rotate-45" : "-translate-y-1.5"
              }`}
            />
            <div
              aria-hidden="true"
              className={`absolute h-0.5 w-5 bg-current transition duration-300 ease-in-out ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <div
              aria-hidden="true"
              className={`absolute h-0.5 w-5 bg-current transition duration-300 ease-in-out ${
                open ? "-rotate-45" : "translate-y-1.5"
              }`}
            />
          </button>
          <div
            className={`${
              open ? "flex" : "hidden"
            } bg-[#0d3946] shadow-lg p-3 fixed right-0 z-10 transform delay-100 transition-all duration-300 ${
              open ? "opacity-100 translate-x-0" : "opacity-0 -translate-y-full"
            } flex-col`}
          >
            {header_options.map((_opt, _i) => (
              <a
                key={_i}
                href={_opt.link}
                onClick={() => handleTabClick(_opt.title)}
                className={`text-[#63c8ff] mx-1 hover:underline cursor-pointer  p-3 ${
                  activeTab === _opt.title ? "font-bold " : ""
                }`}
              >
                {_opt.title}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="hidden md:flex flex-1 justify-end">
        {/* //shadow-[#73bdd2 */}
        <div className=" z-40 ">
          {header_options.map((_opt, _i) => (
            <a
              key={_i}
              href={_opt.link}
              onClick={() => handleTabClick(_opt.title)}
              className={`text-[#63c8ff] mx-1 hover:underline cursor-pointer  p-3 rounded-2xl px-7 shadow-sm min-w-[150px]  ${
                activeTab === _opt.title
                  ? "font-bold shadow-[#73bdd2] shadow-lg "
                  : ""
              }`}
            >
              {_opt.title}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;
