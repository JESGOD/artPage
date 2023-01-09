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
            src="//cdn.shopify.com/s/files/1/0611/4865/9963/products/art-product-09_600X600.jpg?v=1637656508"
            alt=""
          /></SwiperSlide>
        <SwiperSlide><img
            src="//cdn.shopify.com/s/files/1/0611/4865/9963/products/art-product-10_600X600.jpg?v=1637656512"
            alt=""
          /></SwiperSlide>
        
        <SwiperSlide><img
            src="//cdn.shopify.com/s/files/1/0611/4865/9963/products/art-product-08_600X600.jpg?v=1637656391"
            alt=""
          /></SwiperSlide>
       <SwiperSlide><img
            src="//cdn.shopify.com/s/files/1/0611/4865/9963/products/art-product-07_600X600.jpg?v=1637661698"
            alt=""
          /></SwiperSlide>
        <SwiperSlide><img
            src="//cdn.shopify.com/s/files/1/0611/4865/9963/products/art-product-04_600X600.jpg?v=1637665747"
            alt=""
          /></SwiperSlide>
        
        <SwiperSlide><img
            src="//cdn.shopify.com/s/files/1/0611/4865/9963/products/art-product-03_600X600.jpg?v=1637665756"
            alt=""
          /></SwiperSlide>
          <SwiperSlide><img
            src="//cdn.shopify.com/s/files/1/0611/4865/9963/products/art-product-02_600X600.jpg?v=1637665723"
            alt=""
          /></SwiperSlide>
        <SwiperSlide><img
            src="//cdn.shopify.com/s/files/1/0611/4865/9963/products/art-product-01_600X600.jpg?v=1637665664"
            alt=""
          /></SwiperSlide>
        
        <SwiperSlide><img
            src="//cdn.shopify.com/s/files/1/0611/4865/9963/products/art-product-06_600X600.jpg?v=1637665719"
            alt=""
          /></SwiperSlide>
          <SwiperSlide><img
            src="//cdn.shopify.com/s/files/1/0611/4865/9963/products/art-product-05_600X600.jpg?v=1637665695"
            alt=""
          /></SwiperSlide>
      </Swiper>
    </>
  );
}
