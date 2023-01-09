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

export default function galeria() {
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
            src="//cdn.shopify.com/s/files/1/0611/4865/9963/files/slider03-mobile.jpg?v=1637648865"
            alt=""
          /></SwiperSlide>
        <SwiperSlide><img
            src="//cdn.shopify.com/s/files/1/0611/4865/9963/files/slider03-mobile.jpg?v=1637648865"
            alt=""
          /></SwiperSlide>
        
        <SwiperSlide><img
            src="//cdn.shopify.com/s/files/1/0611/4865/9963/files/slider03-mobile.jpg?v=1637648865"
            alt=""
          /></SwiperSlide>
       <SwiperSlide><img
            src="//cdn.shopify.com/s/files/1/0611/4865/9963/files/slider03-mobile.jpg?v=1637648865"
            alt=""
          /></SwiperSlide>
        <SwiperSlide><img
            src="//cdn.shopify.com/s/files/1/0611/4865/9963/files/slider03-mobile.jpg?v=1637648865"
            alt=""
          /></SwiperSlide>
        
        <SwiperSlide><img
            src="//cdn.shopify.com/s/files/1/0611/4865/9963/files/slider03-mobile.jpg?v=1637648865"
            alt=""
          /></SwiperSlide>
          <SwiperSlide><img
            src="//cdn.shopify.com/s/files/1/0611/4865/9963/files/slider03-mobile.jpg?v=1637648865"
            alt=""
          /></SwiperSlide>
        <SwiperSlide><img
            src="//cdn.shopify.com/s/files/1/0611/4865/9963/files/slider03-mobile.jpg?v=1637648865"
            alt=""
          /></SwiperSlide>
        
        <SwiperSlide><img
            src="//cdn.shopify.com/s/files/1/0611/4865/9963/files/slider03-mobile.jpg?v=1637648865"
            alt=""
          /></SwiperSlide>
      </Swiper>
    </>
  );
}
