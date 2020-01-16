"use strict"

let p1 = new Person("Yohann", "LESUEUR");
let p2 = new Person("Claire", "DUPONT");
console.log(p1);
console.log(p1.prenom);
console.log(p1.description());
console.log("test" + p1);
console.log(p1.equals(p2));

console.log(p1.getNom);
p1.setNom = "Pierre";
console.log(p1.getNom);
Person.count();
p1.username = "admin";
p1.password = "admin";
console.log(p1);

let p3 = new Person('Yohann', 'LESUEUR', 35, 35);
console.log(p3);

// console.log(p1.getPrivate);

// par d'erreur
// function t(p1, p2) {
//     console.log(p1);
//     console.log(p2);
// }

// t(1);

let p5 = new Person("Claire", "DUPONT", "admin", "admin");
console.log(p5);

let v1 = new Vendeur("Jean", "pierre", 35, new Date(), 45000);
console.log(v1.calculerSalaire());
console.log(v1.toString());

let myArray = new MyArray(1,2,3,5,8,9);
let array = new Array(1,2,3,5,8,9);

myArray.myForEach(function (elt) {
    console.log(elt);
}); 

array.forEach(function (elt) {
    console.log(elt);
});

myArray.myForEach(elt => console.log(elt)); 
