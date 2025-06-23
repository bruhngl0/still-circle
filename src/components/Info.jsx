import React, { useEffect } from "react";
import { gsap } from "gsap";
import "../styles/info.css";

const Info = () => {
  useEffect(() => {
    // GSAP animation for the title and text
    gsap.fromTo(
      ".experience-title",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" },
    );

    gsap.fromTo(
      ".experience-description",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, delay: 0.5, ease: "power3.out" },
    );

    gsap.fromTo(
      ".event-details",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, delay: 1, ease: "power3.out" },
    );

    gsap.fromTo(
      ".cta-button",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, delay: 1.5, ease: "power3.out" },
    );
  }, []);

  return (
    <div className="experience-page">
      {/* Floating Sound Immersion Section */}
      <section className="experience-section">
        <h2 className="experience-title">Sensory Circle </h2>

        <p className="experience-description">
          A quiet journey through the senses. <br />
          An experience designed to awaken what often goes unnoticed.
          <br />
          Guided by light, scent, sound, and movement, this is yoga that goes
          beyond the physical.
          <br />
          Held in the peaceful surrounds of Sabha, Sensory Circle invites you to
          tune in, feel more, and move with quiet intention.
          <br />
          Leave with a softer body, a quieter mind, and a sense that something
          has gently shifted.
        </p>
      </section>

      {/* Event Details Section */}
      <section className="event-details">
        <h3>Event Details</h3>
        <div className="venue-details">
          <p>
            <strong>Date:</strong> Sunday, 29th June 2025
          </p>
          <p>
            <strong>Time: -</strong> 6:00 PM to 8:30 PM
          </p>

          <p>
            <strong>Venue:</strong> Sabha, Bangalore.
          </p>
          <p>
            <strong>Price:</strong> ₹3,500 per person
          </p>
        </div>
        <br /> <br />
        <p>Whats included:</p>
        <div className="venue-details">
          <ul>
            <li>A 60-minute guided candlelit yoga session.</li>
            <li>Live sitar performance accompanying the flow.</li>
            <li>A wholesome meal post-session.</li>
            <li>Goodie bags from our brand partners.</li>
            <li>
              {" "}
              An experience that activates all five senses, from aromatherapy to
              soundscapes.{" "}
            </li>
          </ul>
        </div>
        <a href="/yoga-event" style={{ textDecoration: "none" }}>
          <button className="info-btn">Join the Waitlist</button>
        </a>
      </section>
    </div>
  );
};

export default Info;
