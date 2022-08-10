const prompt = require('prompt-sync')();

let valor_brl = Number(prompt('Valor em real: '))

const preco_btc = 121467.53
let valor_btc = valor_brl / preco_btc

console.log(`R$${valor_brl.toFixed(2)} corresponde a ${valor_btc.toFixed(8)} bitcoins`)