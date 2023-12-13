"use client";
import { useEffect, useRef, useState } from "react";
import Reveal from "reveal.js";
import "reveal.js/dist/reveal.css";
import ReactPlayer from "react-player";

const VideoSlider = ({ videos }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const revealEl = useRef(null);
  const deckRef = useRef(null); // Create a ref to store the Reveal.js instance

  useEffect(() => {
    // Only initialize Reveal.js if the DOM element is present
    if (revealEl.current) {
      // Initialize Reveal.js and store the instance in the ref
      deckRef.current = new Reveal(revealEl.current, {
        controls: true,
        width: "100%",
        height: "100%",
        margin: 0,
        minScale: 1,
        maxScale: 1,
        hideAddressBar: true,
        transition: "slide",
      });

      // Start Reveal.js
      deckRef.current.initialize();

      // Set up event listeners
      deckRef.current.on("slidechanged", (event) => {
        setCurrentSlide(event.indexh);
        console.log("Slide changed to: ", event.indexh);
      });
    }

    // Cleanup function
    return () => {
      // Only call destroy if the Reveal.js instance is initialized
      // and if the DOM element still exists
      if (deckRef.current && revealEl.current) {
        try {
          deckRef.current.destroy();
        } catch (error) {
          console.error("Error destroying Reveal.js instance:", error);
        }
      }
    };
  }, []);

  return (
    <div className="reveal h-screen w-screen" ref={revealEl}>
      <div className="slides w-full h-full">
        {videos.map((video, index) => (
          <section key={index} className="player-wrapper">
            {currentSlide === index && (
              <ReactPlayer
                url={video}
                controls={false}
                playing={true}
                volume={0}
                muted={true}
                loop={true}
                width="100%"
                height="100%"
                className="react-player"
              />
            )}
          </section>
        ))}
      </div>
    </div>
  );
};

export default VideoSlider;
