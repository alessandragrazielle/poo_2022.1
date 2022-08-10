const prompt = require('prompt-sync')();

let a = Number(prompt('Primeiro valor: '))
let b = Number(prompt('Segundo valor: '))
let c = Number(prompt('Terceiro valor: '))

let maior, menor

maior = a
if (b > a && b > c){
    maior = b
}
if (c > a && c > b){
    maior = c
}

menor = a
if (b < a && b < c){
    menor = b
}
if (c < a && c < b){
    menor = c
}

console.log(`O maior valor eh: ${maior} e o menor eh ${menor}`)