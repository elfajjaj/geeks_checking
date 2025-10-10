import React, { useState, useEffect } from "react";

function Color() {
  const [favoriteColor, setFavoriteColor] = useState("Red");

  useEffect(() => {
    alert("useEffect reached");
    setFavoriteColor("Yellow");
  }, []);

  const changeColor = () => {
    setFavoriteColor("Blue");
  };

  return (
    <div>
      <h2>My favorite color : {favoriteColor}</h2>
      <button onClick={changeColor}>change the color to blue</button>
    </div>
  );
}

export default Color;
