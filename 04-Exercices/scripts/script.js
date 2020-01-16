/*
* declarer une variable qui contiendra un nombre entier qui s'apelle nombre,
*  et lui affecter le nombre 13.
*/
let nombre = 13;

/*
* declarer une variable nombre2 qui, contiendra le nombre flottant 15,5
*/
let nombre2 = 15.5;


/* declarer une variable b, qui prendra la valeur : true */
let b = true;

/*
* declarer une variable nombre3 qui ne pourra plus changer de valeur apres lui avoir
* donner la valeur 60.
*/
const nombre3 = 60;


// Faire une fonction qui s'auto execute et qui affiche "Je m'apelle" + le prenom, qu'elle prendra en argument
( function(prenom) {
    console.log("Je m'apelle " + prenom);
})("Lucie");

//Faire une expression de fonction qui divise 2 nombres et retourne le resultat.
let division = function(nombre, nombre2) {
    return nombre/nombre2;
}


/*
* realiser un switch qui prend nb2 et qui affiche: 
*        - "a" si nb2 est egal a 3 
*        - "b" si nb2 est egal a 5 
*        - "c" si nb2 est egal a 7 
*        - "d" si nb2 est egal est egal a autre chose.
*/
switch(nombre2) {
    case 3:
        console.log("a");
        break;
    case 5:
        console.log("b");
        break;
    case 7:
        console.log("c");
        break;
    default:
        console.log("d");
        break;
}

/*
* à l'aide de la condition ternaire, la variable nb prendra comme valeur 42
* si 'nb2' est égal à 6 sinon 'nb' sera egal a 9
*/
nombre = (nombre2 === 6) ? 42 : 9;
console.log("nb = ", nombre);

/**
 *  Faire une fonction qui affiche l'operation de 2 nombres,en fonction du signe
 * passer en 3eme paremetre 
 */
function calcul(nombre, nombre2, signe) {
    switch(signe) {
        case '+':
            return (nombre + nombre2);
        case '-':
            return (nombre - nombre2);
        case '*':
            return (nombre * nombre2);
        case '/':
            return (nombre / nombre2);
        case '%':
            return (nombre % nombre2)
        default: 
            return NaN;
    }
}
let res = calcul(1,2,'+');
console.log("res = ", res);
res = calcul(5,3,'*');
console.log("res = ", res);

/** Faire une fonction qui convertit des heures en minutes, elle prend 2 arguments: heure et minutes.
 * exemple: howManyMinutes(heure, minutes) { ... }
 * exemple d'appel: howManyMinutes(1,30) <- 1h30
 * @param {*} chaine 
 * @param {*} lettre  
 * */

function howManyMinutes(heure, minutes) {
    return heure * 60 + minutes;
}
console.log(howManyMinutes(1,30));

/* Créer une fonction qui prend en parametre un tableau et retournera un tableau, contenant
 * deux tableaux: 
  *   - un avec seulement les string
 *    - un autre contenant seulement les numbers
 * */
function mySort(tab) {
    let arrayNumber = [];
    let arrayString = [];
    let newArray = [];

    for(let t of tab) {
        if (typeof t === "string") {
            arrayString.push(t);
        } else if(typeof t === "number") {
         arrayNumber.push(t);
        }
    } 
    newArray.push(arrayNumber, arrayString);
    return newArray;
}

// console.log(mySort([1, "Bonjour", "hola", 12, 15]));
let [a,b] = mySort([1, "Bonjour", "hola", 12, 15]);

 /* Faire une fonction qui cherche une lettre dans une chaine de caracteres et qui retourne "trouvé" si la lettre a été trouvé
 * et 'aucun résultat' dans le cas contraire.
 * findChar(chaine, lettre) { ... }
 * exemple d'appel: findChar("Salut tous le monde", 'u') <- cherche la lettre 'u' dans la chaine
 * indice: console.log('lettre a la position 0 ' + chaine.charAt(0));
 * */
function findStr(chaine, letter) {
    for (let i = 0; i < chaine.length; i++) {
        if (chaine.charAt(i) === letter) {
            return "Trouvé";
        }
    }
    return "Pas trouvé";
}
console.log(findStr("Salut", 'u'));
console.log(findStr("Salut", 'z'));

const chaine = new String('coucou');
console.log(chaine);

String.prototype.findChar = function(letter) {
    for (let i = 0; i < this.length; i++) {
        if (this.charAt(i) === letter) {
            return "Trouvé";
        }
    }
    return "Pas trouvé";
}
console.log(chaine);
console.log("Salut".findChar('u'));
console.log("Salut".findChar('z'));


/* Exercice bonus faire un rot 11 
 * indice: variable.charCodeAt(x) pour convertir un char en nombre (table ASCII)
 * indice: String.fromCharCode(x) pour convertir du code ASCII en char
 * indice: il faut parcourir la chaine char par char et la transformer
 */
function rot(str) {
    let hiddenMsg = "";
    for (let i = 0; i < str.length; i++) {
        let char = str.charCodeAt(i);
        // 65 = 'A'  90 = 'Z';
        if (char >= 65 && char <= 90) {
            /**
             *  P = 80;
             *  (80 - 65) = 15;
             * 15 + 11 = 26;
             * 26 % 26 = 0;
             * 0 + 65;
             * 65 = A; 
             *  */
            hiddenMsg += String.fromCharCode((((char - 65) + 11) % 26) + 65);
            
        } 
        // 97 = 'a'  et 122 = 'z';
        else if (char >= 97 && char <= 122) {
            hiddenMsg += String.fromCharCode((((char - 97) + 11) % 26) + 97);
        }
    }
    return hiddenMsg;
}
console.log(rot("Salut"));

