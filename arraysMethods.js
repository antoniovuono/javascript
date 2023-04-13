/**
 *  concat: Junta vários arrays e devolve uma CÓPIA dos arrays conectados.
 *  every:  Itera por todos elementos do array, verificando um condição desejada (função) até que false seja devolvido.
 *  filter: Cria um array com todos elementos verificados por true na condição informada.
 *  forEach: Executa uma função específica em cada elemento do array.
 *  join: Reúne todos elenmentos de um array em uma string/
 *  indexOf: Pesquisa no array elementos específicos e devolve sua posição.
 *  lastIndexOf: Devolve a posição do item do arrya que corresponde a posição específica.
 *  map: Cria outro array com todos elementos baseados na condição específicada e devolve o array corresponde aos critérios.
 *  reverse: Inverte o array de forma que o último item vire o primeiro e vice-versa.
 *  slice: Devolve um novo array a partir do index específicado.
 *  some: Itera por todos elementos do array verificando a condição informada até que true seja devolvido.
 *  sort: Organiza o array em forma alfabética com base na função informada.
 *  toString: Devolve o array em formato de string.
 *  valueOf:  É semelhante ao método to string devolve o array na forma de uma string.
 * 
 */

// 1) 📂 Concat: Juntando vários arrays:

const zero = 0;
const positiveNumbers = [1,2,3];
const negativeNumbers = [-3,-2,-1];

let allNumbersArray = negativeNumbers.concat(zero, positiveNumbers);
// console.log(allNumbersArray); 
// Resultado: [-3,-2,-1,0,1,2,3,]

