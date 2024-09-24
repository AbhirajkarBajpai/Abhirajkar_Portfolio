import { useEffect, useRef } from 'react';
import './Skills.css';
const SkillsSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          } else {
            entry.target.classList.remove('in-view');
          }
        });
      },
      { threshold: 0.3 } // Adjust threshold for when the animation starts
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="skills-section" ref={sectionRef} id="skills">
      <h2>My Skills</h2>
      <div className="skills-list">
        {/* Skill items go here */}
      </div>
    </section>
  );
};

export default SkillsSection;
