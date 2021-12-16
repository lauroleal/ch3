const testeconcertos = require('./concertos.js');
/*
Importe o arquivo de consertos E faça as seguintes manipulações:
Liste e exiba somente os aparelhos com pronto marcado como true
Liste e exiba somene os aparecelhos com pronto marcado como false
*/

let prontoComTrue = [], prontoComFalse = [];

testeconcertos.concertos.forEach(aparelhos => {
         if(aparelhos.pronto === true){
            prontoComTrue.push(aparelhos.aparelho);
            }else {
                prontoComFalse.push(aparelhos.aparelho);
                }
        });

console.log();
console.log("Aparelhos com pronto marcado como true:");
console.log();
console.log(prontoComTrue);
console.log();
console.log("Aparelhos com pronto marcado como false:");
console.log();
console.log(prontoComFalse);
console.log();

/*
Liste os aparelhos exibindo o modelo do aparelho juntamente dos itens
consertados e aplique uma soma nos valor dos consertos e exibir no console somente os
aparelhos que estão pronto marcado como true. Exemplo:
*/

testeconcertos.concertos.forEach(aparelhos2 => {
    if(aparelhos2.pronto === true){
        const valorTotal = aparelhos2.valores.reduce((total, valor) => total + valor);
 console.log(`Aparelho: ${aparelhos2.aparelho}
              Itens Concertados: ${aparelhos2.itensConsertados} 
              Valor Total: ${valorTotal}`);
              console.log();

       }
   });
