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

const VideoSliderIframe = ({ videos }) => {
  // State to keep track of the current slide index
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  // Update the current slide index when it changes
  console.log("activeSlideIndex", activeSlideIndex);
  const handleSlideChange = (swiper) => {
    setActiveSlideIndex(swiper.activeIndex);
  };

  const STYLES = {
    videoIframeContainer: { padding: "56.25% 0 0 0", position: "relative" },
    videoIframe: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
    },
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
      className="h-full w-full  relative "
      navigation
      parallax
      mousewheel
      effect="fade"
    >
      {videos.map((video, index) => (
        <SwiperSlide
          key={video.href}
          className="  relative aspect-video  w-full h-full bg-[#008845] "
        >
          <div style={STYLES.videoIframeContainer}>
            <iframe
              title="vimeo-player"
              src={video.vimeoUrl}
              width="640"
              height="360"
              frameBorder="0"
              allowFullScreen
              style={STYLES.videoIframe}
            ></iframe>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default VideoSliderIframe;
