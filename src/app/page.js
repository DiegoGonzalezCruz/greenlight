// import VideoSlider from "@/components/VideoSlider";
import dynamic from "next/dynamic";
const VideoSlider = dynamic(() => import("@/components/VideoSlider"), {
  ssr: false,
});
import { videosVimeo } from "@/videos";

export default function Home() {
  return (
    <main className=" w-full h-screen ">
      <VideoSlider videos={videosVimeo} />
    </main>
  );
}

export const metadata = {
  title: "Greenlight Productions",
  description: "Greenlight Productions",
};
