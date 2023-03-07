import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Swiper from "../Components/Swiper";
import "../styles/Home.css";
function Home() {
  return (
    <div className ="home"> 
      <div className = "about-me" >
        <h2 clasName = "name" > Joshua Li </h2>
        <div className = "prompt">
          <p className = "intro"> Software Developer & student at the University of Waterloo </p>
          <a href = "https://github.com/joshli52" target ="_blank">
          <GitHubIcon/>
          </a>
          <a href = "https://www.linkedin.com/in/joshua-li-1354a01a9/" target = "_blank">
            <LinkedInIcon/>
          </a>
          <a href = "https://www.instagram.com/joshli_52/" target = "_blank">
            <InstagramIcon/>
          </a>
        </div>
      </div>
      <div className = "skills-subtitle">
         Skills & Interests
      </div>
    <div className = "swiper" > 
      <Swiper/>
    </div>
  </div>
  )
 }

export default Home; 