import React from "react";
import "./Brands.css"; // Ensure the CSS file is imported

const ImageSlider = () => {
  return (
    <div className="slider-container">
      <h1 className="about-me-title">BRANDS I’VE WORKED WITH
      </h1>
   
      <div className="slider">
        <div className="slide-item">
          <img
            src="/images/image1.png"
            alt="Slide 1"
            className="slide-image"
          />
        </div>
        <div className="slide-item">
          <img
            src="/images/image2.png"
            alt="Slide 2"
            className="slide-image"
          />
        </div>
        <div className="slide-item">
          <img
            src="/images/image3.png"
            alt="Slide 3"
            className="slide-image"
          />
        </div>
        <div className="slide-item">
          <img
            src="/images/image4.png"
            alt="Slide 4"
            className="slide-image"
          />
        </div>
        <div className="slide-item">
          <img
            src="/images/image5.png"
            alt="Slide 5"
            className="slide-image"
          />
        </div>
        <div className="slide-item">
          <img
            src="/images/image6.png"
            alt="Slide 6"
            className="slide-image"
          />
        </div>
        <div className="slide-item">
          <img
            src="/images/image7.png"
            alt="Slide 7"
            className="slide-image"
          />
        </div>
        <div className="slide-item">
          <img
            src="/images/image8.png"
            alt="Slide 8"
            className="slide-image"
          />
        </div>
        <div className="slide-item">
          <img
            src="/images/image9.png"
            alt="Slide 9"
            className="slide-image"
          />
        </div>
        <div className="slide-item">
          <img
            src="/images/image10.png"
            alt="Slide 10"
            className="slide-image"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
