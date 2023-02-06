import logo from "./logo.svg";
import "./App.css";

import { TopNavBar } from "./top-buttons/top-nav-bar.js";
import { BlogForm } from "./exercise-A/BlogForm.js";
import { FullForm } from "./exercise-B/FullForm.js";
import { useState } from "react";

// Need to listen for click on exercise A. onClick, render exerciseA.

function App() {
  const [blogs, setBlogs] = useState([]); // Sets image array to empty.

  const handleSubmit = (newBlog) => {
    // This spreads the blog array and adds the new blog to the end.
    setBlogs([...blogs, newBlog]);
  };

  const [exercise, setExercise] = useState("a");

  return (
    <div className="App">
      <header className="App-header">
        <button
          type="submit"
          className="btn btn-primary"
          onClick={() => {
            setExercise("a");
          }}
        >
          Exercise A
        </button>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={() => {
            setExercise("b");
          }}
        >
          Exercise B
        </button>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={() => {
            setExercise("c");
          }}
        >
          Exercise C
        </button>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={() => {
            setExercise("d");
          }}
        >
          Exercise D
        </button>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={() => {
            setExercise("e");
          }}
        >
          Exercise E
        </button>
      </header>
      <img src={logo} className="App-logo" alt="logo" />
      {exercise === "a" && <BlogForm onSubmit={handleSubmit} />}
      {exercise === "b" && <FullForm />}
      {exercise === "c" && <p>Test C</p>}
      {exercise === "d" && <p>Test D</p>}
      {exercise === "e" && <p>Test E</p>}
    </div>
  );
}

export default App;
