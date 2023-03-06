import React from "react";
import ProjectItem from "../Components/ProjectItem";
import {ProjectList} from "../assets/helpers/ProjectList";
import "../styles/Projects.css";

function Projects() {
  return (
    <div className = "projects">  
        <h1 className = "projectTitle" >My Projects</h1>
        <div className = "projectList">
          {ProjectList.map((project, index) => {
            return <ProjectItem p ={index} name = {project.name} image = {project.image} />
          } ) }
        </div>
    </div>

  );
 }

export default Projects;