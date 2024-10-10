import React from 'react';

const Education = ({ education }) => {
  return (
    <section>
      <h2>Education</h2>
      {education.map((edu, index) => (
        <div key={index}>
          <h3>{edu.degree}</h3>
          <p>{edu.institution} - {edu.year}</p>
          <p>GPA: {edu.gpa}</p>
        </div>
      ))}
    </section>
  );
};

export default Education;
