import React from "react";
import About from "../../components/about/about.components";
import Contact from "../../components/contact/contact.components";
import Experience from "../../components/experience/experience.components";
import Footer from "../../components/footer/footer.components";
import Header from "../../components/header/header.components";
import Nav from "../../components/nav/nav.components";
import Portfolio from "../../components/portfolio/portfolio.components";
import Services from "../../components/services/services.components";
import Testimonials from "../../components/testimonials/testimonials.components";
import "./main.page.scss";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Main = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              // value: "#0d47a1",
              value: "#000000",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 1,
              },
              repulse: {
                distance: 150,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              // value: "#ffffff",
              value: "#90EE90",
            },
            links: {
              color: "#90EE90",
              distance: 150,
              enable: true,
              // opacity: 0.5,
              value: 1,
              width: 2,
            },
            collisions: {
              enable: true,
            },
            move: {
              directions: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              // value: 0.5,
              value: 1,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 4 },
            },
          },
          detectRetina: true,
        }}
      />
      <div className="page">
        <Header></Header>
        {/* <Nav></Nav> */}
        <About></About>
        <Experience></Experience>
        <Services></Services>
        <Portfolio></Portfolio>
        <Testimonials></Testimonials>
        <Contact></Contact>
        <Footer></Footer>
      </div>
      <Nav></Nav>
    </>
  );
};

export default Main;
