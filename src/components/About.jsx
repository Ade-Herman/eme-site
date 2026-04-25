/**
 * About Component
 * Brief course overview and information section with image carousel
 */
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import orangeCat from "../assets/orange-cat.jpg";
import greyCat from "../assets/grey-cat.jpg";
import blackWhiteCat from "../assets/blackWhite-cat.jpg";
import "../styles/About.css";

function About() {
  const images = [orangeCat, greyCat, blackWhiteCat];
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance carousel every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  // Manual navigation functions
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-text">
          <h2>About EME</h2>
          <div className="about-accent-line"></div>
          <p>
            At EME, we believe that mastering a language requires both a strong
            foundation and the confidence to use it. We go beyond standard
            textbook exercises, focusing on a comprehensive approach that
            bridges the gap between understanding complex grammar and speaking
            naturally.
          </p>
          <p>
            Whether you are dissecting advanced sentence structures or engaging
            in dynamic conversations about everyday life and social etiquette,
            our goal is to equip you with the practical skills needed to thrive
            in any English-speaking environment.
          </p>
        </div>
        <div className="about-image-column">
          <div className="carousel-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Carousel slide ${index + 1}`}
                  className="carousel-slide"
                />
              ))}
            </div>

            {/* Left Arrow */}
            <button
              className="carousel-arrow carousel-arrow-left"
              onClick={prevSlide}
              aria-label="Previous slide"
            >
              <FaChevronLeft />
            </button>

            {/* Right Arrow */}
            <button
              className="carousel-arrow carousel-arrow-right"
              onClick={nextSlide}
              aria-label="Next slide"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
