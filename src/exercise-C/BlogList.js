import { useState } from "react";

// This function needs to return a list of buttons as HTML that have mapped over the state.

function BlogList({ blog }) {
  // Map the blogs.title over the button content.

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const blogSummary = blog.summary;

  return (
    <>
      <button
        type="button"
        className="list-group-item list-group-item-action w-25"
        onClick={openModal}
      >
        {blog.title}
      </button>
      {showModal && (
        <button className="w-75" onClick={closeModal}>
          {blogSummary}
        </button>
      )}
    </>
  );
}

export default BlogList;
