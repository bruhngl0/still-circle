import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/userDetail.css";
import { useNavigate } from "react-router-dom";

const Vangogh = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    yogaExperience: "",
    hasTriedSoundHealing: "",
    wellnessPreference: "",
    environmentPriority: "",
    receiveUpdates: "",
    socialProfileUrl: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      // Remove all non-digit characters
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
        "https://stillcircle.adityashrm500.workers.dev/api/v1/van-gogh",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            receiveUpdates: formData.receiveUpdates === "YES",
            hasTriedSoundHealing: formData.hasTriedSoundHealing === "YES",
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
              id="phone"
              name="phone"
              placeholder="Phone Number - eg (9419112345)"
              value={formData.phone}
              inputMode="numeric"
              pattern="[0-9]*"
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <select
              id="yogaExperience"
              name="yogaExperience"
              value={formData.yogaExperience}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled hidden>
                What is your current level of experience with yoga?
              </option>
              <option value="BEGINNER">Beginner</option>
              <option value="INTERMEDIATE">Intermediate</option>
              <option value="ADVANCED">Advanced</option>
            </select>
          </div>

          <div className="form-group">
            <select
              id="hasTriedSoundHealing"
              name="hasTriedSoundHealing"
              value={formData.hasTriedSoundHealing}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled hidden>
                Have you experienced sound healing before?
              </option>
              <option value="YES">Yes</option>
              <option value="NO">No</option>
            </select>
          </div>

          <div className="form-group">
            <select
              id="wellnessPreference"
              name="wellnessPreference"
              value={formData.wellnessPreference}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled hidden>
                What type of wellness experiences you prefer?
              </option>
              <option value="MOVEMENT_BASED">
                Movement-based (Yoga, Pilates, etc.)
              </option>
              <option value="MINDFULLNESS_BASED">
                Mindfulness-based (Meditation, Sound Healing, etc.)
              </option>
              <option value="SENSORY_ART_LED">
                Sensory/Art-led Experiences
              </option>
              <option value="MIX_OF_ALL">A mix of all</option>
            </select>
          </div>

          <div className="form-group">
            <select
              id="environmentPriority"
              name="environmentPriority"
              value={formData.environmentPriority}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled hidden>
                How important is environment for you?
              </option>
              <option value="EXTREMELY_IMPORTANT">Extremely important</option>
              <option value="SOMEWHAT_IMPORTANT">Somewhat important</option>
              <option value="NOT_VERY_IMPORTANT">Not very important</option>
            </select>
          </div>

          <div className="form-group">
            <select
              id="receiveUpdates"
              name="receiveUpdates"
              value={formData.receiveUpdates}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled hidden>
                Would you be open to receiving updates in future?
              </option>
              <option value="YES">Yes</option>
              <option value="NO">No</option>
            </select>
          </div>

          <div className="form-group">
            <input
              type="text"
              id="socialProfileUrl"
              name="socialProfileUrl"
              value={formData.socialProfileUrl}
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

export default Vangogh;
