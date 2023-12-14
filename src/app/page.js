// import VideoSlider from "@/components/VideoSlider";
import dynamic from "next/dynamic";
const VideoSlider = dynamic(() => import("@/components/VideoSlider"), {
  ssr: false,
});
import { videosVimeo } from "@/videos";

export default function Home() {
  const videos = [
    "/assets/loops/hls/slide1.m3u8",
    "/assets/loops/hls/slide2.m3u8",
    "/assets/loops/hls/slide3.m3u8",
    "/assets/loops/hls/slide4.m3u8",
    "/assets/loops/hls/slide5.m3u8",
    "/assets/loops/hls/slide6.m3u8",
    "/assets/loops/hls/slide7.m3u8",
    "/assets/loops/hls/slide8.m3u8",
    "/assets/loops/hls/slide9.m3u8",
    // "/assets/loops/hls/slide10.m3u8",
    // "/assets/loops/hls/slide11.m3u8",
    // "/assets/loops/hls/slide12.m3u8",
    // "/assets/loops/hls/slide13.m3u8",
    // "/assets/loops/hls/slide14.m3u8",
  ];

  return <VideoSlider videos={videosVimeo} />;
}
