"use client";
import { useEffect } from "react";
import Reveal from "reveal.js";
import "reveal.js/dist/reveal.css";
import ReactPlayer from "react-player";

const VideoSlider = ({ videos }) => {
  useEffect(() => {
    const deck = new Reveal({
      // Display presentation control arrows
      controls: true,

      // Help the presentation scale to fit the browser window
      width: "100%",
      height: "100%",
      margin: 0,
      minScale: 1,
      maxScale: 1,

      // Hides address bar on mobile devices
      hideAddressBar: true,

      // Transition style
      transition: "slide", // none/fade/slide/convex/concave/zoom

      // More options available, but these are good for full size backgrounds
    });

    deck.initialize();

    deck.on("slidechanged", (event) => {
      console.log("Slide changed to: ", event.indexh);
    });

    deck.on("make-it-pop", () => {
      console.log("✨");
    });

    return () => {
      deck.off("slidechanged");
      deck.off("make-it-pop");
    };
  }, []);

  return (
    <div className="reveal h-screen w-screen ">
      <div className="slides w-full h-full">
        {videos.map((video, index) => (
          <section key={video} className="player-wrapper">
            <ReactPlayer
              url={video}
              controls={false}
              autoPlay={true}
              playing={true}
              volume={0}
              muted={true}
              loop={true}
              width="100%"
              height="100%"
              className="react-player"
            />
          </section>
        ))}
      </div>
    </div>
  );
};

export default VideoSlider;
