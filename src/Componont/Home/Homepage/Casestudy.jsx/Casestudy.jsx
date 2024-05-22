/*import React from "react";

function  CaseStudy() {
    return <>
        <div className="h-60 bg-Red-100">
          <h1 className="text-center">Our Latest Case Studies</h1>
        </div>
    </>
}

export default CaseStudy;*/

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import FullScreenDialog from './Case/Case1';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';
import CaseCard from './Case/CaseCard';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
    <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mt-10 mb-20">
          <h1 className="text-center mt-5 mb-10">Our Latest Case Studies</h1>
        
      <Swiper
     
        slidesPerView={2}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='h-96 w-36'><FullScreenDialog /></SwiperSlide>
        <SwiperSlide className='h-96 w-36'><FullScreenDialog /></SwiperSlide>
       
      </Swiper>
      </div>
    </>
  );
}