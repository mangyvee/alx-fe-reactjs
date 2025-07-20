import { useState } from 'react';

function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // ✅ prevent default form action
    console.log('Form submitted:', { email, message });
    // optionally clear the form:
    setEmail('');
    setMessage('');
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}> {/* ✅ onSubmit handler */}
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // ✅ useState
            required
          />
        </div>
        <div>
          <label>Message:</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)} // ✅ useState
            required
          ></textarea>
        </div>
        <button type="submit">Send</button> {/* ✅ button */}
      </form>
    </div>
  );
}

export default Contact;
