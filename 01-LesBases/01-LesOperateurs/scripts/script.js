/**
 * LEs 3 operateurs utilises dans javascript:
 *      -Arithmetiques: +, - , * ... 
 *      -Comparaisons: == , > , < ... 
 *      -Logiques: && , || ... */ 

let nb = 5;
let nb2 = 6;
let resultat = nb + nb2;
console.log(resultat);

resultat += 2; // resultat = resultat + 2;
resultat++;  // resultat = resultat + 1;
// resultat++2 <- erreur

resultat -= 2;
resultat --;

resultat *= 2
// resultat** 

resultat /= 2

console.log("_____________Modulo__________");

/**
 * Le modulo permet d'obtenir le reste d'une division euclidienne.
 * La division euclidienne est une division sans virgule dans le resultat.
 * 7 / 2 = 3 et il reste 1 
 */
console.log(7%2); // 1 


console.log("Comparteurs === et == ");
let n = 5
let n2 = '5';


console.log("n == n2 ? ", (n == n2));
// est-ce que n est strictement egal a n2?  
// il faut que le type et la valeur soient egal 
console.log("n === n2 ? ", (n === n2));

console.log("___________ conditions___________");

let a = 4;
if (a === 10) {
    console.log("10");
}

// la variable à tester en egalité strict
switch(a) {
    case 3:
        //traitement
        console.log('3');
        break;
    case 7:
        //traitement
        break;
    default:
        //
        break;
}

switch(a) {
    default: 
        //
        break;
    case 3:
    case 4:
        console.log("case 3");
        break;
    case 5:
        console.log("case 5");
}

switch(true) {
    case (a > 3 && a < 15): 
        console.log("entre 3 et 15");
        break;
}

b = true;
a = 5;

if(a === 5)
    if(b === true)
        console.log("a = ", a);


// if (true) {

// } else if() {

// } else {

// }

a = 3;

// compare puis incremente la variable a 
if(a++ === 3) {
    console.log("a = ", a);
}

// incremente puis on compare la variable a 
if(++a === 4) {
    console.log("je rentre pas ici car a vaut 5");
}

console.log("________Condition ternaire / affectation conditionnelle");
let v1 = 5;
(v1 >= 5) ? console.log("v1") : console.log("v2");

// est-ce que v1 inferieur a 5 ? si oui ... : si non ... 
let v2 = (v1 < 5) ? v1+2 : v1+3;
console.log(v2);

let index = 0;
while (index++ < 10) {
    console.log("ligne " + index + ": Je ne dois pas ... ");
    // index++;
}

index = 11;
do {
    console.log("Je rentre ici meme si index = 11");
    index++;
} while (index < 10);

// for (initialisation; condition ; incrementation)
for (let i = 0; i < 10; i++) {
    console.log("ligne " + index + ": Je ne dois pas ...  avec un for");    
}

a = 0;
for ( ; a < 15; ) {
    a++
}
