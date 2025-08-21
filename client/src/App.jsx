import React, { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="nav">
        <div className="nav-inner">
          <div className="brand">Sindhu Uday Naik</div>

          <button
            className="nav-toggle"
            onClick={() => setOpen((s) => !s)}
            aria-label="Toggle menu"
          >
            ☰
          </button>

          <nav className={`nav-links ${open ? "open" : ""}`}>
            <a href="#home" onClick={() => setOpen(false)}>Home</a>
            <a href="#about" onClick={() => setOpen(false)}>About</a>
            <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
            <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
            <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="footer">
        <div className="container">© {new Date().getFullYear()} Your Name — Built with React</div>
      </footer>
    </>
  );
}
