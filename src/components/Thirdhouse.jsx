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
    yoga: "",
    scultWorkout: "",
    soundHealing: "",
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
            <p className="detail1-text1">Join the Waitlist.</p>
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
              id="yoga"
              name="yoga"
              value={formData.yoga}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled hidden>
                Yoga (Session 1: Choose preferred slot)
              </option>
              <option value="SLOT_11_00_TO_11_45">Slot 1 (11:00-11:45)</option>
              <option value="SLOT_15_00_TO_15_45">Slot 2 (3:00 - 3:45)</option>
            </select>
          </div>

          <div className="form-group">
            <select
              id="scultWorkout"
              name="scultWorkout"
              value={formData.scultWorkout}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled hidden>
                Sculpt Workout (Session 2: Choose preferred slot)
              </option>
              <option value="SLOT_12_00_T0_12_45">Slot 1 (12:00-12:45)</option>
              <option value="SLOT_14_00_TO_14_45">Slot 2 (2:00 - 2:45)</option>
            </select>
          </div>

          <div className="form-group">
            <select
              id="soundHealing"
              name="soundHealing"
              value={formData.soundHealing}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled hidden>
                Sound Healing (Session 3: Choose preferred slot)
              </option>
              <option value="SLOT_11_00_TO_11_45">Slot 1 (11:00-11:45)</option>
              <option value="SLOT_15_00_TO_15_45">Slot 2 (3:00 - 3:45)</option>
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
                Have you attended a wellness festival in the past?
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
                Would you like to join the mountain trail run?
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
