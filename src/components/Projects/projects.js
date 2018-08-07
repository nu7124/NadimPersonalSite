import React from 'react';
import './projects.css';
import Individual from './individual';
import {info} from './info'

const projects = ()=>{
  return (
    <div id="projectsComp">
      <h1 id="projectsComp_name">PORTFOLIO</h1>
      <div id="projectsComp_all">
        {
          info.map(project => {
            return (
              <Individual key={project.id} id={project.id} name={project.name} about={project.about} role={project.role} github={project.github}/>
            )
          })
        }
      </div>
    </div>
  );
}



export default projects;