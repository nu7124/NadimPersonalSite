import React from 'react';
import './projects.css';

import CodeCombat from '../../assets/CodeCombat.svg'

const projects = ()=>{
  return (
    <div id="projectsComp">
      <h1 id="projectsComp_name">Portfolio</h1>
      <div id="projectsComp_all">
        <div className="projectsComp_all_individual" style={{backgroundColor:'red'}}>

          <div className="projectDesc">
            <span>Project Name</span>
            <span>About</span>
            <p>Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah </p>
            <span>My Role</span>
            <p>Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah </p>
          </div>

          <div className="projectImage" id="CodeCombat">
  
          </div>


        </div>

        <div className="projectsComp_all_individual" style={{backgroundColor:'blue'}}>

          

          <div className="projectDesc">
            <span>Project Name</span>
            <span>About</span>
            <p>Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah </p>
            <span>My Role</span>
            <p>Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah </p>
          </div>

          <div className="projectImage" id="Mentr">
          
          </div>

        </div>

        <div className="projectsComp_all_individual" style={{backgroundColor:'green'}}>


          <div className="projectDesc">
            <span>Project Name</span>
            <span>About</span>
            <p>Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah </p>
            <span>My Role</span>
            <p>Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah </p>
          </div>

          <div className="projectImage" id="VotingBlock">
  
          </div>
        </div>
      </div>
    </div>
  );
}



export default projects;