import React from "react";
import { useNavigate } from "react-router-dom";


function ProjectItem({ image, name, p }) {
  const Navigate = useNavigate();
  return (
    <div className="projectItem" onClick = {() => {Navigate("/project/" + p)}}>
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1> {name} </h1>
    </div>
  );
}

export default ProjectItem;