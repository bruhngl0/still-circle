import React, { useEffect } from "react";
import { gsap } from "gsap";
import "../styles/video.css";

const Video = () => {
  useEffect(() => {
    // Create a GSAP timeline to control the sequential animation of the text
    const tl = gsap.timeline({ repeatDelay: 1 });

    // GSAP animation for the overlay text
    tl.fromTo(
      ".overlay-text p span:nth-child(1)",
      { opacity: 0, y: "50%" },
      { opacity: 1, y: "0%", duration: 1, delay: 0 }, // First line, appears at 2 seconds
    )
      .fromTo(
        ".overlay-text p span:nth-child(2)",
        { opacity: 0, y: "50%" },
        { opacity: 1, y: "0%", duration: 1, delay: 2 }, // Second line, appears at 4 seconds
        "-=0.5", // Makes the second line animation overlap the first
      )
      .fromTo(
        ".overlay-text p span:nth-child(3)",
        { opacity: 0, y: "50%" },
        { opacity: 1, y: "0%", duration: 1, delay: 2 }, // Third line, appears at 6 seconds
        "-=0.5", // Makes the third line animation overlap the second
      )
      .fromTo(
        ".overlay-text p span:nth-child(4)",
        { opacity: 0, y: "50%" },
        { opacity: 1, y: "0%", duration: 1, delay: 2 }, // Fourth line, appears at 8 seconds
        "-=0.5", // Makes the fourth line animation overlap the third
      )
      .fromTo(
        ".overlay-text p span:nth-child(5)",
        { opacity: 0, y: "50%" },
        { opacity: 1, y: "0%", duration: 1, delay: 2 }, // Fourth line, appears at 8 seconds
        "-=0.5", // Makes the fourth line animation overlap the third
      );
  }, []);

  return (
    <div className="vid-main">
      <video className="video-bg" playsInline loop autoPlay muted>
        <source src="stillCircle.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Overlay Text */}{" "}
      <div className="overlay-text">
        <p>
          <span>THE STILL CIRCLE IS A PREMIUM WELLNESS</span>
          <span>PLATFORM THAT CREATES DEEPLY IMMERSIVE</span>
          <span>EXPERIENCES DESIGNED TO HELP PEOPLE</span>
          <span>SLOW DOWN, RECONNECT WITH THEMSELVES,</span>
          <span>AND, FIND STILLNESS IN FAST MOVING WORLD</span>
        </p>
      </div>
    </div>
  );
};

export default Video;
