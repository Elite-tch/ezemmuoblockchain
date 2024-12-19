import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './GalleryPage.css'
import { Pagination, Autoplay } from 'swiper/modules';

const GalleryPage = () => {
  const baseurl = 'https://ezemmuoblockchain-4.onrender.com';
  const [data, setData] = useState([]);
  const [categories] = useState(['education', 'blockchain', 'crytocurrency', 'coding/dev', 'featured', 'tutorials', 'reviews', 'tech', 'productivity']);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const blogsPerPage = 12;
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${baseurl}/gallery`)
      .then(response => {
        setData(response.data.gallery);
      });
  }, []);

  const filteredBlogs = selectedCategory ? data.filter(item => item.category === selectedCategory) : data;

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

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
                <div className='blogPosts'>
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
