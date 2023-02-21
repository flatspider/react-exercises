import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

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
      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>{blog.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{blog.summary}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default BlogList;
