
/**
 * utilisez la décomposition pour extraire la premiere et la 2e case du tableau
 * retournez les dans un nouveau tableau
 * 
 * exemple: [1, 2, 3] => [1, 2]
 * 
 * astuce: vous pouvez utiliser la décomposition directement dans les arguments de la fonction
 * 
 * contrainte: 
 *  - interdiction d'utiliser [0] et [1]
 *  - interdiction d'utiliser slice ou splice
 */

const extractFirstTwo = (a) => {const [b, c] = a; return [b, c]};
console.log("extractFirstTwo : " +extractFirstTwo([1, 2, 3]));

console.log("extractFirstTwo : " +extractFirstTwo([1, 2, 3]));
const extractFirstTwo2 = ([a,b]) => [a,b]
console.log("extractFirstTwo2 : " +extractFirstTwo2([1, 2, 3]));

/**
 * utilisez la décomposition pour extraire la premiere case du tableau et le reste du tableau
 * retournez uniquement le reste du tableau
 * 
 * exemple: [1, 2, 3] => [2, 3]
 */

const extractRest = ([a, ...rest]) => rest;
const extractRest2 = ([ , ...rest]) => rest;
console.log('extractRest ' + extractRest([1, 2, 3]));
console.log('extractRest2 ' + extractRest2([2, 2, 3]));

/**
 * utilisez la décomposition pour extraire le champ "name" de l'objet passé en paramètre
 * retournez le champ "name"
 * 
 * exemple: {name: "toto", age: 42} => "toto"
 * 
 * astuce: vous pouvez utiliser la décomposition directement dans les arguments de la fonction
 * 
 * contrainte:
 * - interdiction d'utiliser l'opérateur "." pour accéder au champ "name"
 */

const extractName = ({name}) => name;
console.log(' extractName({name: "toto", age: 42}) : ' + extractName({name: "toto", age: 42}));

/**
 * utilisez la décomposition pour retourner l'objet utilisateur sans le champ "password"
 * 
 * exemple: {name: "toto", password: "1234"}
 * 
 * contrainte: 
 *    - interdiction d'utiliser "delete"
 *    - interdiction d'utiliser l'opérateur "." pour accéder au champ "password"
 * 
 */

const removePassword = ({password, ...rest}) => rest;
const user = {name: "toto", password: "1234"};
console.log('removePassword({name: "toto", password: "1234"}) : ' + removePassword(user));

module.exports = {extractFirstTwo, extractRest, extractName, removePassword}