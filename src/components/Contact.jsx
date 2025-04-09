import { useState } from "react"; // Imports the useState hook from React for managing local component state.
import "./Contact.css";

// Defines the Contact component, which allows users to submit their contact information and a message.
export function Contact() {
  const [name, setName] = useState("");  // Manages via local state name input field, initialized as empty string.
  const [email, setEmail] = useState(""); // Local state for email
  const [comment, setComment] = useState("");// local state for the comment

  // Function to handle the form submission (currently empty).
  function handleSubmit() {}

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <h2>Enter your contact details below</h2>
      {/* Input field for the user's name, updates the 'name' state on change. */}
      <input
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      {/* Input field for the user's email, updates the 'email' state on change. */}
      <input
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      {/* Input field for the user's question or comment, updates the 'comment' state on change. */}
      <input
        onChange={(e) => setComment(e.target.value)}
        placeholder="Question/Comment"
      />
      {/* Button to trigger the 'handleSubmit' function when clicked. */}
      <button onClick={() => handleSubmit()}>Submit</button>
    </div>
  );
}