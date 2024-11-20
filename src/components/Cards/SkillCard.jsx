import React, { useState } from "react";
import "./SkillCard.css";

const SkillCard = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
    className={`SkillCard ${isHovered ? props.hoverColor : "normal_bg"}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <props.fa size={(window.outerWidth <= 900 && window.outerWidth>500) ?'40%': (window.outerWidth<500 ?30:65)} color={props.color} />
      <div className="Sk_innerDiv">
        <span>{props.SkillName}</span>
        <span>{props.SkillArea}</span>
      </div>
    </div>
  );
};

export default SkillCard;
