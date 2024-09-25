import React from 'react';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      year: 2021,
      title: "High School",
      description: "Completed my 10th in year 2018 from BBS Internationals, Prayagraj, U.P, INDIA."
    },
    {
      year: 2022,
      title: "Intermediate",
      description: "Completed my 10th in year 2018 from BBS Internationals, Prayagraj, U.P, INDIA."
    },
    {
      year: 2023,
      title: "Undergraduate",
      description: "Currently a final year undergraduate at Rajiv Gandhi Institute of Petroleum Technology(An Institute of National importance Establised by the Act of Parliament 2007.)"
    }
  ];

  return (
    <div className="education-container">
      <h1 className="education-title">Education</h1>
      <div className="timeline">
        {educationData.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-content">
              <div className="timeline-year">{item.year}</div>
              <div className="timeline-card">
                <h3 className="timeline-card-title">{item.title}</h3>
                <p className="timeline-card-description">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;