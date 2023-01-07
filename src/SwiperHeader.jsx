import "./index.css";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./swiperheader.css";

// import required modules
import { Autoplay, Pagination } from "swiper";

export default function SwiperHeader() {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        /* pagination={{
          dynamicBullets: true,
        }} */
        modules={[Autoplay, Pagination]}
        className="mySwiper "
      >
        <SwiperSlide>
          <div className="texto-header">
            <h1 className="titulo">Painting</h1>
            <p className="parrafo">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              illo aperiam deserunt
            </p>
            <button className="btn_verMas">COMPRAR</button>
          </div>
          <img
            src="//cdn.shopify.com/s/files/1/0611/4865/9963/files/slider01-mobile.jpg?v=1637744988"
            alt=""
          />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <div className="texto-header">
            <h1 className="titulo">Crafting</h1>
            <p className="parrafo">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus omnis id minima officiis! Laborum, recusandae?
            </p>
            <button className="btn_verMas">COMPRAR</button>
          </div>
          <img
            src="//cdn.shopify.com/s/files/1/0611/4865/9963/files/slider02-mobile.jpg?v=1637648973"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <div className="texto-header">
            <h1 className="titulo">Sculpture</h1>
            <p className="parrafo">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              illo aperiam deserunt
            </p>
            <button className="btn_verMas">COMPRAR</button>
          </div>
          <img
            src="//cdn.shopify.com/s/files/1/0611/4865/9963/files/slider03-mobile.jpg?v=1637648865"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
