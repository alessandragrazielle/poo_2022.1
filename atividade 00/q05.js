const prompt = require('prompt-sync')();

let valor_inicial = Number(prompt('Valor inicial: '))
let valor_final = Number (prompt('Valor final: '))


let x = parseInt(valor_inicial + 1)
while (x < valor_final){
    console.log(x)
    x = x + 1
}