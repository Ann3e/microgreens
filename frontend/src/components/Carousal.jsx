import React, { useState, useEffect } from 'react';
import '../styles/Carousal.css';

export default function Carousal({ products }) {
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

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, products.length]);

  return (
    <div className="carousel-container">
      <button className="carousel-arrow left" onClick={goToPrevious}>
        ‹
      </button>

      <div className="carousel-content">
        {products.map((product, index) => {
          const position =
            (index - currentIndex + products.length) % products.length;
          return (
            <div
              key={index}
              className={`carousel-card position-${position} ${index === currentIndex ? 'active' : ''}`}
            >
              <div className="card-image-wrapper">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="card-label">{product.name}</div>
              <div className="card-tags">
                {product.vitamins && product.vitamins.map((vitamin, i) => (
                  <span key={i} className="tag">{vitamin}</span>
                ))}
              </div>
              <a href={`/product/${product.id}`} className="learn-more-btn">
                Learn More
              </a>
            </div>
          );
        })}
      </div>

      <button className="carousel-arrow right" onClick={goToNext}>
        ›
      </button>
    </div>
  );
}
