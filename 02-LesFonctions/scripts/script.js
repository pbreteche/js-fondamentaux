// ( function () {
    
/**
 * On utilise le mot clé function
 */

function sayHello() {
    // traitement
    console.log("Bonjour !");
}

// appel de la fonction
sayHello();

function sayHello2(prenom) {
    console.log("Bonjour " + prenom);
    // console.log("Bonjour ", prenom);
    // console.log(`Bonjour ${prenom}`);
}

sayHello2("Yohann"); 

function calcul(nombre, nombre2) {
    let resultat = nombre + nombre2;
    console.log(`${nombre} + ${nombre2} = ${resultat}`);
}

calcul(5, 3);
calcul(7, 8.3);

/**
 * Tout ce qui se passe dans une fonction reste dans la fonction si on ne revnoie rien.
 */
function carre(nombre) {
    nombre *= nombre;
    // console.log("nombre = ", 4);
    return nombre;
}

let nb = 2;
nb = carre(nb);
console.log(nb);
console.log(carre(3));

/**
 * Pour creer une fonction on va utiliser: 
 *  1- le mot cle function
 *  2- un nom : maFonction
 *  3- des parametres/arugements dans des parentheses maFonction(param1)
 *  4- le corps : maFonction(param1) { ... }
 */

 console.log("________________ Les expressions de fonction ______________");

//  multiplication(2,7 ); <- erreur, cette fonction n'existe pas encore. 

/*
 * une expression de fonction est une fonction anonyme dans une variable
 */
const multiplication = function (nb, nb2) {
    return (nb * nb2);
}

let res = multiplication(2,5);
console.log("res = ", res);

console.log("_______________ les fonctions immediatement invoquée (IIFE) _________");

/**
 * Les fonctions immeditement invoquées peuvent servir
 * à rendre un fichier, variable, ou fonction privée
 */

( function () {
    //traitement
    console.log("immediat");
 }
)();

// let prenom = "Yohann";

( function (prenom) {
    console.log("Bonjour " + prenom);
})("Yohann");
// })(prenom);

// })();

console.log("_________________Les closures___________________");
/**
 * il est possible d'imbriquer une fonction dans une autre fonction.
 * La fonction fille (fonction dans la fonction) ne pourra etre appelé que depuis la fonction mère 
 */
function closure(str) {
    let prenom = "Jacqueline";

    function affichePrenom() {
        console.log(`Bonjour ${prenom}`);
    }

    if (str === "ok") {
        affichePrenom();
    } else {
        console.log("Pas d'access");
        
    }
}

closure("ok");
// affichePrenom(); <- erreur 

function giveMeSecretMsg(login, password) {
    let msg = "Ultraconfidentiel";
    let secretPassword = "admin";

    if (login === "admin" && password===secretPassword) {
        printMsg();
    } else {
        console.log("Vous n'etes pas autorisé");
    }
    function printMsg() {
        console.log("Le message est: ", msg);
    }
}

giveMeSecretMsg("admin", "admin");
giveMeSecretMsg("admin", "addfasf");


console.log("_____________ Les fonctions flechées ____________");
/**
 * Les fonctions flechées servent à raccourcir la syntaxe d'une fonction. 
 */

//  function maFonction() { }
// () => {};
let array = [1,2,3,4,5];

function printElement(element) {
    console.log(element);
}

array.forEach(printElement);

array.forEach(function (element) {
    console.log(element);
})

array.forEach( (element) => { 
    console.log(element);
})

// on peut supprimer les parentheses si on a qu'un seul parametre
// on peut aussi supprimer les accolades si on a qu'une seule instruction.
array.forEach(element => console.log(element));


console.log("____________________La console__________________");
let a = 5;

console.log("a = " + a);
console.debug("a = " + a);
console.warn("a = " + a);
console.error("a = " + a);

console.count("test: "); // <- compte le nombre de passage dans une fonction par exemple
console.trace("trace: "); 

console.log("______________Fonction rest parameters___________");

function calculSomme(tab) {
    let res = 0;
    for(let t of tab) {
        res += t;
    }
    return res;
}

let nombres = [2,3,5,64];
console.log(calculSomme(nombres));
// console.log(calculSomme([]));


function calculSomme2(...nombres) {
    let res = 0;
    for(let t of nombres) {
        res += t;
    }
    return res;
}

calculSomme2(1);
calculSomme2(1,2,3);
calculSomme2(1,2,3,5);

function calculSomme3(max, ...nombres) {
    let res = 0;
    console.log(max);
    for(let t of nombres) {
        res += t;
    }
    return res;
}

calculSomme3(5,2,3,5);

let str = "Bonjour";
console.log("str ", typeof str[0]);

console.log([...str]);

let arr = [1,2,3];
let array2 = ["a", "o", "u"];

let array3 = [...arr, ...array2];
console.log(array3);
