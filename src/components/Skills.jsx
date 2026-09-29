import { motion } from "framer-motion";
import { skills } from "../data.js";

export default function Skills() {
  return (
    <section className="section" id="skills">
      <h2>Skills</h2>
      <p className="section-lead">Hover over (or tap) an icon to see the skill name.</p>

      <ul className="skills-grid">
        {skills.map(({ label, Icon, color }, i) => (
          <li key={label}>
            <motion.button
              type="button"
              className="skill"
              style={{ "--skill-color": color }}
              whileHover={{ scale: 1.12, rotate: -4 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 14 }}
              aria-label={label}
            >
              {/* icons float gently; each one is offset so they don't move in sync */}
              <motion.span
                className="skill-icon"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: i * 0.25 }}
              >
                <Icon />
              </motion.span>
              <span className="skill-name">{label}</span>
            </motion.button>
          </li>
        ))}
      </ul>
    </section>
  );
}
