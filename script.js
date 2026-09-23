:root {
  --bg: #050914;
  --bg-2: #0b1220;
  --panel: rgba(14, 20, 31, 0.9);
  --panel-strong: rgba(8, 12, 19, 0.96);
  --line: rgba(125, 160, 195, 0.2);
  --text: #eaf7ff;
  --muted: #9bb5ca;
  --primary: #7ef9d8;
  --primary-2: #7ad8ff;
  --pink: #ff5fd2;
  --red: #ff5f7a;
  --yellow: #ffc857;
  --green: #7af4a8;
  --shadow: 0 0 22px rgba(126, 249, 216, 0.2);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background:
    radial-gradient(circle at top left, rgba(126,249,216,0.12), transparent 25%),
    radial-gradient(circle at bottom right, rgba(255,95,210,0.12), transparent 30%),
    var(--bg);
  color: var(--text);
  font-family: "Inter", sans-serif;
  min-height: 100vh;
}

a {
  text-decoration: none;
  color: inherit;
}

.noise {
  position: fixed;
  inset: 0;
  background-image: radial-gradient(rgba(255,255,255,0.08) 0.5px, transparent 0.5px);
  background-size: 12px 12px;
  opacity: 0.12;
  pointer-events: none;
  z-index: 0;
}

.grid {
  position: fixed;
  inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
  background-size: 28px 28px;
  pointer-events: none;
  z-index: 0;
}

.container {
  position: relative;
  z-index: 1;
  width: min(1180px, calc(100% - 36px));
  margin: 0 auto;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: min(1180px, calc(100% - 36px));
  margin: 0 auto;
  padding: 22px 0;
  border-bottom: 1px solid var(--line);
  background: rgba(5, 9, 20, 0.7);
  backdrop-filter: blur(14px);
}

.logo-wrap {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo-mark {
  color: var(--primary);
  font-family: "Orbitron", sans-serif;
  font-size: 0.92rem;
}

.logo-name {
  font-family: "Orbitron", sans-serif;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  font-size: 0.8rem;
}

.nav {
  display: flex;
  align-items: center;
  gap: 26px;
  color: var(--muted);
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.nav a {
  transition: color 0.2s ease;
}

.nav a:hover {
  color: var(--primary);
}

.lang-button {
  border: 1px solid rgba(126, 249, 216, 0.5);
  background: rgba(126, 249, 216, 0.06);
  color: var(--primary);
  padding: 10px 14px;
  border-radius: 999px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
}

.lang-button:hover {
  box-shadow: 0 0 18px rgba(126, 249, 216, 0.25);
}

.hero {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  align-items: center;
  gap: 32px;
  min-height: 700px;
  padding: 90px 0 55px;
}

.eyebrow {
  display: inline-block;
  margin-bottom: 20px;
  color: var(--primary);
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
}

.hero h1 {
  margin: 0;
  font-family: "Orbitron", sans-serif;
  font-size: clamp(3.1rem, 6vw, 6.4rem);
  line-height: 0.96;
  letter-spacing: -0.06em;
}

.hero h1 span {
  color: var(--primary);
  text-shadow: 0 0 20px rgba(126,249,216,0.45);
}

.subtitle {
  margin-top: 22px;
  color: var(--muted);
  font-size: 1.1rem;
  letter-spacing: 0.03em;
}

.description {
  max-width: 640px;
  margin-top: 18px;
  color: #d4e5f5;
  line-height: 1.8;
  font-size: 1.02rem;
}

.cta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 30px;
}

.primary-btn,
.ghost-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0 22px;
  border: 1px solid var(--line);
  font-weight: 700;
  transition: transform 0.2s ease;
}

.primary-btn {
  background: linear-gradient(120deg, var(--primary), var(--primary-2));
  color: #071119;
  border-color: transparent;
  box-shadow: 0 0 24px rgba(126,249,216,0.22);
}

.ghost-btn {
  background: rgba(255,255,255,0.02);
  color: var(--text);
}

.primary-btn:hover,
.ghost-btn:hover {
  transform: translateY(-2px);
}

.stats {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  margin-top: 42px;
}

.stats div {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.stats strong {
  color: var(--primary);
  font-family: "Orbitron", sans-serif;
  font-size: 1.8rem;
}

.stats span {
  color: var(--muted);
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.console {
  background: rgba(7, 12, 18, 0.92);
  border: 1px solid var(--line);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 0 36px rgba(122, 216, 255, 0.25);
}

.console-header {
  display: flex;
  align-items: center;
  gap: 8px;
  height: 48px;
  padding: 0 16px;
  background: rgba(255,255,255,0.03);
  border-bottom: 1px solid var(--line);
}

.dot {
  width: 11px;
  height: 11px;
  border-radius: 50%;
}

.red { background: var(--red); }
.yellow { background: var(--yellow); }
.green { background: var(--green); }

.console-title {
  margin-left: 10px;
  color: var(--muted);
  font-size: 0.7rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.console-body {
  padding: 24px 18px 20px;
  font-family: "Consolas", monospace;
  font-size: 0.92rem;
  line-height: 1.9;
}

.line {
  color: #dfefff;
}

.indent {
  padding-left: 20px;
}

.var { color: #7cc9ff; }
.string { color: #8df5b7; }

.section {
  padding: 90px 0;
  border-top: 1px solid var(--line);
}

.section-head {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 30px;
}

.section-num {
  color: var(--primary);
  font-size: 0.72rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  font-weight: 700;
}

.section-head h2 {
  margin: 0;
  font-family: "Orbitron", sans-serif;
  font-size: clamp(2rem, 3vw, 3rem);
  letter-spacing: -0.05em;
}

.about-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 26px;
}

.about-card,
.skill-box,
.timeline-card,
.project-card {
  background: rgba(13, 18, 27, 0.9);
  border: 1px solid var(--line);
  border-radius: 18px;
  box-shadow: 0 0 22px rgba(122,216,255,0.08);
}

.about-card {
  padding: 28px;
}

.avatar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 78px;
  height: 78px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--pink));
  color: #08131e;
  font-weight: 800;
  font-size: 1.5rem;
  margin-bottom: 18px;
}

.about-card p {
  margin: 0 0 16px;
  color: #d7e4f3;
  line-height: 1.8;
}

.pill-box {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-content: flex-start;
  padding: 22px;
  background: rgba(13,18,27,0.9);
  border: 1px solid var(--line);
  border-radius: 18px;
}

.pill-box span {
  border: 1px solid var(--line);
  border-radius: 999px;
  padding: 9px 12px;
  font-size: 0.8rem;
  color: var(--muted);
  background: rgba(255,255,255,0.02);
}

.timeline {
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.timeline-item {
  display: grid;
  grid-template-columns: 170px 1fr;
  gap: 22px;
  align-items: start;
}

.timeline-date {
  padding-top: 24px;
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--primary);
  font-weight: 700;
}

.timeline-card {
  padding: 26px 22px;
}

.timeline-card h3 {
  margin: 0 0 10px;
  font-size: 1.25rem;
}

.company {
  margin: 0 0 12px;
  color: var(--primary);
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.timeline-card p {
  margin: 0;
  color: #dceaf7;
  line-height: 1.75;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
}

.skill-box {
  padding: 26px 22px;
}

.skill-box h3 {
  margin: 0 0 18px;
  color: var(--primary);
  font-size: 0.8rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.skill-box ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
  color: #e8f4ff;
}

.skill-box li::before {
  content: "▸ ";
  color: var(--primary);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
}

.project-card {
  display: block;
  padding: 24px 22px;
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.project-card:hover {
  transform: translateY(-4px);
  border-color: rgba(126,249,216,0.6);
  box-shadow: 0 0 28px rgba(126,249,216,0.14);
}

.project-tag {
  display: inline-block;
  padding: 7px 10px;
  background: rgba(126,249,216,0.08);
  border: 1px solid rgba(126,249,216,0.3);
  border-radius: 999px;
  color: var(--primary);
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.project-card h3 {
  margin: 18px 0 10px;
  font-size: 1.35rem;
}

.project-card p {
  margin: 0;
  color: #d5e3f4;
  line-height: 1.75;
}

.repo-link-wrap {
  margin-top: 28px;
}

.repo-link {
  color: var(--primary);
  font-weight: 700;
}

.contact-wrap {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 26px;
  align-items: center;
}

.contact-wrap p {
  margin: 0;
  color: #d9eaf8;
  line-height: 1.8;
}

.contact-links {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.contact-links a {
  color: var(--primary);
  font-weight: 700;
}

.site-footer {
  width: min(1180px, calc(100% - 36px));
  margin: 0 auto;
  padding: 26px 0 44px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  border-top: 1px solid var(--line);
  color: var(--muted);
  font-size: 0.8rem;
}

.language-modal {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(4, 8, 15, 0.8);
  backdrop-filter: blur(12px);
}

.language-card {
  width: min(480px, calc(100% - 32px));
  padding: 32px 24px 22px;
  border: 1px solid var(--line);
  background: rgba(8, 12, 19, 0.95);
  border-radius: 22px;
  box-shadow: 0 28px 80px rgba(0,0,0,0.45);
  text-align: center;
}

.badge {
  display: inline-block;
  padding: 8px 12px;
  margin-bottom: 20px;
  border: 1px solid rgba(126,249,216,0.5);
  border-radius: 999px;
  background: rgba(126,249,216,0.05);
  color: var(--primary);
  font-size: 0.7rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.language-card h2 {
  margin: 0 0 12px;
  font-family: "Orbitron", sans-serif;
  font-size: clamp(2rem, 5vw, 3rem);
}

.language-card p {
  margin: 0 0 24px;
  color: var(--muted);
  line-height: 1.7;
}

.language-options {
  display: grid;
  gap: 12px;
}

.language-options button {
  width: 100%;
  padding: 14px 16px;
  border-radius: 12px;
  border: 1px solid var(--line);
  background: rgba(255,255,255,0.02);
  color: var(--text);
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
}

.language-options button:hover {
  border-color: rgba(126,249,216,0.7);
  box-shadow: 0 0 22px rgba(126,249,216,0.18);
  transform: translateY(-1px);
}

@media (max-width: 900px) {
  .hero {
    grid-template-columns: 1fr;
    padding-top: 60px;
  }

  .about-grid,
  .skills-grid,
  .projects-grid,
  .contact-wrap {
    grid-template-columns: 1fr;
  }

  .timeline-item {
    grid-template-columns: 1fr;
  }

  .timeline-date {
    padding-top: 0;
  }

  .nav {
    display: none;
  }
}

@media (max-width: 560px) {
  .site-header {
    padding: 18px 0;
  }

  .hero h1 {
    font-size: 2.8rem;
  }

  .site-footer {
    flex-direction: column;
    align-items: flex-start;
  }
}
