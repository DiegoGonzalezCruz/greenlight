"use client";
import { useEffect, useRef, useState } from "react";

import Reveal from "reveal.js";

import "reveal.js/dist/reveal.css";

import ReactPlayer from "react-player";

import Image from "next/image";

// Import Swiper styles
import "swiper/css/bundle";
import Slide from "./Slide";

const VideoSliderReveal = ({ videos }) => {
  // State to keep track of the current slide index
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  // Update the current slide index when it changes
  // console.log("activeSlideIndex", activeSlideIndex);
  // const handleSlideChange = (swiper) => {
  //   setActiveSlideIndex(swiper.activeIndex);
  // };

  useEffect(() => {
    const deck = new Reveal();
    deck.initialize();

    // Listen for the 'slidechanged' event
    deck.on("slidechanged", (event) => {
      // Update the active slide index when the slide changes
      setActiveSlideIndex(event.indexh);
      console.log("Slide changed to: ", event.indexh);
    });

    // Initialize the active slide index
    setActiveSlideIndex(deck.getCurrentSlide());

    return () => {
      // Clean up event listeners when component unmounts
      deck.off("slidechanged");
    };
  }, []);

  return (
    <div className="debug1 reveal  bg-[#203133] ">
      <div className="debug2  slides" data-transition="slide">
        {videos.map((video, index) => {
          return (
            <section
              key={video.href}
              data-background-video={
                "https://player.vimeo.com/video/894562266?h=3883a8979a&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              }
              data-background-video-loop="loop"
              data-background-video-muted="true"
              data-background-size="cover"
            ></section>
          );
        })}
      </div>
    </div>
  );
};

export default VideoSliderReveal;
