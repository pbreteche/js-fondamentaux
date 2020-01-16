/**
 * Créer un objet littéral avion qui possedera les propriétés suivantes:
 *      -une couleur blanche
 *      -deux ailes
 *      -deux roues
 *      -une vitesse
 *      -une fonction afficherVitesse qui 
 * affiche dans la console la vitesse de l'avion 
 */
let avion = {
    couleur: "blanc",
    nbAiles: 2,
    nbRoues: 2,
    vitesse: 900,
    afficherVitesse: function() {
        console.log('vitesse de vol: ' + this.vitesse);
    }
}

let avion2 = new Object();
avion2.nbAiles = 2; 
// ... 

console.log(avion);
avion.afficherVitesse();

  /**
 * Créer une fonction constructeur film avec les proprietes initiales suivantes
 *      -realisateur
 *      -acteurs 
 *      -titre
 *      -anneeSortie
 *      -une description
 *      -une méthode afficherTitre qui affiche le titre
 *      -une méthode descriptionCourte qui affiche, le titre et l'année du film
 *      -une méthode descriptionLongue qui affiche, titre, l'année et la description du film
 */
export function Film(realisateur, acteurs, titre, anneeSortie, description) {
    this.realisateur = realisateur;
    this.acteurs = acteurs;
    this.titre = titre;
    this.anneeSortie = anneeSortie;
    this.description = description;
}

Film.prototype.descriptionCourte = function() {
    console.log(`${this.titre} sortie en ${this.anneeSortie}`);
}

Film.descriptionLongue = function() {
    this.descriptionCourte();
    console.log(`Description: ${this.description}`);
}

let film = new Film('toi', 'moi', 'nous', 1200, 'Exercitation ea eiusmod exercitation proident et minim do culpa quis fugiat sint tempor occaecat sint.')

film.descriptionLongue();