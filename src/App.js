import logo from "./logo.svg";
import "./App.css";
import { TopNavBar } from "./top-buttons/top-nav-bar.js";
import { BlogForm } from "./exercise-A/Form.js";
import { useState } from "react";

// Need to listen for click on exercise A. onClick, render exerciseA.

function App() {
  const [blogs, setBlogs] = useState([]); // Sets image array to empty.

  const handleSubmit = (newBlog) => {
    // This spreads the blog array and adds the new blog to the end.
    setBlogs([...blogs, newBlog]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <TopNavBar />

        <img src={logo} className="App-logo" alt="logo" />
        <BlogForm onSubmit={handleSubmit} />
      </header>
    </div>
  );
}

export default App;
