// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper';
import {SkillList} from "../assets/helpers/SkillList";
import { Swiper, SwiperSlide } from 'swiper/react';
import SkillItem from "../Components/SkillItem";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import '../styles/Swiper.css';
export default () => {
  return (
  <div className='swiper-background'>
    <div className = "skills-subtitle">
    Skills & Interests
    </div>
    <Swiper
    modules={[ Navigation, Pagination, Scrollbar, A11y, Autoplay]}
    spaceBetween={15}
    slidesPerView={1}
    breakpoints = {{  
      1050 : {slidesPerView:2},
    }}
    navigation
    pagination={{ clickable: true }}
    autoplay = {{"delay":15000, "disableOnInteraction":false}}
    loop = {true}
  > 

  {SkillList.map((skill,index) => {
      return (
        <SwiperSlide className = "slide">
          <SkillItem id= {index} name = {skill.name} image = {skill.image} text = {skill.text}/>
          <img src = {skill.image} className = "swiper-image"/>
          <p>{skill.text}</p>
        </SwiperSlide>
      )
    } ) } 
  </Swiper>
  </div>
  );
}