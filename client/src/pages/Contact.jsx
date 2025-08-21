import React, { useState } from "react";

const API = import.meta.env.VITE_API_URL || "https://future-fs-01-server.onrender.com";


export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const change = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      if (!API) {
        // no backend configured: local fallback
        setTimeout(() => setStatus("success"), 700);
        return;
      }
      const res = await fetch(API + "/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Server error");
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="container" style={{ paddingTop: 6 }}>
      <div className="card" style={{ maxWidth: 820 }}>
        <h2>Contact</h2>

        <form onSubmit={submit} style={{ marginTop: 12 }}>
          <div className="form-row">
            <input className="input" name="name" placeholder="Your name" value={form.name} onChange={change} required />
            <input className="input" name="email" type="email" placeholder="Your email" value={form.email} onChange={change} required />
            <textarea className="textarea" name="message" placeholder="Message" value={form.message} onChange={change} required />
          </div>

          <div style={{ marginTop: 12 }}>
            <button className="btn" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending..." : "Send message"}</button>
            {status === "success" && <span style={{ marginLeft: 12 }} className="muted">✅ Sent — check your inbox.</span>}
            {status === "error" && <span style={{ marginLeft: 12, color: "#ff7b7b" }}>❌ Failed to send</span>}
          </div>
        </form>
      </div>
    </section>
  );
}
