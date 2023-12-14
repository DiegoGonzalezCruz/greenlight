// Import Swiper React components
import { SwiperSlide } from "swiper/react";
import ReactPlayer from "react-player";

const Slide = ({ video, index, activeSlideIndex }) => {
  console.log("video", video);
  console.log("index", index);
  console.log("activeSlideIndex", activeSlideIndex);
  return (
    <SwiperSlide className=" flex justify-center items-center player-wrapper debug1">
      <ReactPlayer
        url={video}
        controls={false}
        playing={index === activeSlideIndex} // Play only if the slide is active
        volume={0}
        muted={true}
        loop={true}
        width="100%"
        height="100%"
        className="react-player"
      />
    </SwiperSlide>
  );
};

export default Slide;
