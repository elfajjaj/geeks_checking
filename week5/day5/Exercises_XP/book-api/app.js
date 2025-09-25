const express = require('express')
const cors = require('cors')

const app = express();
const PORT =  5000;

app.use(cors())
app.use(express.json())

const books = [
    { id: 1, title: '1984', author: 'George Orwell', publishedYear: 1949 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', publishedYear: 1960 },
    { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publishedYear: 1925 },
]

app.get("/api/books", (req, res) => {
  res.json(books);
});

app.get("/api/books/:bookId",(req,res) => {
    const {bookId} = req.params;
    const book = books.find(b => b.id === parseInt(bookId));
    if(book){
        res.status(200).json({ message: "OK", book });
    } else {
        res.status(404).json({ message: "Book not found" });
    }
});

app.post("/api/books", (req, res) => {
  const { title, author, publishedYear } = req.body;

  const newBook = {
    id: books.length + 1, 
    title,
    author,
    publishedYear
  };

  books.push(newBook);
    res.status(201).json({message : "Created" ,newBook});
});


app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});

