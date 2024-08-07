import React from "react";

interface ProjectProps {
  title: string;
  description: string;
  technologies: string;
  demoLink: string;
  githubLink: string;
  img: string[];
}

const Project: React.FC<ProjectProps> = ({
  title,
  description,
  technologies,
  demoLink,
  githubLink,
  img,
}) => {
  return (
    <div className="shadow-lg rounded-lg p-6 mb-10 w-[95%] md:w-[48%] bg-[#0a2c3e67] shadow-[#63c8ff] border-t border-[#63c8ff] ">
      <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
      <div className="flex  gap-4 overflow-auto">
        {img.map((_img) => (
          <img
            key={_img}
            src={`${_img}`}
            className="h-[300px] scale-[.9] hover:scale-[1]"
            alt={_img}
          />
        ))}
      </div>
      <p className="text-gray-200 mb-4 min-h-[130px] my-5">{description}</p>
      <p className="text-gray-300 mb-2">
        <span className="font-bold">Technologies used:</span> {technologies}
      </p>
      <div className="flex items-center mb-4">
        <a href={demoLink} className="text-blue-600 hover:underline mr-4">
          View Demo
        </a>
        <a href={githubLink} className="text-blue-600 hover:underline">
          GitHub Link
        </a>
      </div>
    </div>
  );
};

interface ProjectSectionProps {}

const ProjectSection: React.FC<ProjectSectionProps> = () => {
  const projects = [
    {
      title: "SasPlay APP",
      description:
        "SasPlay is a React Native project focused on gaming. It included free games, paid tournaments, and integrated payment options like Metamask and Trust Wallet. I contributed as a React Native developer, implementing front-end functionality, collaborating with the back-end team.",
      technologies: "React Native, blockchain, firebase",
      demoLink:
        "https://play.google.com/store/apps/details?id=com.sasplaygame&pcampaignid=web_share",
      githubLink: "https://github.com/example/repository",
      img: [
        "./assets/sasplay.jpg",
        "./assets/sasplay1.jpg",
        "./assets/sasplay2.jpg",
      ],
    },
    {
      title: "E-commerce Mobile App",
      description:
        "Developed a React Native e-commerce app with payment integration and user authentication.",
      technologies: "React Native,Expo, Redux, Firebase,",
      demoLink: "https://example.com/demo",
      githubLink: "https://github.com/example/repository",
      img: ["./assets/eco1.jpg", "./assets/eco3.jpg", "./assets/eco4.jpg"],
    },
    {
      title: "FxFort APP",
      description:
        "FXFort is a blockchain-powered mobile app that simplifies and secures digital transactions globally through its cryptocurrency, FXFort Coin.",
      technologies: "React Native, React-Js, blockchain, firebase",
      demoLink: "https://testnet.fxfort.io/",
      githubLink: "",
      img: ["./assets/fxfort.png"],
    },
    {
      title: "Free Online Plagiarism Checker ",
      description:
        "A plagiarism detection project with a user-friendly interface that supports file uploads, provides real-time analysis with feedback in under 30 seconds, efficiently detects duplicate content across web pages and academic papers, and accurately identifies AI- generated content.",
      technologies: "Next-Js, Typescript, AI, node-js",
      demoLink: "https://critique.cbtexty.com/",
      githubLink: "https://github.com/example/repository",
      img: ["./assets/plagicheker.png"],
    },
    // Add more project objects as needed
  ];

  return (
    <div
      id="projects"
      className="b g-[#00000055]  min-h-[100%] flex flex-col justify-between "
    >
      <div className="p-4 mt-[70px] md:ml-[100px]">
        <span className="text-[#63c8ff] text-2xl font-semibold">Projects</span>
        <hr className="h-px my-4 bg-gray-400 border-0 dark:bg-gray-70 w-[60%] " />
        <div className="flex flex-row flex-wrap justify-center md:justify-between items-center mt-10">
          {projects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default ProjectSection;
