/**
 * En js, les tableaux sont des objets.
 */
console.log("_______________ Declaration d'un tableau______________");

let nombres = new Array(1,2,3,4,5);
console.log("nombres avec new Array : " + nombres);
console.log("nombres avec new Array : ", nombres); 
console.log(`nombres avec new Array : ${nombres}`); 

let nombres2 = [4,5,6,7,9];
console.log("nombres2 avec [] : ", nombres2);
let nombres3 = [];
console.log("nombres3 avec [] : ", nombres3);


// 1 parametre = taille du tableau
let nombres4 = new Array(5);
console.log("nombres4 : ", nombres4);
console.log("taille de nombres4 : ", nombres4.length);

console.log("_______________ Remplir un tableau ______________");
nombres = [];
nombres[0] = 5;
nombres[1] = 7;
nombres[2] = 9;
console.log(`taille du tableau: ${nombres.length}`);

for(let i = 0; i < 15; i++) {
    nombres[i] = i+2;
}
console.log(`tableau: ${nombres}`);

nombres[nombres.length] = 65;
console.log(`tableau: ${nombres}`);

nombres = [
    2,
    3,
    true,
    "Bonjour"
]
console.log(nombres);

nombres = [
    2,
    3,
    true,
    "Bonjour",
    ["Haja", "Arnaud", "Mourad"],
    [2,3]
]
console.log(nombres);
console.log(nombres[4][1]);

console.log("__________________Parcourir un tableau_____________");
console.log(" =>For classique");
for (let i = 0; i < nombres.length; i++) {
    console.log(`nombres[${i}]: ${nombres[i]}`);
}
 
// for (int n: nombres) <- en java
// const, var, ou let 
for (const elt of nombres) {
    console.log('elmement: ' + elt);
}

nombres.forEach( function (nombre) {
    console.log(nombre);
});

for (const [index, elt] of nombres.entries()) {
    console.log('nombres['+index+']: ' + elt);
}

nombres.forEach( function (nombre, index) {
    console.log("index = " + index);
    console.log("nombre = " + nombre);
});

nombres.forEach( (nombre, index) => {
    console.log("index = " + index);
    console.log("nombre = " + nombre);
});

// nombres[100] = "Jade";
console.log(nombres);

console.log("______________ Affectation par decomposition_____________");
let tab = ["un", "deux", "trois"];

let v1 = tab[0];
let v2 = tab[1];
let v3 = tab[2];

let [v4, v5, v6] = tab;
console.log(`v4: ${v4} typeof: ${typeof v4}`);
console.log(`v5: ${v5}`);
console.log(`v6: ${v6}`);

[v1, v2] = tab; 
console.log(v1);
console.log(v2);

let [a=5, b=7] = [9];
// let [a=5, b=7] = [9, undefined];

console.log("a: ", a);
console.log("b: ", b);

// echange les valeurs 
[a,b] = [b,a];
console.log("a: ", a);
console.log("b: ", b);

console.log(nombres);

let [t, t2, ...t3] = nombres;
console.log("t: ", t);
console.log("t2: ", t2);
console.log("t3: ", t3);

let str = "decouper une chaine";
let tabChar = [...str];

console.log("__________________________ Exercices ___________________");

//déclarer un tableau avec des valeurs
let listPrenom = ["Alice", "Jean", "Marc", "Claire"];

//Ajouter à l'aide d'une methode, un prenom a la fin du tableau listPrenom
listPrenom.push("Yohann");
console.log(listPrenom);


//Suprimer le dernier élément du tableau. 
listPrenom.pop();
console.log(listPrenom);

//Suprimer la premiere valeur du tableau. 
listPrenom.shift();
console.log(listPrenom);

/* Ajouter à l'index 2, un nouveau tableau contenant 3 valeurs
 (A faire avec une methode ) */
let newTab = [2,3,4];
listPrenom.splice(2, 0, [newTab]);
console.log(listPrenom);

// Trié le tableau par ordre alphabétique
listPrenom.sort();
console.log(listPrenom);

// Inversé l'ordre le tableau
listPrenom.reverse();
console.log(listPrenom);

// Récupéré la longueur du tableau
let len = listPrenom.length;
console.log(len);

// Recuperer l'index d'un element dans un tableau
let i = listPrenom.indexOf("Marc");
console.log(i);

// decoupe une chaine de caractere en fonction d'un caractere 
// ou une chaine de caractere pour faire un tableau
let str = "a b c d e f";
let wordsTab = str.split(' ');
console.log(wordsTab);

let str2 = wordsTab.join(',');
console.log(str2);