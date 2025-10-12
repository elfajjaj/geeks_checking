import React, { Component } from "react";
import data from "./data.json";

class Example3 extends Component {
  render() {
    const experiences = data.Experiences;

    return (
      <div style={{ margin: "20px" }}>
        <h2>Example3 Component</h2>

        {experiences.map((exp, index) => (
          <div key={index} style={{ marginBottom: "30px" }}>
            <img
              src={exp.logo}
              alt="Company Logo"
              style={{
                borderRadius: "50%",
                border: "2px solid gray",
                width: "120px",
                height: "120px",
              }}
            />
            <br />
            <a href="#">{exp.companyName}</a>
            <h4>{exp.position}</h4>
            <p>
              {exp.startDate} | {exp.location}
            </p>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Example3;
