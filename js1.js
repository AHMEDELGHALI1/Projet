// Fonction pour obtenir un cookie par son nom
function getCookie(name) {
  let match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  if (match) return match[2];
}

// Fonction pour définir un cookie
function setCookie(name, value, days) {
  let date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie =
    name + "=" + value + ";expires=" + date.toUTCString() + ";path=/";
}

// Vérifier si le nom de l'utilisateur est déjà dans le cookie
window.onload = function () {
  let userName = getCookie("userName");

  if (userName) {
    // Si le nom est trouvé, personnaliser la page
    document.getElementById("userName").textContent = `Bienvenue, ${userName}`;
  } else {
    // Si le nom n'est pas trouvé, demander à l'utilisateur
    userName = prompt("Veuillez entrer votre nom");
    if (userName) {
      setCookie("userName", userName, 7); // Cookie valable 7 jours
      document.getElementById(
        "userName"
      ).textContent = `Bienvenue, ${userName}`;
    }
  }
};
