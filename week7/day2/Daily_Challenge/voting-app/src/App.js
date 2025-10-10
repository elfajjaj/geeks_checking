import React, { useState } from "react";

function App() {
  // Create the state 
  const [languages, setLanguages] = useState([
    { name: "PHP", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaScript", votes: 0 },
    { name: "Java", votes: 0 },
  ]);

  // increase votes
  const addVote = (index) => {
    const newLanguages = [...languages];
    newLanguages[index].votes += 1;
    setLanguages(newLanguages);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React Voting App</h1>
      <h3>Click Vote for your favorite language</h3>

      {/* {Loop languages} */}
      {languages.map((lang, index) => (
        <div key={index} style={{ margin: "15px" }}>
          <span style={{ fontSize: "20px", marginRight: "10px" }}>
            {lang.name}: {lang.votes} votes
          </span>
          <button onClick={() => addVote(index)}>Vote</button>
        </div>
      ))}
    </div>
  );
}

export default App;
