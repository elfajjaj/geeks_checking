import React, { useState } from "react";
import Input from "./Input";

function Form() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    const phoneRegex = /^[0-9]{10}$/; 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

    if (!values.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    if (!values.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }
    if (!values.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!phoneRegex.test(values.phone)) {
      newErrors.phone = "Phone number is invalid";
    }
    if (!values.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(values.email)) {
      newErrors.email = "Email is invalid";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; 
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log(values);
      alert("Form submitted successfully ✅");
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#f6f7f9",
        width: "320px",
        margin: "40px auto",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <h2>Form Validation</h2>
      <form onSubmit={handleSubmit}>
        <Input
          label="First Name"
          name="firstName"
          value={values.firstName}
          onChange={handleChange}
          error={errors.firstName}
        />

        <Input
          label="Last Name"
          name="lastName"
          value={values.lastName}
          onChange={handleChange}
          error={errors.lastName}
        />

        <Input
          label="Phone"
          name="phone"
          value={values.phone}
          onChange={handleChange}
          error={errors.phone}
        />

        <Input
          label="Email"
          name="email"
          value={values.email}
          onChange={handleChange}
          error={errors.email}
        />

        <button type="submit" style={{ padding: "8px 15px" }}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
