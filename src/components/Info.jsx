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
        <h2 className="experience-title">Floating Sound Immersion </h2>

        <p className="experience-description">
          Let your body float. Let the sound guide your breath and mind.
          <br />
          This practice blends water and vibration to ease tension, calm the
          nervous system, and bring you back to yourself.
          <br />
          It’s not just a session, it’s a quiet reset, held in stillness.
        </p>
      </section>

      {/* Event Details Section */}
      <section className="event-details">
        <h3>Event Details</h3>
        <div className="venue-details">
          <p>
            <strong>Date:</strong> Sunday, 20th July 2025
          </p>
          <p>
            <strong>Time: -</strong> 5:30 PM to 7:00 PM
          </p>

          <p>
            <strong>Venue:</strong> Conrad, Bengaluru.
          </p>
          <p>
            <strong>Instructor:</strong> Iti Jain
          </p>

          <p>
            <strong>Price:</strong> ₹4,999
          </p>
        </div>
        <br /> <br />
        <p>Whats included:</p>
        <div className="venue-details">
          <ul>
            <li>
              A 15-minute guided introduction to the practice, its benefits, and
              a short breathwork session.
            </li>
            <li>45-minute floating sound healing session in the pool.</li>
            <li>
              A thoughtful high tea with a spread of fresh, vegetarian bites.
            </li>
            <li>
              A mindful journey designed to restore, recharge, and reconnect.
            </li>

            <li>Goodie bags from our incredible brand partners.</li>
            <li>
              End your experience with intentional journalling, a quiet moment
              to reflect, write and reset.
            </li>
          </ul>
        </div>
        <a href="/userDetail" style={{ textDecoration: "none" }}>
          <button className="info-btn">Join the Waitlist</button>
        </a>
      </section>
    </div>
  );
};

export default Info;
