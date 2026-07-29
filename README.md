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
| 🏋️ Gym         | ShotFit               | HTML, CSS, JS, Bootstrap | [Live Demo](https://ex-coders.com/html/shotfit/index.html?storefront=envato-elements) |
| 🏋️ Gym         | GYMORT                | HTML, CSS, jQuery, Bootstrap 5 | [Live Demo](https://up2client.com/envato/gymort/preview-file/preview.html?storefront=envato-elements) |
| 🏋️ Gym         | Gymfito               | HTML, CSS, JS         | [Live Demo](https://gymfito.vercel.app/?storefront=envato-elements) |
| 🏋️ Gym         | BODKIT                | HTML, CSS, JS         | [Live Demo](https://bodkit-html.vercel.app/?storefront=envato-elements) |
| 🏫 School      | KidsAcademy           | HTML, CSS, JS         | [Live Demo](https://aminurislam.com/labartisan/kidsacademy-demo/kidsacademy/one-page.html) |
| 🏫 School      | StudyKids             | HTML, CSS, JS         | [Live Demo](https://html.themewant.com/studykids/) |
| 🏫 School      | DrivePro              | HTML, CSS, JS         | [Live Demo](https://demoxml.com/html/drivepro/) |
| 🏫 School      | Danceing              | HTML, CSS, JS, Bootstrap | [Live Demo](https://www.redbitesystems.com/themes/dance/index.html) |
| 🏫 School      | Shiv Nadar School     | Next.js               | [Live Demo](https://shivnadarschool.edu.in/) |
| 🏫 School      | SPA Delhi             | HTML, CSS, JS         | [Live Demo](https://www.spa.ac.in/) |
| 🏫 School      | St. Columba's School  | HTML, CSS, JS         | [Live Demo](https://stcolumbas.edu.in/) |
| 🏫 School      | St. Thomas' School    | HTML, CSS, JS         | [Live Demo](https://stthomasdwarka.com/) |
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

## 🌐 Browser Support

| Browser | Supported |
|---------|-----------|
| Chrome  | ✅        |
| Firefox | ✅        |
| Safari  | ✅        |
| Edge    | ✅        |

---

## 🚀 Getting Started

1. **Clone** the repository
   ```sh
   git clone https://github.com/Chauhan2023/freelance-portfolio-website.git
   ```
2. **Open** `index.html` in your browser — no build step needed.
3. **Preview** with Live Server (VS Code) for the best experience.

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

---

## 🔒 Security

- No server-side code — static files only
- No user data collection
- All external deps loaded via trusted CDNs

---

## 🔍 SEO

- Semantic HTML structure
- Mobile-first responsive design
- Fast load times (no build step)
- Accessible color contrast

---

## 🗺️ Roadmap

- [x] Category-based layout
- [x] Modal system for projects
- [x] Dark theme with glassmorphism
- [x] Stats counter section
- [ ] Search/filter projects
- [ ] Project detail pages
- [ ] CMS integration

---

## 📞 Contact Info

- **Email:** contact@websharthi.com
- **Phone:** +91 7493 097 468
- **GitHub:** [Chauhan2023](https://github.com/Chauhan2023)

---

## 🙏 Acknowledgments

- [Bootstrap 5](https://getbootstrap.com/) — UI framework
- [Bootstrap Icons](https://icons.getbootstrap.com/) — icon set
- [Devicon](https://devicon.dev/) — tech stack logos

---

## ⚡ Performance

- **No build step** — pure HTML/CSS/JS
- **CDN-loaded** dependencies — no `node_modules`
- **Lightweight** — under 50KB total (excluding CDN)

---

## 📋 Changelog

### v1.0.0 (2026-07-30)
- Initial release with category-based portfolio
- Dark theme with glassmorphism cards
- Modal system for project previews

---

## ❓ FAQ

**Q: Do I need to install anything?**
A: No. Just open `index.html` in a browser.

**Q: How do I add a new project?**
A: Append an object to the `projectData` array in `js/script.js`. See the "Adding a New Project" section above.

**Q: Can I change the theme colors?**
A: Yes. Edit the CSS variables in `css/style.css`.

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/amazing`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
