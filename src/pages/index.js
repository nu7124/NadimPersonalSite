import React from 'react';
import './index.css';

import Title from '../components/Title/title';
import About from '../components/About/about';
import Skills from '../components/Skills/skills';
import Accomplishments from '../components/Accomplishments/accomplishments';
import Projects from '../components/Projects/projects';
import Contact from '../components/Contact/contact';
import favicon from '../assets/favicon.png'

import Helmet from 'react-helmet';

const home = ()=> {
  return (
    <div id="home">
      <Helmet
        title="Nadim Uddin"
        meta={[
          { name: 'description', content: 'Nadim Uddin Software Engineer' },
          { name: 'software', content: 'personal, software, engineer' },
        ]}
        link={[
          { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }
        ]}

      />
      <div id="main">
        <Title />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="skills">
        <Skills />
      </div>


      <div id="projects">
        <Projects />
      </div>

      {/* <div id="accomplishments">
        <Accomplishments />
      </div> */}
      
      {/* <div id="contact">
        <Contact />
      </div> */}

      <div id="footer">
        © 2018 Nadim Uddin. All Rights Reserved.
      </div>
    </div>
  );
}


export default home;