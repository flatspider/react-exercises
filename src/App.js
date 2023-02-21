import "./App.css";

import { TopNavBar } from "./top-buttons/top-nav-bar.js";
import { BlogForm } from "./exercise-A/BlogForm.js";
import { FullForm } from "./exercise-B/FullForm.js";
import { useState } from "react";
import BlogPopUp from "./exercise-C/BlogPopUp";
import BookmarkList from "./exercise-D/BookmarkList";

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

      {exercise === "a" && <BlogForm onSubmit={handleSubmit} />}
      {exercise === "b" && <FullForm />}
      {exercise === "c" && <BlogPopUp />}
      {exercise === "d" && <BookmarkList />}
      {exercise === "e" && <p>Exercise E</p>}
    </div>
  );
}

export default App;
