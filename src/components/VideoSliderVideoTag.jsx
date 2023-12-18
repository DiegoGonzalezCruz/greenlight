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

const VideoSliderVideoTag = ({ videos }) => {
  const router = useRouter();
  const videoRefs = useRef(videos.map(() => useRef()));



  // State to keep track of the current slide index
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  // Update the current slide index when it changes
  // console.log("activeSlideIndex", activeSlideIndex);
  const handleSlideChange = (swiper) => {
    setActiveSlideIndex(swiper.activeIndex);

    // Pause all videos
    videoRefs.current.forEach((videoRef, index) => {
      if (videoRef.current && videoRef.current.pause) {
        videoRef.current.pause();
      }
    });

    // Play the video in the current slide
    const currentVideo = videoRefs.current[swiper.activeIndex];
    if (currentVideo && currentVideo.current && currentVideo.current.play) {
      currentVideo.current.play();
    }
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
          console.log(video)
          return (
            <div className="h-full w-full cursor-pointer" key={video.href}>
              <SwiperSlide
                key={video.href}
                className="relative aspect-video cursor-pointer w-full h-full bg-[#203133] z-40"
              >
                <video width='100%' height='100%' loop ref={videoRefs.current[index]}>
                  <source src={video?.hd} />
                </video>
              </SwiperSlide>
            </div>
          )
        })}

      </Swiper>
    </div>
  );
};

export default VideoSliderVideoTag;
