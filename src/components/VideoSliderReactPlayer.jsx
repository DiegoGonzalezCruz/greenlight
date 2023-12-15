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

const VideoSliderReactPlayer = ({ videos }) => {
  // State to keep track of the current slide index
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  // Update the current slide index when it changes
  // console.log("activeSlideIndex", activeSlideIndex);
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
      onSwiper={(swiper) => console.log(swiper)}
      className="h-full w-full  relative z-50 "
      navigation
      parallax
      mousewheel
      effect="fade"
    >
      {videos.map((video, index) => {
        // console.log("video", video, index);
        return (
          <div
            className=" h-full w-full  cursor-pointer"
            onClick={() => console.log("!!!")}
            key={video.slide + index}
          >
            <SwiperSlide
              className="  relative aspect-video cursor-pointer w-full h-full bg-[#203133] z-40"
              onClick={() => console.log("!!!")}
            >
              <ReactPlayer
                url={video.vimeoUrl}
                controls={false}
                playing={true}
                // playing={index === activeSlideIndex} // Play only if the slide is active
                volume={0}
                muted={true}
                loop={true}
                width="100%"
                height="100%"
                className="react-player  absolute top-0 left-0 w-full h-full -z-40"
              />
            </SwiperSlide>
          </div>
        );
      })}
    </Swiper>
  );
};

export default VideoSliderReactPlayer;
