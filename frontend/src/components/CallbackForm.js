import React, { useState } from "react";
import axios from "axios";

export default function CallbackForm() {
  const [form, setForm] = useState({ name: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/api/callbacks", form).then(() => setSubmitted(true));
  };

  return (
    <section className="callback-form">
      <h2>Request a Callback</h2>
      {submitted ? (
        <p>Thank you! We'll get back to you shortly.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            placeholder="Phone Number"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
          <button type="submit">Submit</button>
        </form>
      )}
    </section>
  );
}