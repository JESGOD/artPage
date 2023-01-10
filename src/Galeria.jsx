import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination"; 

import "./galeria.css";

// import required modules
import {Autoplay, FreeMode, Pagination} from "swiper";

export default function galeria({imgs}) {
  return (
    <>
    
      <Swiper
        slidesPerView={3}
        speed={3000}
        spaceBetween={15}
        freeMode={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }} 
        /* pagination={{
          clickable: true,
        }} */
        modules={[Autoplay, FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img
            src={imgs[0]}
            alt=""
          /></SwiperSlide>
        <SwiperSlide><img
            src={imgs[1]}
            alt=""
          /></SwiperSlide>
        
        <SwiperSlide><img
            src={imgs[2]}
            alt=""
          /></SwiperSlide>
       <SwiperSlide><img
            src={imgs[3]}
            alt=""
          /></SwiperSlide>
        <SwiperSlide><img
            src={imgs[4]}
            alt=""
          /></SwiperSlide>
        
        <SwiperSlide><img
            src={imgs[5]}
            alt=""
          /></SwiperSlide>
          <SwiperSlide><img
            src={imgs[6]}
            alt=""
          /></SwiperSlide>
        <SwiperSlide><img
            src={imgs[7]}
            alt=""
          /></SwiperSlide>
        
        <SwiperSlide><img
            src={imgs[8]}
            alt=""
          /></SwiperSlide>
          <SwiperSlide><img
            src={imgs[9]}
            alt=""
          /></SwiperSlide>
      </Swiper>
    </>
  );
}
