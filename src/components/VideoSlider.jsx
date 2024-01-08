"use client";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ReactPlayer from "react-player";
import { useRouter } from "next/navigation";
import {
  Navigation,
  Pagination,
  A11y,
  Parallax,
  Mousewheel,
  EffectFade,
} from "swiper/modules";
import "swiper/css/bundle";
import useDeviceDetection from "./useDeviceDetection";
import toast from "react-hot-toast";

const VideoSlider = ({ videos }) => {
  const router = useRouter();
  const device = useDeviceDetection();
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const videoRefs = useRef([]);

  useEffect(() => {
    if (device === "Mobile" || device === "Tablet") {
      toast("Better viewed in Desktop", { icon: "📱" });
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const videoIndex = videoRefs.current.indexOf(entry.target);
            if (videoIndex !== -1) {
              // Load the video by updating its source
              videos[videoIndex].load = true;
            }
          }
        });
      },
      { rootMargin: "0px", threshold: 0.1 }
    );

    videoRefs.current.forEach((video) => observer.observe(video));
    return () =>
      videoRefs.current.forEach((video) => observer.unobserve(video));
  }, []);

  const handleSlideChange = (swiper) => {
    setActiveSlideIndex(swiper.activeIndex);
  };

  const handleOnClick = (video) => {
    window.open(video.href, "_blank");
  };

  return (
    <div className={" h-full w-full"}>
      <Swiper
        modules={[
          Navigation,
          Pagination,
          A11y,
          Parallax,
          Mousewheel,
          EffectFade,
        ]}
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={handleSlideChange}
        className="h-full w-full relative z-50"
        navigation
        parallax
        mousewheel={{ sensitivity: 1, thresholdTime: 500, thresholdDelta: 10 }}
        effect="fade"
      >
        {videos.map((video, index) => (
          <div
            className=" h-full w-full cursor-pointer"
            key={video.href}
            ref={(el) => (videoRefs.current[index] = el)}
          >
            <SwiperSlide
              key={video.href}
              className="relative aspect-video cursor-pointer w-full h-full bg-black z-40"
            >
              {video.load && (
                <ReactPlayer
                  url={video.vimeoUrl}
                  controls={false}
                  playing={index === activeSlideIndex}
                  volume={0}
                  muted={true}
                  loop={true}
                  width="100%"
                  height="100%"
                  className="react-player absolute top-0 left-0 w-full h-full -z-40"
                  config={{ vimeo: { playerOptions: { playsinline: true } } }}
                />
              )}
              <div
                className="absolute z-30 top-0 left-0 bottom-0 right-0"
                onClick={() => handleOnClick(video)}
              />
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
};

export default VideoSlider;
