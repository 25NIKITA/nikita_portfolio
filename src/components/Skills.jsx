import React from "react";
import ParticleComponent from "./ParticleComponent";
import "../styles/skills.css";

const Skills = () => {
  return (
    <div className="skills-container">
      <ParticleComponent />
      <h1 className="section-title">Skills</h1>

      <div className="skills-wrapper">
        {/* Left Box - Skills */}
        <div className="skills-box">
          <h2>Technical Skills</h2>
          <ul>
            <li>
              <strong>Frontend Technologies:</strong> HTML, CSS, Bootstrap,
              Tailwind CSS
            </li>
            <li>
              <strong>Frameworks & Libraries:</strong> React.js, Next.js,Django
            </li>
            <li>
              <strong>Programming Languages:</strong> JavaScript, C++, Python
            </li>
            <li>
              <strong>Databases:</strong> MongoDB, MySQL
            </li>
            <li>
              <strong>Tools & Platforms:</strong> GitHub, Figma, Canva
            </li>
          </ul>
        </div>

        {/* Right Box - Certifications */}
        <div className="skills-box">
          <h2>Certifications</h2>
          <ul>
            <li>
              📜 Digital Marketing Fundamentals - IIDE <br />{" "}
              <a href="#">🔗 View Certificate</a>
            </li>
            <li>
              📊 Data Science For Engineers <br />{" "}
              <a href="#">🔗 View Certificate</a>
            </li>
            <li>
              💻 C++ Programming Certificate <br />{" "}
              <a href="#">🔗 View Certificate</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
