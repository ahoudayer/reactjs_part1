
/**
 * utilisez l'opérateur de chaine ?. pour accéder au nom du groupe auquel appartient l'utilisateur
 * Attention, l'utilisateur peut ne pas avoir de groupe (null)
 * renvoi undefined si l'utilisateur n'a pas de groupe
 * 
 * exemple : 
 * {
 *  name: "John",
 *    group: {
 *      name: "admin"
 *    }
 *  }
 * 
 * doit renvoyer "admin"
 * 
 */


let var1 = {name: "John", group: { name: "admin"}};
const getGroupName = (a, b) => {
    a.find(a=>a.name ??null)

    b.find(a=>a.group ??null).name ?? null
}
console.log("getGroupName('John', var1) : " + getGroupName("John", var1));


module.exports = {getGroupName};