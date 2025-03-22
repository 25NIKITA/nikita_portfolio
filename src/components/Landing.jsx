import React from "react";
import { Link } from "react-router-dom";
import "../styles/Landing.css";
import ParticleComponent from "./ParticleComponent";

const Landing = () => {
  return (
    <div className="landing-container">
      {/* Particles Background */}
      <ParticleComponent />

      {/* Content */}
      <div className="content">
        {/* Profile Picture */}
        <div className="profile-pic-container">
          <img
            src="/profile_nikita.jpg"
            alt="Nikita Naik"
            className="profile-pic"
          />
        </div>

        {/* Name */}
        <h1 className="name">Nikita Naik</h1>

        {/* Title */}
        <p className="title">
          Frontend Developer | AI Enthusiast | Innovator 🚀
        </p>

        {/* Small Description */}
        <p className="description">
          An ENTC graduate passionate about IT and web development, I thrive on
          learning—be it foreign languages like Spanish or coding languages.
          With a creative edge from my love for dance, I'm constantly exploring
          the ever-evolving tech world.
        </p>

        {/* Navigation Tabs */}
        <div className="tabs-container">
          <Link to="/experience" className="tab">
            Experience
          </Link>
          <Link to="/skills" className="tab">
            Skills
          </Link>
          <Link to="/projects" className="tab">
            Projects
          </Link>
          <Link to="/contact" className="tab">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
