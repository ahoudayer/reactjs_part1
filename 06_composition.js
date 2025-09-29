/**
 * utiliser l'opérateur de composition ... afin de fusionner 2 tableaux passés en paramètres
 * 
 * ex: [1, 2, 3], [4, 5, 6] => [1, 2, 3, 4, 5, 6]
 * 
 * contrainte: 
 *  - ne pas utiliser la méthode concat, map, merge, push
 *  - for, foreach, while, do while sont interdits
 */
let part1=[1,2,3]
let part2=[4,5,6]
let concat = (a, b) => [...a, ...b];
console.log('concat(part1,part2) : '+concat(part1,part2));


/**
 * utiliser l'opérateur de composition ... afin d'ajouter un élément à un tableau
 * 
 * ex: [1, 2, 3], 4 => [1, 2, 3, 4]
 * 
 * contrainte:
 * - ne pas utiliser la méthode push
 */
const a=[1, 2, 3]
const b=4
let push = (a, b) => [...a, b];
console.log('ajout(part2 à part1) : '+push(a,b));

/**
 * utiliser l'opérateur de composition ... afin de fusionner 2 objets passés en paramètres
 * 
 * ex: {a: 1, b: 2}, {c: 3, d: 4} => {a: 1, b: 2, c: 3, d: 4}
 */

const a1={a: 1, b: 2}
const b2={c: 3, d: 4} 
let merge = (a,b) => ({...a, ...b});
console.log('merge(part1 à part2) : '+merge(a1,b2));

/**
 * utiliser l'opérateur de composition ... afin de modifier la propriété name de l'objet
 * 
 * ex: {name: 'toto'}, 'titi' => {name: 'titi'}
 * 
 * contrainte:
 *  - interdiction d'utiliser l'opérateur d'affectation "="
 */

const setName = (a, name) => ({...a, name});
console.log(setName( {name: 'toto'}, 'titi'));

// astuce: {...obj} crée une copie de l'objet, c'est un des principes de l'immutabilité et évite les problèmes de référence
module.exports = {concat, push, merge, setName}