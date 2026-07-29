<div align="center">
  <img src="https://img.shields.io/badge/Status-Live-4facfe?style=for-the-badge" alt="Status"/>
  <img src="https://img.shields.io/badge/Built%20With-Next.js%20%7C%20React-000?style=for-the-badge&logo=next.js" alt="Built With"/>
  <img src="https://img.shields.io/badge/Powered%20By-Bootstrap-7952B3?style=for-the-badge&logo=bootstrap" alt="Bootstrap"/>
</div>

<br/>

<div align="center">
  <h1>📂 Freelance Portfolio Website</h1>
  <p>A modern, dark-themed portfolio to showcase live client projects — organized by industry with tech stack badges & interactive modals.</p>
</div>

---

## ✨ Features

- 🏢 **Category-based layout** — Real Estate, Hospital, Import/Export & more
- 🖱️ **Click-to-open modals** — each category reveals all its projects
- 🛠 **Tech stack logos** — real Devicon icons for React, Next.js, Tailwind, Bootstrap & more
- 🌙 **Dark theme** — glassmorphism cards, gradient accents, smooth animations
- 📱 **Fully responsive** — works on desktop, tablet & mobile

---

## 🗂️ Project Structure

```
freelance-portfolio-website/
├── index.html          # Main page (Bootstrap 5 + Devicon CDN)
├── css/
│   └── style.css       # Custom dark theme, glassmorphism, animations
├── js/
│   └── script.js       # Project data, tech-icon mapping, modal logic
└── public/
    └── .gitkeep        # Static assets folder
```

---

## 🚀 Live Projects Showcased

| Category        | Project               | Tech                  | Link |
|-----------------|-----------------------|-----------------------|------|
| 🏘️ Real Estate | StayHaven Holdings    | Next.js, Tailwind CSS | [Live Demo](https://lode-website-demo.vercel.app/) |
| 🏘️ Real Estate | Banff Retreat         | Next.js, Bootstrap    | [Live Demo](https://chauhan2023.github.io/real-state-demo/) |
| 🏘️ Real Estate | Grand Spruce Lodge    | Next.js               | [Live Demo](https://chauhan2023.github.io/kahris/) |
| 🏥 Hospital     | Avatar Hospital       | Next.js, Tailwind CSS | [Live Demo](https://avatar-hospital.vercel.app/) |
| 🏥 Hospital     | Aakash Healthcare     | Next.js               | [Live Demo](https://aakashhealthcare.com/) |
| 🌍 Import/Export| Steadfast Overseas    | React                 | [Live Demo](https://steadfastoverseas.com/) |

---

## 🛠️ Adding a New Project

Open `js/script.js` and append to the `projectData` array:

```js
{
  category: "Your Category",
  icon: "🏷️",
  name: "Project Name",
  desc: "Short description of the project.",
  tech: ["React", "Tailwind CSS"],
  pages: "Home, About, Services, Contact",
  link: "https://your-live-site.com/"
}
```

The category card & modal will auto-generate. New tech logos can be added to `techIconMap`.

---

## 🧰 Tech Stack Used

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=fff&style=flat-square" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=fff&style=flat-square" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000&style=flat-square" />
  <img src="https://img.shields.io/badge/Bootstrap-7952B3?logo=bootstrap&logoColor=fff&style=flat-square" />
  <img src="https://img.shields.io/badge/Devicon_Icons-0D1117?style=flat-square" />
</p>

---

<div align="center">
  <p>Built with ❤️ by <a href="https://github.com/Chauhan2023">@Chauhan2023</a></p>
  <p>
    <a href="https://github.com/Chauhan2023/freelance-portfolio-website">🔗 Repository</a>
  </p>
</div>
