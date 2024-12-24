import React from 'react';
import './AboutUs.css';
import CommPage from '../../components/Communities/Comm';
import ImageSlider from '../../components/Brands/Brands';
import { Link } from 'react-router-dom';
import Newsletter from '../Home/News/Newsletter';
import Footer from '../../components/Footer/Footer';
import GalleryPage from '../../components/GalleryPage/GalleryPage';
export default function AboutUs() {
  return (
   <div>
     <div className="about-container">
      <h1 className="about-title">ABOUT ME</h1>
      <div className="about-content">
        <div  className="about-text-content">
          <p data-aos="fade-right">
          Popularly known as “Ezemmuo Blockchain”, Okoye Kevin Chibuoyim is a seasoned entrepreneur within the the Tech landscape - A Strategic and results-oriented Web3 Community Growth Lead, Business Developer, DevRel and Tech Content Creator with a proven track record of cultivating vibrant communities and a fervent advocate for the transformative power of technology. Possessing a deep passion for technology since getting into the Blockchain/Crypto Ecosystem in 2018, he has left an indelible impact on the lives of many.
            </p>
          <p data-aos="fade-in">
          In addition to his role as an entrepreneur and educator, he is actively engaged as a Public speaker and Tech influencer. He regularly shares his insights and expertise with thousands of followers on various social media platforms, inspiring them to embrace the power of technology and to continually strive for excellence in their respective fields. He has extensive experience speaking at Industry events and conferences, and has also organized and anchored major IRL Blockchain Conferences that pulled 3000+ attendees and hundreds of online participants.
            </p>
            <p data-aos="fade-right">
            He Founded GIDA - Ginakev Digital Academy; A Cryptocurrency Education academy that focuses on proper Cryptocurrency education, awareness and enlightenment. He is equally the Cofounder of BlockchainUNN - Blockchain University Of Nigeria; a blockchain campus club at the University of Nigeria Nsukka aimed at promoting blockchain adoption and education within the university environment, and actively Training People to become Web3/Blockchain Devs.
            </p>


              </div>
      </div>
      <div className="">
  <div style={{ 
    position: 'relative', 
    paddingBottom: '56.25%', 
    height: '0', 
    overflow: 'hidden',
    width: '90%', 
    margin: '40px auto'
  }}>
    <iframe
      src="https://www.youtube.com/embed/T7pUh8XlGgg"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
      }}
      title="YouTube video"
    ></iframe>
  </div>
</div>
<CommPage />
<ImageSlider />

<div className='my-blog'>
<h1>
    MY BLOGS
</h1>

<p id='blogp'>
I have had various opportunities to build up experience overtime in the industry. Welcome to my blog. Here’s where I share my thoughts and experience.
I document lessons on Tech, Crypto, Blockchain, Coding/Development, Productivity & Growth.
</p>

<Link id='readBlog' to="/blog">
Visit Blog
</Link>

</div>

    </div>
    <Newsletter/>
<GalleryPage />
<Footer/>
   </div>
  );
}