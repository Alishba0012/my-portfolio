# Portfolio Website: Development Report

**Name:** (your name)  **Course:** (course name)  **Date:** (date)
**Live website:** (paste your hosted link)
**GitHub repository:** (paste your repository link)

## 1. Objective
Create a responsive portfolio website with ReactJS, with animation, transitions and CSS styling.

## 2. Technologies used
| Technology | Purpose |
|------------|---------|
| ReactJS 18 | Component-based user interface |
| Vite | Development server and build tool |
| React Router (HashRouter) | Home page and Contact page navigation |
| Framer Motion | Hero name animation, floating and hovering skill icons, form entrance |
| React Icons | Skill and social icons |
| CSS3 | Layout (Grid, Flexbox), 3D flip animation, transitions, media queries |
| Git and GitHub | Version control and source sharing |
| GitHub Pages | Hosting |

## 3. Development workflow
1. **Planning:** listed the six requirements and sketched the layout (hero, skills, projects, contact).
2. **Setup:** created the project with Vite and installed the libraries.
3. **Data file:** stored name, skills and projects in `src/data.js` so content is separate from layout.
4. **Components:** built Navbar, Hero, Skills, Projects, Footer and the Contact page.
5. **Styling:** defined colour and font tokens as CSS variables, then styled each component.
6. **Animation:** used Framer Motion for the hero and skills, and CSS 3D transforms for the flip cards.
7. **Responsiveness:** added media queries at 900px and 640px, plus a mobile menu.
8. **Testing:** checked in the browser at desktop, tablet and phone widths and ran `npm run build`.
9. **Deployment:** pushed the code to GitHub and published with GitHub Pages.

## 4. Requirement checklist
| # | Requirement | How it was met |
|---|-------------|----------------|
| 1 | Hero section | Name animates in letter by letter, photo in an arch frame, short summary |
| 2 | Skills section | Eight icons float gently, scale and rotate on hover, and a name label slides up |
| 3 | Projects section | Cards flip in 3D on hover (tap or Enter on touch devices) to show details |
| 4 | Contact page | Form with validation, and a success or error message |
| 5 | Typography and colours | Bricolage Grotesque and Figtree fonts, violet, marigold and lilac palette |
| 6 | Responsive design | CSS Grid, Flexbox and media queries, tested on multiple sizes |

## 5. Design decisions
- **Palette:** ink `#17153B`, paper `#F4F2FF`, violet `#5B3DF5`, marigold `#FFB627`, lilac `#D9D2FF`.
- **Fonts:** Bricolage Grotesque for headings, Figtree for body text.
- **Accessibility:** visible keyboard focus, keyboard-operable flip cards, labelled form fields, reduced-motion support.

## 6. Challenges and solutions
- **Hover does not exist on touch screens:** flip cards also toggle on tap, and skill names show on focus.
- **Routing on GitHub Pages:** used HashRouter and `base: "./"` so refreshing a page does not give a 404.
- **Contact form without a server:** the form opens the email app by default, or posts to Formspree if configured.

## 7. How to run
```
npm install
npm run dev
```

## 8. Screenshots
(Insert screenshots of the home page, skills hover, flipped card, contact page and mobile view.)

## 9. Conclusion and future work
(Write 3 to 4 sentences: what you learned, and ideas such as a dark mode, a blog page or more projects.)
