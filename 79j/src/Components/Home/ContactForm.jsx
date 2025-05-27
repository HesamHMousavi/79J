import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="contact-container">
      <h2 className="contact-title">Get in Touch</h2>
      <form
        className="contact-form"
        action="https://formsubmit.co/79jewellers@gmail.com" // Replace with your actual email
        method="POST"
      >
        {/* Hidden Input to Disable Captcha */}
        <input type="hidden" name="_captcha" value="false" />

        {/* Hidden Input for Email Subject */}
        <input
          type="hidden"
          name="_subject"
          value="New Contact Form Submission"
        />

        {/* Hidden Input for Auto-Response (Fix) */}
        <input type="hidden" name="_replyto" value={formData.email} />
        <input
          type="hidden"
          name="_autoresponse"
          value="Thank you for contacting us! We will get back to you soon."
        />

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
          className="text-area"
        ></textarea>
        <button type="submit" className="submit-btn">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
