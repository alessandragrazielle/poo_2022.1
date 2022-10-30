class Veiculo{
    placa: string;
    ano: number;

    constructor(placa:string, ano:number){
        this.placa = placa;
        this.ano = ano;
    }
}

let v1: Veiculo = new Veiculo('OUB4024', 2017);
console.log(`Veículo \nPlaca: ${v1.placa} \nAno: ${v1.ano}`);
console.log('-------------------------');

class Carro extends Veiculo{
    modelo: string;

    constructor(placa:string, ano:number, modelo:string){
        super(placa, ano);
        this.modelo = modelo;
    }
}

let c1 = new Carro('HFT2612', 2021, 'Mercedes');
console.log(`Carro \nPlaca: ${c1.placa} \nAno: ${c1.ano} \nModelo: ${c1.modelo}`);
console.log('-------------------------');


class CarroEletrico extends Carro{
    autonomiaBateria: number;

    constructor(placa:string, ano:number, modelo:string, autonomiaBateria:number){
        super(placa, ano, modelo);
        this.autonomiaBateria = autonomiaBateria;
    }
}

let ce1 = new CarroEletrico ('HFT2612', 2021, 'Mercedes', 100);
console.log(`Carro Elétrico \nPlaca: ${ce1.placa} \nAno: ${ce1.ano} \nModelo: ${ce1.modelo} \nAutonomia da Bateria: ${ce1.autonomiaBateria}`);