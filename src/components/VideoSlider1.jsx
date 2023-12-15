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
      className="h-full w-full  relative "
      navigation
      parallax
      mousewheel
      effect="fade"
    >
      {videos.map((video, index) => {
        const videoUrl = new URL(video.embedUrl);
        videoUrl.searchParams.set("autoplay", "1"); // Enable autoplay
        videoUrl.searchParams.set("controls", "0"); // Hide controls
        videoUrl.searchParams.set("muted", "1"); // Mute the video

        return (
          <SwiperSlide
            key={video.href}
            className="relative aspect-video w-full h-full bg-[#008845]"
          >
            <div
              style={{ padding: "56.25% 0 0 0", position: "relative" }}
              className="debug2"
            >
              <iframe
                src={videoUrl.href} // Use the embedUrl from your video object
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                className="debug1"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
                title={video.text} // Use the text from your video object for the title
              ></iframe>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default VideoSlider1;
