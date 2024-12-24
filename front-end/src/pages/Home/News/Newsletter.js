import React, { useState } from 'react';
import axios from 'axios';
import './Newsletter.css';

function Newsletter() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/newsletter', {
        fullname: name,
        email: email,
      });
      console.log('Subscriber added');
      setName('');
      setEmail('');
      // Reload the page to reflect changes
      window.location.reload(); // Simple way to refresh both components
    } catch (err) {
      console.error('Error adding subscriber:', err);
    }
  };

  return (
    <div data-aos="fade-right" className="newsletter-container">
      <div className="newsletter-container-body">
        <header>
          <h1>Subscribe to Our Newsletter</h1>
        </header>
        <p>Want to stay up to date with the latest stories, events, and articles on my Blog? Subscribe to my newsletter below!</p>
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <div className="inputs">
            <input
              type="text"
              placeholder="Enter your name"
              className="newsletter-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="newsletter-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="button-news">
            <button type="submit" className="newsletter-button">
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Newsletter;
