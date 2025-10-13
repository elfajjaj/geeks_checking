import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Gallery from "../components/Gallery";

function SearchResults() {
  const { query } = useParams();
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      const res = await axios.get(`https://api.pexels.com/v1/search`, {
        headers: {
          Authorization: process.env.REACT_APP_PEXELS_API_KEY,
        },
        params: { query, per_page: 30 },
      });
      setPhotos(res.data.photos);
    };
    fetchPhotos();
  }, [query]);

  return <Gallery title={`Results for "${query}"`} photos={photos} />;
}

export default SearchResults;
