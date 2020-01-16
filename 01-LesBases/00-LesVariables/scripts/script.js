// la methode console.log() sert à écire dans la console du navigateur. 
console.log("______Declaration de variable________");

/*
 une variable c'est une zone memoire dans laquelle on pourra stocker des choses
 3 mot clé pour declarer une variable: let, var, const
 */
let nom = "Combe";
var prenom = "David";
const age = 35;

/*  On ne pourra pas la valeur de la constante age */

console.log(nom);
console.log(prenom);
console.log(age);

/* Il n'y pas de typage explicite en javascript */
nom = 42;
console.log(nom);

// age = 60; <-- erreur

console.log("________Commentaires___________");

// met une ligne en commentaire
/* met plusieurs lignes en commentaires*/
/**
 * @var nom: jsdoc
 */

 /**
  * La convention de nommage: 
  *     on met les noms des constantes en majuscule: AGE
  *     on met les noms des variables en camelCase:  maVariable
  * 
  *  Le nom d'une variable ne peut pas commencer par un chiffre
  *  Le nom d'une variable ne peut commencer que par une majuscule, une minuscule, _ ou un $
  */

  console.log("_______________________ Portée des variables ___________________");

  var t = 5;
  if (true) {
      t = 7;
  }
  console.log("t = " + t);
  
  if(true) {
      var t2 = 4;
  }
  console.log("t2 = " + t2);
  
  if (true) {
    //disponible ES6
      let t3 = 9;
  }
  console.log(t3);
  
  