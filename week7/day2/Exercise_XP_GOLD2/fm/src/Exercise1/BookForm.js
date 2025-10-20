import React, { useState } from "react";

function BookForm() {
  const [book, setBook] = useState({
    Title: "",
    Author: "",
    Genre: "",
    YearReleased: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(book);
    setMessage("data sent!");
  };

  return (
    <div style={{ margin: "20px auto", width: "300px", textAlign: "left" }}>
      <h2>New Book</h2>
      <p>{message}</p>

      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <br />
        <input type="text" name="Title" onChange={handleChange} />
        <br />
        <br />

        <label>Author</label>
        <br />
        <input type="text" name="Author" onChange={handleChange} />
        <br />
        <br />

        <label>Genre</label>
        <br />
        <input type="text" name="Genre" onChange={handleChange} />
        <br />
        <br />

        <label>Year Published</label>
        <br />
        <input type="text" name="YearReleased" onChange={handleChange} />
        <br />
        <br />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default BookForm;
