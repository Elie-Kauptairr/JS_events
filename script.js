// Fonctionnalité 1 : Clic sur le footer : 
let clickCount = 0; // Initialisation du compteur à 0

let footer = document.querySelector("footer");
console.log(footer); // Vérifie la sélection du footer

footer.addEventListener("click", function () {
  console.log("clique"); // Affiche "clique" à chaque clic sur le footer
});

footer.addEventListener("click", function () {
  clickCount++; // Augmente le compteur de 1
  console.log(`clic numéro ${clickCount}`); // Affiche "clic numéro x"
});

// Fonctionnalité 2 : Toggle du menu "Hamburger" (en haut de la page) : 
let navbarButton = document.querySelector(".navbar-toggler"); // Bouton Hamburger
let navbarHeader = document.querySelector("#navbarHeader"); // Menu déroulant

console.log(navbarButton); // Vérifie la sélection du bouton
console.log(navbarHeader); // Vérifie la sélection du menu

navbarButton.addEventListener("click", function () {
  navbarHeader.classList.toggle("collapse"); // Ajoute ou supprime la classe "collapse"
});

// Fonctionnalité 3 : Changer la couleur du texte de la 1ere carte
let firstCard = document.querySelectorAll(".card")[0]; // Sélection de la première carte
let firstCardEditButton = firstCard.querySelector(".btn-outline-secondary"); // Bouton Edit

console.log(firstCard); // Vérifie la sélection de la carte
console.log(firstCardEditButton); // Vérifie la sélection du bouton

firstCardEditButton.addEventListener("click", function () {
  let cardText = firstCard.querySelector(".card-text"); // Sélectionne le texte de la carte
  cardText.style.color = "red"; // Change la couleur en rouge
});

// Fonctionnalité 4 : changer la couleur sur la 2eme carte 
let secondCard = document.querySelectorAll(".card")[1]; // Deuxième carte
let secondCardEditButton = secondCard.querySelector(".btn-outline-secondary"); // Bouton Edit

console.log(secondCard); // Vérifie la sélection de la carte
console.log(secondCardEditButton); // Vérifie la sélection du bouton

secondCardEditButton.addEventListener("click", function () {
  let cardText = secondCard.querySelector(".card-text"); // Texte de la carte
  if (cardText.style.color === "green") {
    cardText.style.color = ""; // Remet la couleur par défaut
  } else {
    cardText.style.color = "green"; // Change la couleur en vert
  }
});

// Fonctionnalité 5 : double clique navbar :
let navbar = document.querySelector(".navbar"); // Navbar
let bootstrapLink = document.querySelector('link[href*="bootstrap"]'); // Lien vers Bootstrap CSS

console.log(navbar); // Vérifie la sélection de la navbar
console.log(bootstrapLink); // Vérifie la sélection du lien Bootstrap

navbar.addEventListener("dblclick", function () {
  if (bootstrapLink.disabled) {
    bootstrapLink.disabled = false; // Réactive Bootstrap
  } else {
    bootstrapLink.disabled = true; // Désactive Bootstrap
  }
});

// Fonctionnalité 6 : réduction d'une carte au survol 
let allCards = document.querySelectorAll(".card"); // Sélectionne toutes les cartes

allCards.forEach((card) => {
  let viewButton = card.querySelector(".btn-success"); // Bouton View de la carte
  console.log(card); // Vérifie la sélection de chaque carte
  console.log(viewButton); // Vérifie la sélection du bouton View
});

allCards.forEach((card) => {
  let viewButton = card.querySelector(".btn-success"); // Bouton View de la carte
  let cardText = card.querySelector(".card-text"); // Texte de la carte
  let cardImage = card.querySelector(".card-img-top"); // Image de la carte

  // Réduit la carte quand on survole le bouton View
  viewButton.addEventListener("mouseenter", function () {
    cardText.style.display = "none"; // Cache le texte
    cardImage.style.width = "20%"; // Réduit l'image à 20%
  });

  // Rétablit la carte quand on retire la souris
  viewButton.addEventListener("mouseleave", function () {
    cardText.style.display = "block"; // Restaure le texte
    cardImage.style.width = "100%"; // Rétablit la taille normale de l'image
  });
});

// Fonctionnalité 7 : faire passer la dernière carte en premier 
let moveLastToFirstButton = document.querySelector(".btn-secondary"); // Bouton gris
let cardsContainer = document.querySelector(".album .row"); // Conteneur des cartes

console.log(moveLastToFirstButton); // Vérifie la sélection du bouton
console.log(cardsContainer); // Vérifie la sélection du conteneur
moveLastToFirstButton.addEventListener("click", function () {
  let lastCard = cardsContainer.lastElementChild; // Sélectionne la dernière carte
  cardsContainer.insertBefore(lastCard, cardsContainer.firstElementChild); // Déplace la dernière carte en premier
});

// Fonctionnalité 8 : contraire de la fonction d'avant 
let moveFirstToLastButton = document.querySelector(".btn-primary"); // Bouton bleu
console.log(moveFirstToLastButton); // Vérifie la sélection du bouton
moveFirstToLastButton.addEventListener("click", function (event) {
  event.preventDefault(); // Empêche le comportement par défaut du lien
  let firstCard = cardsContainer.firstElementChild; // Sélectionne la première carte
  cardsContainer.appendChild(firstCard); // Déplace la première carte à la fin
});
