let books = [
  {
    id: 1,
    title: "Clean Code",
    author: "Robert C. Martin",
    publishedYear: 2008,
  },
  {
    id: 2,
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    publishedYear: 1999,
  },
];

const getAllBooks = () => books;

const getBookById = (id) => books.find((b) => b.id === parseInt(id));

const createBook = (title, author, publishedYear) => {
  const newBook = {
    id: books.length + 1,
    title,
    author,
    publishedYear,
  };
  books.push(newBook);
  return newBook;
};

module.exports = { getAllBooks, getBookById, createBook };
