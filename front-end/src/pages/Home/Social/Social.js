import React from 'react';
import './Social.css'; // Add this to link your custom styles
import {  BsInstagram, BsTwitterX, BsLinkedin,BsTelegram, BsFacebook } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function SocialHome() {
  return (
   <div data-aos="fade-up" className='videopages'>
 <div className="containerss">
 
      <div  className="text-sections">
        <h4>Let's Talk </h4>
        <h5>I am Open for Collaborations. Connect with me on Socials below and Send me a mail at;</h5>
        <h1>Kevinchibuoyim@gmail.com</h1>
        <div className="social-iconss">
        <Link href="#" target="_blank" aria-label="TikTok" rel="noopener noreferrer" className='icons'>
          <BsTwitterX />
          </Link>
          <Link href="#" target="_blank" aria-label="TikTok" rel="noopener noreferrer" className='icons'>
          <BsLinkedin />
          </Link>
          <Link href="#" target="_blank" aria-label="YouTube" rel="noopener noreferrer" className='icons'>
            <BsFacebook /> 
          </Link>
          <Link href="#" target="_blank" aria-label="TikTok" rel="noopener noreferrer" className='icons'>
          <BsTelegram />
          </Link>
          <Link href="#" target="_blank" aria-label="Instagram" rel="noopener noreferrer" className='icons'>
            <BsInstagram />
          </Link>
        </div>
      </div>
      <div className="image-sections">
        <img src="/images/kevin1.png" alt="Placeholder" />
      </div>
    </div>


   </div>
  );
}

export default SocialHome;
