import React, { useState } from "react";

function ColumnLeft() {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const response = await fetch("https://picsum.photos/v2/list?limit=2");
    const data = await response.json();
    setImages(data);
  };

  return (
    <div>
      <h3>Left column</h3>
      <button className="btn btn-primary mb-3" onClick={getImages}>
        Get images
      </button>

      {images.map((img) => (
        <img
          key={img.id}
          src={img.download_url}
          alt="random"
          style={{ width: "100%", marginBottom: "10px" }}
        />
      ))}
    </div>
  );
}

export default ColumnLeft;
