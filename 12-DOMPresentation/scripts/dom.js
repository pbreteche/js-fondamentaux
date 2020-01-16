'use strict';

document.addEventListener('DOMContentLoaded', () => {
    console.log('le DOM est chargé');

    const titre = document.querySelector('article:first-child > h1');
    // aussi getElementById, getElementsByTagName, getElementsByName ...
    console.log(titre, titre.textContent);

    // déplacement relatif
    const premierParagraphe = titre.nextElementSibling;
    const article = titre.parentElement;
    const enfantsHTML = titre.children;
    const tousLesEnfants = titre.childNodes;

    titre.style.backgroundColor = 'red'; // en vrai, préférer utiliser les classes
    titre.className = 'main heading heading1';
    console.log(titre.classList);

    titre.textContent = 'Nouveau titre'; // l'ensemble des textnode du DOM, script et style inclus
    titre.innerText = 'Autre <strong>nouveau</strong> titre'; // contenu réellement lisible par l'utilisateur
    premierParagraphe.innerHTML = 'Bonjour <strong>vous</strong tous!';

    const ANNEE = 2020;

    const image = new Image(); // plus précis que new HTMLElement('img');
    image.src = 'https://www.dawan.fr/images/institutionnel-logo.png'

    premierParagraphe.after(image);
});
