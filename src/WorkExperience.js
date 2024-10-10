import React from 'react';

const WorkExperience = ({ experiences }) => {
  return (
    <section>
      <h2>Work Experience</h2>
      {experiences.map((experience, index) => (
        <div key={index}>
          <h3>{experience.jobTitle}</h3>
          <p>{experience.date}</p>
          <p>{experience.description}</p>
          <ul>
            {experience.keySkills.map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default WorkExperience;
