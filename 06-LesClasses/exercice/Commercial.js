class Commercial extends Employe {
    constructor(nom, prenom, age, dateEntree, baseCalcul) {
        super(nom, prenom, age, dateEntree, baseCalcul);
        this.taux = 0.2;
        this.prime = 0;
    }

    calculerSalaire() {
        return (this.baseCalcul * this.taux + this.prime);
    }
}