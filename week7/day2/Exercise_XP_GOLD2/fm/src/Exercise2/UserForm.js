import React, { useState } from "react";

function UserForm() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      user.firstName.trim() === "" ||
      user.lastName.trim() === "" ||
      user.phone.trim() === "" ||
      user.email.trim() === ""
    ) {
      alert("Please fill in all fields correctly!");
      return;
    }
    setSubmitted(true);
  };

  const handleReset = () => {
    setUser({ firstName: "", lastName: "", phone: "", email: "" });
    setSubmitted(false);
  };

  return (
    <div
      style={{
        backgroundColor: "#d3d3d3",
        width: "300px",
        margin: "30px auto",
        padding: "20px",
        borderRadius: "30px",
        textAlign: "center",
      }}
    >
      {!submitted ? (
        <>
          <h1 style={{ color: "#2f4f4f" }}>Welcome!</h1>
          <p>Please provide your information below.</p>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              value={user.firstName}
              onChange={handleChange}
            />
            <br />
            <br />

            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={user.lastName}
              onChange={handleChange}
            />
            <br />
            <br />

            <input
              type="text"
              placeholder="Phone Number"
              name="phone"
              value={user.phone}
              onChange={handleChange}
            />
            <br />
            <br />

            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={user.email}
              onChange={handleChange}
            />
            <br />
            <br />

            <input type="submit" value="Submit" />
          </form>
        </>
      ) : (
        <>
          <h3>
            {user.lastName}, {user.firstName}
          </h3>
          <p>
            {user.phone} | {user.email}
          </p>
          <button onClick={handleReset}>Reset</button>
        </>
      )}
    </div>
  );
}

export default UserForm;
