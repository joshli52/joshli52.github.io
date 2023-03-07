import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import '../styles/Footer.css';

function Footer() {
  return ( 
    <div className = "footer" > 
      <div className ="socialMedia" >
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
    <p> &copy; 2022 joshuali.dev </p>
    </div>
  );
}

export default Footer


