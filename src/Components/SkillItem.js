import React from "react";
import '../styles/Swiper.css';

function SkillItem({ image, name, id}) {
  return (
    <div className="SkillItem">
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1> {name} </h1> 
    </div>
  );
}

export default SkillItem;
