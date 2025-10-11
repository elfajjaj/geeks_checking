import React from "react";

function FormComponent(props) {
  const { data, handleChange, handleSubmit } = props;

  return (
    <div>
      <div style={{ backgroundColor: "#deb887", padding: "20px" }}>
        <h2
          style={{
            backgroundColor: "#2e2929",
            color: "white",
            padding: "10px",
          }}
        >
          Sample form
        </h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            value={data.firstName}
            onChange={handleChange}
          />
          <br />

          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={data.lastName}
            onChange={handleChange}
          />
          <br />

          <input
            type="number"
            placeholder="Age"
            name="age"
            value={data.age}
            onChange={handleChange}
          />
          <br />

          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={data.gender === "male"}
              onChange={handleChange}
            />{" "}
            Male
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={data.gender === "female"}
              onChange={handleChange}
            />{" "}
            Female
          </label>
          <br />

          <label>
            Select your destination <br />
            <select
              name="destination"
              value={data.destination}
              onChange={handleChange}
            >
              <option value="">-- Please Choose a destination --</option>
              <option value="Japan">Japan</option>
              <option value="France">France</option>
              <option value="Morocco">Morocco</option>
              <option value="USA">USA</option>
            </select>
          </label>

          <br />
          <br />
          <label>Dietary restrictions:</label>
          <br />
          <label>
            <input
              type="checkbox"
              name="nutsFree"
              checked={data.nutsFree}
              onChange={handleChange}
            />{" "}
            Nuts free
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="lactoseFree"
              checked={data.lactoseFree}
              onChange={handleChange}
            />{" "}
            Lactose free
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="vegan"
              checked={data.vegan}
              onChange={handleChange}
            />{" "}
            Vegan
          </label>
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>

      {/* Display entered information */}
      <div
        style={{ backgroundColor: "#134B4B", color: "white", padding: "20px" }}
      >
        <h2>Entered information:</h2>
        <p>
          Your name: {data.firstName} {data.lastName}
        </p>
        <p>Your age: {data.age}</p>
        <p>Your gender: {data.gender}</p>
        <p>Your destination: {data.destination}</p>
        <p>Your dietary restrictions:</p>
        <p>**Nuts free : {data.nutsFree ? "Yes" : "No"}</p>
        <p>**Lactose free : {data.lactoseFree ? "Yes" : "No"}</p>
        <p>**Vegan meal : {data.vegan ? "Yes" : "No"}</p>
      </div>
    </div>
  );
}

export default FormComponent;
