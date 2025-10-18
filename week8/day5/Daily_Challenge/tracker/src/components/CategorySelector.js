import React from "react";
import { useSelector } from "react-redux";

function CategorySelector({ selected, onSelect }) {
  const categories = useSelector((state) => state.categories.list);

  return (
    <select
      value={selected}
      onChange={(e) => onSelect(Number(e.target.value))}
      style={{ margin: "20px", padding: "5px" }}
    >
      <option value="">All Categories</option>
      {categories.map((c) => (
        <option key={c.id} value={c.id}>
          {c.name}
        </option>
      ))}
    </select>
  );
}

export default CategorySelector;
