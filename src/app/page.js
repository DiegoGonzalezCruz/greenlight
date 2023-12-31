import dynamic from "next/dynamic";
const VideoSliderReactPlayer = dynamic(
  () => import("@/components/VideoSliderReactPlayer"),
  {
    ssr: false,
  }
);
import { videosVimeo } from "@/videos";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <main className=" w-screen h-dscreen bg-[#203133] z-40  ">
      <VideoSliderReactPlayer videos={videosVimeo} />
      <Toaster />
    </main>
  );
}

export const metadata = {
  title: "Greenlight Productions",
  description: "Greenlight Productions",
};
