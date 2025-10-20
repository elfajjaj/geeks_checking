import React from "react";

function Card({ icon, title, text }) {
  return (
    <div className="d-flex align-items-center p-4 my-4 bg-light rounded">
      <div className="me-4 text-danger fs-1">
        <i className={`fa ${icon}`}></i>
      </div>
      <div>
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Card;
