import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const email = "21IT3001@rgipt.ac.in";
  const cvLink = "/path-to-your-cv.pdf";

  const [buttonText, setButtonText] = useState("Copy");

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setButtonText(".....");
    setTimeout(() => {
      setButtonText("Copied");
      setTimeout(() => setButtonText("Copy"), 3600);
    }, 400);
  };

  return (
    <div className="Navbar">
      <div className="navbar-container">
        <div className="email-section">
          <span>{email}</span>
          <button className="copy-btn" onClick={copyEmail}>
            {buttonText}
          </button>
        </div>
        <div className="cv-section">
          <button
            className="cv-btn"
            onClick={() => window.open(cvLink, "_blank")}
          >
            CV
          </button>
        </div>
      </div>
      <nav class="navbar_links">
        <span>
          <a href="https://www.linkedin.com/" target="_blank">
            LinkedIn
          </a>
        </span>
        <span>/</span>
        <span>
          <a href="https://www.dribbble.com/" target="_blank">
           facebook
          </a>
        </span>
        <span>/</span>
        <span>
          <a href="https://www.instagram.com/" target="_blank">
            Instagram
          </a>
        </span>
      </nav>
    </div>
  );
};

export default Navbar;
