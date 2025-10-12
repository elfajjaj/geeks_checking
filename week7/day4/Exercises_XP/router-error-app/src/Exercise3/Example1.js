import React, { Component } from "react";
import data from "./data.json";

class Example1 extends Component {
  render() {
    const socialLinks = data.SocialMedias;

    return (
      <div style={{ margin: "20px" }}>
        <h2>Example1 Component</h2>
        <ul>
          {socialLinks.map((link, index) => (
            <li key={index}>
              <a href={link} target="_blank" rel="noreferrer">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Example1;
