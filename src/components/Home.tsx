import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaAngleDown } from "react-icons/fa";
import { Link } from "react-scroll";

export let social_media_options = [
  {
    icon: <FaGithub size={20} color="white" />,
    title: "github",
    link: "https://github.com/Dugariya",
  },
  {
    icon: <FaLinkedin size={20} color="white" />,
    title: "linkdin",
    link: "https://www.linkedin.com/in/pavan-dugariya/",
  },
  // {
  //   icon: <MdEmail size={20} color="white" />,
  //   title: "gmail",
  //   link: "mailto:pawandugariya@gmail.com",
  // },
];

const Home = () => {
  return (
    <div
      id="/"
      className="min-h-[100%] p-5 my-5 flex flex-1 md:flex-row flex-col gap-5   "
    >
      <div className="border-0 fixed h-[70%] mt-[80px] border-blue-700 p-2 hidden md:flex items-center justify-center flex-col gap-5 bg-[#024265]">
        {social_media_options.map((item, i) => {
          return (
            <a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          );
        })}
        <span className="text-white  rotate-180 [writing-mode:vertical-lr]">
          Follow Me
        </span>
      </div>
      <div
        className=" p-2 flex-1 flex items-center justify-center
      gap-1 flex-col md:ml-[50px]  "
      >
        <div className="gap-2">
          <p className="text-[#63c8ff] md:mb-4 mb-2 md:text-2xl text-[18px] text-center">
            HELLO, WORLD.
          </p>
          <p className="text-white md:text-[40px] text-2xl ">
            I'm Pavan Dugariya.
          </p>
        </div>
        <br />
        <TypeAnimation
          className="text-white text-3xl"
          sequence={[
            "I develope mobile apps",
            2000,
            "I code cool websites",
            2000,
            "I love coding",
            2000,
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: "2em", display: "inline-block" }}
          repeat={Infinity}
        />
        {/* <span className="text-[18px] text-white my-3">
          Highly motivated React Native Developer with a two year of experience
          building and implementing mobile applications. Proficient in
          developing user-friendly and intuitive mobile applications using React
          Native, Redux, and other relevant technologies. A quick learner with
          excellent problem-solving skills, and the ability to work well in a
          team-oriented environment.
        </span> */}
        <br />
        <Link
          activeClass="active"
          to={`about`}
          spy={true}
          smooth={true}
          duration={700}
          hashSpy={true}
        >
          <div className="border-2 border-gray-500 hover:border-[#63c8ff] p-2 text-white font-light my-5 hover:cursor-pointer cursor-not-allowed opacity-50  select-none hover:bg-[#63c8ff3b]  flex items-center gap-1 focus:ring-4 transition delay-150 duration-300 ease-in-out">
            MORE ABOUT ME
            <FaAngleDown />
          </div>
        </Link>
      </div>
      <div className="border-0 border-blue-700 flex-1 flex flex-col  justify-center items-end blur-sm hover:blur-0 hover:scale-[1] scale-[.95]">
        <img
          alt="image"
          // src="/bg-image1.png"
          src="https://media.istockphoto.com/id/1142395943/photo/hacker-with-red-glowing-mask-behind-notebook-laptop-in-front-of-blue-source-binary-code.jpg?s=612x612&w=0&k=20&c=rJ4PWS4hWDXsdd6YRpaFQ4KtQtS7k_KFPSQZwgEW39I="
          // src="/SplashScreen.png"
          className="w-[90%] h-[90%] object-cover self-center shadow-lg rounded-[20px] hover:shadow-[#8cc8e8ed] shadow-white"
        />
        <div className="absolute border-0 w-[90%] h-[90%] self-center flex items-end justify-center pb-16 text-[#fff] md:text-2xl font-bold   blur-[.2] text-[16px]">
          mr_dugariya
        </div>
      </div>
    </div>
  );
};

export default Home;
