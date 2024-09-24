import { useEffect, useRef } from 'react';
import './Skills.css';
function SkillsSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0) {
            // Calculate the scale based on the percentage of the element visible in the viewport
            const scaleValue = 0.7 + entry.intersectionRatio * (1 - 0.7);
            section.style.transform = `scale(${scaleValue})`;
          }
        });
      },
      {
        threshold: Array.from(Array(101).keys(), (i) => i / 100), // Create an array of thresholds from 0 to 1 with 0.01 intervals
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
    <section id="skills" className="skills-section" ref={sectionRef}>
      <h2>My Skills</h2>
      <p>Details about your skills here...</p>
    </section>
  );
}

export default SkillsSection;
