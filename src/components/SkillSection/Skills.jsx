import { useEffect, useRef, useState } from "react";
import "./Skills.css";
import Skill_Img from "../../assets/img/Skill.png";
import WebD from "../../assets/img/coding.png";
import BlockChain from "../../assets/img/blockchain.png";
import Lens from "../../assets/img/lens.png";

function SkillsSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isScaled, setIsScaled] = useState(false);
  const skills = [
    {
      imgSrc: WebD,
      skillNumber: "01",
      skillWord: window.innerWidth > 1300 ? "Web Development" : "webDev",
      skillInfo:
        "Building interactive and responsive websites with React, Next for Frontend and Node, Express for Backend.",
      colorHash: "rgb(218, 255, 153)",
    },
    {
      imgSrc: BlockChain,
      skillNumber: "02",
      skillWord: "Blockchain",
      skillInfo:
        window.innerWidth < 1300
          ? "Look into blockchain-based decentralised solutions. Used Solidity, ether.js, and Ethereum Network to create notable dapps"
          : "Exploring decentralized solutions with blockchain technology. Developed Notable Dapps using Ethereum Network, worked with Solidity, ether.js.",
      colorHash: "rgb(218, 234, 253)",
    },
    {
      imgSrc: Lens,
      skillNumber: "03",
      skillWord: "Photography",
      skillInfo:
        "Capture moments with precision and creativity. Trying some cinematic shots, color grading and after effects.",
      colorHash: "rgb(219, 215, 255)",
    },
  ];

  const DynamicSkill = ({ word }) => {
    return (
      <a href="" className="skill_a">
        {word.split("").map((letter, index) => (
          <span key={index}>{letter}</span>
        ))}
      </a>
    );
  };

  const SkillSet = ({
    imgSrc,
    skillNumber,
    skillWord,
    skillInfo,
    colorHash,
  }) => {
    return (
      <div className="SkillSet" style={{ backgroundColor: colorHash }}>
        <div className="skillSet_img_contn">
          <img
            src={imgSrc}
            alt="Dev_img"
            className="skillSet_img"
          />
        </div>
        <div className="skill_serial">
          <span>{skillNumber}</span>
          <hr />
        </div>
        <DynamicSkill word={skillWord} />
        <span className="skillInfo">{skillInfo}</span>
      </div>
    );
  };

  useEffect(() => {
    if (window.outerWidth > 800) {
      const section = sectionRef.current;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.intersectionRatio > 0 && !isScaled) {
              const scaleValue = 0.6 + entry.intersectionRatio * (1 - 0.6);
              if (scaleValue > 0.9) {
                setIsScaled(true);
              }
              section.style.transform = `scale(${scaleValue})`;
              if (entry.intersectionRatio === 1) {
                setIsScaled(true);
              }
            } else if (entry.boundingClientRect.top > 0 && isScaled) {
              const scaleValue = 0.6 + entry.intersectionRatio * (1 - 0.6);
              section.style.transform = `scale(${scaleValue})`;
              if (entry.intersectionRatio === 0) {
                setIsScaled(false);
              }
            }
          });
        },
        {
          threshold: Array.from(Array(101).keys(), (i) => i / 100),
        }
      );

      if (section) {
        observer.observe(section);
      }

      return () => {
        if (section) {
          observer.unobserve(section);
        }
      };
    } else {
      console.log("console hit on change of isScaled");
    }
  }, [isScaled]);

  return (
    <div className="skill_container">
      <div id="skills"  style={{transform: 'scale(1)'}} className="skills-section" ref={sectionRef}>
        <div className="Skill_svg_contn">
          <img className="Skill_svg" src={Skill_Img} alt="Skill_Svg" />
        </div>
        <span className="skill_text">My Awesome Skills</span>
        <div className="SkillSet_contn">
          {skills.map((skill, index) => (
            <SkillSet
              key={index}
              imgSrc={skill.imgSrc}
              skillNumber={skill.skillNumber}
              skillWord={skill.skillWord}
              skillInfo={skill.skillInfo}
              colorHash={skill.colorHash}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillsSection;
