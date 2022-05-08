import React from 'react';
import robot from '../../files/robot.png';
import './new.css';

const New = () => (
  <div className="new section__padding" id="projects">
    <div className="new-image">
      <img src={robot} alt="possibility" />
    </div>
    <div className="new-content">
      <h4><q>Science of today is the technology of tomorrow</q>-Edward Teller</h4>
      <h1 className="gradient__text">Projects</h1>
      <p><li>The present website is my first project</li></p>
    </div>
  </div>
);

export default New;