/* ---- Tech-name → devicon class mapping ---- */
const techIconMap = {
  "React":          "devicon-react-original colored",
  "Angular":        "devicon-angularjs-plain colored",
  "Vue.js":         "devicon-vuejs-plain colored",
  "Next.js":        "devicon-nextjs-original",
  "HTML":           "devicon-html5-plain colored",
  "CSS":            "devicon-css3-plain colored",
  "JS":             "devicon-javascript-plain colored",
  "Tailwind CSS":   "devicon-tailwindcss-plain colored",
  "Bootstrap":      "devicon-bootstrap-plain colored",
  "Bootstrap 5":    "devicon-bootstrap-plain colored",
  "Node.js":        "devicon-nodejs-plain colored",
  "PHP":            "devicon-php-plain colored",
  "Django":         "devicon-django-plain colored",
  "Laravel":        "devicon-laravel-plain colored",
  "Firebase":       "devicon-firebase-plain colored",
  "MongoDB":        "devicon-mongodb-plain colored",
  "PostgreSQL":     "devicon-postgresql-plain colored",
  "Express":        "devicon-express-original",
  "SCSS":           "devicon-sass-original colored",
  "SASS":           "devicon-sass-original colored",
  "jQuery":         "devicon-jquery-plain colored",
  "Material UI":    "devicon-materialui-plain colored",
  "Vuetify":        "devicon-vuetify-plain colored",
  "Prisma":         "devicon-prisma-original",
  "Styled Components": "devicon-react-original colored",
};

function renderTechStack(techArr) {
  return techArr
    .map((t) => {
      const cls = techIconMap[t];
      if (cls) {
        return `<span class="tech-item"><i class="${cls}"></i>${t}</span>`;
      }
      return `<span class="tech-item"><span class="tech-fallback">${t}</span></span>`;
    })
    .join("");
}

/* ---- DATA ---- */
const projectData = [
  // ──────── GYM ────────
  {
    category: "Gym",
    icon: "🏋️",
    name: "ShotFit",
    desc: "Fitness & gym HTML template with class scheduling, trainer profiles & shop.",
    tech: ["HTML", "CSS", "JS", "Bootstrap"],
    pages: "Home, About, Classes, Schedule, Trainer, Gallery, Shop, Blog, Contact",
    link: "https://ex-coders.com/html/shotfit/index.html?storefront=envato-elements"
  },
  {
    category: "Gym",
    icon: "🏋️",
    name: "GYMORT",
    desc: "Fitness & gym HTML template with 5 home pages, 55+ inner pages & multiple layouts.",
    tech: ["HTML", "CSS", "jQuery", "Bootstrap 5"],
    pages: "Multiple Home Demos, About, Team, BMI, Timetable, Program, Pricing, Blog, Gallery, 404, Coming Soon",
    link: "https://up2client.com/envato/gymort/preview-file/preview.html?storefront=envato-elements"
  },
  {
    category: "Gym",
    icon: "🏋️",
    name: "Gymfito",
    desc: "Fitness & gym HTML template with BMI calculator, trainer profiles & pricing plans.",
    tech: ["HTML", "CSS", "JS"],
    pages: "Home, About, Services, Classes, Trainer, Schedule, Pricing, Gallery, Blog, Contact",
    link: "https://gymfito.vercel.app/?storefront=envato-elements"
  },
  {
    category: "Gym",
    icon: "🏋️",
    name: "BODKIT",
    desc: "Gym & fitness HTML template with training schedules, team profiles & BMI calculator.",
    tech: ["HTML", "CSS", "JS"],
    pages: "Home, About, Services, Trainings, Schedule, Team, FAQ, Pricing, Blog, Contact, 404",
    link: "https://bodkit-html.vercel.app/?storefront=envato-elements"
  },

  // ──────── SCHOOL ────────
  {
    category: "School",
    icon: "🏫",
    name: "KidsAcademy",
    desc: "Kids education HTML template with class management, teacher profiles & gallery.",
    tech: ["HTML", "CSS", "JS"],
    pages: "Home, About, Classes, Teachers, Gallery, Blog, Contact",
    link: "https://aminurislam.com/labartisan/kidsacademy-demo/kidsacademy/one-page.html"
  },
  {
    category: "School",
    icon: "🏫",
    name: "StudyKids",
    desc: "LMS & university HTML template with courses, events & pricing plans.",
    tech: ["HTML", "CSS", "JS"],
    pages: "Home (4 styles), About, Team, Event, Program, Pricing, Courses, Blog, Contact",
    link: "https://html.themewant.com/studykids/"
  },
  {
    category: "School",
    icon: "🏫",
    name: "DrivePro",
    desc: "Driving school HTML template with instructor profiles & course packages.",
    tech: ["HTML", "CSS", "JS"],
    pages: "Home, About, Services, Instructors, Courses, Pricing, Blog, Contact",
    link: "https://demoxml.com/html/drivepro/"
  },
  {
    category: "School",
    icon: "🏫",
    name: "Danceing",
    desc: "Dance studio HTML template with class schedules, events & instructor profiles.",
    tech: ["HTML", "CSS", "JS", "Bootstrap"],
    pages: "Home, About, Services, Classes, Team, Gallery, Events, Blog, Contact",
    link: "https://www.redbitesystems.com/themes/dance/index.html"
  },
  {
    category: "School",
    icon: "🏫",
    name: "Shiv Nadar School",
    desc: "Premier K-12 school website with curriculum details, admissions & campus info.",
    tech: ["Next.js"],
    pages: "Home, About, Learn, Explore, Innovate, Evolve, Admissions, Careers, Schools",
    link: "https://shivnadarschool.edu.in/"
  },
  {
    category: "School",
    icon: "🏫",
    name: "SPA Delhi",
    desc: "School of Planning & Architecture — institution website with academics, research & placements.",
    tech: ["HTML", "CSS", "JS"],
    pages: "Home, About, Departments, Academics, Admissions, Research, Placement, Resources, Events",
    link: "https://www.spa.ac.in/"
  },
  {
    category: "School",
    icon: "🏫",
    name: "St. Columba's School",
    desc: "K-12 school website with academic excellence, achievements & parent portal.",
    tech: ["HTML", "CSS", "JS"],
    pages: "Home, About, Academics, Achievements, Gallery, Publications, Alumni, Admissions, Contact",
    link: "https://stcolumbas.edu.in/"
  },
  {
    category: "School",
    icon: "🏫",
    name: "St. Thomas' School",
    desc: "CBSE-affiliated school website with academics, co-curricular & admissions portal.",
    tech: ["HTML", "CSS", "JS"],
    pages: "Home, About, Academics, Beyond Academics, Infrastructure, Admissions, Gallery, Contact",
    link: "https://stthomasdwarka.com/"
  },

  // ──────── REAL ESTATE ────────
  {
    category: "Real Estate",
    icon: "🏘️",
    name: "StayHaven Holdings",
    desc: "Premium vacation rental platform with property listings, booking & dynamic pricing.",
    tech: ["Next.js", "Tailwind CSS"],
    pages: "Home, Properties, Experience, Contact",
    link: "https://lode-website-demo.vercel.app/"
  },
  {
    category: "Real Estate",
    icon: "🏘️",
    name: "Banff Retreat",
    desc: "Luxury vacation home rental with virtual tour, gallery & direct booking system.",
    tech: ["Next.js", "Bootstrap"],
    pages: "Home, Overview, Showcase, Gallery, Amenities, Rates, FAQs, Contact",
    link: "https://chauhan2023.github.io/real-state-demo/"
  },
  {
    category: "Real Estate",
    icon: "🏘️",
    name: "Grand Spruce Lodge",
    desc: "Waterfront lodge & cabin rentals with direct booking, live availability & real-time calendar sync.",
    tech: ["Next.js"],
    pages: "Home, Our Cabins, Resort Amenities, Live Availability, Reviews",
    link: "https://chauhan2023.github.io/kahris/"
  },
  {
    category: "Hospital",
    icon: "🏥",
    name: "Avatar Hospital",
    desc: "400-bed multispeciality hospital with online appointment booking, doctor profiles & health library.",
    tech: ["Next.js", "Tailwind CSS"],
    pages: "Home, About Us, Services, Doctors, Blog, Appointment, Contact Us",
    link: "https://avatar-hospital.vercel.app/"
  },
  {
    category: "Hospital",
    icon: "🏥",
    name: "Aakash Healthcare",
    desc: "Super speciality hospital in Dwarka, Delhi with multi-department care & online consultations.",
    tech: ["Next.js"],
    pages: "Home, Specialities, Doctors, Telemedicine, Health Blogs, Awards, Contact",
    link: "https://aakashhealthcare.com/"
  },
  {
    category: "Import/Export",
    icon: "🌍",
    name: "Steadfast Overseas",
    desc: "Global trading & sourcing company website with product showcase and client portal.",
    tech: ["React"],
    pages: "Home, About, Products, Sourcing, Contact",
    link: "https://steadfastoverseas.com/"
  }
];

/* ---- group by category ---- */
const groups = {};
projectData.forEach((p) => {
  if (!groups[p.category]) groups[p.category] = [];
  groups[p.category].push(p);
});

const categoryMeta = {
  Gym:            { icon: "🏋️", desc: "Fitness & gym websites with class scheduling & trainer profiles." },
  School:         { icon: "🏫", desc: "School & education websites with academics, admissions & events." },
  "Real Estate":  { icon: "🏘️", desc: "Property portals with listings, maps & agent directories." },
  Hospital:       { icon: "🏥", desc: "Healthcare websites with appointments & doctor profiles." },
  "Import/Export":{ icon: "🌍", desc: "Global trade & sourcing websites with product catalogs." },
};

/* ---- render category cards ---- */
const categoryGrid = document.getElementById("categoryGrid");

Object.entries(groups).forEach(([cat, projects], idx) => {
  const meta = categoryMeta[cat] || { icon: "📁", desc: "" };
  const col = document.createElement("div");
  col.className = "col-md-6 col-lg-4";

  col.innerHTML = `
    <div class="cat-card" data-category="${cat}">
      <div class="cat-icon">${meta.icon}</div>
      <h5>${cat}</h5>
      <div class="cat-count">${projects.length} project${projects.length > 1 ? "s" : ""}</div>
      <div class="cat-desc">${meta.desc}</div>
      <div class="cat-badge">Click to view →</div>
    </div>
  `;

  col.querySelector(".cat-card").addEventListener("click", () => openModal(cat));
  categoryGrid.appendChild(col);
});

/* ---- modal ---- */
const modalEl = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalBody = document.getElementById("modalBody");
const bsModal = new bootstrap.Modal(modalEl);

function openModal(category) {
  const projects = groups[category];
  const meta = categoryMeta[category] || { icon: "📁" };

  modalTitle.textContent = `${meta.icon} ${category} Projects`;

  modalBody.innerHTML = `<div class="row g-4">${projects
    .map(
      (p) => `
      <div class="col-md-6">
        <div class="project-card">
          <h5>${p.name}</h5>
          <p class="p-desc">${p.desc}</p>
          <div class="tech-stack">${renderTechStack(p.tech)}</div>
          <p class="p-pages"><i class="bi bi-file-text"></i>${p.pages}</p>
          <a href="${p.link}" target="_blank" class="demo-link">
            <i class="bi bi-box-arrow-up-right"></i> Live Demo
          </a>
        </div>
      </div>
    `
    )
    .join("")}</div>`;

  bsModal.show();
}
