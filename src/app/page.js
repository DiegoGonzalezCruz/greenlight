// import VideoSlider from "@/components/VideoSlider";
import dynamic from "next/dynamic";
const VideoSliderReactPlayer = dynamic(
  () => import("@/components/VideoSliderReactPlayer"),
  {
    ssr: false,
  }
);
import { videosVimeo } from "@/videos";

export default function Home() {
  return (
    <main className=" w-full h-screen ">
      <VideoSliderReactPlayer videos={videosVimeo} />
    </main>
  );
}

export const metadata = {
  title: "Greenlight Productions",
  description: "Greenlight Productions",
};
