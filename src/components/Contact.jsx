import React from "react";
import ParticleComponent from "../components/ParticleComponent"; // Ensure correct path
import "../styles/contact.css"; // Ensure correct path

const Contact = () => {
  return (
    <div className="contact-container">
      {/* Particle Background */}
      <div className="particle-background">
        <ParticleComponent />
      </div>

      {/* Contact Content */}
      <div className="contact-content">
        <h1 className="contact-title">Contact Me</h1>
        <p className="contact-details">
          📧 Email:
          <a href="mailto:your.email@example.com">
            {" "}
            niki123naik@gmail.com
          </a>{" "}
          <br />
          🔗 LinkedIn:
          <a
            href="https://www.linkedin.com/in/nikita-naik-8a639724b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            https://www.linkedin.com/in/nikita-naik-8a639724b/{" "}
          </a>
          <br /> 💻 GitHub:
          <a
            href="https://github.com/25NIKITA"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            github.com/25NIKITA
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
