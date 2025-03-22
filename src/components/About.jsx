import React from "react";

const About = () => {
  return (
    <section style={styles.container}>
      <h2 style={styles.title}>About Me</h2>
      <p style={styles.text}>
        I'm <strong>Nikita Naik</strong>, a passionate{" "}
        <strong>Frontend Developer</strong> with a Bachelor's in Electronics &
        Telecommunication Engineering and a minor in AI/ML. I specialize in
        building interactive and visually appealing web applications.
      </p>
      <h3 style={styles.subtitle}>Education</h3>
      <ul style={styles.list}>
        <li>
          <strong>
            Dr. D.Y. Patil Institute of Engineering Management and Research
          </strong>{" "}
          (CGPA: 9.05/10)
        </li>
        <li>HSC: Vidya Valley Jr College of Science, Pune - 91%</li>
        <li>SSC: Jai Hind High School - 86.80%</li>
      </ul>
    </section>
  );
};

const styles = {
  container: {
    padding: "50px",
    background: "#f5f5f5",
    textAlign: "center",
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "15px",
  },
  subtitle: {
    fontSize: "1.8rem",
    marginTop: "20px",
    marginBottom: "10px",
  },
  text: {
    fontSize: "1.2rem",
    maxWidth: "800px",
    margin: "0 auto",
    lineHeight: "1.5",
  },
  list: {
    listStyle: "none",
    padding: "0",
    fontSize: "1.2rem",
  },
};

export default About;
