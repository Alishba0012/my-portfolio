import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { projects } from "../data.js";

function ProjectCard({ project, index }) {
  // hover flips the card on desktop; tap / Enter toggles it on touch devices
  const [flipped, setFlipped] = useState(false);

  return (
    <article
      className={`flip-card ${flipped ? "is-flipped" : ""}`}
      tabIndex={0}
      onClick={() => setFlipped(!flipped)}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), setFlipped(!flipped))}
      aria-label={`${project.title}. Press to reveal details.`}
    >
      <div className="flip-inner">
        <div className="flip-face flip-front" data-tone={index % 2}>
          <h3>{project.title}</h3>
          <p>{project.tagline}</p>
          <span className="flip-hint">Hover to flip</span>
        </div>

        <div className="flip-face flip-back">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <ul className="tags">
            {project.tech.map((t) => <li key={t}>{t}</li>)}
          </ul>
          <a href={project.link} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
            <FaGithub /> View source
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section className="section" id="projects">
      <h2>Projects</h2>
      <p className="section-lead">Flip a card to read what I built and how.</p>
      <div className="projects-grid">
        {projects.map((p, i) => <ProjectCard key={p.title} project={p} index={i} />)}
      </div>
    </section>
  );
}
