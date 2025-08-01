import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/userDetail.css";
import { useNavigate } from "react-router-dom";

const ThirdHouse = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    coreSession: "",
    coreSessionSlot: "",
    hasPastRetreat: "",
    lookingForwardTo: "",
    wantsFutureUpdates: "",
    heardFrom: "",
    heardFromOther: "",
    joinMountainWalk: "",
    instagram: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "phoneNumber") {
      // Remove all non-digit characters
      const digitsOnly = value.replace(/\D/g, "");
      setFormData((prevData) => ({
        ...prevData,
        [name]: digitsOnly,
      }));
    } else if (name === "heardFrom" && value !== "OTHER") {
      // Clear heardFromOther if heardFrom is not "OTHER"
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
        heardFromOther: "",
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
        "https://stillcircle.adityashrm500.workers.dev/api/v1/third-house",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            hasPastRetreat: formData.hasPastRetreat === "YES",
            wantsFutureUpdates: formData.wantsFutureUpdates === "YES",
            joinMountainWalk: formData.joinMountainWalk === "YES",
          }),
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
      toast.error("Failed to submit. Please try again.");
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
              placeholder="Phone Number - eg (9419112345)"
              value={formData.phoneNumber}
              inputMode="numeric"
              pattern="[0-9]*"
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <select
              id="coreSession"
              name="coreSession"
              value={formData.coreSession}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled hidden>
                Select your preferred core session
              </option>
              <option value="YOGA">Yoga</option>
              <option value="SCULPT_WORKOUT">Sculpt Workout</option>
              <option value="SOUND_HEALING">Sound Healing</option>
            </select>
          </div>

          <div className="form-group">
            <select
              id="coreSessionSlot"
              name="coreSessionSlot"
              value={formData.coreSessionSlot}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled hidden>
                Select your preferred time slot
              </option>
              <option value="SLOT_11_00_TO_11_45">
                11:00 AM - 11:45 AM (yoga/sound healing)
              </option>
              <option value="SLOT_12_00_TO_12_45">
                12:00 PM - 12:45 PM (sculpt workout)
              </option>
              <option value="SLOT_14_00_TO_14_45">
                2:00 PM - 2:45 PM (sculpt workout)
              </option>
              <option value="SLOT_15_00_TO_15_45">
                3:00 PM - 3:45 PM (yoga/sound healing)
              </option>
            </select>
          </div>

          <div className="form-group">
            <select
              id="hasPastRetreat"
              name="hasPastRetreat"
              value={formData.hasPastRetreat}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled hidden>
                Have you attended a past retreat with us?
              </option>
              <option value="YES">Yes</option>
              <option value="NO">No</option>
            </select>
          </div>

          <div className="form-group">
            <select
              id="lookingForwardTo"
              name="lookingForwardTo"
              value={formData.lookingForwardTo}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled hidden>
                What are you most looking forward to?
              </option>
              <option value="MOVEMENT_FITNESS">Movement & Fitness</option>
              <option value="RECOVERY_SKINCARE">Recovery & Skincare</option>
              <option value="COMMUNITY_CONNECTIONS">
                Community Connections
              </option>
              <option value="NATURE_MINDFULNESS">Nature & Mindfulness</option>
            </select>
          </div>

          <div className="form-group">
            <select
              id="heardFrom"
              name="heardFrom"
              value={formData.heardFrom}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled hidden>
                How did you hear about us?
              </option>
              <option value="INSTAGRAM">Instagram</option>
              <option value="WHATSAPP">WhatsApp</option>
              <option value="FRIEND_REFERRAL">Friend Referral</option>
              <option value="BRAND_PARTNER">Brand Partner</option>
              <option value="OTHER">Other</option>
            </select>
          </div>

          {formData.heardFrom === "OTHER" && (
            <div className="form-group">
              <input
                type="text"
                id="heardFromOther"
                name="heardFromOther"
                value={formData.heardFromOther}
                onChange={handleInputChange}
                placeholder="Please specify how you heard about us"
                required
              />
            </div>
          )}

          <div className="form-group">
            <select
              id="joinMountainWalk"
              name="joinMountainWalk"
              value={formData.joinMountainWalk}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled hidden>
                Would you like to join the mountain walk?
              </option>
              <option value="YES">Yes</option>
              <option value="NO">No</option>
            </select>
          </div>

          <div className="form-group">
            <select
              id="wantsFutureUpdates"
              name="wantsFutureUpdates"
              value={formData.wantsFutureUpdates}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled hidden>
                Want updates on future Still Circle experiences?
              </option>
              <option value="YES">Yes</option>
              <option value="NO">No</option>
            </select>
          </div>

          <div className="form-group">
            <input
              type="text"
              id="instagram"
              name="instagram"
              value={formData.instagram}
              onChange={handleInputChange}
              placeholder="Instagram handle/LinkedIn"
              required
            />
          </div>

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

export default ThirdHouse;
