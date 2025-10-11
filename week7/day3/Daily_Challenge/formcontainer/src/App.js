import React, { useState } from "react";
import FormComponent from "./Components/FormComponent";

function App() {
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    destination: "",
    nutsFree: false,
    lactoseFree: false,
    vegan: false,
  });


  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };


  const handleSubmit = (event) => {
    event.preventDefault();

    const queryParams = new URLSearchParams(formData).toString();
    const newUrl = `${window.location.origin}?${queryParams}`;
    window.history.pushState(null, "", newUrl);

        setFormData({
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: "",
      nutsFree: false,
      lactoseFree: false,
      vegan: false,
    });
  };


  return (
    <div>
      <FormComponent
        data={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;
