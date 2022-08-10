const prompt = require('prompt-sync')();

let numero = Number(prompt('Valor da variavel: '))

let antecessor = numero - (numero % 1)
let sucessor = antecessor + 1

console.log(`O antecessor de ${numero} eh ${antecessor}, e o seu sucessor eh ${sucessor}`)