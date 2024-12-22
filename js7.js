const userName = document.cookie.replace(
  /(?:(?:^|.*;\s*)userName\s*\=\s*([^;]*).*$)|^.*$/,
  "$1"
);

if (userName) {
  const welcomeMessage = document.querySelector("h1");
  welcomeMessage.innerHTML = `Bienvenue, <strong>${userName}</strong> !`;
}

// Formulaire pour enregistrer le nom dans un cookie
const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const nameInput = document.querySelector('input[name="nom"]');
  document.cookie = `userName=${nameInput.value}; path=/`;
  alert("Nom enregistré pour la personnalisation.");
  form.submit();
});
