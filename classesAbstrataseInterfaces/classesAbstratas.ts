class Funcionario0{
    protected salario: number;

    getBonificacao(): number{
        return this.salario * 1.2;
    }
}  /*será que todos os que herdarem de Funcionario terão 20% de bonificação? se não, será que todos os programadores terão a preocupação em sobrescrever o método? */


// usamos a palavra reservada abstract para dizer que a classe e os métodos são abstratos
abstract class Funcionario{
    protected salario: number;
    constructor(salario:number){
        this.salario = salario;
    }

    abstract getBonificacao(): number; //apenas a assinatura do método é escrita e as subclasses devem implementá-lo
}

// se tentarmos instanciar a classe, ocorrerá um erro: 
//let f: Funcionario = new Funcionario(); - não compila


// estendento uma classe abstrata
class Gerente extends Funcionario{
    getBonificacao(): number {
        return this.salario * 1.4;
    }
}

let g: Gerente = new Gerente(2000);
console.log(g.getBonificacao());


// diretor compila mesmo não implementando o método?
class Diretor extends Gerente{}

let d: Diretor = new Diretor(1000);
console.log(d.getBonificacao());

// resposta: sim, a classe diretor compila mesmo sem implementar o método; a bonificação vai se de 40%, assim como o gerente


// secretaria continua abstrata?
abstract class Secretaria extends Funcionario{

};
// se for colocado o abstract antes, sim


// SecretariaAdministrativa compila?
class SecretariaAdministrativa extends Secretaria{
    getBonificacao(): number {
        return this.salario * 1.2;
    }
}
// sim