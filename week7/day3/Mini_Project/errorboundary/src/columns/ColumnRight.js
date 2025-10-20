import React, { useState } from "react";
import ErrorBoundary from "../ErrorBoundary";

function ColumnRight() {
  const [text, setText] = useState('{"function":"I live to crash"}');

  const replaceStringWithObject = () => {
    setText({ function: "I live to crash" }); 
  };

  const invokeHandlerError = () => {
    throw new Error("Manual event handler error"); 
  };

  return (
    <div>
      <h3>Right column</h3>
      <p>There are two types of errors we can trigger inside this component.</p>

      {}
      <ErrorBoundary>
        <p>{text}</p>
      </ErrorBoundary>

      <button className="btn btn-danger mt-3" onClick={replaceStringWithObject}>
        Replace string with object
      </button>

      <button className="btn btn-warning mt-3" onClick={invokeHandlerError}>
        Invoke event handler
      </button>
    </div>
  );
}

export default ColumnRight;
