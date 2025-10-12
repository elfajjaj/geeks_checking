import React, { Component } from "react";
import data from "./data.json";

class Example2 extends Component {
  render() {
    const { ProgrammingLanguage, WebBasedApplicationDevelopment } = data.Skills;

    return (
      <div style={{ margin: "20px" }}>
        <h2>Example2 Component</h2>

        <h3>Programming Language</h3>
        <ul>
          {ProgrammingLanguage.map((lang, index) => (
            <li key={index}>{lang}</li>
          ))}
        </ul>

        <h3>Web-Based Application Development</h3>
        <ul>
          {WebBasedApplicationDevelopment.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Example2;
