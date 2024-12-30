import React from 'react';
import './Home.css';
import { NavLink } from 'react-router-dom';
import { FaBitcoin, FaUsers, FaVideo, FaMicrophone, FaCode } from 'react-icons/fa'
import { FaPeopleGroup } from 'react-icons/fa6'
import TopRatedArticles from '../TopRatedArticles/TopRated';
import AboutMe from './About/About';
import VideoHome from './VideoHome/video';
import SocialHome from './Social/Social';
import Newsletter from './News/Newsletter';
import ImageSlider from '../../components/Brands/Brands';
import Footer from '../../components/Footer/Footer';
const Home = () => {
  return (
    <div className='home'>

     
    <section className="hero">
    <div class="hero-content">
        <h4>HI I AM,</h4>
        <h1>okoye kevin chibuoyim</h1>
        <h3>(Ezemmuo Blockchain)</h3>
        <p>A Tech Entrepreneur, Web3 Community Growth Lead/Manager, Business Developer, Blockchain Dev and Content Creation Expert</p>
        <NavLink to='/about'  className='talk'>About me 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="arrow">
                <path fillRule="evenodd" d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z" clipRule="evenodd" />
            </svg>
        </NavLink>
    </div>
    <div className="hero-image">
        <img src="/img/kevin1.png" alt="Hero" />
    </div>
</section>
    {/* history */}

<div 
      data-aos="fade-in"
      className="history"
    >
    {/* <h1 className="lg:text-4xl text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
        My Blockchain Journey & Achievements
      </h1> */}
<img src="/img/code3.png" alt="" className='bg' />
     <div className='history-size'>
     <div className=" history-text">
        {/* First card */}
        <div
          data-aos="fade-right"
          data-aos-delay="100"
          className="history-shadow "
        >
          <span>
            <FaBitcoin />
          </span>
          <p>
            Joined the Blockchain/Crypto Ecosystem in 2018 and I have worked
            with a lot of Top Crypto Projects, Blockchains & Exchanges;
            Successfully led and nurtured various online communities, fostering
            meaningful interactions, Partnerships, Increased revenue and driving
            user engagement.
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="history-shadow "
        >
          <span>
            <FaUsers />
          </span>
          <p>
            I have successfully trained over 3000+ individuals from Nigeria
            /Africa and exposed them to the world of Web3, Cryptocurrencies and
            Blockchain via free/paid courses across my Communities and Events;
            With many going on to becoming Professionals in the Space.
          </p>
        </div>

        <div
          data-aos="fade-down"
          data-aos-delay="300"
          className=" history-shadow"
        >
          <span>
            <FaVideo />
          </span>
          <p>
            I actively create Tech related Video Contents, informative articles,
            and educational series, across various Social Platforms on Crypto,
            Blockchain, and Tech generally, for various Audiences and assist
            Brands achieve their Marketing Goals. I create || I shoot || I
            write.
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="history-shadow "
        >
          <span>
            <FaPeopleGroup />
          </span>
          <p>
            With excellent communication skills, building and managing
            Blockchain Communities is my key strength. I have equally
            successfully managed Ambassador programs and other community focused
            initiatives, resulting in increased engagement, brand loyalty, and
            advocacy.
          </p>
        </div>

        <div
          data-aos="fade-down"
          data-aos-delay="500"
          className=" history-shadow"
        >
          <span>
            <FaMicrophone />
          </span>
          <p>
            I have extensive experience speaking as both Keynote and Panelist at
            Industry events and conferences. I have also organized and anchored
            major IRL Blockchain Conferences that pulled 3000+ attendees and
            hundreds of online participants.
          </p>
        </div>

        <div
          data-aos="fade-right"
          data-aos-delay="600"
          className="history-shadow "
        >
          <span>
            <FaCode />
          </span>
          <p >
            As a Web3/Blockchain Developer, I have keen knowledge of Solidity
            and Smart Contracts development on EVM compatible chains, and I am
            actively committed to Web3 Developer Relations (DevRel) with a
            proven track record of fostering strong developer communities.
          </p>
        </div>
      </div>



     </div>
    </div>
    <ImageSlider />
<AboutMe/>

<VideoHome />
<TopRatedArticles />
<Newsletter />
<SocialHome/>
<Footer />

        </div>








  );
};

export default Home; 