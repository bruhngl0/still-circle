import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/userDetail.css";

const UserDetail = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    age: "",
    occupation: "",
    soundHealingExp: "",
    waterComfort: "",
    preferredSession: "",
    futureJourney: "",
    instagramHandle: "",
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        "http://stillcircle.adityashrm500.workers.dev/api/v1/userDetails",
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
      } else {
        toast.error(data.message || "Failed to submit. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="user-details-container">
      <ToastContainer />
      <h2>User Details</h2>
      <form onSubmit={handleSubmit} className="user-details-form">
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="occupation">Occupation</label>
          <select
            id="occupation"
            name="occupation"
            value={formData.occupation}
            onChange={handleInputChange}
            required
          >
            <option value="Entrepreneur">Entrepreneur</option>
            <option value="WorkingProfessional">Working Professional</option>
            <option value="Creative">Creative</option>
            <option value="WellnessPractitioner">Wellness Practitioner</option>
            <option value="Student">Student</option>
            <option value="Athlete">Athlete</option>
            <option value="Homemaker">Homemaker</option>
            <option value="Exploring">Exploring</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="soundHealingExp">Sound Healing Experience</label>
          <select
            id="soundHealingExp"
            name="soundHealingExp"
            value={formData.soundHealingExp}
            onChange={handleInputChange}
            required
          >
            <option value="YesRegularly">Yes, Regularly</option>
            <option value="OnceOrTwice">Once or Twice</option>
            <option value="NotYetButCurious">Not Yet, But Curious</option>
            <option value="FirstTime">First Time</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="waterComfort">Water Comfort</label>
          <select
            id="waterComfort"
            name="waterComfort"
            value={formData.waterComfort}
            onChange={handleInputChange}
            required
          >
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
          <label htmlFor="preferredSession">Preferred Session</label>
          <select
            id="preferredSession"
            name="preferredSession"
            value={formData.preferredSession}
            onChange={handleInputChange}
            required
          >
            <option value="Sunrise">Sunrise</option>
            <option value="Sunset">Sunset</option>
            <option value="Night">Night</option>
            <option value="Flexible">Flexible</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="futureJourney">Future Journey</label>
          <select
            id="futureJourney"
            name="futureJourney"
            value={formData.futureJourney}
            onChange={handleInputChange}
            required
          >
            <option value="Yes">Yes</option>
            <option value="OnlyForThisSession">Only for This Session</option>
            <option value="NotAtTheMoment">Not at the Moment</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="instagramHandle">Instagram Handle</label>
          <input
            type="text"
            id="instagramHandle"
            name="instagramHandle"
            value={formData.instagramHandle}
            onChange={handleInputChange}
          />
        </div>

        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default UserDetail;
