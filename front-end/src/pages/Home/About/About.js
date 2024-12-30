import React from 'react';
import './About.css';
import {Link} from 'react-router-dom';
import { BsArrowUpRight } from 'react-icons/bs';

function AboutMe() {
  return (
    <div className="about-me-container">
      <h1 className="about-me-title">ABOUT ME</h1>
      <div className="about-me-content">
        <div className="about-me-image-container">
          <img data-aos="fade-right"
            src="/images/kevin1.png"
            alt="Okoye Kevin Chibuoyim"
            className="about-me-image"
          />
        </div>
        <div data-aos="fade-right" className="about-me-text-content">
          <p>
            Popularly known as "Ezemmuo Blockchain", Okoye Kevin Chibuoyim is a seasoned entrepreneur within the Tech landscape - A Strategic and results-oriented Web3 Community Growth Lead, Business Developer, DevRel and Tech Content Creator with a proven track record of cultivating vibrant communities and a fervent advocate for the transformative power of technology. Possessing a deep passion for technology since getting into the Blockchain/Crypto Ecosystem in 2018, he has left an indelible impact on the lives of many.
          </p>
          <p>
            In addition to his role as an entrepreneur and educator, he is actively engaged as a Public speaker and Tech influencer. He regularly shares his insights and expertise with thousands of followers on various social media platforms, inspiring them to...
          </p>
          <Link to="/about" className="about-me-read-more">Read More <BsArrowUpRight/></Link>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
