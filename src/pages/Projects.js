import React from "react";
import ProjectItem from "../Components/ProjectItem";
import {ProjectList} from "../assets/helpers/ProjectList";
import "../styles/projects.css";

function Projects() {
  return (
    <div className = "projects">  
        <h1 className = "projectTitle" >My Projects</h1>
        <div className = "projectList">
          {ProjectList.map((project) => {
            return <ProjectItem name = {project.name} image = {project.image} />;
          } ) }
        </div>
    </div>

  );
 }

export default Projects;