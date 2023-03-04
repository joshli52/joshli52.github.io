import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import "../styles/home.css";
function Home() {
  return (
    <div className ="home"> 
      <div className = "about-me" >
        <h2> Joshua Li </h2>
        <div className = "prompt">
          <p> Software Developer & student at the University of Waterloo </p>
          <GitHubIcon/>
          <LinkedInIcon/>
          <EmailIcon/>
        </div>
      </div>
      <div className ="skills" >
        <h1> Skills and Interests </h1>
        <ul className = "list">
          <li className = "item">
              <h2> Front-End </h2>
              <span> ReactJS, NPM, Yarn, Django, CSS </span>
          </li>
          <li className = "item">
            <h2> Languages </h2>
            <span> Python, Javascript, SQL, Excel VBA</span>
          </li>
          <li className = "item">
            <h2> Other </h2>
          <span> Git, Github </span>
          </li>
          <li className = "item">
            <h2> Interests </h2>
            <span> Calisthenics, Basketball, Chess </span>
          </li>
        </ul>
      </div>
    </div>
  )
 }

export default Home;    