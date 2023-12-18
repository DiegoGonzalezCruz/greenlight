// import VideoSlider from "@/components/VideoSlider";
import dynamic from "next/dynamic";
const VideoSliderVideoTag = dynamic(
  () => import("@/components/VideoSliderVideoTag"),
  {
    ssr: false,
  }
);
import { videosVimeo } from "@/videos";


export default function Home() {
  return (
    <main className=" w-screen h-dscreen bg-[#203133] z-40  ">
      <VideoSliderVideoTag videos={videosVimeo} />
    </main>
  );
}

export const metadata = {
  title: "Greenlight Productions",
  description: "Greenlight Productions",
};
