// src/components/AboutMe.jsx
import React from 'react';

const AboutMe = () => {
  return (
    <div className="about-me">
      <img 
        src="src/assets/Chris.jpeg" 
        alt="Chris Gillis" 
        style={{ 
            width: '200px', 
            height: '200px', 
          }} 
      />
      <p>
      Hello, I’m Chris Gillis, a full-stack web developmer in my final trimester of tech school. I’m passionate about working with React and JavaScript. After graduating, I aim to transition into IT Project Management. When I’m not coding, you’ll find me playing video games, enjoying music, or spending time with friends.
      </p>
    </div>
  );
};

export default AboutMe;