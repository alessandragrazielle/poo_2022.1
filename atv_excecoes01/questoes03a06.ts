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


let c1: Conta = new Conta('1', 150);
//c1.sacar(300);
//c1.sacar(-100);
let c2: Conta = new Conta('2', 300);
//c1.transferir(c2, 200);
//c2.depositar(-100);
console.log(`Saldo conta 1: ${c1.saldo} \nSaldo conta 2: ${c2.saldo}`);
