import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

// Allow frontend (local + deployed Netlify)
app.use(
  cors({
    origin: [
      "http://localhost:5173",         // local React dev
      "https://future-fs-01.netlify.app" // deployed frontend
    ],
  })
);

// Health check (Render uses this to test if app is live)
app.get("/health", (req, res) => res.json({ ok: true }));

// Contact form endpoint
app.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body || {};
    if (!name || !email || !message) {
      return res.status(400).json({ ok: false, error: "Missing fields" });
    }

    // Gmail SMTP (requires App Password if 2FA enabled)
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    // Send mail
    const info = await transporter.sendMail({
      from: `Portfolio Contact <${process.env.EMAIL}>`,
      to: process.env.EMAIL,
      replyTo: email,
      subject: `New message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `<p>${message.replace(/\n/g, "<br/>")}</p>
             <p>From: <b>${name}</b> &lt;${email}&gt;</p>`,
    });

    res.json({ ok: true, id: info.messageId });
  } catch (err) {
    console.error("Mailer error:", err);
    res.status(500).json({ ok: false, error: "Email failed" });
  }
});

// ✅ Use Render's dynamic port or fallback to 5000 locally
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

