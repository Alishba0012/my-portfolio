import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { profile } from "../data.js";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} {profile.name}. Built with React.</p>
      <div className="footer-links">
        <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
        <a href={`mailto:${profile.email}`} aria-label="Email"><FaEnvelope /></a>
      </div>
    </footer>
  );
}
