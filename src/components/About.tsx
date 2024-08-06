import { Link } from "react-scroll";

let skill_option = [
  {
    title: "JavaScript",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  },
  {
    title: "TypeScript",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png",
  },
  {
    title: "React Native",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/120px-React_Logo_SVG.svg.png",
  },
  {
    title: "Expo",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh79Z8_dzeOvsP4I9tAsDh-C7MLePq7d2sRA&s",
  },
  {
    title: "React.Js",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/120px-React_Logo_SVG.svg.png",
  },
  {
    title: "Next Js",
    img: "https://exafunction.github.io/public/icons/nextjs.png",
  },
  {
    title: "Node.js",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png",
  },
  {
    title: "Express.js",
    img: "https://www.manektech.com/storage/developer/1646733543.webp",
  },

  {
    title: "Tailwind CSS",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png",
  },
  {
    title: "MongoDB",
    img: "https://cdn.iconscout.com/icon/free/png-256/free-mongodb-3521676-2945120.png?f=webp",
  },
  {
    title: "Git",
    img: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
  },
];
const About = () => {
  return (
    <div id="about" className="bg-[#00000055]  min-h-[100%] flex flex-col  ">
      <div className="p-4 mt-[70px] md:ml-[100px]">
        <span className="text-[#63c8ff] text-2xl font-semibold">About me</span>
        {/* <hr className="w-[60%] my-5 bg-gray-600 text-black" /> */}
        <hr className="h-px my-4 bg-gray-400 border-0 dark:bg-gray-70 w-[60%]" />

        <div className="flex flex-1 flex-col">
          <div className="flex flex-col md:flex-row my-5">
            <div className=" border-0 border-blue-500 flex-1 text-white">
              About My Self
            </div>
            <div className="border-0 border-blue-500 flex-[2]">
              {" "}
              <span className="text-[18px] text-white my-3">
                I am a passionate React Native and React JS developer with a
                strong commitment to crafting high-quality, performant
                applications. With a keen eye for detail and a focus on
                user-centric design, I pride myself on delivering solutions that
                not only meet client expectations but exceed them
              </span>
            </div>
          </div>

          {/* my mission??  */}
          <div className="flex flex-col md:flex-row my-5">
            <div className="border-0 border-blue-500 flex-1 text-white">
              MY MISSION
            </div>
            <div className="border-0 border-blue-500 flex-[2]">
              <span className="text-[18px] text-white my-3">
                To contribute to the digital world by developing polished and
                impactful applications using React Native and React JS, making a
                positive difference for businesses and end users alike.
              </span>
            </div>
          </div>
          {/* skill  */}
          <div className="flex flex-col md:flex-row my-5">
            <div className="border-0 border-blue-500 flex-1 text-white">
              SKILL
            </div>
            <div className="border-0 border-[#dddddd] flex-[2]">
              <h1 className="text-white ">What I can do</h1>
              <div className="flex-1  p-2 flex flex-wrap gap-10 items-center ">
                {skill_option.map((item, _i) => (
                  <div
                    key={_i}
                    className="shadow-lg rounded-xl hover:scale-110 ease-in duration-300 bg-[#04375250] my-2 flex items-center gap-5 p-4 min-w-[210px] flex-1 min-h-[100px] shadow-[#63c8ff] "
                  >
                    <img
                      alt="/"
                      loading="lazy"
                      width="78"
                      height="78"
                      src={item.img}
                    />
                    <div className="text-white font-semibold">{item.title}</div>
                  </div>
                ))}
                <div className="text-white">
                  <ul className="list-disc">
                    <li>Proficient in React Native and React JS development</li>
                    <li>Cross-platform mobile application development</li>
                    <li>Front-end web development with React JS</li>
                    <li>
                      UI/UX design principles for intuitive and engaging
                      interfaces
                    </li>
                    <li>Responsive web design and development</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* services */}
          <div className="flex flex-col md:flex-row my-5">
            <div className="border-0 border-blue-500 flex-1 text-white">
              SERVICES
            </div>
            <div className="border-0 border-blue-500 flex-[2]">
              <span className="text-[18px] text-white my-3">
                Highly motivated React Native Developer with a two year of
                experience building and implementing mobile applications.
                Proficient in developing user-friendly and intuitive mobile
                applications using React Native, Redux, and other relevant
                technologies. A quick learner with excellent problem-solving
                skills, and the ability to work well in a team-oriented
                environment.
              </span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row my-5">
            <div className="border-0 border-blue-500 flex-1 text-white"></div>
            <div className="border-0 border-blue-500 flex-[2]">
              <div className="flex border-0 flex-row justify-between">
                <Link
                  activeClass="active"
                  to={`contact`}
                  spy={true}
                  smooth={true}
                  duration={700}
                  hashSpy={true}
                  className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                >
                  HIRE ME
                </Link>
                {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  DOWNLOAD CV
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
