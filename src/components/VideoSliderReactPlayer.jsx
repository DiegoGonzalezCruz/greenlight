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
import useDeviceDetection from "./useDeviceDetection";

import toast from 'react-hot-toast';

const VideoSliderReactPlayer = ({ videos }) => {
  const router = useRouter();

  const device = useDeviceDetection();

  useEffect(() => {
    if (device === "Mobile" || device === "Tablet") {
      toast("Better experience in Desktop", {
        // additional toast options if needed
        icon: '📱'
      });
    }
  }, [device]); // Only re-run the effect if the device changes



  // State to keep track of the current slide index
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  // Update the current slide index when it changes
  // console.log("activeSlideIndex", activeSlideIndex);
  const handleSlideChange = (swiper) => {
    setActiveSlideIndex(swiper.activeIndex);
  };

  const handleOnClick = (video) => {
    console.log("click", video);
    window.open(video.href, "_blank");
  };

  return (
    <div className={" h-full w-full"}>
      <Swiper
        modules={[
          Navigation,
          Pagination,
          // Scrollbar,
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
        mousewheel={{
          sensitivity: 1,
          thresholdTime: 500,
          thresholdDelta: 10,
        }}
        effect="fade"
      >
        {videos.map((video, index) => {
          // console.log("video", video, index);
          return (
            <div className=" h-full w-full  cursor-pointer" key={video.href}>
              <SwiperSlide
                key={video.href}
                className="  relative aspect-video cursor-pointer w-full h-full bg-black z-40"
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
