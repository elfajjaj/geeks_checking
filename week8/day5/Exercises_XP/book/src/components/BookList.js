import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  selectBooks,
  selectHorrorBooks,
  selectFantasyBooks,
  selectScienceFictionBooks,
} from "../redux/booksSlice";

function BookList() {
  const [genre, setGenre] = useState("All");

  const allBooks = useSelector(selectBooks);
  const horrorBooks = useSelector(selectHorrorBooks);
  const fantasyBooks = useSelector(selectFantasyBooks);
  const sciFiBooks = useSelector(selectScienceFictionBooks);

  let displayedBooks = allBooks;
  if (genre === "Horror") displayedBooks = horrorBooks;
  if (genre === "Fantasy") displayedBooks = fantasyBooks;
  if (genre === "Science Fiction") displayedBooks = sciFiBooks;

  return (
    <div style={{ textAlign: "center" }}>
      <h1>📚 Book Inventory Selector</h1>

      <select
        onChange={(e) => setGenre(e.target.value)}
        value={genre}
        style={{ marginBottom: "20px", padding: "5px" }}
      >
        <option value="All">All</option>
        <option value="Horror">Horror</option>
        <option value="Fantasy">Fantasy</option>
        <option value="Science Fiction">Science Fiction</option>
      </select>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {displayedBooks.map((book) => (
          <li
            key={book.id}
            style={{
              border: "1px solid #ccc",
              margin: "10px auto",
              width: "50%",
              borderRadius: "8px",
              padding: "10px",
              backgroundColor: "#f9f9f9",
            }}
          >
            <h3>{book.title}</h3>
            <p>
              ✍️ {book.author} | 📖 {book.genre}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
