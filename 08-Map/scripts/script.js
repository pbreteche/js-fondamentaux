console.log("_________________ Les maps ________________");

/**
 * association clé/valeur
 * la clé unique
 */

let map = new Map();
map.set('id', 5);
map.set('mot', 'une definition');

console.log(map);


let map2 = new Map([['id', 18], ['person', 23]]);
console.log(map2.size);


map.set('id', 55);
let value = map.get('id');
console.log(value);

// value sera un tableau avec a l'index 0 la clé et a l'index 1 la valeur
// for (let value of map) {
//     console.log("valeur: ",value);
// }

for (let [key, value] of map) {
    console.log("clé: " + key);
    console.log("valeur: " + value);
}

for (let key of map.keys()) {
    console.log("clé: " + key);
}

for (let value of map.values()) {
    console.log("valeur: " + value);
}

map.delete('id');
console.log(map);


console.log("_________________Set____________");


// tableau ne pouvant avoir qu'une fois la même valeur 
let set = new Set();

let tab = [1,1,1,2,3,4];

set.add(5);
set.add(7);
set.add(9);
set.add('5');
// les autres 5 ne seront pas ajoutés
set.add(5);
set.add(5);

console.log(set);
console.log(set.has(5)); //renvoie vrai ou faux

set.delete(5);
console.log(set);