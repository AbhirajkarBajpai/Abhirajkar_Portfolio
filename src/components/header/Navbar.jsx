import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const email = "21IT3001@rgipt.ac.in";
  const cvLink = "https://drive.google.com/file/d/1vJXiAhDUL6Ne9JYeRYh5e8J8X-y_dBsT/view?usp=drive_link";

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
        <div className="email-mobile">
          <button
            className="email-btn"
            onClick={() => window.open('mailto:21IT3001@rgipt.ac.in', '_blank')}
          >
            Email
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
      <nav className="navbar_links">
        <span>
          <a href="https://www.linkedin.com/in/abhirajkar-bajpai-b46736228/" target="_blank">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0,0,256,256"
              >
                <g
                  fill="#ffffff"
                  fill-rule="nonzero"
                  stroke="none"
                  stroke-width="1"
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  stroke-miterlimit="10"
                  stroke-dasharray=""
                  stroke-dashoffset="0"
                  font-family="none"
                  font-weight="none"
                  font-size="none"
                  text-anchor="none"
                  style={{ mixBlendMode: "normal" }}
                >
                  <g transform="scale(10.66667,10.66667)">
                    <path d="M19,3h-14c-1.105,0 -2,0.895 -2,2v14c0,1.105 0.895,2 2,2h14c1.105,0 2,-0.895 2,-2v-14c0,-1.105 -0.895,-2 -2,-2zM7.738,17v0c-0.697,0 -1.262,-0.565 -1.262,-1.262v-4.477c0.001,-0.696 0.566,-1.261 1.262,-1.261v0c0.697,0 1.262,0.565 1.262,1.262v4.477c0,0.696 -0.565,1.261 -1.262,1.261zM7.694,8.717c-0.771,0 -1.286,-0.514 -1.286,-1.2c0,-0.686 0.514,-1.2 1.371,-1.2c0.771,0 1.286,0.514 1.286,1.2c0,0.686 -0.514,1.2 -1.371,1.2zM16.779,17v0c-0.674,0 -1.221,-0.547 -1.221,-1.221v-2.605c0,-1.058 -0.651,-1.174 -0.895,-1.174c-0.244,0 -1.058,0.035 -1.058,1.174v2.605c0,0.674 -0.547,1.221 -1.221,1.221h-0.081c-0.674,0 -1.221,-0.547 -1.221,-1.221v-4.517c0,-0.697 0.565,-1.262 1.262,-1.262v0c0.697,0 1.262,0.565 1.262,1.262c0,0 0.282,-1.262 2.198,-1.262c1.219,0 2.196,0.977 2.196,3.174v2.605c0,0.674 -0.547,1.221 -1.221,1.221z"></path>
                  </g>
                </g>
              </svg>
            </div>
            <span className="social-text">LinkedIn</span>
          </a>
        </span>
        <span className="slash_nvb" style={{ color: "#99989d" }}>/</span>
        <span>
          <a href="https://www.facebook.com/abhirajkar.bajpai" target="_blank">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0,0,256,256"
              >
                <g
                  fill="#ffffff"
                  fill-rule="nonzero"
                  stroke="none"
                  stroke-width="1"
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  stroke-miterlimit="10"
                  stroke-dasharray=""
                  stroke-dashoffset="0"
                  font-family="none"
                  font-weight="none"
                  font-size="none"
                  text-anchor="none"
                  style={{ mixBlendMode: "normal" }}
                >
                  <g transform="scale(10.66667,10.66667)">
                    <path d="M12,2c-5.523,0 -10,4.477 -10,10c0,5.013 3.693,9.153 8.505,9.876v-7.226h-2.474v-2.629h2.474v-1.749c0,-2.896 1.411,-4.167 3.818,-4.167c1.153,0 1.762,0.085 2.051,0.124v2.294h-1.642c-1.022,0 -1.379,0.969 -1.379,2.061v1.437h2.995l-0.406,2.629h-2.588v7.247c4.881,-0.661 8.646,-4.835 8.646,-9.897c0,-5.523 -4.477,-10 -10,-10z"></path>
                  </g>
                </g>
              </svg>
            </div>
            <span className="social-text">facebook</span>
          </a>
        </span>
        <span className="slash_nvb" style={{ color: "#99989d" }}>/</span>
        <span>
        <a href="https://www.instagram.com/abhirajkar_27_7" target="_blank">
          <div className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0,0,256,256"
            >
              <g
                fill="#ffffff"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
                style={{ mixBlendMode: "normal" }}
              >
                <g transform="scale(10.66667,10.66667)">
                  <path d="M8,3c-2.757,0 -5,2.243 -5,5v8c0,2.757 2.243,5 5,5h8c2.757,0 5,-2.243 5,-5v-8c0,-2.757 -2.243,-5 -5,-5zM8,5h8c1.654,0 3,1.346 3,3v8c0,1.654 -1.346,3 -3,3h-8c-1.654,0 -3,-1.346 -3,-3v-8c0,-1.654 1.346,-3 3,-3zM17,6c-0.55228,0 -1,0.44772 -1,1c0,0.55228 0.44772,1 1,1c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1zM12,7c-2.757,0 -5,2.243 -5,5c0,2.757 2.243,5 5,5c2.757,0 5,-2.243 5,-5c0,-2.757 -2.243,-5 -5,-5zM12,9c1.654,0 3,1.346 3,3c0,1.654 -1.346,3 -3,3c-1.654,0 -3,-1.346 -3,-3c0,-1.654 1.346,-3 3,-3z"></path>
                </g>
              </g>
            </svg>
          </div>
            <span className="social-text">Instagram</span>
          </a>
        </span>
      </nav>
    </div>
  );
};

export default Navbar;
