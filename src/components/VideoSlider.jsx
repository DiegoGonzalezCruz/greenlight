"use client";
import { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Parallax,
  Mousewheel,
  EffectFade,
} from "swiper/modules";

// Import Swiper styles
import "swiper/css/bundle";

const VideoSlider = ({ videos }) => {
  return (
    <Swiper
      modules={[
        Navigation,
        Pagination,
        Scrollbar,
        A11y,
        Parallax,
        Mousewheel,
        EffectFade,
      ]}
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className="h-screen w-screen debug1"
      navigation
      parallax
      mousewheel
      effect="fade"
    >
      {videos.map((video, index) => (
        <SwiperSlide
          key={video}
          className="w-screen h-screen flex justify-center items-center"
        >
          <ReactPlayer
            url={video}
            controls={false}
            playing={true}
            volume={0}
            muted={true}
            loop={true}
            width="100%"
            height="100%"
            className="react-player"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default VideoSlider;
