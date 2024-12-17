// ContactUs.js
import React from 'react';
import './Contact.css'
import Footer from '../../components/Footer/Footer';
export default function ContactUs() {
  return (
   <div className='contact'>
     <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" placeholder="Write your message" required></textarea>
        </div>
<div className='contact-button'>
  
<button type="submit" className="submit-button">Send Message</button>
   
  </div>   </form>
    </div>
    <Footer/>
   </div>
  );
}