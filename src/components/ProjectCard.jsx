import React from 'react';
import './ProjectCard.css';


const ProjectCard = (props) => {
  return (
    <div className="project-card_PP" onClick={()=>window.open(props.projectLink)}>
      <div className="project-card-image_PP">
        <img src={props.projectImage} alt="SpinApp" />
      </div>
      <h3 className="project-card-title_PP">{props.projectName}</h3>
      <div className="project-card-description_PP">
        <span>{props.projectInfo}</span>
      </div>
    </div>
  );
};

export default ProjectCard;
