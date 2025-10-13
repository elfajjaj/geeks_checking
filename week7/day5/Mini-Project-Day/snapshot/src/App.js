import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Category from "./pages/Category";
import SearchResults from "./pages/SearchResults";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <h1 className="logo">SnapShot</h1>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:topic" element={<Category />} />
          <Route path="/search/:query" element={<SearchResults />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
