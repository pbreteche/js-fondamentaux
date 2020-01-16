class Vendeur extends Commercial {
    constructor(nom, prenom, age, dateEntree, baseCalcul) {
        super(nom, prenom, age, dateEntree, baseCalcul);
        this.prime = 400;
    }

    getPoste() {
        return `Le Vendeur `;
    }
}