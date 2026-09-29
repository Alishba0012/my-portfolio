import { useState } from "react";
import { motion } from "framer-motion";
import { profile } from "../data.js";

// Optional: create a free form at https://formspree.io and put its URL in a
// .env file as VITE_FORM_ENDPOINT=https://formspree.io/f/xxxxxx
// Without it, the form opens the visitor's email app instead.
const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT;

const empty = { name: "", email: "", message: "" };

function validate(v) {
  const e = {};
  if (!v.name.trim()) e.name = "Enter your name.";
  if (!/^\S+@\S+\.\S+$/.test(v.email)) e.email = "Enter a valid email address.";
  if (v.message.trim().length < 10) e.message = "Write at least 10 characters.";
  return e;
}

export default function Contact() {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent | failed

  const onChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) return;

    if (!ENDPOINT) {
      const subject = encodeURIComponent(`Portfolio message from ${values.name}`);
      const body = encodeURIComponent(`${values.message}\n\nFrom: ${values.name} (${values.email})`);
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      setStatus("sent");
      setValues(empty);
      return;
    }

    try {
      setStatus("sending");
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      setValues(empty);
    } catch {
      setStatus("failed");
    }
  };

  return (
    <section className="section contact">
      <h2>Contact</h2>
      <p className="section-lead">Have a question or an idea? Send me a message.</p>

      <motion.form
        className="contact-form"
        onSubmit={onSubmit}
        noValidate
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <label>
          Name
          <input name="name" value={values.name} onChange={onChange} autoComplete="name" aria-invalid={!!errors.name} />
          {errors.name && <span className="field-error">{errors.name}</span>}
        </label>

        <label>
          Email
          <input name="email" type="email" value={values.email} onChange={onChange} autoComplete="email" aria-invalid={!!errors.email} />
          {errors.email && <span className="field-error">{errors.email}</span>}
        </label>

        <label>
          Message
          <textarea name="message" rows="6" value={values.message} onChange={onChange} aria-invalid={!!errors.message} />
          {errors.message && <span className="field-error">{errors.message}</span>}
        </label>

        <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send message"}
        </button>

        <p className="form-status" role="status" aria-live="polite">
          {status === "sent" && "Message ready. Thank you for reaching out!"}
          {status === "failed" && "The message could not be sent. Check your connection and try again."}
        </p>
      </motion.form>
    </section>
  );
}
