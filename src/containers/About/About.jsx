import React from 'react';
import Feature from '../../components/feature/Feature';
import './about.css';

const About = () => (
  <div className="about section__margin" id="about">
    <div className="about-feature">
      <Feature title="About" text="Hi, I&apos;m Tapan Siddarth from Hyderabad,
              presently pursuing my Undergraduate degree in Computer Science at Ecole Centrale School Of
              Engineering,Mahindra University, Hyderabad, Telangana, India." />
    </div>
    <div className="about-heading">
      <h1 className="gradient__text">Education</h1>
    </div>
    <div className="about-container">
      <Feature title="Mahindra University 2020-24" text="I'm presently pursuing my bachelor's degree in computer science at Mahindra university, Hyderabad, Telangana, India." />
      
      <Feature title="Bhavan&apos;s &nbsp;2006-18" text="I had completed my secondary school education at Bharatiya Vidya Bhavan's Public School, Jubliee hills, Hyderabad, Telangana, India."/>
    </div>
  </div>
);

export default About;