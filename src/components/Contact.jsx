import React from 'react';

const Contact = () => {
  return (
    <div className="contact">
      <main>
        <h1>Contact</h1>

        <form>
          <div>
            <label>Name</label>
            <input type="text" required placeholder="ABC" />
          </div>
          <div>
            <label>Email</label>
            <input type="email" required placeholder="abc@example.com" />
          </div>
          <div>
            <label>Message</label>
            <textarea required placeholder="Tell us about your Query...." />
          </div>

          <button type="submit">Submit</button>
        </form>
      </main>
    </div>
  );
};

export default Contact;
