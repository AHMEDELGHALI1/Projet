// Vérifie si un cookie "nomUtilisateur" existe
function checkUserNameCookie() {
  let userName = getCookie("nomUtilisateur");
  if (userName != "") {
    document.getElementById("userName").innerText = "Bienvenue, " + userName;
  }
}

// Fonction pour récupérer un cookie
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

// Fonction pour définir un cookie
function setUserNameCookie() {
  let userName = prompt("Entrez votre nom :");
  if (userName != "") {
    document.cookie = "nomUtilisateur=" + userName + ";path=/";
    document.getElementById("userName").innerText = "Bienvenue, " + userName;
  }
}

// Appel initial pour vérifier le cookie
checkUserNameCookie();
