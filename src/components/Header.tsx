import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
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

  const [small, setSmall] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setSmall(window.pageYOffset > 200)
      );
    }
  }, []);
  return (
    <nav
      className={`p-3 md:flex md:items-center fixed w-full z-[100] ${
        small ? "md:bg-[#024265cd]" : ""
      }`}
    >
      <div className="flex justify-between items-center p-2  ">
        <div className="text-white ">
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
            className="text-[#63c8ff] m-5 "
          >
            <div
              aria-hidden="true"
              className={`absolute h-0.5 w-5 z-50 bg-current transition duration-300 ease-in-out ${
                open ? "rotate-45" : "-translate-y-1.5"
              }`}
            />
            <div
              aria-hidden="true"
              className={`absolute h-0.5 w-5 z-50 bg-current transition duration-300 ease-in-out ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <div
              aria-hidden="true"
              className={`absolute h-0.5 w-5 z-50 bg-current transition duration-300 ease-in-out ${
                open ? "-rotate-45" : "translate-y-1.5"
              }`}
            />
          </button>
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={open ? { opacity: 1, x: 0 } : { opacity: 0, x: "100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={`${
              open ? "flex" : "hidden"
            } bg-[#0d3946] shadow-lg fixed right-0 top-0 z-10 flex-col w-[70%] rounded-bl-[100%] p-10 gap-5`}
          >
            {header_options.map((_opt, _i) => {
              let ml = `${_i * 35}px`;

              return (
                <motion.div
                  key={_i}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 1,
                    delay: _i * 0.5,
                    ease: "easeInOut",
                  }}
                >
                  <Link
                    style={{ marginLeft: ml }}
                    activeClass="active"
                    to={_opt.link}
                    spy={true}
                    smooth={true}
                    duration={700}
                    offset={0}
                    hashSpy={true}
                    key={_i}
                    className={`text-[#63c8ff] mx-1 hover:underline cursor-pointer p-3 ${
                      activeTab === _opt.title ? "font-bold underline" : ""
                    }`}
                  >
                    {_opt.title}
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
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
