import { useEffect, useRef, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import ProjectSection from "./components/ProjectSection";
import { motion, useScroll, useSpring } from "framer-motion";

const App = () => {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });
  console.log("scrollXProgress", scrollXProgress);

  return (
    <div className="flex flex-1 flex-col">
      {init && (
        <Particles
          id="tsparticles"
          // init={particlesInit}
          // loaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "#012732",
                // value: "#212529",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: false,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                // resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#039DC8",
              },
              links: {
                color: "#039DC8",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 0.8,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  // area: 800,
                },
                value: 130,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
      )}
      <div ref={ref} className="absolute  w-full h-full   ">
        <motion.div
          className="h-1 bg-[#63c8ff] shadow-lg shadow-[#63c8ff] z-[1000] fixed w-full bottom-0 "
          style={{ scaleX }}
        />

        <Header />
        <Home />
        <About />
        <ProjectSection />
        <Contact />
      </div>
    </div>
  );
};
export default App;
