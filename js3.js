// Fonction pour obtenir la valeur d'un cookie
function getCookie(name) {
  let match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  if (match) return match[2];
  return null;
}

// Fonction pour définir un cookie
function setCookie(name, value, days) {
  let date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000); // Expiration après 'days' jours
  document.cookie =
    name + "=" + value + "; expires=" + date.toUTCString() + "; path=/";
}

// Vérifier si le cookie du nom existe
window.onload = function () {
  let userName = getCookie("userName");

  if (userName) {
    // Si le cookie existe, personnaliser la page
    document.getElementById("welcomeMessage").innerText =
      "Bienvenue, " + userName + " !";
  } else {
    // Si le cookie n'existe pas, demander à l'utilisateur de saisir son nom
    let name = prompt("Entrez votre nom :");
    if (name) {
      setCookie("userName", name, 7); // Enregistrer le nom pendant 7 jours
      document.getElementById("welcomeMessage").innerText =
        "Bienvenue, " + name + " !";
    }
  }
};
