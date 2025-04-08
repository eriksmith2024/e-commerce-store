// Contact.jsx
import { useState } from "react";
import "./Contact.css"; // Import Contact.css

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  function handleSubmit() {}

  return (
    <div className="contact-container"> 
      <h1>Contact Us</h1>
      <h2>Enter your contact details below</h2>
      <input
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        onChange={(e) => setComment(e.target.value)}
        placeholder="Question/Comment"
      />
      <button onClick={() => handleSubmit()}>Submit</button>
    </div>

    
  );
}