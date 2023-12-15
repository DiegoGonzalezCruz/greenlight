"use client";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ReactPlayer from "react-player";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Parallax,
  Mousewheel,
  EffectFade,
} from "swiper/modules";
import Image from "next/image";

// Import Swiper styles
import "swiper/css/bundle";
import Slide from "./Slide";

const VideoSlider1 = ({ videos }) => {
  // State to keep track of the current slide index
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  // Update the current slide index when it changes
  console.log("activeSlideIndex", activeSlideIndex);
  const handleSlideChange = (swiper) => {
    setActiveSlideIndex(swiper.activeIndex);
  };

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
      spaceBetween={0}
      slidesPerView={1}
      onSlideChange={handleSlideChange} // Add this line
      // onSlideChange={() => console.log("slide change")}
      // onSwiper={(swiper) => console.log(swiper)}
      className="h-full w-full  relative video-slider"
      navigation
      parallax
      mousewheel
      effect="fade"
    >
      {videos.map((video, index) => {
        const embedUrl = `${video.embedUrl}?autoplay=1&muted=1&autopause=0&background=1&loop=1`;

        return (
          <SwiperSlide key={video.href} className="video-slide">
            <iframe
              src={embedUrl}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              className="video-iframe debug1"
              title={video.text}
            ></iframe>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default VideoSlider1;
