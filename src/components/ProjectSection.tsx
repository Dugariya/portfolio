import React from "react";

const Project = ({
  title,
  description,
  technologies,
  demoLink,
  githubLink,
}) => {
  return (
    <div className="shadow-lg rounded-lg p-6 mb-10 w-[48%] bg-[#0a2c3e67] shadow-[#63c8ff] border-t border-[#63c8ff] ">
      <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
      <p className="text-gray-200 mb-4">{description}</p>
      <p className="text-gray-300 mb-2">
        <span className="font-bold">Technologies used:</span> {technologies}
      </p>
      <div className="flex items-center mb-4">
        <a href={demoLink} className="text-blue-600 hover:underline mr-4">
          View Demo
        </a>
        <a href={githubLink} className="text-blue-600 hover:underline">
          GitHub
        </a>
      </div>
    </div>
  );
};

const ProjectSection = () => {
  const projects = [
    {
      title: "E-commerce Mobile App",
      description:
        "Developed a React Native e-commerce app with payment integration and user authentication.",
      technologies: "React Native,Expo, Redux, Firebase,",
      demoLink: "https://example.com/demo",
      githubLink: "https://github.com/example/repository",
    },

    {
      title: "FxFort APP",
      description:
        "FXFort is a blockchain-powered mobile app that simplifies and secures digital transactions globally through its cryptocurrency, FXFort Coin. It's accessible through popular digital wallets and is poised to revolutionize the future of finance.",
      technologies: "React Native, React-Js, blockchain, firebase",
      demoLink: "https://example.com/demo",
      githubLink: "https://github.com/example/repository",
    },
    {
      title: "SasPlay APP",
      description:
        "SasPlay is a React Native project focused on gaming. It included free games, paid tournaments, and integrated payment options like Metamask and Trust Wallet. I contributed as a React Native developer, implementing front-end functionality, collaborating with the back-end team, and ensuring an intuitive user interface.",
      technologies: "React Native, blockchain, firebase",
      demoLink: "https://example.com/demo",
      githubLink: "https://github.com/example/repository",
    },
    {
      title: "Free Online Plagiarism Checker for students",
      description:
        "A plagiarism detection project with a user-friendly interface that supports file uploads, provides real-time analysis with feedback in under 30 seconds, efficiently detects duplicate content across web pages and academic papers, and accurately identifies AI- generated content for rewriting Developed a free AI Essay Writer with instant essay generation using natural language processing algorithms Implemented customizable outputs and an intuitive interface for effortless navigation ",
      technologies: "Next-Js, Typescript, AI, node-js",
      demoLink: "https://critique.cbtexty.com/",
      githubLink: "https://github.com/example/repository",
    },
    // Add more project objects as needed
  ];

  return (
    <div className="b g-[#00000055]  min-h-[100%] flex flex-col justify-between ">
      <div className="p-4 mt-[70px] md:ml-[100px]">
        <span className="text-[#63c8ff] text-2xl font-semibold">Projects</span>
        {/* <hr className="w-[60%] my-5 bg-gray-600 text-black" /> */}
        <hr className="h-px my-4 bg-gray-400 border-0 dark:bg-gray-70 w-[60%] " />
        <div className="flex flex-row flex-wrap justify-between mt-10">
          {projects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
