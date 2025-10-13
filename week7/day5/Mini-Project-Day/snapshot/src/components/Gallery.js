import React from "react";
import "../Gallery.css";

function Gallery({ title, photos }) {
  return (
    <div className="gallery-container">
      <h2>{title}</h2>
      <div className="gallery-grid">
        {photos.map((photo) => (
          <div key={photo.id} className="photo-card">
            <img src={photo.src.medium} alt={photo.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
