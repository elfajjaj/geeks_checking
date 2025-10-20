import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Card from "./Card";
import Contact from "./Contact";
import "./App.css";

function App() {
  return (
    <div>
      <Header />

      <div className="container my-5">
        <Card
          icon="fa-building"
          title="About the Company"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
        <Card
          icon="fa-globe"
          title="Our Values"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
        <Card
          icon="fa-university"
          title="Our Mission"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
      </div>

      <Contact />
    </div>
  );
}

export default App;
