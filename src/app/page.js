// import VideoSlider1 from "@/components/VideoSlider1";
import dynamic from "next/dynamic";
const VideoSlider1 = dynamic(() => import("@/components/VideoSlider1"), {
  ssr: false,
});
import { videosVimeo } from "@/videos";

export default function Home() {
  return (
    <main className=" w-full h-screen ">
      <VideoSlider1 videos={videosVimeo} />
    </main>
  );
}

export const metadata = {
  title: "Greenlight Productions",
  description: "Greenlight Productions",
};
