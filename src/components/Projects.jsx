import React from "react";
import ParticleComponent from "../components/ParticleComponent";
import "../styles/projects.css"; // Ensure this file exists

const Projects = () => {
  return (
    <div className="page-container">
      <ParticleComponent /> {/* Stars Background */}
      <h1 className="page-title">Projects</h1>
      <div className="projects-container">
        {/* Wireless EV Charger Project */}
        <div className="content-box">
          <h2>🚀 Wireless EV Charger for Bicycles</h2>
          <ul>
            <li>
              Designed a wireless EV charger prototype using electromagnetic
              induction.
            </li>
            <li>Won 1st place in the Mini Project competition.</li>
            <li>
              📷{" "}
              <a
                href="/mp.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="image-link"
              >
                Click here to view image
              </a>
            </li>
          </ul>
        </div>

        {/* PrepPal Project with Clickable Links */}
        <div className="content-box">
          <h2>🌍 PrepPal - Study Partner Matching Website</h2>
          <ul>
            <li>
              Designed a web app using a cosine similarity algorithm for
              matchmaking.
            </li>
            <li>
              Published research in IJERT and claimed copyright.
              <br />
              🔗{" "}
              <a
                href="https://www.ijert.org/preppal-your-go-to-website-for-study-mates-and-exam-preparation"
                target="_blank"
                rel="noopener noreferrer"
                className="research-link"
              >
                Read Research Paper
              </a>
            </li>
            <li>
              GitHub Repository:
              <br />
              🔗{" "}
              <a
                href="https://github.com/25NIKITA/PrepPal"
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
              >
                View on GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Projects;
