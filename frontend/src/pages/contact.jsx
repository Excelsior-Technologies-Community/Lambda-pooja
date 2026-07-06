import { useState } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import "./contact.css";

import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
} from "react-icons/fi";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/contact",
        form
      );

      alert(res.data.message);

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    }
  };

  return (
    <>
      <div className="contact-container">

        {/* Header */}

        <div className="contact-header">
          <span>Contact Us</span>

          <h1>Get in touch with us</h1>

          <p>
            This is an example of a Moodle page resource. It can be used for
            static content pages. The Text editor allows the page to display
            many different kinds of content such as plain text, images, audio,
            video, embedded code or a combination of all these.
          </p>
        </div>

        {/* Contact Cards */}

        <div className="contact-grid">

          <div className="contact-card">
            <div className="icon-circle">
              <FiMapPin />
            </div>

            <h3>Our Address</h3>

            <p>221B Baker St, London</p>
          </div>

          <div className="contact-card">
            <div className="icon-circle">
              <FiPhone />
            </div>

            <h3>Contact</h3>

            <p>020 7224 3688</p>
          </div>

          <div className="contact-card">
            <div className="icon-circle">
              <FiMail />
            </div>

            <h3>Email</h3>

            <p>contact@lambda.com</p>
          </div>

          <div className="contact-card">
            <div className="icon-circle">
              <FiClock />
            </div>

            <h3>Hours of Operation</h3>

            <p>(8 AM - 7 PM, Monday - Friday)</p>
          </div>

        </div>

        {/* Map & Contact Form */}

        <div className="contact-form-section">

          {/* Google Map */}

          <div className="map">

            <iframe
              title="Google Map"
              src="https://maps.google.com/maps?q=221B%20Baker%20Street,%20London&t=&z=15&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
            ></iframe>

          </div>

          {/* Contact Form */}

          <div className="form-area">

            <h2>Reach Out To Us</h2>

            <p>
              Fill out the form below and we'll get back to you as soon as
              possible.
            </p>

            <form onSubmit={handleSubmit}>

              <label>Your Name *</label>

              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={form.name}
                onChange={handleChange}
                required
              />

              <label>Email Address *</label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                required
              />

              <label>Subject *</label>

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={form.subject}
                onChange={handleChange}
                required
              />

              <label>Message *</label>

              <textarea
                rows="7"
                name="message"
                placeholder="Write your message..."
                value={form.message}
                onChange={handleChange}
                required
              ></textarea>

              <button type="submit">
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default Contact;