
/**
 * Utiliser la fonction .map sur le tableau passé en paramètre
 * pour retourner un nouveau tableau avec les valeurs multipliées par 2
 * 
 * contraintes: 
 *   - Les mots clées for, while, do while sont interdits
 *   - les mots clées function et return sont interdits
 *   - Vous ne pouvez pas utiliser de variable
 * 
  */

const multiplyByTwo = [1,3,5,7];
let a = multiplyByTwo.map((x) => x * 2);
console.log("multiplyByTwo [1,3,5,7] : "+a);

/**
 * Utiliser la fonction .filter sur le tableau passé en paramètre
 * retourne un nouveau tableau avec uniquement les nom qui commencent par la lettre "A"
 * 
 * contraintes: 
 *   - Les mots clées for, while, do while sont interdits
 *   - les mots clées function et return sont interdits
 *   - Vous ne pouvez pas utiliser de variable (autre que l'argument de la fonction)
  */

const filterNameStartByA = ["spray", "elite", "exuberant", "destruction", "present"];
const result = filterNameStartByA.filter((a) => a.includes("a"));
console.log("filterNameStartByA [A] : "+result);
// Expected output: Array ["exuberant", "destruction", "present"]




/**
 * Utiliser la fonction .reduce sur le tableau passé en paramètre
 * retourne la somme des valeurs du tableau
 * 
 * contraintes: 
 *   - Les mots clées for, while, do while sont interdits
 *   - les mots clées function et return sont interdits
 *   - Vous ne pouvez pas utiliser de variable (autre que l'argument de la fonction)
  */

const sum = [1, 2, 3, 4];
let a2 = [];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = sum.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log("sum with reduce [1, 2, 3, 4] : " + sumWithInitial);
// Expected output: 10

let sumWithInitial2 = a2 => (
  a2.reduce(
  (acc, i) => acc + i,
    0
  )
) 
console.log("sum with reduce [1,2,6,12] : " + sumWithInitial2([1,2,6,12]));


/**
 * Utiliser la fonction .find sur le tableau passé en paramètre
 * retourne l'utilisateur qui a l'id passé en 2e paramètre
 * 
 * exemple d'entrée:
 * [
 *  {id: 1, name: 'John'},
 *  {id: 2, name: 'Doe'},
 *  {id: 3, name: 'Foo'},
 *  {id: 4, name: 'Bar'},
 * ], 3
 * retour attendu: "Foo"
 * 
 * contraintes: 
 *   - Les mots clées for, while, do while sont interdits
 *   - les mots clées function et return sont interdits
 *   - Vous ne pouvez pas utiliser de variable (autre que l'argument de la fonction)
  */

const array = [5, 12, 8, 130, 44];
const found = array.find((element) => element > 10);
console.log(found);

let arryUsers = [
 {id: 1, name: 'John'},
 {id: 2, name: 'Doe'},
 {id: 3, name: 'Foo'},
 {id: 4, name: 'Bar'},
];

const findUserById = (a,b) => a.find(a=>a.id === b).name;
console.log(findUserById(arryUsers, 3));



// Expected output: 12





module.exports = {multiplyByTwo, filterNameStartByA, sum, findUserById};