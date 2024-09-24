import { useEffect, useRef } from 'react';
import './Skills.css';
function SkillsSection() {
    // Reference : https://alvarotrigo.com/blog/css-animations-scroll/
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0) {
            const scaleValue = 0.7 + entry.intersectionRatio * (1 - 0.7);
            section.style.transform = `scale(${scaleValue})`;
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
  }, []);

  return (
    <div className='skill_container'>
      <div id="skills" className="skills-section" ref={sectionRef}>
      <div className="header">
        <span role="img" aria-label="skills-icon" className="emoji_main">💼</span>
        <h1>My Awesome Skills</h1>
      </div>
      <div className="skills-container">
      <div className="skill-card">
          <span role="img" aria-label="web-development" className="emoji">💻</span>
          <div className='skill_serial'><span>01</span><hr/></div>
          <h2>Web Development</h2>
          <p>Building interactive and responsive websites. Utilise framwork such as React, Next for Frontend and Node , Express for Backend</p>
        </div>
        <div className="skill-card">
          <span role="img" aria-label="photography" className="emoji">📸</span>
          <div className='skill_serial'><span>02</span><hr/></div>
          <h2>Photography</h2>
          <p>Capture moments with precision and creativity. trying some cinematic shots, color Grading and after Effect.</p>
        </div>
        <div className="skill-card">
          <span role="img" aria-label="blockchain" className="emoji">🔗</span>
          <div className='skill_serial'><span>03</span><hr/></div>
          <h2>Blockchain</h2>
          <p>Exploring decentralized solutions with blockchain technology. Developed Notable Dapps using Ethereum Network, worked with Solidity, ether.js and Tools like Ganache</p>
        </div>
      </div>
    </div></div>
  );
}

export default SkillsSection;
