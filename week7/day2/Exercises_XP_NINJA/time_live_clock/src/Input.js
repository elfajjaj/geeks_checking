import React from "react";

function Input({ label, name, value, onChange, error }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <label>{label}</label>
      <br />
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        style={{
          width: "250px",
          padding: "5px",
          marginBottom: "5px",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      />
      {error && <div style={{ color: "red", fontSize: "14px" }}>{error}</div>}
    </div>
  );
}

export default Input;
