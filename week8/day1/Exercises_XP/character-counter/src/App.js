import React, { useRef, useState, useEffect } from "react";

function App() {
  const inputRef = useRef(null); 
  const [count, setCount] = useState(0); 

  useEffect(() => {
    const handleInput = () => {
      setCount(inputRef.current.value.length);
    };

    const inputElement = inputRef.current;
    inputElement.addEventListener("input", handleInput);

    return () => {
      inputElement.removeEventListener("input", handleInput);
    };
  }, []);

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>📝 Character Counter</h1>
      <input
        ref={inputRef}
        type="text"
        placeholder="Type something..."
        style={{
          padding: "10px",
          width: "300px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          fontSize: "16px",
        }}
      />
      <p style={{ marginTop: "20px", fontSize: "18px" }}>
        Characters: <strong>{count}</strong>
      </p>
    </div>
  );
}

export default App;
