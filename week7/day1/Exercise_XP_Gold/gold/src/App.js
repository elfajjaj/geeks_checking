// Exercise 1

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapCard from "./Exercise1/BootstrapCard";

function App() {
  const celebrities = [
    {
      title: "Bob Dylan",
      imageUrl:
        "https://miro.medium.com/max/4800/1*_EDEWvWLREzlAvaQRfC_SQ.jpeg",
      buttonLabel: "Go to Wikipedia",
      buttonUrl: "https://en.wikipedia.org/wiki/Bob_Dylan",
      description:
        "Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more"
    }]}
export default App


// Exercise 2

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const planets = ['Mars', 'Venus', 'Jupiter', 'Earth', 'Saturn', 'Neptune'];

  return (
    <div className="container mt-5">
      <h2 className="mb-3">Planets</h2>
      {}
      <ul className="list-group">
        {planets.map((planet, index) => (
          <li key={index} className="list-group-item">
            {planet}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
