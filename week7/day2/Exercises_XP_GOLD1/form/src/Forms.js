import React, { useState } from "react";

function Forms() {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [errormessage, setErrorMessage] = useState("");
  const [textarea, setTextarea] = useState(
    "The content of a textarea goes in the value attribute"
  );
  const [car, setCar] = useState("Volvo");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    if (name === "username") {
      setUsername(value);
    }

    if (name === "age") {
      if (!Number(value) && value !== "") {
        setErrorMessage("Your age must be a number");
      } else {
        setErrorMessage("");
      }
      setAge(value);
    }
  };

  const mySubmitHandler = (event) => {
    event.preventDefault();
    if (age !== "" && !Number(age)) {
      alert("Your age must be a number");
    } else {
      alert(`You are submitting ${username}`);
    }
  };

  const handleTextarea = (event) => {
    setTextarea(event.target.value);
  };

  const handleSelect = (event) => {
    setCar(event.target.value);
  };

  let header;
  if (username) {
    header = (
      <h1>
        Hello {username} {age}
      </h1>
    );
  }

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      {header}

      <form onSubmit={mySubmitHandler}>
        <h3>Enter your name:</h3>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
        />
        <br />
        <br />

        <h3>Enter your age:</h3>
        <input type="text" name="age" value={age} onChange={handleChange} />
        <span style={{ color: "red", marginLeft: "10px" }}>{errormessage}</span>

        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>

      <br />
      <hr />
      <br />

      <h3>Textarea Example:</h3>
      <textarea value={textarea} onChange={handleTextarea} rows="4" cols="40" />
      <p>{textarea}</p>

      <br />
      <hr />
      <br />

      <h3>Select Car Brand:</h3>
      <select value={car} onChange={handleSelect}>
        <option value="Ford">Ford</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
      </select>
      <p>Selected Car: {car}</p>
    </div>
  );
}

export default Forms;
