const {sleep} = require("./10_promise");

/**
 * Créez une fonction synchrone qui attend 2 seconde puis execute le callback passé en paramètre
 * vous pouvez utiliser la fonction sleep créé précedement: const {sleep} = require("../exercices/10_promise");
 * 
 * Vous devez utiliser .then
 * 
 * contrainte:
 *    - votre fonction doit être synchrone et ne pas retourner de Promise
 *    - ne pas utiliser async await
 * 
 */

const usingThen = sleep(2000).then("usingThen after 2s");

/**
 * Créez une fonction asynchrone qui attend 2 seconde puis execute le callback passé en paramètre
 * vous pouvez utiliser la fonction sleep créé précedement: const {sleep} = require("../exercices/10_promise");
 * 
 * Vous devez utiliser await
 * 
 * contrainte:
 *   - votre fonction doit être asynchrone et retourner une Promise
 *   - ne pas utiliser .then
 */

const usingAwait = async() => {
    await sleep(2000);
    console.log("2 secondes attendues");
};

/**
 * Créez une fonction asynchrone qui effectue un appel api vers l'url passé en paramètre
 * retourne le résultat de la requête (body)
 * 
 * Vous pouvez utiliser axios, mais n'oubliez pas d'installer le package et de l'importer
 * npm install axios
 * 
 * votre réponse doit être un objet json
 * 
 * url de test: https://jsonplaceholder.typicode.com/todos/1
 */

//décommentez la ligne suivante une fois le package installé
const axios = require("axios");
const querystring = require('querystring');

const monUrl = "http://jsonplaceholder.typicode.com/todos/1";

// axios.post(monUrl, querystring.stringify({ foo: 'userId' }));
const retour = axios.get(monUrl);
console.log('axios get: ',axios.get(monUrl), JSON.stringify(axios.get(monUrl)));

const apiResponse = 
    async() => {    
            console.log("toto",JSON.stringify(
                (await axios.get(monUrl)).data
            ))
    };

apiResponse();

module.exports = {usingThen, usingAwait, apiResponse};