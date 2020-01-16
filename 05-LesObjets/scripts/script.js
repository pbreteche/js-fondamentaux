/**
 * Un objet est un peu comme une super variable qui peut peut contenir des variables et fonction
 */

console.log("________________ Creation d'un objet________________");

let maVoiture = new Object();

maVoiture.couleur = "Rouge";
maVoiture.modele = "Clio";
maVoiture.nbRoue = 4;

console.log("ma voiture = ", maVoiture);
console.log("ma voiture est " + maVoiture.couleur);

let boolRadio = true;
let maSuperVoiture = {
    couleur: "Bleu",
    modele: "Megane",
    nbRoue: 4,
    radio: boolRadio
}

console.log("ma super voiture = ", maSuperVoiture);     
console.log("ma super voiture = " + maSuperVoiture);

maSuperVoiture["porte"] = 5;
console.log("ma super voiture = ", maSuperVoiture); 

let marque = "Ford";
let modele = "Mustang";

let voitureSpeciale = {
    marque,
    modele
}
console.log("ma voiture Speciale = ", voitureSpeciale); 
// c'est pas duplicable

console.log("____________________objets avec constructeur_____________");

function Person(name, firstName, city) {
    // couleur: "bleu";
    this.myName = name;
    this.myFirstName = firstName;
    this.myCity = city;

    this.showCity = function() {
        return "J'habite à " + this.myCity; 
    }
}

let homer = new Person("homer", "sampson", "paris");
console.log(homer);
console.log(homer.myName);

let p2 = new Person("Julie", "dupont", "Nantes");
console.log(p2.myName);
console.log(p2.showCity());

homer.describe = function() {
    console.log(`Je suis ${this.myFirstName} ${this.myName} et j'habite a ${this.myCity}`);
}

homer.describe();
// p2.describe(); <- erreur, seule homer a cette methode

Person.prototype.fullName = function() {
    console.log(`Je suis ${this.myName} ${this.myFirstName}`);
}

homer.fullName();
p2.fullName();

console.log("\n\nComparaison d'objet______________________");
let homer2 = { nom: "Homer"};
let homer3 = { nom: "Homer"};

// Renvoie faux car on compare les references et non les valeurs 
console.log("Est-ce que homer2 == homer3 ? ", homer2 == homer3);
console.log("Est-ce que homer2 === homer3 ? ", homer2 === homer3);

let homer4 = homer2;
console.log("Est-ce que homer4 == homer2 ? ", homer4 == homer2);
console.log("Est-ce que homer4 === homer2 ? ", homer4 === homer2);

homer4.nom = "Jean";
console.log(homer4);
console.log(homer2);

// fonctionne pour les objets simple sans methodes.
let homer5 = JSON.parse(JSON.stringify(homer4));
// permet de copier un objet.
let homer6 = Object.assign(
    {
        codePostale: 4300
    },
    homer5
)
homer4.nom = "Homer"
homer5.nom = "test"
console.log(homer5);
console.log(homer4);
console.log("homer5 = ", homer5);
console.log("homer6 = ", homer6);


for (let property in homer) {
    console.log("propriete: ", property);
    console.log("nom: ", homer[property]);
}


let date = new Date();
let localDate = date.toLocaleDateString();
console.log("date: ", date);

let dateFr = new Date().toLocaleDateString();
console.log("date: ", dateFr);

console.log(date.toLocaleTimeString());


date.setDate(date.getDate()+1)
date.setHours(0,0,0,0);
console.log(date)

// 17 decembre 1995 : les mois commencent à 0
let date2 = new Date(1995, 11, 17);
console.log(date2);


let pi = Math.PI;
console.log("pi: ", pi);

// Un nombre pseudo aletoire entre 0 et 1.
let r = Math.random();
console.log("r: ", r);

// Si on veut un nombre entre 0 et 10 par exemple
r *= 10;
console.log("r: ", r);

// Cette methode arrondi au chiffre superieur.
let ra = Math.round(r);
console.log("ra: ", ra);

// Cette methode arrondi au chiffre inferieur.
ra = Math.floor(r);
console.log("ra: ", ra);