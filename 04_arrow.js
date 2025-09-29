
/**
 * Déclarer une fonction fléchée qui renvoi l'argument + 1
 * Le return est explicite
 * 
 * contrainte: 
 *   - le mot clée "function" est interdis
 */

let arrow1 = (arrow1) => { return arrow1+1 }

/**
 * Déclarer une fonction fléchée qui renvoi l'argument + 1
 * Le return est implicite
 * 
 * contrainte: 
 *   - le mot clée "function" est interdis
 *   - le mot clée "return" est interdis
 */

let arrow2 = (arrow2) => (arrow2+1)


console.log("arrow1(3) : ", arrow1(3))
console.log("arrow2(5) : ", arrow2(5))

module.exports = {arrow1, arrow2};