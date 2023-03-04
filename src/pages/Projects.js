import React from "react";
import ProjectItem from "../Components/ProjectItem";
import forest from "../assets/forest.jpg";

import "../styles/projects.css";

function Projects() {
  return (
    <div className = "projects">  
        <h1 className = "projectTitle" >My Projects</h1>
        <div className = "projectList">
          <ProjectItem name = "exproject" image={forest}/>
          <ProjectItem name = "exproject2" image = {forest}/>
          <ProjectItem name = "exproject3" image = {forest}/>
        </div>
    </div>

  );
 }

export default Projects;