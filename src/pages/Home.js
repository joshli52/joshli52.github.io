import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import Swiper from "../Components/Swiper";
import "../styles/Home.css";

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
    <div className = "swiper" > 
      <Swiper/>
    </div>
  </div>
  )
 }

export default Home; 