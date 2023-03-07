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
    <Swiper
    modules={[ Navigation, Pagination, Scrollbar, A11y, Autoplay]}
    spaceBetween={30}
    slidesPerView={1}
    breakpoints = {{  
      900 : {slidesPerView:2},
      1350 : {slidesPerView:3}
    }}
    navigation
    pagination={{ clickable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
    autoplay = {{"delay":10000, "disableOnInteraction":false}}
    loop = {true}
    loopFillGroupWithBlank={true}
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