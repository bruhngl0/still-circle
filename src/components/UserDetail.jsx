import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/userDetail.css";
import { useNavigate } from "react-router-dom";

const UserDetail = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    age: 0, // Default value set to null
    occupation: "",
    soundHealingExp: "",
    waterComfort: "",
    preferredSession: "",
    futureJourney: "",
    instagramHandle: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // If age field is being updated, convert the value to a number
    if (name === "age" && value !== "") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: Number(value), // Convert to number
      }));
    } else if (name === "age") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: null, // If value is empty, reset to null
      }));
    } else if (name === "phoneNumber") {
      const digitsOnly = value.replace(/\D/g, "");
      setFormData((prevData) => ({
        ...prevData,
        [name]: digitsOnly,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        "https://stillcircle.adityashrm500.workers.dev/api/v1/third-house-one",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message);
        navigate("/contact");
      } else {
        toast.error(data.message || "Failed to submit. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="user-details-container">
        <ToastContainer />
        <form onSubmit={handleSubmit} className="user-details-form">
          <div className="detail-logo-div">
            <img src="logo31.png" className="detail-logo" />
          </div>
          <div className="detail-text">
            <p className="detail1-text1">Join Waitlist.</p>
            <p className="detail2-text2">
              Please tell us a bit about yourself so we can review your request
              to join the waitlist.
            </p>
          </div>
          <div className="form-group">
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Full Name"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* <div className="form-group">
            <input
              type="number"
              id="age"
              name="age"
              placeholder="Age"
              value={formData.age || ""} // Display null as empty string
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <select
              id="occupation"
              name="occupation"
              value={formData.occupation}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled hidden>
                How would you describe yourself?
              </option>
              <option value="Entrepreneur">Entrepreneur</option>
              <option value="WorkingProfessional">Working Professional</option>
              <option value="Creative">Creative</option>
              <option value="WellnessPractitioner">
                Wellness Practitioner
              </option>
              <option value="Student">Student</option>
              <option value="Athlete">Athlete</option>
              <option value="Homemaker">Homemaker</option>
              <option value="Exploring">Exploring</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <select
              id="soundHealingExp"
              placeholder="Have you ever experienced sound healing before?"
              name="soundHealingExp"
              value={formData.soundHealingExp}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled hidden>
                Have you ever experienced sound healing before?
              </option>

              <option value="YesRegularly">Yes, Regularly</option>
              <option value="OnceOrTwice">Once or Twice</option>
              <option value="NotYetButCurious">Not Yet, But Curious</option>
              <option value="FirstTime">First Time</option>
            </select>
          </div>

          <div className="form-group">
            <select
              id="waterComfort"
              name="waterComfort"
              value={formData.waterComfort}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled hidden>
                Are you comfortable floating in water?
              </option>

              <option value="YesAbsolutely">Yes, Absolutely</option>
              <option value="LoveToTryWithSupport">
                Love to Try with Support
              </option>
              <option value="PreferGroundingSoundJourneys">
                Prefer Grounding Sound Journeys
              </option>
            </select>
          </div>

          <div className="form-group">
            <select
              id="preferredSession"
              name="preferredSession"
              placeholder="Preferred session time?"
              value={formData.preferredSession}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled hidden>
                Preferred session time?
              </option>
              <option value="Sunset">Sunset Session</option>
            </select>
          </div>

          <div className="form-group">
            <select
              id="futureJourney"
              name="futureJourney"
              value={formData.futureJourney}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled hidden>
                Want updates on future Still Circle experiences?
              </option>
              <option value="Yes">Yes</option>
              <option value="OnlyForThisSession">Only for This Session</option>
              <option value="NotAtTheMoment">Not at the Moment</option>
            </select>
          </div>

          <div className="form-group">
            <input
              type="text"
              id="instagramHandle"
              name="instagramHandle"
              placeholder="Instagram Handle"
              value={formData.instagramHandle}
              onChange={handleInputChange}
            />
          </div> */}
          <div className="user-btn">
            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? "Submitting..." : "SUBMIT"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserDetail;
