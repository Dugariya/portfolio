import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import ProjectSection from "./components/ProjectSection";
// import { Engine } from "@tsparticles/engine";

const App = () => {
  const [init, setInit] = useState(false);
  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);
  // const particlesInit = useCallback(async (engine: Engine) => {
  //   await loadSlim(engine);
  // }, []);
  // const particlesLoaded = (container) => {
  //   console.log(container);
  // };

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
      <div className="absolute  w-full h-full   ">
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
