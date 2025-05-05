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
        <h2 className="experience-title">Floating Sound Immersion</h2>
        <p className="experience-description">
          Let your body float. Let the sound guide your breath and mind. This
          practice blends water and vibration to ease tension, calm the nervous
          system, and bring you back to yourself. It’s not just a session, it’s
          a quiet reset, held in stillness.
        </p>
      </section>

      {/* Event Details Section */}
      <section className="event-details">
        <h3>Event Details</h3>
        <div className="venue-details">
          <p>
            <strong>Date:</strong> Sunday, 25th May 2025
          </p>
          <p>
            <strong>Time:</strong> 5:30 PM – 7:30 PM
          </p>

          <p>
            <strong>Venue:</strong> Spice Terrace, JW Marriott Bangalore.
          </p>

          <p>
            <strong>Instructor:</strong> Iti Jain
          </p>
          <p>
            <strong>Host:</strong> Anmol Bajaj
          </p>
          <p>
            <strong>Pricing:</strong> ₹4,999 per person
          </p>
        </div>
        <br /> <br />
        <ul>
          <strong style={{ fontWeight: "800" }}>Inclusions:</strong>
          <li>
            15-minute guided introduction to the practice and its benefits.
          </li>
          <li>45-minute floating sound healing session in the pool.</li>
          <li>A nourishing, chef-curated 5-course vegan meal.</li>
          <li>
            A mindful journey designed to restore, recharge, and reconnect.
          </li>
          <li>
            A complimentary athleisure outfit by CAVA.
          </li>
        </ul>

        <p>Note: If you'd like to experience the session as a couple, drop us a message on our instagram stating same!</p>
        <a href="/userDetail" style={{ textDecoration: "none" }}>
          <button className="info-btn">Join the Waitlist</button>
        </a>
      </section>
    </div>
  );
};

export default Info;
