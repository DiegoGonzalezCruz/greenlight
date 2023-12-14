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

const VideoSlider = ({ videos }) => {
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
      className="h-full w-full  relative"
      navigation
      parallax
      mousewheel
      effect="fade"
    >
      {videos.map((video, index) => (
        <SwiperSlide
          key={video.href}
          className="  relative player-wrapper  w-full h-full bg-green-900 "
        >
          <ReactPlayer
            url={video.vimeoUrl}
            controls={false}
            playing={index === activeSlideIndex} // Play only if the slide is active
            volume={0}
            muted={true}
            loop={true}
            width="100%"
            height="100%"
            className="react-player aspect-video absolute top-0 left-0 w-full h-full"
          />
          <div className="  absolute top-0 left-0 w-full h-full  ">
            <div className="  h-full w-full flex flex-col items-start justify-end  px-10 pb-20 ">
              <a
                className="text-white  cursor-pointer w-full "
                target="_blank"
                href={video.href}
              >
                <div className="flex flex-row items-center justify-between w-full ">
                  <p className="hover:font-bold transition-transform duration-200 ease-in-out transform hover:scale-105 ">
                    {video.text}
                  </p>
                  <Image
                    src={"/greenlight.png"}
                    width={50}
                    height={50}
                    alt={video.text}
                  />
                </div>
              </a>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default VideoSlider;
