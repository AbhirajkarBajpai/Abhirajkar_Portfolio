import React from "react";
import "./MovingExperience.css";

const MovingExperience = () => {
  const companies = [
    "VYLD",
    "GFG",
    "EAGE",
    "WYB",
    "RGIPT",
    "Soulgenix",
    "Gyanarpan",
  ];

  return (
    <div className="experience-container">
      <div className="company-list">
        {companies.map((company, index) => (
          <div className="companyDiv">
            <span key={index} className="company">
              {company}
            </span>
          </div>
        ))}
        {companies.map((company, index) => (
          <div className="companyDiv">
            <span key={index + companies.length} className="company">
              {company}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovingExperience;
