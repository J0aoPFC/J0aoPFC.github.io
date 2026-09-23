const languageModal = document.getElementById("languageModal");
const languageButton = document.getElementById("changeLanguage");
const languageTitle = document.getElementById("languageTitle");
const languageSubtitle = document.getElementById("languageSubtitle");
const languageOptions = document.querySelector(".language-options, .lang-options");

const translations = {
  pt: {
    lang: "pt-BR",
    flag: "🇧🇷",
    label: "Português",
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
    flag: "🇺🇸",
    label: "English",
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
    flag: "🇪🇸",
    label: "Español",
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
  },
  fr: {
    lang: "fr-FR",
    flag: "🇫🇷",
    label: "Français",
    modalTitle: "Choisissez votre langue",
    modalSubtitle: "Sélectionnez la langue que vous préférez pour naviguer dans cette expérience.",
    nav: ["À propos", "Expérience", "Compétences", "Projets", "Contact"],
    eyebrow: "// Ingénieur Logiciel",
    subtitle: "Technicien NOC N1 chez BRB · 19 ans",
    description: "Étudiant en génie logiciel avec une expérience pratique en infrastructure, réseaux et support technique. Je cherche à évoluer en combinant étude, pratique et développement de solutions axées sur la technologie et l'innovation.",
    projects: "Projets",
    linkedin: "LinkedIn",
    statsProjects: "Projets",
    statsTech: "Technologies",
    statsGrad: "Diplôme",
    aboutTitle: "À propos",
    aboutP1: "Je suis étudiant en génie logiciel à l'UniCEUB et technicien NOC N1 à la Banco de Brasília. Mon quotidien comprend la surveillance des réseaux, la gestion des alertes et le support d'infrastructure.",
    aboutP2: "Je suis en constante évolution, avec un accent sur la technologie, la logique et le développement de solutions. Je recherche des opportunités qui me permettent de progresser professionnellement et d'approfondir mes connaissances en logiciels et systèmes.",
    experienceTitle: "Expérience",
    experienceLabel1: "Technicien NOC N1",
    experienceText1: "Surveillance en temps réel de l'infrastructure et des réseaux, gestion des alertes et triage initial des incidents.",
    experienceLabel2: "Apprenti — Support informatique",
    experienceText2: "Suivi des SLA, des indicateurs de service et du support opérationnel dans les processus informatiques.",
    experienceLabel3: "Génie logiciel",
    experienceText3: "Formation en cours axée sur la logique, la programmation, l'architecture logicielle et les systèmes.",
    skillsTitle: "Compétences",
    skillsLabels: ["Langages", "Outils", "Concepts"],
    conceptsKeywords: ["POO", "Algorithmes", "ITIL", "Surveillance"],
    projectsTitle: "Projets",
    projectDescriptions: [
      "Programme simple de saisie et de calcul de valeurs.",
      "Exercice de logique pour des calculs liés aux horaires.",
      "Application avec flux d'inscription et calcul d'utilisation.",
      "Pratique de la logique, des conditions et de l'organisation des informations."
    ],
    repoLink: "Voir le dépôt complet →",
    contactTitle: "Contact",
    contactText: "Je suis ouvert à de nouvelles opportunités, projets et collaborations en technologie."
  },
  de: {
    lang: "de-DE",
    flag: "🇩🇪",
    label: "Deutsch",
    modalTitle: "Sprache auswählen",
    modalSubtitle: "Wählen Sie die Sprache, die Sie für diese Erfahrung bevorzugen.",
    nav: ["Über mich", "Erfahrung", "Fähigkeiten", "Projekte", "Kontakt"],
    eyebrow: "// Softwareingenieur",
    subtitle: "NOC-N1-Techniker bei BRB · 19 Jahre",
    description: "Software-Engineering-Student mit praktischer Erfahrung in Infrastruktur, Netzwerken und technischem Support. Ich möchte durch die Kombination von Lernen, Praxis und der Entwicklung technologieorientierter Lösungen wachsen.",
    projects: "Projekte",
    linkedin: "LinkedIn",
    statsProjects: "Projekte",
    statsTech: "Technologien",
    statsGrad: "Abschluss",
    aboutTitle: "Über mich",
    aboutP1: "Ich bin Software-Engineering-Student an der UniCEUB und NOC-N1-Techniker bei Banco de Brasília. Mein Alltag umfasst Netzwerküberwachung, Alarmierung und Infrastruktur-Support.",
    aboutP2: "Ich entwickle mich ständig weiter, mit Fokus auf Technologie, Logik und Lösungsentwicklung. Ich suche Möglichkeiten, mich beruflich weiterzuentwickeln und mein Wissen in Software und Systemen zu vertiefen.",
    experienceTitle: "Erfahrung",
    experienceLabel1: "NOC-N1-Techniker",
    experienceText1: "Echtzeitüberwachung von Infrastruktur und Netzwerken, Alarmverwaltung und erste Vorfallsklassifizierung.",
    experienceLabel2: "Auszubildender — IT-Support",
    experienceText2: "Überwachung von SLAs, Serviceindikatoren und operativem Support in IT-Prozessen.",
    experienceLabel3: "Software-Engineering",
    experienceText3: "Laufendes Studium mit Schwerpunkt auf Logik, Programmierung, Softwarearchitektur und Systeme.",
    skillsTitle: "Fähigkeiten",
    skillsLabels: ["Sprachen", "Werkzeuge", "Konzepte"],
    conceptsKeywords: ["OOP", "Algorithmen", "ITIL", "Überwachung"],
    projectsTitle: "Projekte",
    projectDescriptions: [
      "Einfaches Programm zur Eingabe und Berechnung von Werten.",
      "Logikübung für zeitbezogene Berechnungen.",
      "Anwendung mit Registrierungsablauf und Nutzungsberechnung.",
      "Übung in Logik, Bedingungen und Informationsorganisation."
    ],
    repoLink: "Vollständiges Repository ansehen →",
    contactTitle: "Kontakt",
    contactText: "Ich bin offen für neue Möglichkeiten, Projekte und Kooperationen im Technologiebereich."
  },
  it: {
    lang: "it-IT",
    flag: "🇮🇹",
    label: "Italiano",
    modalTitle: "Scegli la tua lingua",
    modalSubtitle: "Seleziona la lingua che preferisci per navigare in questa esperienza.",
    nav: ["Chi sono", "Esperienza", "Competenze", "Progetti", "Contatto"],
    eyebrow: "// Ingegnere del Software",
    subtitle: "Tecnico NOC N1 presso BRB · 19 anni",
    description: "Studente di Ingegneria del Software con esperienza pratica in infrastrutture, reti e supporto tecnico. Cerco di crescere combinando studio, pratica e sviluppo di soluzioni orientate alla tecnologia e all'innovazione.",
    projects: "Progetti",
    linkedin: "LinkedIn",
    statsProjects: "Progetti",
    statsTech: "Tecnologie",
    statsGrad: "Laurea",
    aboutTitle: "Chi sono",
    aboutP1: "Sono uno studente di Ingegneria del Software presso UniCEUB e Tecnico NOC N1 presso Banco de Brasília. La mia routine include il monitoraggio delle reti, la gestione degli avvisi e il supporto infrastrutturale.",
    aboutP2: "Sono in continua evoluzione, con un focus su tecnologia, logica e sviluppo di soluzioni. Cerco opportunità che mi permettano di crescere professionalmente e approfondire le mie conoscenze in software e sistemi.",
    experienceTitle: "Esperienza",
    experienceLabel1: "Tecnico NOC N1",
    experienceText1: "Monitoraggio in tempo reale di infrastrutture e reti, gestione degli avvisi e smistamento iniziale degli incidenti.",
    experienceLabel2: "Apprendista — Supporto IT",
    experienceText2: "Monitoraggio degli SLA, degli indicatori di servizio e del supporto operativo nei processi IT.",
    experienceLabel3: "Ingegneria del Software",
    experienceText3: "Laurea in corso con focus su logica, programmazione, architettura software e sistemi.",
    skillsTitle: "Competenze",
    skillsLabels: ["Linguaggi", "Strumenti", "Concetti"],
    conceptsKeywords: ["OOP", "Algoritmi", "ITIL", "Monitoraggio"],
    projectsTitle: "Progetti",
    projectDescriptions: [
      "Programma semplice per l'inserimento e il calcolo di valori.",
      "Esercizio di logica per calcoli relativi agli orari.",
      "Applicazione con flusso di registrazione e calcolo dell'utilizzo.",
      "Pratica di logica, condizioni e organizzazione delle informazioni."
    ],
    repoLink: "Vedi il repository completo →",
    contactTitle: "Contatto",
    contactText: "Sono aperto a nuove opportunità, progetti e collaborazioni nel campo della tecnologia."
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

function ensureLanguageButtons() {
  if (!languageOptions) return;
  Object.entries(translations).forEach(([code, language]) => {
    let button = languageOptions.querySelector(`[data-language="${code}"], [data-lang="${code}"]`);
    if (!button) {
      button = document.createElement("button");
      button.type = "button";
      button.dataset.language = code;
      languageOptions.appendChild(button);
    }
    button.textContent = `${language.flag} ${language.label}`;
  });
}

function openLanguageModal() {
  if (languageModal) languageModal.style.display = "flex";
}

function closeLanguageModal() {
  if (languageModal) languageModal.style.display = "none";
}

// Monta os botões de idioma dinamicamente (usa flag + label de "translations")
ensureLanguageButtons();

// Um único listener por botão de idioma, cobrindo data-language e data-lang
document.querySelectorAll("[data-language], [data-lang]").forEach((button) => {
  button.addEventListener("click", () => {
    const selectedLang = button.dataset.language || button.dataset.lang;
    applyLanguage(selectedLang);
    closeLanguageModal();
  });
});

if (languageButton) {
  languageButton.addEventListener("click", openLanguageModal);
}

// Idioma padrão inicial + modal aberto na visita
// (Idioma não é salvo no navegador; o modal aparece em cada visita.)
applyLanguage("pt");
openLanguageModal();
