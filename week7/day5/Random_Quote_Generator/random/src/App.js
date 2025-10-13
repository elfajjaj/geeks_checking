import React, { useState } from "react";
import quotes from "./quotesData"; // هذا الملف فيه اللائحة ديال الاقتباسات
import "./App.css";

function App() {
  const [quote, setQuote] = useState(quotes[0]);
  const [color, setColor] = useState("#1f4b5b");

  const getRandomQuote = () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * quotes.length);
    } while (quotes[randomIndex].quote === quote.quote);

    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

    setQuote(quotes[randomIndex]);
    setColor(randomColor);
  };

  return (
    <div className="app" style={{ backgroundColor: color }}>
      <div className="quote-box">
        <h2 className="quote-text" style={{ color }}>
          "{quote.quote}"
        </h2>
        <p className="quote-author">- {quote.author}</p>
        <button
          className="new-quote-btn"
          style={{ backgroundColor: color }}
          onClick={getRandomQuote}
        >
          New quote
        </button>
      </div>
    </div>
  );
}

export default App;
