import slide1 from "../../assets/bf.png";
import slide2 from "../../assets/slide2.png";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "./hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <Swiper className="slider">
        <SwiperSlide>
          <img src={slide1} alt="" className="image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" className="image" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
