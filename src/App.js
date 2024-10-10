import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import PersonalProfile from './PersonalProfile';
import WorkExperience from './WorkExperience';
import Skills from './Skills';
import Education from './Education';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Kanishk Gudavalli',
      contactInfo: {
        email: 'kanishkgudavalli@gmail.com',
        website: 'https://bio.site/kanishkgudavalli',
        phone: '908.417.2565',
      },
      profile: `I am currently a senior at NJIT with a major in Computer Science and a minor in Business. Responsible and self motivated student, seeking to expand my knowledge and gain experience in the technology field through an job opportunity. Currently involved in on-campus groups with the purpose of continuing to develop my professional skills.`,
      workExperience: [
        {
          jobTitle: 'BMW - Product Development Intern',
          date: 'March 2024 - August 2024',
          description: `Created Android Applications for future car models.`,
          keySkills: ['Kotlin', 'Jira', 'Debugging'],
        },

        {
          jobTitle: 'HelpMeSee - Technology Intern',
          date: 'April 2023 - Febuary 2024',
          description: `Looking through logs and finding root causes of errors.`,
          keySkills: ['Computer Engineering', 'Supply Chain and Logistics'],
        },
      ],
      skills: ['Scripting', 'Product Development ( Front End & Back End )', 'Automation', "Project Management"],
      education: [
        {
          degree: 'BS in Computer Science, Minor in Business',
          year: '2020 - 2024',
          gpa: '3.42',
          institution: 'New Jersey Institute of Technology',
        }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <Header name={this.state.name} contactInfo={this.state.contactInfo} />
        <PersonalProfile profile={this.state.profile} />
        <Education education={this.state.education} />
        <WorkExperience experiences={this.state.workExperience} />
        <Skills skills={this.state.skills} />
      </div>
    );
  }
}

export default App;
