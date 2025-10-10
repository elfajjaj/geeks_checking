import React, { useState } from "react";

function Events() {

    const clickMe = () => {
    alert("I was clicked!");
  };


  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      alert(`The Enter key was pressed, your input is: ${event.target.value}`);
    }
  };

  const [isToggleOn, setIsToggleOn] = useState(true);

  const toggleButton = () => {
    setIsToggleOn(!isToggleOn);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      {/* {part1} */}
      <div>
        <h3> Exercise 1:</h3>
        <button onClick={clickMe}> Click Me </button>
      </div>

      {/* {part2} */}
      <div style={{ marginTop: "20px" }}>
        <h3> Exercise 2:</h3>
        <input
          type="text"
          placeholder="Press the ENTER key!"
          onKeyDown={handleKeyDown}
        />
      </div>

      {/* {part3} */}
      <div style={{ marginTop: "20px" }}>
        <h3> Exercise 3:</h3>
        <button onClick={toggleButton}>{isToggleOn ? "ON" : "OFF"}</button>
      </div>
    </div>
  );
}

export default Events;
