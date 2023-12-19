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
import "swiper/css/bundle";

const VideoSliderVideoTag = ({ videos }) => {
  const router = useRouter();
  const videoRefs = useRef([]);

  // Initial setup for videoRefs
  useEffect(() => {
    videoRefs.current = videoRefs.current.slice(0, videos.length);
  }, [videos]);

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveSlideIndex(swiper.activeIndex);

    videoRefs.current.forEach((videoRef, index) => {
      if (videoRef.current && videoRef.current.pause) {
        videoRef.current.pause();
      }
    });

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
        onSlideChange={handleSlideChange}
        className="h-full w-full  relative z-50 "
        navigation
        parallax
        mousewheel
        effect="fade"
      >
        {videos.map((video, index) => (
          <SwiperSlide
            key={video.href}
            className="relative aspect-video cursor-pointer w-full h-full bg-[#203133] z-40"
          >
            <video width='100%' height='100%' loop ref={el => videoRefs.current[index] = el}>
              <source src={video?.hd} />
            </video>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default VideoSliderVideoTag;
