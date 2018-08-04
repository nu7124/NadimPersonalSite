import React from 'react';
import './projects.css';
import projects from './projects';

const Individual = (props)=>{
  return (
        <div className="projectsComp_all_individual">

          <div className="projectDesc">
            <div>
                <div className="projectDesc_name"><span>{props.name}</span></div>
                <div className="projectDesc_title"><span>About</span></div>
                <div className={`project_border ${props.id}_border`}></div>
                <p className="projectDesc_title_text">{props.about}</p>
                <div className="projectDesc_title"><span>My Role</span></div>
                <div className={`project_border ${props.id}_border`}></div>
                <p className="projectDesc_title_text">{props.role}</p>
            </div>
            <div className="code_button"><a href={props.github}><span className="code_text">Code</span></a></div>
            
          </div>
          
          
          <div className="projectImage" id={props.id}>
          </div>

        </div>
  );
}



export default Individual;