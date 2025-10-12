// Exercise1

import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import ErrorBoundary from "./Exercise1/ErrorBoundary";
import "./App.css";

function Home() {
  return <h1 style={{ textAlign: "center" }}>Home</h1>;
}

function Profile() {
  return <h1 style={{ textAlign: "center" }}>Profile Screen</h1>;
}

function Shop() {
  throw new Error("Shop crashed!");
}

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/profile" className="nav-link">
          Profile
        </NavLink>
        <NavLink to="/shop" className="nav-link">
          Shop
        </NavLink>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <ErrorBoundary>
              <Home />
            </ErrorBoundary>
          }
        />
        <Route
          path="/profile"
          element={
            <ErrorBoundary>
              <Profile />
            </ErrorBoundary>
          }
        />
        <Route
          path="/shop"
          element={
            <ErrorBoundary>
              <Shop />
            </ErrorBoundary>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;



// Exercise 2

import React from "react";
import PostList from "./Exercise2/PostList";

function App() {
  return (
    <div>
      <PostList />
    </div>
  );
}

export default App;


// Exercise 3


import React from "react";
import Example1 from "./Exercise3/Example1";
import Example2 from "./Exercise3/Example2";
import Example3 from "./Exercise3/Example3";

function App() {
  return (
    <div>
      <Example1 />
      <hr />
      <Example2 />
      <hr />
      <Example3 />
    </div>
  );
}

export default App;


// Exercise 4


import React from "react";

function App() {
  const url = "https://webhook.site/289d893c-f950-4572-8868-d654c6b69118";

  const postData = async () => {
    const data = {
      key1: "myusername",
      email: "mymail@gmail.com",
      name: "Isaac",
      lastname: "Doe",
      age: 27,
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      console.log(response);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div style={{ margin: "30px" }}>
      <button onClick={postData}>Press me to post some data</button>
    </div>
  );
}

export default App;
