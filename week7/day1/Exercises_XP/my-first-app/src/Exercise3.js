import React, { Component } from "react";
import "./Exercise.css"; 

class Exercise extends Component {
  render() {
    const style_header = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial",
    };

    return (
      <div>
        <h1 style={style_header}>This is a header</h1>
        <p className="para">This is a Paragraph </p>
        <a href="https://react.dev" target="_blank">
          This is a Link
        </a>
        <form>
          <h2>This is a Form</h2>
          <p>Enter your name: </p>

          <input type="text" />
          <button>Submit</button>
        </form>

        <h3>This is an Image:</h3>

        <img
          src="image react.png"
          width="500"
          alt="react"
        />

        <h4>This is a List:</h4>

        <ul>
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </ul>
      </div>
    );
  }
}

export default Exercise;
