# React Portfolio Website

A responsive portfolio built with ReactJS, Vite, Framer Motion and plain CSS.

## Requirements covered
| # | Requirement | Where |
|---|-------------|-------|
| 1 | Hero with name, picture, summary | `src/components/Hero.jsx` |
| 2 | Skills icons that animate and show names on hover | `src/components/Skills.jsx` |
| 3 | Project cards that flip on hover | `src/components/Projects.jsx` |
| 4 | Contact page with a message form | `src/pages/Contact.jsx` |
| 5 | Unique typography and colour scheme | `src/index.css` (tokens at the top) |
| 6 | Responsive layout with media queries | bottom of `src/index.css` |
| - | React libraries for animation | `framer-motion` |

## Run it locally
1. Install Node.js (version 18 or newer) from https://nodejs.org
2. Open a terminal in this folder and run:
   ```
   npm install
   npm run dev
   ```
3. Open the address shown in the terminal (usually http://localhost:5173).

## Personalise it
- Edit `src/data.js`: your name, summary, email, skills and projects.
- Replace `public/profile.svg` with your photo. If it is a .jpg, save it as `public/profile.jpg` and set `photo: "profile.jpg"` in `src/data.js`.

## Contact form
By default, sending opens the visitor's email app addressed to you.
To receive messages directly, create a free form at https://formspree.io, then create a `.env` file in this folder:
```
VITE_FORM_ENDPOINT=https://formspree.io/f/your-form-id
```

## Build and host
```
npm run build      # creates the dist folder
npm run deploy     # publishes dist to GitHub Pages (gh-pages branch)
```
See `REPORT.md` for the full GitHub and hosting steps.
