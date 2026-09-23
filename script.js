const modal = document.getElementById("languageModal");
const languageButton = document.getElementById("changeLanguage");
const languageTitle = document.getElementById("languageTitle");
const languageSubtitle = document.getElementById("languageSubtitle");

const translations = {
  pt: {
    modal: ["Escolha seu idioma", "Selecione a linguagem que você prefere para navegar na experiência."],
    nav: ["Sobre", "Experiência", "Skills", "Projetos", "Contato"],
    hero: ["// Software Engineer", "Técnico de NOC N1 no BRB · 19 anos", "Estudante de Engenharia de Software com experiência prática em infraestrutura, redes e suporte tecnológico. Busco evoluir combinando estudo, prática e desenvolvimento de soluções com foco em tecnologia e inovação.", "Projetos", "LinkedIn", "Projetos", "Tecnologias", "Graduação"],
    about: ["Sobre", "Sou estudante de Engenharia de Software no UniCEUB e Técnico de NOC N1 no Banco de Brasília. Minha rotina envolve monitoramento de redes, alertas e suporte de infraestrutura.", "Estou em constante evolução, com foco em tecnologia, lógica e desenvolvimento de soluções. Busco oportunidades que me permitam crescer profissionalmente e aprofundar conhecimentos em software e sistemas."],
    experience: ["Experiência", "Técnico de NOC N1", "Monitoramento de infraestrutura e redes em tempo real, gestão de alertas e triagem inicial de incidentes.", "Aprendiz — Suporte de TI", "Acompanhamento de SLAs, indicadores de atendimento e suporte operacional em processos de TI.", "Engenharia de Software", "Graduação em andamento com foco em lógica, programação, arquitetura de software e sistemas."],
    skills: ["Habilidades", "Languages", "Tools", "Concepts", "Algoritmos", "Monitoramento"],
    projects: ["Projetos", "Programa simples para entrada e cálculo de valores.", "Exercício de lógica para cálculo relacionado a horários.", "Aplicação com fluxo de cadastro e cálculo de uso.", "Prática de lógica, condições e organização de informações.", "Ver repositório completo →"],
    contact: ["Contato", "Estou aberto a novas oportunidades, projetos e colaborações em tecnologia."],
    locale: "pt-BR"
  },
  en: {
    modal: ["Choose your language", "Select the language you prefer to browse this experience."],
    nav: ["About", "Experience", "Skills", "Projects", "Contact"],
    hero: ["// Software Engineer", "NOC N1 Technician at BRB · 19 years old", "Software Engineering student with practical experience in infrastructure, networks and technical support. I am growing by combining education, practice and technology-focused solutions.", "Projects", "LinkedIn", "Projects", "Technologies", "Graduation"],
    about: ["About", "I am a Software Engineering student at UniCEUB and a NOC N1 Technician at Banco de Brasília. My routine involves network monitoring, alerts and infrastructure support.", "I am constantly developing my skills in technology, logic and solution development. I am looking for opportunities to grow professionally and deepen my knowledge of software and systems."],
    experience: ["Experience", "NOC N1 Technician", "Real-time infrastructure and network monitoring, alert management and initial incident triage.", "IT Support Trainee", "Monitoring SLAs, service indicators and operational support processes.", "Software Engineering", "Ongoing degree focused on logic, programming, software architecture and systems."],
    skills: ["Skills", "Languages", "Tools", "Concepts", "Algorithms", "Monitoring"],
    projects: ["Projects", "Simple program for input and value calculations.", "Logic exercise involving time calculations.", "Application with registration flow and usage calculation.", "Practice with logic, conditions and data organization.", "View complete repository →"],
    contact: ["Contact", "I am open to new opportunities, projects and collaborations in technology."],
    locale: "en-US"
  },
  es: {
    modal: ["Elige tu idioma", "Selecciona el idioma que prefieres para navegar por esta experiencia."],
    nav: ["Sobre mí", "Experiencia", "Habilidades", "Proyectos", "Contacto"],
    hero: ["// Ingeniero de Software", "Técnico NOC N1 en BRB · 19 años", "Estudiante de Ingeniería de Software con experiencia práctica en infraestructura, redes y soporte técnico. Busco crecer combinando estudio, práctica y soluciones tecnológicas.", "Proyectos", "LinkedIn", "Proyectos", "Tecnologías", "Graduación"],
    about: ["Sobre mí", "Soy estudiante de Ingeniería de Software en UniCEUB y Técnico NOC N1 en el Banco de Brasília. Mi rutina incluye monitoreo de redes, alertas y soporte de infraestructura.", "Estoy en constante evolución, enfocado en tecnología, lógica y desarrollo de soluciones. Busco oportunidades para crecer profesionalmente y profundizar mis conocimientos en software y sistemas."],
    experience: ["Experiencia", "Técnico NOC N1", "Monitoreo de infraestructura y redes en tiempo real, gestión de alertas y triage inicial de incidentes.", "Aprendiz de Soporte TI", "Seguimiento de SLA, indicadores de atención y procesos operativos de soporte.", "Ingeniería de Software", "Carrera en curso enfocada en lógica, programación, arquitectura de software y sistemas."],
    skills: ["Habilidades", "Lenguajes", "Herramientas", "Conceptos", "Algoritmos", "Monitoreo"],
    projects: ["Proyectos", "Programa simple para entrada y cálculo de valores.", "Ejercicio de lógica con cálculos relacionados con horarios.", "Aplicación con registro y cálculo de uso.", "Práctica de lógica, condiciones y organización de datos.", "Ver repositorio completo →"],
    contact: ["Contacto", "Estoy abierto a nuevas oportunidades, proyectos y colaboraciones en tecnología."],
    locale: "es-ES"
  },
  fr: {
    modal: ["Choisissez votre langue", "Sélectionnez la langue que vous préférez pour naviguer dans cette expérience."],
    nav: ["À propos", "Expérience", "Compétences", "Projets", "Contact"],
    hero: ["// Ingénieur logiciel", "Technicien NOC N1 chez BRB · 19 ans", "Étudiant en ingénierie logicielle avec une expérience pratique en infrastructure, réseaux et support technique. Je progresse en combinant études, pratique et solutions technologiques.", "Projets", "LinkedIn", "Projets", "Technologies", "Diplôme"],
    about: ["À propos", "Je suis étudiant en ingénierie logicielle à UniCEUB et technicien NOC N1 à Banco de Brasília. Mon travail comprend la surveillance des réseaux, les alertes et le support d'infrastructure.", "Je développe constamment mes compétences en technologie, logique et création de solutions. Je cherche des opportunités pour progresser et approfondir mes connaissances en logiciels et systèmes."],
    experience: ["Expérience", "Technicien NOC N1", "Surveillance en temps réel de l'infrastructure et des réseaux, gestion des alertes et triage initial des incidents.", "Stagiaire support informatique", "Suivi des SLA, des indicateurs de service et des processus de support.", "Ingénierie logicielle", "Formation en cours axée sur la logique, la programmation, l'architecture logicielle et les systèmes."],
    skills: ["Compétences", "Langages", "Outils", "Concepts", "Algorithmes", "Surveillance"],
    projects: ["Projets", "Programme simple de saisie et de calcul de valeurs.", "Exercice de logique avec des calculs horaires.", "Application avec inscription et calcul d'utilisation.", "Pratique de la logique, des conditions et de l'organisation des données.", "Voir le dépôt complet →"],
    contact: ["Contact", "Je suis ouvert aux opportunités, projets et collaborations dans la technologie."],
    locale: "fr-FR"
  },
  de: {
    modal: ["Sprache auswählen", "Wählen Sie die Sprache, in der Sie diese Erfahrung nutzen möchten."],
    nav: ["Über mich", "Erfahrung", "Fähigkeiten", "Projekte", "Kontakt"],
    hero: ["// Softwareentwickler", "NOC-N1-Techniker bei BRB · 19 Jahre", "Student der Softwaretechnik mit praktischer Erfahrung in Infrastruktur, Netzwerken und technischem Support. Ich verbinde Studium, Praxis und technologieorientierte Lösungen.", "Projekte", "LinkedIn", "Projekte", "Technologien", "Abschluss"],
    about: ["Über mich", "Ich studiere Softwaretechnik an der UniCEUB und arbeite als NOC-N1-Techniker bei Banco de Brasília. Zu meinen Aufgaben gehören Netzwerküberwachung, Warnungen und Infrastruktur-Support.", "Ich entwickle meine Kenntnisse in Technologie, Logik und Lösungsentwicklung ständig weiter. Ich suche Möglichkeiten, beruflich zu wachsen und mein Wissen über Software und Systeme zu vertiefen."],
    experience: ["Erfahrung", "NOC-N1-Techniker", "Echtzeitüberwachung von Infrastruktur und Netzwerken, Alarmmanagement und erste Störungsanalyse.", "Auszubildender IT-Support", "Überwachung von SLAs, Servicekennzahlen und Supportprozessen.", "Softwaretechnik", "Laufendes Studium mit Schwerpunkt auf Logik, Programmierung, Softwarearchitektur und Systemen."],
    skills: ["Fähigkeiten", "Sprachen", "Werkzeuge", "Konzepte", "Algorithmen", "Überwachung"],
    projects: ["Projekte", "Einfaches Programm zur Eingabe und Berechnung von Werten.", "Logikübung mit Zeitberechnungen.", "Anwendung mit Registrierung und Nutzungsberechnung.", "Übung in Logik, Bedingungen und Datenorganisation.", "Vollständiges Repository ansehen →"],
    contact: ["Kontakt", "Ich bin offen für neue Möglichkeiten, Projekte und Kooperationen im Technologiebereich."],
    locale: "de-DE"
  },
  it: {
    modal: ["Scegli la tua lingua", "Seleziona la lingua che preferisci per navigare in questa esperienza."],
    nav: ["Chi sono", "Esperienza", "Competenze", "Progetti", "Contatti"],
    hero: ["// Ingegnere del software", "Tecnico NOC N1 presso BRB · 19 anni", "Studente di ingegneria del software con esperienza pratica in infrastrutture, reti e supporto tecnico. Cresco combinando studio, pratica e soluzioni tecnologiche.", "Progetti", "LinkedIn", "Progetti", "Tecnologie", "Laurea"],
    about: ["Chi sono", "Sono uno studente di ingegneria del software presso UniCEUB e tecnico NOC N1 presso Banco de Brasília. Mi occupo di monitoraggio delle reti, avvisi e supporto dell'infrastruttura.", "Sviluppo continuamente le mie competenze in tecnologia, logica e sviluppo di soluzioni. Cerco opportunità per crescere professionalmente e approfondire le mie conoscenze di software e sistemi."],
    experience: ["Esperienza", "Tecnico NOC N1", "Monitoraggio in tempo reale di infrastrutture e reti, gestione degli avvisi e triage iniziale degli incidenti.", "Apprendista supporto IT", "Monitoraggio degli SLA, degli indicatori di servizio e dei processi di supporto.", "Ingegneria del software", "Laurea in corso incentrata su logica, programmazione, architettura software e sistemi."],
    skills: ["Competenze", "Linguaggi", "Strumenti", "Concetti", "Algoritmi", "Monitoraggio"],
    projects: ["Progetti", "Programma semplice per inserimento e calcolo di valori.", "Esercizio di logica con calcoli relativi agli orari.", "Applicazione con registrazione e calcolo dell'utilizzo.", "Pratica di logica, condizioni e organizzazione dei dati.", "Vedi repository completo →"],
    contact: ["Contatti", "Sono aperto a nuove opportunità, progetti e collaborazioni nel settore tecnologico."],
    locale: "it-IT"
  }
};

const setText = (selector, value) => {
  const element = document.querySelector(selector);
  if (element && value !== undefined) element.textContent = value;
};

function applyLanguage(language) {
  const selected = translations[language] || translations.pt;
  document.documentElement.lang = selected.locale;

  const nav = document.querySelectorAll(".nav a");
  selected.nav.forEach((value, index) => { if (nav[index]) nav[index].textContent = value; });

  setText(".eyebrow", selected.hero[0]);
  setText(".subtitle", selected.hero[1]);
  setText(".description", selected.hero[2]);
  setText(".primary-btn", selected.hero[3]);
  setText(".ghost-btn", selected.hero[4]);
  setText(".stats div:nth-child(1) span", selected.hero[5]);
  setText(".stats div:nth-child(2) span", selected.hero[6]);
  setText(".stats div:nth-child(3) span", selected.hero[7]);

  setText("#sobre h2", selected.about[0]);
  setText(".about-card p:nth-of-type(1)", selected.about[1]);
  setText(".about-card p:nth-of-type(2)", selected.about[2]);

  setText("#experiencia h2", selected.experience[0]);
  const experienceCards = document.querySelectorAll("#experiencia .timeline-card");
  [
    ["h3", selected.experience[1]], ["p:last-child", selected.experience[2]],
    ["h3", selected.experience[3]], ["p:last-child", selected.experience[4]],
    ["h3", selected.experience[5]], ["p:last-child", selected.experience[6]]
  ].forEach(([selector, value], index) => {
    const card = experienceCards[Math.floor(index / 2)];
    if (card) setText(`#experiencia .timeline-card:nth-child(${Math.floor(index / 2) + 1}) ${selector}`, value);
  });

  setText("#habilidades h2", selected.skills[0]);
  ["Languages", "Tools", "Concepts"].forEach((_, index) => setText(`#habilidades .skill-box:nth-child(${index + 1}) h3`, selected.skills[index + 1]));
  setText("#habilidades .skill-box:nth-child(3) li:nth-child(2)", selected.skills[4]);
  setText("#habilidades .skill-box:nth-child(3) li:nth-child(4)", selected.skills[5]);

  setText("#projetos h2", selected.projects[0]);
  document.querySelectorAll("#projetos .project-card p").forEach((element, index) => { element.textContent = selected.projects[index + 1]; });
  setText(".repo-link", selected.projects[5]);
  setText("#contato h2", selected.contact[0]);
  setText(".contact-wrap > p", selected.contact[1]);
  setText("#languageTitle", selected.modal[0]);
  setText("#languageSubtitle", selected.modal[1]);
  if (languageButton) languageButton.textContent = language.toUpperCase();
}

function openLanguageModal() { if (modal) modal.style.display = "flex"; }
function closeLanguageModal() { if (modal) modal.style.display = "none"; }

document.querySelectorAll("[data-language]").forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.language);
    closeLanguageModal();
  });
});

if (languageButton) languageButton.addEventListener("click", openLanguageModal);

// O idioma não é salvo: a escolha é solicitada novamente em toda visita.
applyLanguage("pt");
openLanguageModal();
