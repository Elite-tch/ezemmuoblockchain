import React from 'react';
import './video.css'; // Add this to link your custom styles
import { BsYoutube, BsInstagram, BsTiktok } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function VideoHome() {
  return (
   <div  className='videopage'>
 <div className="container">
      <div  data-aos="fade-in" className="text-section">
        <h1>I document lessons on Tech, Crypto / Blockchain, Coding / Development, Videography / Photography, Productivity & Growth.</h1>
        <h4>Join me for an adventure!</h4>
        <div data-aos="fade-up" className="social-icons">
          <Link href="#" target="_blank" aria-label="YouTube" rel="noopener noreferrer" className='icon'>
            <BsYoutube /> <span>Youtube </span>
          </Link>
          <Link href="#" target="_blank" aria-label="TikTok" rel="noopener noreferrer" className='icon'>
          < BsTiktok/><span>TikTok </span>
          </Link>
          <Link href="#" target="_blank" aria-label="Instagram" rel="noopener noreferrer" className='icon'>
            <BsInstagram /><span>Instagram </span>
          </Link>
        </div>
      </div>
      <div data-aos="fade-right" className="image-section">
        <img src="/images/kev4.png" alt="Placeholder" />
      </div>
    </div>


   </div>
  );
}

export default VideoHome;
