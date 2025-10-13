import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Gallery from "../components/Gallery";

function Category() {
  const { topic } = useParams();
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      const res = await axios.get(`https://api.pexels.com/v1/search`, {
        headers: {
          Authorization: process.env.REACT_APP_PEXELS_API_KEY,
        },
        params: { query: topic, per_page: 30 },
      });
      setPhotos(res.data.photos);
    };
    fetchPhotos();
  }, [topic]);

  return <Gallery title={`${topic} Pictures`} photos={photos} />;
}

export default Category;
