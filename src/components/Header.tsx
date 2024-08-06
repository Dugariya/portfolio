import { useEffect, useState } from "react";
import { Link } from "react-scroll";

const header_options = [
  { title: "Home", link: "/" },
  { title: "About", link: "about" },
  { title: "Projects", link: "projects" },
  { title: "Contact", link: "contact" },
];

const Header = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const [open, setOpen] = useState(false);

  const scrollHandler = () => {
    const scrollPosition = window.scrollY;
    header_options.forEach((_opt) => {
      const element = document.getElementById(_opt.link);
      if (element) {
        const elementTop = element.offsetTop;
        const elementBottom = elementTop + element.clientHeight;
        if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
          setActiveTab(_opt.title);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);
  return (
    <nav className="p-3 md:flex md:items-center fixed w-full z-50">
      <div className="flex justify-between items-center p-2">
        <div className="text-white  ">
          <Link
            activeClass="active"
            to={`/`}
            spy={true}
            smooth={true}
            duration={700}
            offset={0}
            hashSpy={true}
          >
            <p className="text-[#012732] bg-[#afdcf55b] shadow-lg shado w-[#8e8eff] px-3 font-bold text-xl  ">
              PAVAN
            </p>
          </Link>
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
              <Link
                activeClass="active"
                to={`${_opt.link}`}
                spy={true}
                smooth={true}
                duration={700}
                offset={0}
                hashSpy={true}
                key={_i}
                // onClick={() => handleTabClick(_opt.title)}
                className={`text-[#63c8ff] mx-1 hover:underline cursor-pointer  p-3 ${
                  activeTab === _opt.title ? "font-bold underline " : ""
                }`}
              >
                {_opt.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="hidden md:flex flex-1 justify-end">
        {/* //shadow-[#73bdd2 */}
        <div className=" z-40 ">
          {header_options.map((_opt, _i) => (
            <Link
              activeClass="active"
              to={`${_opt.link}`}
              spy={true}
              smooth={true}
              duration={700}
              offset={0}
              hashSpy={true}
              key={_i}
              // onClick={() => handleTabClick(_opt.title)}
              className={`text-[#63c8ff] mx-1 hover:underline cursor-pointer  p-3   min-w-[150px]  ${
                activeTab === _opt.title
                  ? "font-bold border-b-2 border-[#00BFFF] "
                  : ""
              }`}
            >
              {_opt.title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;
