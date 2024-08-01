import React, { useState } from "react";

const header_options = [
  { title: "Home", link: "#home" },
  { title: "About", link: "#about" },
  { title: "Portfolio", link: "#portfolio" },
  { title: "Service", link: "#service" },
  { title: "Contact", link: "#contact" },
];

const Header = () => {
  const [activeTab, setActiveTab] = useState("Home");

  const handleTabClick = (title) => {
    setActiveTab(title);
    // You can add further logic here when a tab is clicked
  };

  return (
    <nav className="p-3 md:flex md:items-center">
      <div className="flex justify-between items-center">
        <div className="text-white  ">
          <a href="#home">
            <img
              className="w-[50px] h-[50px] rounded-[50px]"
              src="https://avatars.githubusercontent.com/u/77154885?v=4&size=64"
            />
          </a>
        </div>
        <div className="md:hidden">
          {/* Mobile menu button */}
          <button type="button" className="text-white">
            {/* You can use a hamburger menu icon here */}
            Menu
          </button>
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
              className={`text-[#2f9ebd] mx-1 hover:underline cursor-pointer  p-3 rounded-2xl px-7 shadow-sm min-w-[150px]  ${
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
