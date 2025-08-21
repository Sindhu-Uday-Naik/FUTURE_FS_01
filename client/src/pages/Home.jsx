import React from "react";

export default function Home() {
  return (
    <section id="home" className="container hero">
      <div>
        <div className="hero-card card">
          <h1 className="h1">Hi, I’m <span style={{ color: "#22c1c3" }}>Sindhu Uday Naik</span> 👋</h1>
          <p className="lead">
            Aspiring Web Developer | Enthusiastic Learner | Engineering Student passionate about building innovative projects.
          </p>
          <div className="row" style={{ marginTop: 16 }}>
            <a className="btn" href="#projects">View My Work</a>
            <a
            className="btn secondary"
            href="/resume.pdf"
            download="Sindhu_Uday_Naik_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            >
                Download Resume
                </a>

          </div>
          <div className="row" style={{ marginTop: 16 }}>
            <a href="https://www.linkedin.com/in/sindhuudaynaik" target="_blank" rel="noreferrer">LinkedIn</a> |
            <a href="https://github.com/Sindhu-Uday-Naik" target="_blank" rel="noreferrer"> GitHub</a>
          </div>
        </div>
      </div>
      <aside>
        <div className="card" style={{ textAlign: "center" }}>
          <img
          className="profile-img"
          src="/profile.jpg"
          alt="Sindhu Uday Naik"
          />

          <p className="muted" style={{ marginTop: 12 }}>C | C++ | Java | Web Development</p>
        </div>
      </aside>
    </section>
  );
}
