
/**
 * Créez une fonction asynchrone qui attend 2 seconde
 * 
 * utilisez new Promise
 */

let sleep =  (ms) => new Promise(resolve => setTimeout(resolve, ms));

const asyncFunc = async() => {
    await sleep(2000);
    console.log("2 secondes attendues");
}

console.log("start");
asyncFunc().then(console.log("asyncFunc terminé"));
console.log("end");



sleep =  (ms) => new Promise((resolve, reject) => setTimeout(() => reject(), ms));
let promise = sleep(1000);

promise.then(
        () => { console.log('resolu: ', promise);
    }).catch(
        () => { console.log('reject: ', promise);
    });    

 console.log(promise);   

module.exports = {sleep};