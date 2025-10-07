import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import { Carousel } from "react-bootstrap";

function App() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const images = [
    { src: "1.jpg", caption: "Hong Kong" },
    { src: "2.webp", caption: "Macao" },
    { src: "3.webp", caption: "Japan" },
    { src: "4.webp", caption: "Las Vegas" },
  ];

  return (
    <div className="carousel-container">
      <h1 className="title">Travel Carousel 🌏</h1>


      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        fade
        interval={3000}
      >
        {images.map((img, i) => (
          <Carousel.Item key={i}>
            <img className="d-block w-100" src={img.src} alt={img.caption} />
            <Carousel.Caption>
              <h5>{img.caption}</h5>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>


      <div className="thumbnails">
        {images.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={img.caption}
            className={`thumb ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
