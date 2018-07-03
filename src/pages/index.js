import React from 'react';
import './index.css';

import Title from '../components/Title/title';
import About from '../components/About/about';
import Projects from '../components/Projects/projects';
import Contact from '../components/Contact/contact';

const home = ()=> {
  return (
    <div id="home">
    
      <div id="main">
        <Title />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="projects">
        <Projects />
      </div>

      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}


export default home;