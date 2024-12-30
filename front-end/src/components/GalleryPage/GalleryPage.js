import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Loading from '../Loading/Loading';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './GalleryPage.css'
import { Autoplay } from 'swiper/modules';

const GalleryPage = () => {
  const baseurl = 'https://ezemmuoblockchain-5.onrender.com';
  const [data, setData] = useState([]);
  const [selectedCategory] = useState('');
  const [currentPage] = useState(1);
   const blogsPerPage = 12;
 
  useEffect(() => {
    axios.get(`${baseurl}/gallery`)
      .then(response => {
        setData(response.data.gallery);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const filteredBlogs = selectedCategory ? data.filter(item => item.category === selectedCategory) : data;

  const currentBlogs = filteredBlogs
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // Sort by creation date, newest first
    .slice(0, 10); // Get only the first 10 items

  return (
    <div className="container-display">
       <h1 className="about-title">GALLERY AND EXPERIENCE</h1>
      <div className='blogs-width'>
        {currentBlogs.length > 0 ? (
          <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          speed={3000} // Adjust the speed for a smoother sliding effect
          loop={true} // Ensures the slides loop infinitely
          allowTouchMove={false} // Disables manual swiping for uninterrupted movement
          breakpoints={{
            768: { slidesPerView: 2 }, // Two slides on desktop (768px and above)
            0: { slidesPerView: 1 },   // One slide on mobile (below 768px)
          }}
        >
        
            {currentBlogs.map(item => (
              <SwiperSlide key={item._id}>
                <div className='blogPostss'>
                  <img src={item.image || '/images/blog1.png'} alt={item.title} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default GalleryPage;
