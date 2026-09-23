const modal = document.getElementById("languageModal");
const languageButton = document.getElementById("changeLanguage");
const title = document.getElementById("languageTitle");
const subtitle = document.getElementById("languageSubtitle");

const translations = {
  pt: {
    title: "Escolha seu idioma",
    subtitle: "Selecione a linguagem que você prefere para navegar na experiência."
  },
  en: {
    title: "Choose your language",
    subtitle: "Select the language you prefer to browse this experience."
  },
  es: {
    title: "Elige tu idioma",
    subtitle: "Selecciona el idioma que prefieres para navegar por la experiencia."
  }
};

function openLanguageModal() {
  if (modal) modal.style.display = "flex";
}

function closeLanguageModal() {
  if (modal) modal.style.display = "none";
}

document.querySelectorAll("[data-language]").forEach((button) => {
  button.addEventListener("click", () => {
    const language = button.dataset.language;
    const selected = translations[language] || translations.pt;

    if (title) title.textContent = selected.title;
    if (subtitle) subtitle.textContent = selected.subtitle;
    if (languageButton) languageButton.textContent = language.toUpperCase();

    closeLanguageModal();
  });
});

if (languageButton) languageButton.addEventListener("click", openLanguageModal);

// Não usa localStorage: o idioma deve ser escolhido em toda visita.
openLanguageModal();
