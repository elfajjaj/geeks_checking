import React, { useState, useEffect } from "react";

function Clock() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const tick = () => {
    setCurrentDate(new Date());
  };

  useEffect(() => {
    const timer = setInterval(tick, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>Local Time:</h2>
      <h1>{currentDate.toLocaleTimeString()}</h1>
    </div>
  );
}

export default Clock;
