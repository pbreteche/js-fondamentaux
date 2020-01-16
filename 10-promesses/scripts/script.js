import {PERSONNES} from './person.js';

/**
 * L'objet Promise est generalement utilisé pour du traitement asynchrone
 * (2 action ou + en meme temps)
 * l'objet nous promet une reponse mais pas forcément dans l'immediat 
 */


 function maFonction(myCallBack) {
    let rand = Math.random();
    if (rand > 0.5) {
        myCallBack('nombre superieur à 0.5');
    } else {
        myCallBack('nombre inferieur à 0.5');
    }
 }

//  on ne met pas les parentheses à myCallBack 
// console.log(myCallBack); 
// myCallBack();

 maFonction(myCallBack)

 //une callBack est une fonction qui sera appelé plus tard, souvent une fonction qu'on passe en parametre
 //d'une autre fonction 
 function myCallBack(msg) {
    console.log(msg);
 }


/*  la fonction setTimeout() est une fonction asynchrone qui attend un certain nombre de milisecondes
  avant d'executer la fonction en passé en parametre */
//  setTimeout(() => { 
//      console.log("mon message"); 
//     }, 3000);
 
//  function afficherMsg() {
//         console.log("mon message");
//  }
//  setTimeout( afficherMsg, 3000/* milisecondes */);

console.log("Yohann va ranger ta chambre !");
let promesse = new Promise(
    function (resolve, reject) {
        console.log("Je te promet de ranger ma chambre, mais ca risque de prendre du temps");
        setTimeout(
            () => {
                let rand = Math.random();
                if (rand > 0.5) {
                    resolve("ca y est j'ai ranger ma chambre");
                } else {
                    reject("Oups! j'ai oublié");
                }
            }
        , 2500);
    }
);

promesse.then( (msg) => { 
    console.log(msg); 
}).catch( (msg) => {
    console.error(msg);
});

let promesse = function () {
    return new Promise(
        function (resolve, reject) {
            console.log("Je te promet de ranger ma chambre, mais ca risque de prendre du temps");
            setTimeout(
                () => {
                    let rand = Math.random();
                    if (rand > 0.5) {
                        resolve("ca y est j'ai ranger ma chambre");
                    } else {
                        reject("Oups! j'ai oublié");
                    }
                }
            , 2500);
        }
    );
}

promesse().then( (msg) => { 
    console.log(msg); 
}).catch( (msg) => {
    console.error(msg);
});

console.warn("apres la promesse");

// console.log("personnes: ", PERSONNES);

console.log("Est-ce que tu peux me donner la liste des personnes ?");
promesse = new Promise(
    (resolve, reject) => {
        setTimeout( () => {
            resolve(PERSONNES)
        }, 2000)
    }
);
 
let personnes = [];
promesse.then(
    (resultat) => {
        console.log(resultat);
        personnes = resultat;
        let divElt = document.querySelector('body');
        for (let p of personnes) {
            divElt.innerHTML += `
                <h4>${p.prenom}</h4>
                <p>${p.age  }</p>
            `
        }
    }
);

console.log("________________ async - await________");

promesse = function() {
    return new Promise(
        (resolve, reject) => {
            console.log("Chargement des personnes ...");
            setTimeout( () => {
                resolve(PERSONNES)
            }, 1000)
        }
    );
}

async function afficherPrenoms() {
    console.log("______debut_______");
    let personnes = await promesse();
    for(let personne of personnes) {
        console.log("prenom: " + personne.prenom);
    }
    
}


afficherPrenoms();

// fetch(url).then().then();

async function afficherProduits() {
    let reponse = await fetch("https://world.openfoodfacts.org/api/v0/product/737628064502.json");
    // console.log(reponse);
    if (reponse.ok) {
        let page = await reponse.json();
        // console.log(page);
        let produit = page.product;
        console.log(produit);
        let divElt = document.querySelector('body');
        divElt.innerHTML = `<img src=${produit.image_front_small_url} alt="photo de nouilles" />`
    }
    // for(let p of produits) {
    //     console.log("produit: " + p);
    // }
}

let a = prompt('Quel films recherchez vous ?');
console.log(a);


afficherProduits();

/**
 *  ...
 */