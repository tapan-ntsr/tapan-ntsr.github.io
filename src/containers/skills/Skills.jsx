import React from 'react';
import Feature from '../../components/feature/Feature';
import cpp from '../../files/cpp.png';
import html from '../../files/html.png';
import python from '../../files/python.png';
import react from '../../files/react.png';
import './skills.css';

const featuresData = [
  {
    title: 'C/C++',
    text: <img src={cpp} alt="c++" />,
  },
  {
    title: 'HTML & CSS',
    text: <img src={html} alt="html" />,
  },
  {
    title: 'Python -L',
    text: <img src={python} alt="python" />,
  },
  {
    title: 'React -L',
    text: <img src={react} alt="react"/>,
  },
];

const Skills = () => (
  <div className="features section__padding" id="skills">
    <div className="features-heading">
      <h1 className="gradient__text"><q>Programming isn't about what you know; it's about what you can figure out.</q></h1>
        <p>Coding Skills</p>
    </div>
    <div className="features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Skills;