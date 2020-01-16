/*
 * URL : https://api.themoviedb.org/3/search/movie?api_key=123131ea405ceb7ba968916397a05764&language=fr-FR&append_to_response=credits&query=
 * 
 *  1) recuperer ce que l'utilisateur à saisie
 *  2) récupérer les données d'un film a l'aide de la methode fetch
 *  3) afficher dans la console, ou dans le html le titre, la date de sortie , la description, url de l'image
 */

'use strict'

let URL =  "https://api.themoviedb.org/3/search/movie?api_key=123131ea405ceb7ba968916397a05764&language=fr-FR&append_to_response=credits&query=";
let query = prompt('Quel film cherchez vous ?');

if (query.length >= 1) {
    query = URL + query;
    console.log("query = ", query);
    
    fetch(query)
    .then( 
        (reponse) => reponse.json()
    ).then(
        (page) => {
            let produits = page.results;
            for (let produit of produits) {
                console.log(`${produit.title} sortie en ${produit.release_date}`);
            }
        }
    ).catch(
        (e) => console.error(e)
    );

    console.log("ici");
}