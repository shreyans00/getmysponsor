import React from "react";
import "../CSS/contact.css";

function ContactForm() {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="contact">Contact Number</label>
          <input type="tel" id="contact" name="contact" required />
        </div>
        <div className="form-group">
          <label htmlFor="college">College Name</label>
          <input type="text" id="college" name="college" required />
        </div>
        <div className="form-group">
          <label htmlFor="festName">Festival Name</label>
          <input type="text" id="festName" name="festName" required />
        </div>
        <div className="form-group">
          <label htmlFor="festDetails">Festival Details</label>
          <textarea id="festDetails" name="festDetails" required></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="socialMedia1">Social Media 1</label>
          <input type="url" id="socialMedia1" name="socialMedia1" required />
        </div>
        <div className="form-group">
          <label htmlFor="socialMedia2">Social Media 2</label>
          <input type="url" id="socialMedia2" name="socialMedia2" required />
        </div>
        <div className="form-group">
          <label htmlFor="socialMedia3">Social Media 3</label>
          <input type="url" id="socialMedia3" name="socialMedia3" required />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div className="map-container">
        <iframe
          title="Map"
          width="100%"
          height="300"
          style={{ border: 0 }}
          src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29526.373958937445!2d87.30839850000004!3d22.323525500000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1693824135687!5m2!1sen!2sin`}
          referrerpolicy="no-referrer-when-downgrade"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default ContactForm;
