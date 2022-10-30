class Pessoa{
    private _nome: string;
    private _sobrenome: string;

    constructor(_nome:string, _sobrenome:string){
        this._nome = _nome;
        this._sobrenome = _sobrenome;
    }

    get nome(){
        return this._nome;
    }
    get sobrenome(){
        return this._sobrenome;
    }
    get nomeCompleto(){
        return `${this._nome} ` + `${this._sobrenome}`
    }
}

let p1 : Pessoa = new Pessoa('Alessandra', 'Silva');
console.log(p1.nomeCompleto);


class Funcionario extends Pessoa{
    private _matricula: string;
    private _salario: number;

    constructor(_nome:string, _sobrenome:string, _matricula:string, _salario:number){
        super(_nome, _sobrenome);
        this._matricula = _matricula;
        this._salario = _salario;
    }

    get salario(){
        return this._salario;
    }

    calcularSalarioPrimeiraParcela(): number{
        return this._salario * 60/100;
    }

    calcularSalarioSagundaParcela(): number{
        return this._salario * 40/100;
    }
}

let p2: Funcionario = new Funcionario('Paulo', 'Teixeira', '2022ads0158', 6000);
console.log(`Nome Completo: ${p2.nomeCompleto} \nPrimeira parcela do salário: ${p2.calcularSalarioPrimeiraParcela()} \nSegunda parcela do salário: ${p2.calcularSalarioSagundaParcela()}`);


class Professor extends Funcionario{
    private _titulacao: string;

    constructor(_nome:string, _sobrenome:string, _matricula:string, _salario:number,_titulacao:string){
        super(_nome, _sobrenome, _matricula, _salario);
        this._titulacao = _titulacao;
    }

    calcularSalarioPrimeiraParcela(): number {
        return this.salario;
    }

    calcularSalarioSagundaParcela(): number {
        return 0;
    }
}

let p3: Professor = new Professor('Gabriel', 'Lima', '2022ads0156', 5000, 'mestre');
console.log(p3.calcularSalarioPrimeiraParcela());
console.log(p3.calcularSalarioSagundaParcela());