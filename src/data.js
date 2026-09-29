// EDIT THIS FILE to personalise the whole website.
import {
  FaReact, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaNodeJs, FaFigma, FaPython,
} from "react-icons/fa";

export const profile = {
  name: "Alishba",
  role: "Front-end developer",
  summary:
    "I build fast, accessible and playful websites with React. I enjoy turning ideas into interfaces that feel simple to use.",
  photo: "1.jpg", // put your picture in the /public folder
  email: "alishba4848@gmail.com",
  github: "https://github.com/your-username",
  linkedin: "https://www.linkedin.com/in/your-username",
};

export const skills = [
  { label: "React", Icon: FaReact, color: "#149ECA" },
  { label: "JavaScript", Icon: FaJs, color: "#C99A00" },
  { label: "HTML5", Icon: FaHtml5, color: "#E34F26" },
  { label: "CSS3", Icon: FaCss3Alt, color: "#1572B6" },
  { label: "Node.js", Icon: FaNodeJs, color: "#339933" },
  { label: "Git", Icon: FaGitAlt, color: "#F05032" },
  { label: "Figma", Icon: FaFigma, color: "#A259FF" },
  { label: "Python", Icon: FaPython, color: "#3776AB" },
];

export const projects = [
  {
    title: "Weather Now",
    tagline: "Live forecast app",
    description: "Search any city and see the current weather and a 5-day forecast, using a public weather API.",
    tech: ["React", "REST API", "CSS"],
    link: "https://github.com/your-username/weather-now",
  },
  {
    title: "Task Board",
    tagline: "Drag-and-drop planner",
    description: "A kanban board where tasks move between columns and are saved in the browser.",
    tech: ["React", "Hooks", "LocalStorage"],
    link: "https://github.com/your-username/task-board",
  },
  {
    title: "Recipe Finder",
    tagline: "Cook with what you have",
    description: "Filter recipes by ingredient and save your favourites to a personal list.",
    tech: ["React", "Router", "Axios"],
    link: "https://github.com/your-username/recipe-finder",
  },
  {
    title: "Study Timer",
    tagline: "Focus sessions",
    description: "A Pomodoro timer with session history and simple charts of weekly study time.",
    tech: ["React", "Charts", "CSS"],
    link: "https://github.com/your-username/study-timer",
  },
];
