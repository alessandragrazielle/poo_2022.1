class Conta{
    private _numero: string;
    private _saldo: number;

    constructor(numero:string, saldoInicial:number){
        this._numero = numero;
        this._saldo = saldoInicial;
    }

    get saldo(){
        return this._saldo;
    }

    get numero(){
        return this._numero;
    }

    sacar(valor:number): void{
        if(this._saldo < valor){
            throw new Error('Saldo insuficiente');
        }
        if(valor < 0){
            throw new Error('Nao eh possivel sacar valores negativos');
        }
        this._saldo = this._saldo - valor;
    }

    public depositar(valor: number): void {
        if(valor < 0){
            throw new Error('Nao eh possivel depositar valores negativos');
        }
        this._saldo = this._saldo + valor;
    }

    public transferir(contaDestino: Conta, valor: number) {
        this.sacar(valor);
        contaDestino.depositar(valor);
    }
}

class Banco{
    private _contas: Conta[] = [];

    inserir(conta: Conta) {
        this._contas.push(conta);
    }

    consultarPorIndice(numero: string): number {
        let indiceProcurado: number = -1;
        for (let i = 0; i < this._contas.length; i++) {
            if (this._contas[i].numero == numero) {
                indiceProcurado = i;
            }
        }

        return indiceProcurado;
    }

    sacar(numero: string, valor: number): void {
        let indice = this.consultarPorIndice(numero);

        if (indice != -1) {
            this._contas[indice].sacar(valor);
        }
    }
}

let c1: Conta = new Conta('1', 150);
//c1.sacar(300);
//c1.sacar(-100);
let c2: Conta = new Conta('2', 300);
//c1.transferir(c2, 200);
//c2.depositar(-100);
console.log(`Saldo conta 1: ${c1.saldo} \nSaldo conta 2: ${c2.saldo}`);


let c3: Conta = new Conta('3', 500);
let c4: Conta = new Conta('4', 600);

let b1: Banco = new Banco();
b1.inserir(c3);
b1.inserir(c4);

b1.sacar('c3', 600);
console.log(`Saldo conta 3: ${c3.saldo} \nSaldo conta 2: ${c4.saldo}`)