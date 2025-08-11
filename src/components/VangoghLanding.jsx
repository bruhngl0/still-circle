const VangoghLanding = () => {
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
            src="vg.mp4"
          />
        </div>
      </div>
      <div className="int-div">
        <section className="event-details">
          <h3>Event Details:</h3>
          <p>
            Stretch into stillness. Soak in the art. An immersive yoga and sound
            healing session set inside the Van Gogh Experience, where every
            breath moves through colour, light, and timeless art. A setting so
            surreal, it grounds you.
          </p>
          <div className="venue-details">
            <p>
              <strong>Date:</strong> 15th August, 2025
            </p>
            <p>
              <strong>Time:</strong> 10:00 AM to 12:00 PM
            </p>

            <p>
              <strong>Venue:</strong>
              Bhartiya Mall Of Bengaluru
            </p>

            <p>
              <strong>Price:</strong> ₹2,999 + GST
            </p>
          </div>
          <br /> <br />
          <p>What you can expect:</p>
          <div className="venue-details">
            <ul>
              <li>1-hour immersive yoga + sound healing experience.</li>
              <li>
                Exclusive access to the Van Gogh Experience before public hours.
              </li>
              <li>
                Nourishing food & beverages curated to ground and refresh.
              </li>
              <li>Yoga mats provided on-site.</li>

              <li>Goodie bag with wellness-infused takeaways.</li>
            </ul>
          </div>
          <a href="/vangogh1" style={{ textDecoration: "none" }}>
            <button className="info-btn">Join the Waitlist</button>
          </a>
        </section>
      </div>
    </div>
  );
};

export default VangoghLanding;
