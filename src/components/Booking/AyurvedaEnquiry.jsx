import React, { useState } from "react";
import "./AyurvedaEnquiry.css";
import { FaLeaf, FaUserMd, FaCommentDots } from "react-icons/fa";

const AyurvedaEnquiry = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    clinic: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="ae-section">
      <div className="ae-container">
        {/* LEFT */}
        <div className="ae-left">
          <span className="ae-tag">Benefit</span>

          <h1 className="ae-title">Nature’s secret for your health.</h1>

          <p className="ae-desc">
            Experience the power of authentic Ayurvedic medicines crafted with
            natural herbs for complete wellness and balance.
          </p>

          <div className="ae-feature">
            <div className="ae-icon-box">
              <FaLeaf />
            </div>
            <div>
              <h4>Real organic herbal</h4>
              <p>Pure and natural ingredients with no chemicals.</p>
            </div>
          </div>

          <div className="ae-feature">
            <div className="ae-icon-box">
              <FaUserMd />
            </div>
            <div>
              <h4>Professional Therapist</h4>
              <p>Guidance from certified Ayurveda practitioners.</p>
            </div>
          </div>

          <div className="ae-feature">
            <div className="ae-icon-box">
              <FaCommentDots />
            </div>
            <div>
              <h4>Free Consultations</h4>
              <p>Get personalized suggestions before purchase.</p>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="ae-form-box">
          <span className="ae-form-tag">Enquiry Online</span>
          <h3 className="ae-form-title">
            Fill out this form for consultation.
          </h3>

          <form>
            <div className="ae-grid">
              <input name="name" placeholder="Name" onChange={handleChange} />
              <input name="email" placeholder="Email" onChange={handleChange} />
            </div>

            <div className="ae-grid">
              <input name="phone" placeholder="Phone" onChange={handleChange} />
              <input
                name="location"
                placeholder="Location"
                onChange={handleChange}
              />
            </div>

            <input
              className="ae-input-full"
              name="clinic"
              placeholder="Clinic / Pharmacy Name"
              onChange={handleChange}
            />

            <textarea
              className="ae-textarea"
              name="message"
              placeholder="Message"
              onChange={handleChange}
            ></textarea>

            <button className="ae-btn">Submit Enquiry</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AyurvedaEnquiry;
