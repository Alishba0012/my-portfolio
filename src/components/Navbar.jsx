import { useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { profile } from "../data.js";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // Skills and Projects live on the home page, so go there first, then scroll.
  const goTo = (id) => {
    setOpen(false);
    const scroll = () => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    if (pathname !== "/") {
      navigate("/");
      setTimeout(scroll, 120);
    } else {
      scroll();
    }
  };

  return (
    <header className="navbar">
      <Link to="/" className="brand" onClick={() => setOpen(false)}>
        {profile.name}
      </Link>

      <button
        className="nav-toggle"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span /><span /><span />
      </button>

      <nav className={`nav-links ${open ? "is-open" : ""}`}>
        <NavLink to="/" end onClick={() => setOpen(false)}>Home</NavLink>
        <button onClick={() => goTo("skills")}>Skills</button>
        <button onClick={() => goTo("projects")}>Projects</button>
        <NavLink to="/contact" className="nav-cta" onClick={() => setOpen(false)}>Contact</NavLink>
      </nav>
    </header>
  );
}
