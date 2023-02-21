import { useState } from "react";

// This function needs to return a list of buttons as HTML that have mapped over the state.

function BlogList({ blog }) {
  // Map the blogs.title over the button content.

  return (
    <button
      type="button"
      className="list-group-item list-group-item-action w-25"
    >
      {blog.title}
    </button>
  );
}

export default BlogList;
