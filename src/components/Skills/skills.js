import React from 'react';
import './skills.css';
const front=["JavaScript/ES6+","React","HTML","CSS","React-Native","Redux","Grid","Webpack"];
const back=["Express","Sequelize","Node","Python","PostgreSQL","Firebase"];
const other=["Git","Mocha", "Chai", "Postman", "Agile Workflow"];
const skills = ()=>{
  return (
    <div id="skillsComp">
      <h1 id="skillsComp_name">Skills</h1>
      <div className="skillsComp_set">
        <div className="skillsComp_set_title">Front End</div>
        <div className="skillsComp_set_individual">
          {
            front.map(skill=>{
              return (
                <span className="single_skill" key={skill}>{skill} </span>
              )
            })
          }
        </div>
      </div>

      <div className="skillsComp_set">
        <div className="skillsComp_set_title">Back End</div>
        <div className="skillsComp_set_individual">
          {
            back.map(skill=>{
              return (
                <span className="single_skill" key={skill}>{skill} </span>
              )
            })
          }
        </div>
      </div>

      <div className="skillsComp_set">
        <div className="skillsComp_set_title">Other</div>
        <div className="skillsComp_set_individual">
          {
            other.map(skill=>{
              return (
                <span className="single_skill" key={skill}>{skill} </span>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}



export default skills;