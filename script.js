// Tout le JS se lance après le chargement du DOM
document.addEventListener("DOMContentLoaded", function () {
  // 1) Bouton "Afficher / masquer le résumé" du profil
  const btnAfficherPlus = document.getElementById("btnAfficherPlus");
  const descriptionProfil = document.getElementById("descriptionProfil");

  if (btnAfficherPlus && descriptionProfil) {
    btnAfficherPlus.addEventListener("click", function () {
      descriptionProfil.classList.toggle("d-none");
    });
  }

  // 2) Boutons "Masquer / afficher" pour les sections
  const toggleButtons = document.querySelectorAll("button[data-section]");

  toggleButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      const sectionKey = btn.getAttribute("data-section");
      const target = document.querySelector(".toggle-target-" + sectionKey);

      if (target) {
        target.classList.toggle("d-none");
      }
    });
  });

  // 3) Scroll fluide pour les liens du menu
  const navLinks = document.querySelectorAll('a.nav-link[href^="#"], a[href="#profil"]');

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId && targetId.startsWith("#")) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    });
  });
});

