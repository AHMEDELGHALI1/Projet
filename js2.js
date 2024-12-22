// cookies.js

// Fonction pour obtenir un cookie par son nom
function getCookie(name) {
  let cookieArr = document.cookie.split(";");
  for (let i = 0; i < cookieArr.length; i++) {
    let cookie = cookieArr[i].trim();
    if (cookie.startsWith(name + "=")) {
      return cookie.substring(name.length + 1);
    }
  }
  return null;
}

// Fonction pour définir un cookie
function setCookie(name, value, days) {
  let date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  let expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Vérifier si le nom de l'utilisateur est dans les cookies
window.onload = function () {
  let userName = getCookie("userName");
  if (userName) {
    document.getElementById("userGreeting").textContent =
      "Bienvenue, " + userName + "!";
  }
};

// Fonction pour demander le nom de l'utilisateur et le sauvegarder
function promptUserName() {
  let name = prompt("Veuillez entrer votre nom:");
  if (name) {
    setCookie("userName", name, 365); // Enregistrer le cookie pendant 1 an
    document.getElementById("userGreeting").textContent =
      "Bienvenue, " + name + "!";
  }
}
