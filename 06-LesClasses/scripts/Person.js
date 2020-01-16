class Person extends Login {

    // #varPrivee = 5; <- uniquement sur chrome

    constructor(nom, prenom, username, password) {
        // apelle le constructeur de la classe mere (Login)
        super(username, password);
        // super.username
        this.nom = nom;
        this.prenom = prenom;
    }

    description() {
        return `nom: ${this.nom} prenom: ${this.prenom}`;
    }

    toString() {
        return `[nom: ${this.nom}, prenom: ${this.prenom}]`;
    }

    equals(person2) {
        if (this.nom === person2.nom) {
            return true;
        } else {
            return false;
        }
        // return (this.nom === person2.nom)
    }

    // disponible a partir es6
    get getNom() {
        return this.nom;
    }

    // get getPrivate() {
    //     return this.#varPrivee;
    // }

    set setNom(value) {
        this.nom = value;
    }

    static count() {
        console.log("Methode static");
    }
}