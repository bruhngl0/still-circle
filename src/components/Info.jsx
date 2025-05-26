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
        <h2 className="experience-title">Pop & Pour: Pop Pilates</h2>
        <p className="experience-description">
          Start your Sunday on a high note. This energising Pop Pilates session
          blends rhythmic movement and music to awaken your body and elevate
          your mood. After the workout, ease into calm with unlimited
          matcha-based drinks, all set in the lush surrounds of Bastian Garden
          City. A feel-good morning that flows from dynamic energy to quiet
          indulgence.
        </p>
      </section>

      {/* Event Details Section */}
      <section className="event-details">
        <h3>Event Details</h3>
        <div className="venue-details">
          <p>
            <strong>Date:</strong> Sunday, 8th June 2025
          </p>
          <p>
            <strong>Time: -</strong> 8:00 AM onwards
          </p>

          <p>
            <strong>Venue:</strong> Bastian, Garden City, Bangalore.
          </p>

          <p>
            <strong>Instructor:</strong> Tanvi Vijay
          </p>
          <p>
            <strong>Pricing:</strong> ₹2,499 per person
          </p>
        </div>
        <br /> <br />
        <ul>
          <strong style={{ fontWeight: "800" }}>Inclusions:</strong>
          <li>45-minute Pop Pilates session led by a certified instructor</li>
          <li>Unlimited matcha-based beverages</li>
          <li>Curated unwind experience post-workout</li>
          <li>
            A thoughtfully designed morning to recharge, connect, and glow
          </li>
        </ul>
        <a href="/userDetail2" style={{ textDecoration: "none" }}>
          <button className="info-btn">Join the Waitlist</button>
        </a>
      </section>
    </div>
  );
};

export default Info;
