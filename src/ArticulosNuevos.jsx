import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./articulosNuevos.css";

/*  cardNuevoArticulo*/
import { CardNuevoArticulo } from "./CardNuevoArticulo";
/* fin cardNuevoArticulo */

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function ArticulosNuevos() {
  return (
    <div className="contenedorSwiper2">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="card" >
          <CardNuevoArticulo img_src={"//cdn.shopify.com/s/files/1/0611/4865/9963/files/categories-02.jpg?v=1637640640"} nombre_articulo={"HUMAN"}/>
        </SwiperSlide>
        <SwiperSlide className="card">
          <CardNuevoArticulo img_src={"//cdn.shopify.com/s/files/1/0611/4865/9963/files/categories-03.jpg?v=1637640642"} nombre_articulo={"LAMP"}/>
        </SwiperSlide>
        <SwiperSlide className="card">
          <CardNuevoArticulo img_src={"//cdn.shopify.com/s/files/1/0611/4865/9963/files/categories-01.jpg?v=1637640640"} nombre_articulo={"SCULTURE"}/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
