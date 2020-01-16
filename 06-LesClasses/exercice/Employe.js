class Employe {
    constructor(nom, prenom, age, dateEntree, baseCalcul)  {
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
        this.dateEntree = dateEntree;
        this.baseCalcul = baseCalcul;
    }

    getPoste() {
        return `L'employé: `
    }
    
    toString() {
        return `${this.getPoste()} ${this.nom} ${this.prenom}`;
    }
}