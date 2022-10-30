class Calculadora{
    protected a: number;
    protected b: number;

    constructor(a:number, b:number){
        this.a = a;
        this.b = b;
    }

    soma(){
        return this.a + this.b;
    }
}

let teste = new Calculadora(5, 6);
console.log(teste.soma());

class CalculadoraCientifica extends Calculadora{
    constructor(a:number, b:number){
        super(a, b);
    }

    exponenciar(){
        return this.a**this.b;
    }
}

let teste2 = new CalculadoraCientifica(4, 2);
console.log(teste2.exponenciar());


// 3.c: foi necessário modificar o acesso para protected, que da visibilidade restrita a classe e subclasses;