import React from "react";

const projects = [
  {
    title: "My Friend Calcii",
    desc: "Game for kids (LKG–4th standard) to practice addition, subtraction, multiplication, and division.",
    tech: ["Scratch"],
    img: "/calcii.png", // updated to local image
  },
  {
    title: "Docubot",
    desc: "Question-answering system where users upload notes (PDF/Word) and get answers directly.",
    tech: ["HTML", "VS Code", "IntelliJ IDEA"],
    img: "/docubot.png", // updated to local image
  },
  {
    title: "Number Guessing Game",
    desc: "Java-based game where the computer guesses your number with hints in 10 tries.",
    tech: ["Java"],
    img: "/numberguess.png", // updated to local image
  },
  {
    title: "IntelliBotanica (Ongoing)",
    desc: "Identifies, cuts, and collects medicinal plants from forests.",
    tech: ["Java", "Jupyter Notebook"],
    img: "/intelli.png", // updated to local image
  },
];


export default function Projects() {
  return (
    <section id="projects" className="container">
      <h2>Projects</h2>
      <div className="grid grid-3">
        {projects.map((p, idx) => (
          <article key={idx} className="card project-card">
            <img src={p.img} alt={p.title} />
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <div className="badges">
              {p.tech.map((t) => (
                <span key={t} className="badge">{t}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
