import React from 'react';
import './projects.css';

const projects = ()=>{
  return (
    <div id="projectsComp">
      <h1 id="projectsComp_name">Portfolio</h1>
      <div id="projectsComp_all">
        <div className="projectsComp_all_individual" style={{backgroundColor:'red'}}></div>
        <div className="projectsComp_all_individual" style={{backgroundColor:'blue'}}></div>
        <div className="projectsComp_all_individual" style={{backgroundColor:'green'}}></div>
      </div>
    </div>
  );
}



export default projects;