import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const [search, setSearch] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim() !== "") navigate(`/search/${search}`);
  };

  return (
    <div className="navbar">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">🔍</button>
      </form>
      <div className="categories">
        {["Mountain", "Beaches", "Birds", "Food"].map((cat) => (
          <button key={cat} onClick={() => navigate(`/category/${cat}`)}>
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
