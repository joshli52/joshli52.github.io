import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import "../styles/Hero.css";
import React from 'react'
import Clouds from 'vanta/dist/vanta.clouds.min'
class Hero extends React.Component {
  constructor() {
    super()
    this.vantaRef = React.createRef()
  }
  componentDidMount() {
    this.vantaEffect = Clouds({
      el: this.vantaRef.current
    })
  }
  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy()
  }
  render() {
  return <div ref={this.vantaRef}>
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
    </div>
  </div>
  }
}
export default Hero; 