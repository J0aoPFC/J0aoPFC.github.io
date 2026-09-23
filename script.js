const languageModal = document.getElementById("languageModal");
const languageButton = document.getElementById("changeLanguage");
const languageTitle = document.getElementById("languageTitle");
const languageSubtitle = document.getElementById("languageSubtitle");

const translations = {
  pt: {
    lang: "pt-BR",
    modalTitle: "Escolha seu idioma",
    modalSubtitle: "Selecione a linguagem que desejar para navegar nesta experiência.",
    nav: ["Sobre", "Experiência", "Skills", "Projetos", "Contato"],
    eyebrow: "// Software Engineer",
    subtitle: "Técnico de NOC N1 no BRB · 19 anos",
    description: "Estudante de Engenharia de Software com experiência prática em infraestrutura, redes e suporte tecnológico. Busco evoluir combinando estudo, prática e desenvolvimento de soluções com foco em tecnologia e inovação.",
    projects: "Projetos",
    linkedin: "LinkedIn",
    statsProjects: "Projetos",
    statsTech: "Tecnologias",
    statsGrad: "Graduação",
    aboutTitle: "Sobre",
    aboutP1: "Sou estudante de Engenharia de Software no UniCEUB e Técnico de NOC N1 no Banco de Brasília. Minha rotina envolve monitoramento de redes, alertas e suporte de infraestrutura.",
    aboutP2: "Estou em constante evolução, com foco em tecnologia, lógica e desenvolvimento de soluções. Busco oportunidades que me permitam crescer profissionalmente e aprofundar conhecimentos em software e sistemas.",
    experienceTitle: "Experiência",
    experienceLabel1: "Técnico de NOC N1",
    experienceText1: "Monitoramento de infraestrutura e redes em tempo real, gestão de alertas e triagem inicial de incidentes.",
    experienceLabel2: "Aprendiz — Suporte de TI",
    experienceText2: "Acompanhamento de SLAs, indicadores de atendimento e suporte operacional em processos de TI.",
    experienceLabel3: "Engenharia de Software",
    experienceText3: "Graduação em andamento com foco em lógica, programação, arquitetura de software e sistemas.",
    skillsTitle: "Habilidades",
    skillsLabels: ["Languages", "Tools", "Concepts"],
    conceptsKeywords: ["POO", "Algoritmos", "ITIL", "Monitoramento"],
    projectsTitle: "Projetos",
    projectDescriptions: [
      "Programa simples para entrada e cálculo de valores.",
      "Exercício de lógica para cálculo relacionado a horários.",
      "Aplicação com fluxo de cadastro e cálculo de uso.",
      "Prática de lógica, condições e organização de informações."
    ],
    repoLink: "Ver repositório completo →",
    contactTitle: "Contato",
    contactText: "Estou aberto a novas oportunidades, projetos e colaborações em tecnologia."
  },
  en: {
    lang: "en-US",
    modalTitle: "Choose your language",
    modalSubtitle: "Select the language you prefer to browse this experience.",
    nav: ["About", "Experience", "Skills", "Projects", "Contact"],
    eyebrow: "// Software Engineer",
    subtitle: "NOC N1 Technician at BRB · 19 years old",
    description: "Software Engineering student with practical experience in infrastructure, networks and technical support. I seek to grow by combining study, practice and the development of technology-focused solutions.",
    projects: "Projects",
    linkedin: "LinkedIn",
    statsProjects: "Projects",
    statsTech: "Technologies",
    statsGrad: "Graduation",
    aboutTitle: "About",
    aboutP1: "I am a Software Engineering student at UniCEUB and a NOC N1 Technician at Banco de Brasília. My routine involves network monitoring, alerts and infrastructure support.",
    aboutP2: "I am constantly evolving, focused on technology, logic and solution development. I seek opportunities that allow me to grow professionally and deepen my knowledge of software and systems.",
    experienceTitle: "Experience",
    experienceLabel1: "NOC N1 Technician",
    experienceText1: "Real-time infrastructure and network monitoring, alert management and initial incident triage.",
    experienceLabel2: "IT Support Trainee",
    experienceText2: "Monitoring SLAs, service indicators and operational support processes.",
    experienceLabel3: "Software Engineering",
    experienceText3: "Ongoing degree focused on logic, programming, software architecture and systems.",
    skillsTitle: "Skills",
    skillsLabels: ["Languages", "Tools", "Concepts"],
    conceptsKeywords: ["OOP", "Algorithms", "ITIL", "Monitoring"],
    projectsTitle: "Projects",
    projectDescriptions: [
      "Simple program for input and value calculations.",
      "Logic exercise for time-related calculations.",
      "Application with registration flow and usage calculation.",
      "Practice in logic, conditions and information organization."
    ],
    repoLink: "View full repository →",
    contactTitle: "Contact",
    contactText: "I am open to new opportunities, projects and collaborations in technology."
  },
  es: {
    lang: "es-ES",
    modalTitle: "Elige tu idioma",
    modalSubtitle: "Selecciona el idioma que prefieres para navegar por la experiencia.",
    nav: ["Sobre mí", "Experiencia", "Habilidades", "Proyectos", "Contacto"],
    eyebrow: "// Ingeniero de Software",
    subtitle: "Técnico NOC N1 en BRB · 19 años",
    description: "Estudiante de Ingeniería de Software con experiencia práctica en infraestructura, redes y soporte técnico. Busco crecer combinando estudio, práctica y desarrollo de soluciones enfocado en tecnología.",
    projects: "Proyectos",
    linkedin: "LinkedIn",
    statsProjects: "Proyectos",
    statsTech: "Tecnologías",
    statsGrad: "Graduación",
    aboutTitle: "Sobre mí",
    aboutP1: "Soy estudiante de Ingeniería de Software en UniCEUB y Técnico NOC N1 en Banco de Brasília. Mi rutina incluye monitoreo de redes, alertas y soporte de infraestructura.",
    aboutP2: "Estoy en constante evolución, con foco en tecnología, lógica y desarrollo de soluciones. Busco oportunidades para crecer profesionalmente y profundizar mis conocimientos en software y sistemas.",
    experienceTitle: "Experiencia",
    experienceLabel1: "Técnico NOC N1",
    experienceText1: "Monitoreo de infraestructura y redes en tiempo real, gestión de alertas y triage inicial de incidentes.",
    experienceLabel2: "Aprendiz de Soporte TI",
    experienceText2: "Seguimiento de SLAs, indicadores de atención y soporte operativo en procesos de TI.",
    experienceLabel3: "Ingeniería de Software",
    experienceText3: "Carrera en curso con enfoque en lógica, programación, arquitectura de software y sistemas.",
    skillsTitle: "Habilidades",
    skillsLabels: ["Lenguajes", "Herramientas", "Conceptos"],
    conceptsKeywords: ["POO", "Algoritmos", "ITIL", "Monitoreo"],
    projectsTitle: "Proyectos",
    projectDescriptions: [
      "Programa sencillo para entrada y cálculo de valores.",
      "Ejercicio de lógica para cálculos relacionados con horarios.",
      "Aplicación con flujo de registro y cálculo de uso.",
      "Práctica de lógica, condiciones y organización de información."
    ],
    repoLink: "Ver repositorio completo →",
    contactTitle: "Contacto",
    contactText: "Estoy abierto a nuevas oportunidades, proyectos y colaboraciones en tecnología."
  }
};

function setText(selector, value) {
  if (!value) return;
  const element = document.querySelector(selector);
  if (element) element.textContent = value;
}

function applyLanguage(lang) {
  const selected = translations[lang] || translations.pt;

  document.documentElement.lang = selected.lang;

  const navLinks = document.querySelectorAll(".nav a");
  navLinks.forEach((link, index) => {
    if (selected.nav[index]) link.textContent = selected.nav[index];
  });

  setText(".eyebrow", selected.eyebrow);
  setText(".subtitle", selected.subtitle);
  setText(".description", selected.description);
  setText(".primary-btn", selected.projects);
  setText(".ghost-btn", selected.linkedin);

  setText(".stats div:nth-child(1) span", selected.statsProjects);
  setText(".stats div:nth-child(2) span", selected.statsTech);
  setText(".stats div:nth-child(3) span", selected.statsGrad);

  setText("#sobre h2", selected.aboutTitle);
  setText(".about-card p:nth-of-type(1)", selected.aboutP1);
  setText(".about-card p:nth-of-type(2)", selected.aboutP2);

  setText("#experiencia h2", selected.experienceTitle);
  const timelineCards = document.querySelectorAll(".timeline-card");
  const labels = [selected.experienceLabel1, selected.experienceLabel2, selected.experienceLabel3];
  const texts = [selected.experienceText1, selected.experienceText2, selected.experienceText3];

  timelineCards.forEach((card, index) => {
    const heading = card.querySelector("h3");
    const paragraph = card.querySelector("p:last-of-type");
    if (heading && labels[index]) heading.textContent = labels[index];
    if (paragraph && texts[index]) paragraph.textContent = texts[index];
  });

  setText("#habilidades h2", selected.skillsTitle);
  const skillBoxes = document.querySelectorAll(".skill-box");
  skillBoxes.forEach((box, index) => {
    const title = box.querySelector("h3");
    if (title && selected.skillsLabels[index]) title.textContent = selected.skillsLabels[index];
  });

  const conceptItems = document.querySelectorAll("#habilidades .skill-box:nth-child(3) li");
  conceptItems.forEach((item, index) => {
    if (selected.conceptsKeywords[index]) item.textContent = selected.conceptsKeywords[index];
  });

  setText("#projetos h2", selected.projectsTitle);
  const projectTexts = document.querySelectorAll("#projetos .project-card p");
  projectTexts.forEach((paragraph, index) => {
    if (selected.projectDescriptions[index]) paragraph.textContent = selected.projectDescriptions[index];
  });

  setText(".repo-link", selected.repoLink);
  setText("#contato h2", selected.contactTitle);
  setText(".contact-wrap > p", selected.contactText);

  if (languageTitle) languageTitle.textContent = selected.modalTitle;
  if (languageSubtitle) languageSubtitle.textContent = selected.modalSubtitle;
  if (languageButton) languageButton.textContent = lang.toUpperCase();
}

function openLanguageModal() {
  if (languageModal) languageModal.style.display = "flex";
}

function closeLanguageModal() {
  if (languageModal) languageModal.style.display = "none";
}

document.querySelectorAll("[data-language]").forEach((button) => {
  button.addEventListener("click", () => {
    const selectedLang = button.dataset.language;
    applyLanguage(selectedLang);
    closeLanguageModal();
  });
});

if (languageButton) {
  languageButton.addEventListener("click", openLanguageModal);
}

languageModal.style.display = "flex";
applyLanguage("pt");
