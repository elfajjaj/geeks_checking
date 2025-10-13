import React, { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operation, setOperation] = useState("+");
  const [result, setResult] = useState(null);

  const calculate = () => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    if (isNaN(a) || isNaN(b)) {
      setResult("Please enter valid numbers");
      return;
    }

    switch (operation) {
      case "+":
        setResult(a + b);
        break;
      case "-":
        setResult(a - b);
        break;
      case "*":
        setResult(a * b);
        break;
      case "/":
        setResult(b !== 0 ? a / b : "Cannot divide by 0");
        break;
      default:
        setResult("Invalid Operation");
    }
  };

  return (
    <div className="calculator-container">
      <h1>Adding Two Numbers</h1>

      <div className="inputs">
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="Enter first number"
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Enter second number"
        />
      </div>

      <div className="operation">
        <select
          value={operation}
          onChange={(e) => setOperation(e.target.value)}
        >
          <option value="+">➕ Add</option>
          <option value="-">➖ Subtract</option>
          <option value="*">✖ Multiply</option>
          <option value="/">➗ Divide</option>
        </select>
      </div>

      <button onClick={calculate}>Add Them!</button>

      {result !== null && <h2 className="result">{result}</h2>}
    </div>
  );
}

export default Calculator;
