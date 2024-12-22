// Fonction pour récupérer un cookie par son nom
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
  return null;
}

// Fonction pour définir un cookie
function setCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Vérifie si le cookie 'username' existe et l'affiche dans l'en-tête
window.onload = function () {
  let username = getCookie("username");
  if (username) {
    document.getElementById(
      "welcome-message"
    ).innerText = `Bienvenue, ${username}!`;
  }
};

// Fonction pour enregistrer le nom de l'utilisateur dans un cookie
function saveUserName() {
  const name = prompt("Entrez votre nom :");
  if (name) {
    setCookie("username", name, 7);
    document.getElementById(
      "welcome-message"
    ).innerText = `Bienvenue, ${name}!`;
  }
}
