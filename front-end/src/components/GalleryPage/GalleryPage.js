import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import './GalleryPage.css';
import Loading from '../Loading/Loading';

const GalleryPage = () => {
  const baseurl = 'http://localhost:3000';
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesToShow, setImagesToShow] = useState(window.innerWidth < 768 ? 1 : 2);

  useEffect(() => {
    // Fetch data from the gallery API
    axios
      .get(`${baseurl}/gallery`)
      .then((response) => {
        setImages(response.data.gallery);
      })
      .catch((error) => {
        console.error('Error fetching gallery data:', error);
      });
  }, []);

  const nextImage = useCallback(() => {
    if (images.length > 0) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  }, [images.length]);

  useEffect(() => {
    // Slide the gallery every 3 seconds
    const slideInterval = setInterval(nextImage, 3000);
    return () => clearInterval(slideInterval); // Cleanup the interval when component unmounts
  }, [nextImage]);

  useEffect(() => {
    // Handle screen resizing
    const handleResize = () => {
      setImagesToShow(window.innerWidth < 768 ? 1 : 2);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const displayedImages = images.slice(currentIndex, currentIndex + imagesToShow);

  return (
    <div className="gallery-page">
      <h1 className="gallery-title">GALLERY & EXPERIENCES</h1>
      <div className="gallery-container">
        {displayedImages.length > 0 ? (
          displayedImages.map((item) => (
            <div key={item._id} className="gallery-item">
              <img src={item.image} alt="Gallery" className="gallery-image" />
            </div>
          ))
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default GalleryPage;
