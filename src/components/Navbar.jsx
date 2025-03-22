import React from "react";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <h1 style={styles.logo}>Nikita's Portfolio</h1>
      <div style={styles.links}>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 50px",
    background: "#282c34",
    color: "white",
    alignItems: "center",
  },
  logo: { fontSize: "1.5rem", fontWeight: "bold" },
  links: { display: "flex", gap: "20px" },
};

export default Navbar;
