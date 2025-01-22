import React, { useState } from "react";
import caseContainer from "../../assets/img/Project_cont.png";
import img1 from "../../assets/img/Fraud_Detection.png";
import img2 from "../../assets/img/EVM.png";
import img3 from "../../assets/img/onLibrary.png";
import img4 from "../../assets/img/Make_Notes.jfif";
import img5 from "../../assets/img/TrackingDapp.jfif";
import img6 from "../../assets/img/Contri.png";
import img7 from "../../assets/img/Draww.jpg";
import "./ProjectPage.css";
import ProjectCard from "../ProjectCard";

const projects = [
  {
    image: img6,
    title: "Contri: Expense Splitting WebApp",
    description:
      "Provides advanced group management features to divide spending, alter...",
    link: "https://github.com/AbhirajkarBajpai/contri",
  },
  {
    image: img7,
    title: "Draww: Interactive Game",
    description:
      "provides a fun and engaging way to challenge friends by creating and solving drawing...",
    link: "https://github.com/AbhirajkarBajpai/Draww",
  },
  {
    image: img4,
    title: "Notes WebApp",
    description:
      "webApp that allows users to create, edit, and delete notes. This uses..",
    link: "https://github.com/AbhirajkarBajpai/NOTEITPHY",
  },
  {
    image: img1,
    title: "BFTI webApp",
    description: "Webapp Developed to identify and flag potentially...",
    link: "https://github.com/AbhirajkarBajpai/Fraud_detection_Webapp",
  },
  {
    image: img2,
    title: "E-voting Dapp",
    description:
      "This Application (Dapp) built on the Ethereum blockchain for conducting...",
    link: "https://github.com/AbhirajkarBajpai/E-Voting_Dapp",
  },
  {
    image: img3,
    title: "OnLibrary",
    description:
      "Created full-stack e-book reader that allows users to read and bookmark....",
    link: "https://github.com/AbhirajkarBajpai/OnLibrary-E-Book-Reader-",
  },
  {
    image: img5,
    title: "Tracking Dapp",
    description:
      "allows users to securely and transparently track products sent from a sender to a receiver..",
    link: "https://github.com/AbhirajkarBajpai/Tracking_Dapp",
  },
];

const ProjectPage = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const handleNext = () => {
    if (currentProject < projects.length - 1) {
      setCurrentProject(currentProject + 1);
    }
  };

  const handlePrev = () => {
    if (currentProject > 0) {
      setCurrentProject(currentProject - 1);
    }
  };

  return (
    <div className="pagination-container">
      <div className="projinfo_cont">
        <div className="project-info">
          <div className="proj_page_side">
            <div>
              <span>Case</span>{" "}
              <span>
                #{currentProject + 1}/{projects.length}
              </span>
            </div>
            <span>My</span>
            <strong>Cases</strong>
          </div>
          <div className="project_contn">
            <img
              src={caseContainer}
              alt="project_box"
              className="project_box"
            />
            <div className="proj_img_contn">
              <img
                src={projects[currentProject].image}
                alt="project_img"
                className="project_img"
              />
            </div>
            <div className="proj_info_contn">
              <span>{projects[currentProject].title}</span>
              <div>
                <span>{projects[currentProject].description}</span>
              </div>
            </div>
            <div className="proj_github" onClick={()=>window.open(projects[currentProject].link)}>
              <svg
                fill="#fff"
                data-name="1-Arrow Up"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
              >
                <path d="m26.71 10.29-10-10a1 1 0 0 0-1.41 0l-10 10 1.41 1.41L15 3.41V32h2V3.41l8.29 8.29z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Pagination Controls */}
        <div className="pagination-controls">
          {projects.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentProject(index)}
              className={`page-number ${
                currentProject === index ? "active" : ""
              }`}
            >
              {index + 1}
            </div>
          ))}
          <div
            className={`circle ${
              currentProject === projects.length - 1 ? "disabled-next" : ""
            }`}
            onClick={handleNext}
            disabled={currentProject === projects.length - 1}
          >
            <svg
              fill="#fff"
              data-name="1-Arrow Up"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
            >
              <path d="m26.71 10.29-10-10a1 1 0 0 0-1.41 0l-10 10 1.41 1.41L15 3.41V32h2V3.41l8.29 8.29z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="section-two_PP">
        <strong>Popular</strong>
        <span>cases</span>
        <div className="proj_contn_s2PP">
          {projects.map((items) => {
            return (
              <ProjectCard
                projectImage={items.image}
                projectName={items.title}
                projectInfo={items.description}
                projectLink={items.link}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
