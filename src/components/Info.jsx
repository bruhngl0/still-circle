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
        <h2 className="experience-title">The Third House</h2>

        <p className="experience-description">
          The Third House is designed to bring all things wellness into one
          space.
          <br />
          Guided sessions, rituals, and brands, all in one flow.
          <br />A curated space to move, feel, and discover. Wellness as you’ve
          never experienced it before.
        </p>
      </section>

      <section className="event-details">
        <h3>Event Details:</h3>
        <p></p>
        <div className="venue-details">
          <p>
            <strong>Date:</strong> 17th August, 2025
          </p>
          <p>
            <strong>Time:</strong> 8:00 PM to 4:30 PM
          </p>

          <p>
            <strong>Venue:</strong> Area 83, Bengaluru.
          </p>

          <p>
            <strong>Price:</strong> ₹3,500 per person
          </p>
        </div>
        <br /> <br />
        <p>What you can expect:</p>
        <div className="venue-details">
          <ul>
            <li>
              Access to all sessions at The Movement House, Yoga, Sculpt Workout
              and Sound Healing.
            </li>
            <li> Guided 5KM mountain walk through scenic trails.</li>
            <li>
              ccess to The Eat Good House: Smoothie bowls, matcha, and healthy
              bites available for purchase by Copper & Clove and Purpose.
            </li>
            <li>
              Access to The Recovery House: Explore recovery tools and tech,
              with select complimentary experiences.
            </li>

            <li>
              Access to The Hydration House: Stay refreshed with complimentary
              coconut water, electrolytes, and more!
            </li>
            <li>
              Access to The Play House: Journaling, pottery, bouquet making,
              perfume blending experiences and complimentary tote bag printing.
            </li>

            <li>
              Access to The Brand Marketplace, explore interactive booths and
              sample wellness products.
            </li>

            <li>
              A Goodie Bag filled with skincare, nutrition, and wellness
              essentials!
            </li>
            <li>
              All event essentials covered: Restrooms, shaded lounges, water
              stations, changing areas, and on-ground support.
            </li>
          </ul>
        </div>
        <a href="/third-house" style={{ textDecoration: "none" }}>
          <button className="info-btn">Join the Waitlist</button>
        </a>
      </section>
    </div>
  );
};

export default Info;
