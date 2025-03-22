import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticleComponent = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true },
        background: { color: "#000011" }, // Space Dark Theme
        particles: {
          number: { value: 600 }, // Increased density
          color: { value: "#ffffff" }, // White stars
          shape: { type: "circle" },
          opacity: {
            value: 0.9,
            random: true,
            anim: {
              enable: true,
              speed: 1.2,
              opacity_min: 0.3, // Stars fade in and out
              sync: false,
            },
          },
          size: {
            value: { min: 1, max: 3 },
            anim: {
              enable: true,
              speed: 20,
              size_min: 0.1,
              sync: false,
            },
          },
          move: {
            enable: true,
            speed: 8, // Slower movement for realism
            direction: "right", // Stars move downward slightly
            random: true,
            straight: true,
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
          },
          modes: {
            repulse: { distance: 50 },
          },
        },
      }}
    />
  );
};

export default ParticleComponent;
