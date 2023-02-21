import { useState } from "react";

function PhoneInputForm({ addNewRecord }) {
  // This needs to be passed in from the top-nav-bar.
  const [firstName, setFirstName] = useState(""); // Use state to set the initial value to empty string.
  const [lastName, setLastName] = useState(""); // Sets caption state to empty string.
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (submits) => {
    submits.preventDefault(); // Stops the button from refreshing the page.
    addNewRecord({ firstName, lastName, address, phoneNumber });
    // onSubmit is being passed in through the App.js html element
    // <BlogForm onSubmit={handleSubmit}/> uses the handleSubmit function on the App.js page
    // Pull in the values of title, content, and author that the user typed.
    // Call onSubmit property from below form.
    setFirstName(""); // Clears the input box.
    setLastName("");
    setAddress("");
    setPhoneNumber("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        className="form-control title w-75 mt-2 mx-auto"
        id="blogTitle"
        autoComplete="off"
        placeholder="Enter first name..."
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)} // This watches each change to the input and returns the current value
      ></input>
      <input
        type="text"
        name="title"
        className="form-control title w-75 mt-2 mx-auto"
        id="blogTitle"
        autoComplete="off"
        placeholder="Enter last name..."
        value={lastName}
        onChange={(event) => setLastName(event.target.value)} // This watches each change to the input and returns the current value
      ></input>
      <input
        type="text"
        name="blogContent"
        className="form-control contentSubmission w-75 mt-2 mx-auto"
        id="captionSubmission"
        autoComplete="off"
        placeholder="Enter address here..."
        value={address}
        onChange={(event) => setAddress(event.target.value)}
      ></input>
      <input
        type="tel"
        name="blogAuthor"
        className="form-control authorSubmission w-75 mt-2 mx-auto"
        id="authorSubmission"
        autoComplete="off"
        placeholder="Write your number here!"
        value={phoneNumber}
        onChange={(event) => setPhoneNumber(event.target.value)}
      ></input>
      <button type="submit" className="btn btn-secondary mt-2">
        Add Info to Table
      </button>
    </form>
  );
}

export { PhoneInputForm };
