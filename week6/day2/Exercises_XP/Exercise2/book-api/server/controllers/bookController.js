const Book = require("../models/bookModel");


const getBooks = (req, res) => {
  res.json(Book.getAllBooks());
};


const getBook = (req, res) => {
  const book = Book.getBookById(req.params.bookId);
  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }
  res.json(book);
};


const createBook = (req, res) => {
  const { title, author, publishedYear } = req.body;
  if (!title || !author || !publishedYear) {
    return res.status(400).json({ message: "All fields are required" });
  }
  const newBook = Book.createBook(title, author, publishedYear);
  res.status(201).json(newBook);
};

module.exports = { getBooks, getBook, createBook };
