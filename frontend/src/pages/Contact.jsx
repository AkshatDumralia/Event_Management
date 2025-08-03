import React from 'react';
import './styles/Contact.css';

function Contact() {
  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      <p className="description">Have a question or want to get your college event listed? Fill the form below!</p>

      <form className="contact-form">
        <input type="text" placeholder="College Name" required />
        <input type="text" placeholder="Event Name" required />
        <input type="email" placeholder="Official Email" required />
        <input type="tel" placeholder="Contact Number" required />
        <textarea placeholder="Message or Query..." rows="5" required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
