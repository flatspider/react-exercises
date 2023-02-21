import { useState } from "react";

function BlogForm({ onSubmit }) {
  // This needs to be passed in from the top-nav-bar.
  const [blogTitle, setBlogTitle] = useState(""); // Use state to set the initial value to empty string.
  const [blogContent, setBlogContent] = useState(""); // Sets caption state to empty string.
  const [blogAuthor, setBlogAuthor] = useState("");

  const handleSubmit = (submits) => {
    submits.preventDefault(); // Stops the button from refreshing the page.
    onSubmit({ blogTitle, blogContent, blogAuthor });
    // onSubmit is being passed in through the App.js html element
    // <BlogForm onSubmit={handleSubmit}/> uses the handleSubmit function on the App.js page
    // Pull in the values of title, content, and author that the user typed.
    // Call onSubmit property from below form.
    setBlogTitle(""); // Clears the input box.
    setBlogContent("");
    setBlogAuthor("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        className="form-control title w-75 mt-2 mx-auto"
        id="blogTitle"
        autoComplete="off"
        placeholder="Enter blog title here..."
        value={blogTitle}
        onChange={(event) => setBlogTitle(event.target.value)} // This watches each change to the input and returns the current value
      ></input>
      <input
        type="text"
        name="blogContent"
        className="form-control contentSubmission w-75 mt-2 mx-auto"
        id="captionSubmission"
        autoComplete="off"
        placeholder="Write blog content here!"
        value={blogContent}
        onChange={(event) => setBlogContent(event.target.value)}
      ></input>
      <input
        type="text"
        name="blogAuthor"
        className="form-control authorSubmission w-75 mt-2 mx-auto"
        id="authorSubmission"
        autoComplete="off"
        placeholder="Write your name here!"
        value={blogAuthor}
        onChange={(event) => setBlogAuthor(event.target.value)}
      ></input>
      <button type="submit" className="btn btn-secondary mt-2">
        Submit Blog
      </button>
      {/* Prevent default behavior on the button */}
    </form>
  );
}

export { BlogForm };
