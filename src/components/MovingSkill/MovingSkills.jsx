import React from "react";
import "./MovingSkills.css";
import SkillCard from "../Cards/SkillCard";
import {
  FaReact,
  FaNode,
  FaPython,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa";
import {
  SiExpress,
  SiEthereum,
  SiSolidity,
  SiRive,
  SiEthers,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiBootstrap,
  SiTypescript,
  SiCplusplus,
} from "react-icons/si";

const skillsData1 = [
  {
    SkillName: "React",
    SkillArea: "Web Development",
    fa: FaReact,
    color: "#61DBFB",
    hoverColor: "webflow",
  },
  {
    SkillName: "Node.js",
    SkillArea: "Backend Development",
    fa: FaNode,
    color: "#68A063",
    hoverColor: "figma",
  },
  {
    SkillName: "JavaScript",
    SkillArea: "Development",
    fa: FaJs,
    color: "#F0DB4F",
    hoverColor: "attributes",
  },
  {
    SkillName: "Express",
    SkillArea: "Backend Development",
    fa: SiExpress,
    color: "#000000",
    hoverColor: "photoshop",
  },
  {
    SkillName: "Python",
    SkillArea: "Data Science",
    fa: FaPython,
    color: "#306998",
    hoverColor: "illustrator",
  },
  {
    SkillName: "Git",
    SkillArea: "Version Control",
    fa: FaGitAlt,
    color: "#F05032",
    hoverColor: "xd",
  },
  {
    SkillName: "HTML5",
    SkillArea: "Markup Language",
    fa: FaHtml5,
    color: "#E34C26",
    hoverColor: "vimeo",
  },
  {
    SkillName: "Ethereum",
    SkillArea: "Blockchain",
    fa: SiEthereum,
    color: "#3C3C3D",
    hoverColor: "tagmanager",
  },
  {
    SkillName: "Solidity",
    SkillArea: "Blockchain",
    fa: SiSolidity,
    color: "#363636",
    hoverColor: "analytics",
  },
  {
    SkillName: "Ether.js",
    SkillArea: "Blockchain",
    fa: SiEthers,
    color: "#5272B4",
    hoverColor: "weglot",
  },
];

const skillsData2 = [
  {
    SkillName: "PostMan",
    SkillArea: "Web Development",
    fa: SiPostman,
    color: "#FF6C37",
    hoverColor: "lottie",
  },
  {
    SkillName: "Bootstrap",
    SkillArea: "Web Development",
    fa: SiBootstrap,
    color: "#7952B3",
    hoverColor: "zapier",
  },
  {
    SkillName: "TypeScript",
    SkillArea: "Development",
    fa: SiTypescript,
    color: "#3178C6",
    hoverColor: "analytics",
  },
  {
    SkillName: "Cryptography",
    SkillArea: "Security",
    fa: FaGitAlt,
    color: "#4B8BBE",
    hoverColor: "attributes",
  },
  {
    SkillName: "C++",
    SkillArea: "Programming",
    fa: SiCplusplus,
    color: "#00599C",
    hoverColor: "photoshop",
  },
  {
    SkillName: "Restful API",
    SkillArea: "Integration",
    fa: FaGitAlt,
    color: "#4B8BBE",
    hoverColor: "xd",
  },
  {
    SkillName: "Rive",
    SkillArea: "Animation",
    fa: SiRive,
    color: "#FFD400",
    hoverColor: "illustrator",
  },
  {
    SkillName: "CSS3",
    SkillArea: "Styling",
    fa: FaCss3Alt,
    color: "#264DE4",
    hoverColor: "vimeo",
  },
  {
    SkillName: "MongoDB",
    SkillArea: "Data Management",
    fa: SiMongodb,
    color: "#47A248",
    hoverColor: "figma",
  },
  {
    SkillName: "MYSQL",
    SkillArea: "Data Management",
    fa: SiMysql,
    color: "#4479A1",
    hoverColor: "tagmanager",
  },
];

const MovingSkills = () => {
  return (
    <div className="moving-skills-container">
      <span style={{marginLeft:'4vw', fontSize:'3.2vh'}}>SKILLS</span>
      <div className="movingSkill">
        <div className="skills-row animate-right-to-left">
          <div className="skills-row-contentRL">
            {skillsData1.map((skill, index) => (
              <SkillCard
                key={index}
                SkillName={skill.SkillName}
                SkillArea={skill.SkillArea}
                fa={skill.fa}
                color={skill.color}
                hoverColor={skill.hoverColor}
              />
            ))}
            {skillsData1.map((skill, index) => (
              <SkillCard
                key={`duplicate-${index}`}
                SkillName={skill.SkillName}
                SkillArea={skill.SkillArea}
                fa={skill.fa}
                color={skill.color}
                hoverColor={skill.hoverColor}
              />
            ))}
          </div>
        </div>
        <div className="skills-row animate-left-to-right">
          <div className="skills-row-contentLR">
            {skillsData2.map((skill, index) => (
              <SkillCard
                key={index}
                SkillName={skill.SkillName}
                SkillArea={skill.SkillArea}
                fa={skill.fa}
                color={skill.color}
                hoverColor={skill.hoverColor}
              />
            ))}
            {skillsData2.map((skill, index) => (
              <SkillCard
                key={`duplicate-${index}`}
                SkillName={skill.SkillName}
                SkillArea={skill.SkillArea}
                fa={skill.fa}
                color={skill.color}
                hoverColor={skill.hoverColor}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovingSkills;
