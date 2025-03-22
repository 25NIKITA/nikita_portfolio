import React from "react";
import ParticleComponent from "../components/ParticleComponent";
import "../styles/experience.css"; // Linking to styles

const Experience = () => {
  return (
    <div className="page-container">
      <ParticleComponent />
      <h1 className="page-title">Experience</h1>

      <div className="experience-container">
        {/* Zidio Development Experience */}
        <div className="experience-item">
          <p className="company">💻 Zidio Development</p>
          <p className="role">
            Full-Stack Web Developer Intern (June - July 2024)
          </p>
          <p className="description">
            • Led a team in building a{" "}
            <a
              href="https://github.com/25NIKITA/Job_listing_portal"
              target="_blank"
              rel="noopener noreferrer"
            >
              job portal
            </a>{" "}
            using the MERN stack. <br />• Coordinated integration and presented
            the project to management.
          </p>
        </div>

        {/* InternKaksha Experience */}
        <div className="experience-item">
          <p className="company">🎨 InternKaksha IT Solutions</p>
          <p className="role">
            Frontend Web Developer Intern (Dec 2023 - Jan 2024)
          </p>
          <p className="description">
            • Built an{" "}
            <a
              href="https://25nikita.github.io/Blog-Website/"
              target="_blank"
              rel="noopener noreferrer"
            >
              art blog website
            </a>{" "}
            using HTML, CSS, and JavaScript, focusing on a visually appealing
            design. <br />• Developed a feature-rich scientific calculator
            ensuring precision and usability.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
