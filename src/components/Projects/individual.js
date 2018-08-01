import React from 'react';
import './projects.css';

const Individual = (props)=>{
  return (
        <div className="projectsComp_all_individual">

          <div className="projectDesc">
            <div><span>{props.name}</span></div>
            <div><span>About</span></div>
            <p>{props.about}</p>
            <span>My Role</span>
            <p>{props.role}</p>
          </div>

          <div className="projectImage" id={props.id}>
          </div>

        </div>
  );
}



export default Individual;