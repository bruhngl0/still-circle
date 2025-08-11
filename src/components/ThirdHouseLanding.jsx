const ThirdHouseLanding = () => {
  return (
    <div className="int-main">
      <div className="vid-main">
        {/* Overlay Text */}

        <div className="video-bg">
          <video
            className="vv"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            src="pp.mp4"
          />
        </div>
      </div>
      <div className="int-div">
        <section className="event-details">
          <h3>Event Details:</h3>
          <p></p>
          <div className="venue-details">
            <p>
              <strong>Date:</strong> 17th August, 2025
            </p>
            <p>
              <strong>Time:</strong> 8:00 AM to 4:30 PM
            </p>

            <p>
              <strong>Venue:</strong> Area 83, Bengaluru.
            </p>

            <p>
              <strong>Price:</strong> ₹3,500 + GST
            </p>
          </div>
          <br /> <br />
          <p>What you can expect:</p>
          <div className="venue-details">
            <ul>
              <li>
                Access to all sessions at The Movement House: Yoga, Sculpt
                Workout, Mountain Trail Run and Sound Healing.
              </li>
              <li>Guided 5KM mountain walk through scenic trails.</li>
              <li>
                Access to The Recovery House: Complimentary experiences by
                Wellness & Co. and ARC.
              </li>
              <li>
                Access to The Hydration House: Complimentary coconut water by
                Mococos and electrolytes by Aquatine.
              </li>

              <li>
                Access to The Play House: Journaling, pottery, bouquet making,
                perfume blending experiences, and complimentary tote bag
                printing.
              </li>
              <li>
                Access to The Eat Good House: Smoothie bowls, matcha, and
                healthy bites available for purchase by Copper & Clove and
                Purpose.
              </li>

              <li>
                Access to The Brand Marketplace: Explore interactive booths and
                sample wellness products.
              </li>

              <li>
                A goodie bag filled with skincare, nutrition, and wellness
                essentials.
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
    </div>
  );
};

export default ThirdHouseLanding;
