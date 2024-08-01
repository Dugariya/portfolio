import React from "react";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaMail,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

let social_media_options = [
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
  {
    icon: <MdEmail size={20} color="white" />,
    title: "gmail",
    link: "mailto:pawandugariya@gmail.com",
  },
];

const Home = () => {
  return (
    <div className="min-h-[80%] p-5 my-5 flex flex-1 md:flex-row flex-col gap-5  ">
      <div className="border-0 border-blue-700 p-2 hidden md:flex items-center justify-center flex-col gap-5 bg-[#024265]">
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
      gap-1 flex-col  "
      >
        <span className="text-white text-2xl ">I'm Pavan Dugariya</span>
        <br />
        <TypeAnimation
          className="text-white text-3xl"
          sequence={[
            "I develope mobile apps",
            2000,
            "I love coding",
            2000,
            "I code cool websites",
            2000,
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: "2em", display: "inline-block" }}
          repeat={Infinity}
        />
        <span className="text-[18px] text-white my-3">
          Highly motivated React Native Developer with a two year of experience
          building and implementing mobile applications. Proficient in
          developing user-friendly and intuitive mobile applications using React
          Native, Redux, and other relevant technologies. A quick learner with
          excellent problem-solving skills, and the ability to work well in a
          team-oriented environment.
        </span>
      </div>
      <div className="border-0 border-blue-700 flex-1 flex flex-col  justify-start items-end blur-sm hover:blur-0 hover:scale-[1] scale-[.95]">
        <img
          alt="image"
          // src="/bg-image1.png"
          src="https://media.istockphoto.com/id/1142395943/photo/hacker-with-red-glowing-mask-behind-notebook-laptop-in-front-of-blue-source-binary-code.jpg?s=612x612&w=0&k=20&c=rJ4PWS4hWDXsdd6YRpaFQ4KtQtS7k_KFPSQZwgEW39I="
          // src="/SplashScreen.png"
          className="h-full object-contain self-center shadow-lg rounded-[20px] hover:shadow-[#8cc8e8ed] shadow-white"
        />
        <div className="absolute bottom-10 md:bottom-[100px] left-[25%] right-0 text-[#012732] md:text-2xl font-bold  md:mt-[130px] mt-[50px]  blur-[.2] text-[16px]">
          Developer _MR_Dugariya
        </div>
      </div>
    </div>
  );
};

export default Home;
