import React from "react";

const SKILLS = [
  "C", "C++", "Java", "HTML", "CSS", "Microsoft Excel", 
  "PowerPoint", "Word", "Canva", "Team Collaboration", "Adaptability"
];

export default function Skills() {
  return (
    <section id="skills" className="container">
      <div className="card">
        <h2>Skills</h2>
        <div className="skills-list">
          {SKILLS.map((s) => (
            <div key={s} className="skill">{s}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

