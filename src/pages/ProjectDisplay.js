import React from "react";
import {useParams} from "react-router-dom";
import {ProjectList}  from "../assets/helpers/ProjectList";
import GitHubIcon from '@mui/icons-material/GitHub';
import '../styles/ProjectDisplay.css';

function ProjectDisplay() {
  const {p} = useParams();
  const project = ProjectList[p];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} alt = " the project" />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <GitHubIcon />
    </div>
  );
}

export default ProjectDisplay;