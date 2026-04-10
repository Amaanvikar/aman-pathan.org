# Aman Pathan — Portfolio

Personal portfolio website built with **Gatsby**, **React**, and **Styled Components**.

Live URL → **https://Amaanvikar.github.io**

---

## 🛠 Tech Stack (matches reference exactly)

| Tool                      | Version | Purpose                          |
| ------------------------- | ------- | -------------------------------- |
| Gatsby                    | v5      | Static site generator            |
| React                     | v18     | UI components                    |
| Styled Components         | v6      | CSS-in-JS styling                |
| ScrollReveal              | v4      | Scroll animations                |
| AnimeJS                   | v3      | JS animations                    |
| gatsby-transformer-remark | v6      | Markdown → HTML (jobs, projects) |
| gh-pages                  | v6      | Deploy to GitHub Pages           |

---

## 📁 Folder Structure

```
aman-portfolio/
├── content/
│   ├── jobs/
│   │   ├── Flexprice.md          ← Job experience entries
│   │   ├── WindHans.md
│   │   └── Arysidh.md
│   └── featured/
│       ├── PingUp/index.md       ← Project cards
│       ├── ChatSwift/index.md
│       └── HabitTrackPro/index.md
├── src/
│   ├── components/
│   │   ├── sections/
│   │   │   ├── hero.js           ← Landing hero
│   │   │   ├── about.js          ← About + skills
│   │   │   ├── jobs.js           ← Experience tabs
│   │   │   ├── featured.js       ← Project cards
│   │   │   └── contact.js        ← Contact CTA
│   │   ├── nav.js
│   │   ├── social.js             ← Left sidebar icons
│   │   ├── email.js              ← Right sidebar email
│   │   ├── footer.js
│   │   ├── head.js
│   │   ├── layout.js
│   │   └── index.js
│   ├── pages/
│   │   ├── index.js              ← Main page
│   │   └── 404.js
│   ├── styles/
│   │   └── global.css
│   ├── utils/
│   │   └── sr.js                 ← ScrollReveal config
│   └── images/
│       └── logo.png
├── static/                       ← Put resume.pdf here
├── gatsby-config.js
├── gatsby-browser.js
├── gatsby-ssr.js
├── gatsby-node.js
└── package.json
```

---

## 🚀 Local Setup

### Prerequisites

- Node.js v18+ (use `nvm install` with the `.nvmrc`)
- npm or yarn

### Steps

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm start
# → Opens at http://localhost:8000
```

---

## 🌐 Deploy to GitHub Pages

### One-time setup

1. Create a GitHub repo named exactly: **`Amaanvikar.github.io`**
2. Push your code to the `main` branch

### Deploy command

```bash
npm run deploy
```

This runs `gatsby build` then pushes the `public/` folder to the `main` branch automatically.  
Your live site will be at: **https://Amaanvikar.github.io**

> GitHub Pages may take 1–3 minutes to go live after first deploy.

---

## ✏️ How to Update Content

### Add / edit a job

Edit any file in `content/jobs/`. Frontmatter fields:

```md
---
date: '2026-01-01'        ← Controls sort order (newest first)
title: 'Your Title'
company: 'Company Name'
location: 'City, State'
range: 'Month Year – Month Year'
url: 'https://company.com'
---

Bullet point content here using markdown.
```

### Add / edit a project

Edit `content/featured/ProjectName/index.md`. Frontmatter fields:

```md
---
date: "2024-01-01"
title: "Project Name"
github: "https://github.com/..."
external: "https://live-url.com"
tech:
  - React
  - Node.js
showInProjects: true
---

Project description here.
```

### Add your resume

Drop a `resume.pdf` file into the `static/` folder.  
Then update `src/components/nav.js` — change the `Get In Touch` button href to `/resume.pdf`.

### Add your photo

(recommended: 500×500px square PNG).  
In `src/components/sections/about.js`, replace the `<AvatarPlaceholder>` with a Gatsby `<StaticImage>`.

---

## 🎨 Color Reference (exact match to reference)

| Color          | Hex       |
| -------------- | --------- |
| Navy           | `#0a192f` |
| Light Navy     | `#112240` |
| Lightest Navy  | `#233554` |
| Slate          | `#8892b0` |
| Light Slate    | `#a8b2d8` |
| Lightest Slate | `#ccd6f6` |
| White          | `#e6f1ff` |
| Green (teal)   | `#64ffda` |

All variables are in `src/styles/global.css` under `:root`.

---

## 📌 Important Notes

- The reference portfolio (Brittany Chiang v4) is MIT licensed — attribution is required.
  Footer already credits the original design.
- Node 18 is required. If you see build errors, run `nvm use 18`.
- If Gatsby throws a cache error: `npm run clean && npm start`
