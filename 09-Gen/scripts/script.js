/**
 * Une fonction génératrice, est une fonction qu'on peut suspendre 
 * disponible es6
 * lorsqu'on appelle la methode next() , la fonction s'éxecute jusqu'au prochain yield
 */

function* genEnDetail() {
    console.log("step 1");
    yield "Bonjour"; //equivaut à: retrun ("bonjour")
    console.log("step 2");
    yield "2";
}

let iteration = genEnDetail();
console.log(iteration.next());
console.log(iteration.next());

function* gen() {
    let index = 0;
    let array = [1,3,5,6,7];
    while(index < array.length) {
        yield array[index++];
    }
}

let iter = gen();

for (let g of iter) {
    console.log(g);
}

// console.log(iter.next().value);
// console.log(iter.next().value);
// console.log(iter.next().value);
// console.log(iter.next().value);