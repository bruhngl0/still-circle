import React, { useEffect } from "react";
import { gsap } from "gsap";
import "../styles/video.css";
import Info from "./Info";
import Socials from "./Socials";
import Box from "./Box";

const Video = () => {
  useEffect(() => {
    // Create a GSAP timeline to control the sequential animation of the text
    const tl = gsap.timeline();

    // GSAP animation for the overlay text
    tl.fromTo(
      ".overlay-text p span:nth-child(1)",
      { opacity: 0, y: "50%" },
      { opacity: 1, y: "0%", duration: 0.5, delay: 1 }, // First line
    )
      .fromTo(
        ".overlay-text p span:nth-child(2)",
        { opacity: 0, y: "50%" },
        { opacity: 1, y: "0%", duration: 0.5, delay: 0.5 }, // Second line, appears at 2 seconds
      )
      .fromTo(
        ".overlay-text p span:nth-child(3)",
        { opacity: 0, y: "50%" },
        { opacity: 1, y: "0%", duration: 0.5, delay: 0.5 }, // Third line, appears at 4 seconds
      );
    // Button animation after the 4th text line finishes
  }, []);

  return (
    <>
      <div className="vid-main">
        <video className="video-bg" playsInline loop autoPlay muted>
          <source src="stillCircle.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay Text */}

        <div className="overlay-text">
          <p>
            <span>A SPACE TO SLOW DOWN,</span>
            <span>RECONNECT & DISCOVER</span>
            <span>YOURSELF.</span>
          </p>
        </div>
        {/* Call to Action Button */}

        <Box />
        <div className="icon-main">
          <img
            src="icon.png"
            style={{
              width: "40px",
            }}
          />
        </div>
      </div>
      <div>
        <Info />
      </div>

      <div>
        <Socials />
        <div className="tq-cpright">
          <p>©2025</p>
          <p>stillcircle.com</p>
        </div>
      </div>
    </>
  );
};

export default Video;
