import React, { useState } from 'react';
import '.../styles/ProductCarousel.css';

export default function ProductCarousel({ products }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <button className="carousel-arrow left" onClick={goToPrevious}>
          ❮
        </button>

        <div className="carousel-content">
          {products.map((product, index) => (
            <div
              key={index}
              className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
            >
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p className="description">{product.description}</p>
              <p className="price">${product.price}</p>
              <button className="cta-button">Learn More</button>
            </div>
          ))}
        </div>

        <button className="carousel-arrow right" onClick={goToNext}>
          ❯
        </button>
      </div>

      <div className="carousel-dots">
        {products.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
