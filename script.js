const languageModal = document.getElementById("languageModal");
const languageButton = document.getElementById("changeLanguage");
const languageTitle = document.getElementById("languageTitle") || document.querySelector(".language-card h2, .lang-modal-title");
const languageSubtitle = document.getElementById("languageSubtitle") || document.querySelector(".language-card p, .lang-modal-sub");
const languageOptions = document.querySelector(".language-options, .lang-options");

const languages = {
  pt: { label: "Português", flag: "🇧🇷", title: "Escolha seu idioma", subtitle: "Selecione a linguagem que desejar para navegar nesta experiência.", locale: "pt-BR" },
  en: { label: "English", flag: "🇺🇸", title: "Choose your language", subtitle: "Select the language you prefer to browse this experience.", locale: "en-US" },
  es: { label: "Español", flag: "🇪🇸", title: "Elige tu idioma", subtitle: "Selecciona el idioma que prefieres para navegar por esta experiencia.", locale: "es-ES" },
  fr: { label: "Français", flag: "🇫🇷", title: "Choisissez votre langue", subtitle: "Sélectionnez la langue que vous préférez pour naviguer dans cette expérience.", locale: "fr-FR" },
  de: { label: "Deutsch", flag: "🇩🇪", title: "Sprache auswählen", subtitle: "Wählen Sie die Sprache, die Sie für diese Erfahrung bevorzugen.", locale: "de-DE" },
  it: { label: "Italiano", flag: "🇮🇹", title: "Scegli la tua lingua", subtitle: "Seleziona la lingua che preferisci per navigare in questa esperienza.", locale: "it-IT" }
};

function ensureLanguageButtons() {
  if (!languageOptions) return;
  Object.entries(languages).forEach(([code, language]) => {
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

function selectLanguage(code) {
  const selected = languages[code] || languages.pt;
  document.documentElement.lang = selected.locale;
  if (languageTitle) languageTitle.textContent = selected.title;
  if (languageSubtitle) languageSubtitle.textContent = selected.subtitle;
  if (languageButton) languageButton.textContent = code.toUpperCase();
  if (languageModal) languageModal.style.display = "none";
}

function openLanguageModal() {
  if (languageModal) languageModal.style.display = "flex";
}

ensureLanguageButtons();
document.querySelectorAll("[data-language], [data-lang]").forEach((button) => {
  button.addEventListener("click", () => selectLanguage(button.dataset.language || button.dataset.lang));
});
if (languageButton) languageButton.addEventListener("click", openLanguageModal);

// Idioma não é salvo no navegador; o modal aparece em cada visita.
selectLanguage("pt");
openLanguageModal();
