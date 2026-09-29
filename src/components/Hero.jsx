import { motion, useReducedMotion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { profile } from "../data.js";

// One orchestrated moment: the name drops in letter by letter on page load.
const letter = {
  hidden: { y: "0.6em", opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 260, damping: 18 } },
};

export default function Hero() {
  const reduce = useReducedMotion();
  const navigate = useNavigate();
  const chars = Array.from(profile.name);

  return (
    <section className="hero" id="home">
      <div className="hero-text">
        <p className="hero-role">Hi, I'm a {profile.role.toLowerCase()}</p>

        <motion.h1
          aria-label={profile.name}
          initial={reduce ? "show" : "hidden"}
          animate="show"
          transition={{ staggerChildren: 0.05, delayChildren: 0.1 }}
        >
          {chars.map((c, i) => (
            <motion.span key={i} variants={letter} aria-hidden="true" className="hero-letter">
              {c === " " ? "\u00A0" : c}
            </motion.span>
          ))}
        </motion.h1>

        <p className="hero-summary">{profile.summary}</p>

        <div className="hero-actions">
          <button className="btn btn-primary" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
            See my projects
          </button>
          <button className="btn btn-ghost" onClick={() => navigate("/contact")}>
            Send a message
          </button>
        </div>
      </div>

      <motion.div
        className="hero-photo"
        initial={reduce ? false : { scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <img src={`${import.meta.env.BASE_URL}${profile.photo}`} alt={`Portrait of ${profile.name}`} />
      </motion.div>
    </section>
  );
}
