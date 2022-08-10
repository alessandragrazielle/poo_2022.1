const prompt = require('prompt-sync')();

let mes = Number(prompt('Numero correspondente ao mes: '))

if (mes==1 || mes==3 || mes==5 || mes==7 || mes==8 || mes==10 || mes==12){
    for (let i = 1; i <= 31; i++){
        console.log(i)
    }
} 
else if (mes==4 || mes==6 || mes==9 || mes==11) {
    for (let i = 1; i <= 30; i++){
        console.log(i)
    }
}
else if (mes==2){
    for (let i = 1; i <= 28; i++){
        console.log(i)
    }
}
else{
    console.log('mes nao existente')
}