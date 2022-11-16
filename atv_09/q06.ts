abstract class Funcionario{
    protected salario: number;

    constructor(salario:number){
        this.salario = salario;
    }

    abstract getBonificacao(): number; 
}

class Gerente extends Funcionario{
    getBonificacao(): number {
        return this.salario * 1.4;
    }
}

class Diretor extends Gerente{
    getBonificacao(): number {
        return this.salario * 1.6;
    }
}

class Presidente extends Funcionario{
    getBonificacao(): number {
        return this.salario + 1000;
    }
}


let g: Gerente = new Gerente(2000);
console.log(g.getBonificacao());

let d: Diretor = new Diretor(1000);
console.log(d.getBonificacao());

let p: Presidente = new Presidente(10000);
console.log(p.getBonificacao());