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
import { useRouter } from "next/navigation";

// Import Swiper styles
import "swiper/css/bundle";

const VideoSliderReactPlayer = ({ videos }) => {
  const router = useRouter();

  // State to keep track of the current slide index
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  // Update the current slide index when it changes
  // console.log("activeSlideIndex", activeSlideIndex);
  const handleSlideChange = (swiper) => {
    setActiveSlideIndex(swiper.activeIndex);
  };

  const handleOnClick = (video) => {
    console.log("click", video);
    router.push(video.href);
  };

  return (
    <div className={" h-full w-full"}>
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
        className="h-full w-full  relative z-50 "
        navigation
        parallax
        mousewheel
        effect="fade"
      >
        {videos.map((video, index) => {
          // console.log("video", video, index);
          return (
            <div className=" h-full w-full  cursor-pointer" key={video.href}>
              <SwiperSlide
                key={video.href}
                className="  relative aspect-video cursor-pointer w-full h-full bg-[#203133] z-40"
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
                  config={{
                    vimeo: {
                      playerOptions: {
                        playsinline: true,
                      },
                    },
                  }}
                />
                <div
                  className="absolute z-30 top-0 left-0 bottom-0 right-0"
                  onClick={() => handleOnClick(video)}
                />
              </SwiperSlide>
            </div>
          );
        })}
      </Swiper>
    </div>
  );
};

export default VideoSliderReactPlayer;
