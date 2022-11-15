import { AplicacaoError, ContaInexistenteError, PoupancaInvalidaError, SaldoInsuficienteError, ValorInvalidoError } from "./excecoes";

class Conta {
    private _numero;
    private _saldo;

    constructor(numero:string, saldo:number){
        this._numero = numero;
        this._saldo = saldo;
    }

    private validarvalor(valor:number){
        try{
            if(valor <= 0 || valor == 0){
                throw new ValorInvalidoError('O valor digitado não é válido!');
            }
        } catch(e:any){
            if(e instanceof AplicacaoError){
                console.log(e.message);
                return -1;
            }
        }
    }

    public sacar(valor: number): void{
        try{            
            if(this._saldo < valor){
                throw new SaldoInsuficienteError('O saldo é insuficiente!');
            } else if(this.validarvalor(valor) != -1){
                this._saldo = this._saldo - valor;
            }
        } catch(e: any){
            if(e instanceof AplicacaoError){
                console.log(e.message);
            }
        }
    }

    public depositar(valor: number): void{
        if(this.validarvalor(valor) != -1){
            this._saldo = this._saldo + valor;
        }
    }

    public transferir(contaDestino:Conta, valor:number): void{
        this.sacar(valor);
        contaDestino.depositar(valor);
    }

    public get numero(): string{
        return this._numero;
    }

    public get saldo(): number{
        return this._saldo;
    }
}


class Poupanca extends Conta{
    private _taxaDeJuros: number;

    constructor(numero: string, saldo: number, taxaDeJuros: number){
        super(numero, saldo);
        this._taxaDeJuros = taxaDeJuros;
    }

    public get taxaDeJuros(): number{
        return this._taxaDeJuros;
    }

    renderJuros(): void{
        let valor: number = this.saldo;
        this.depositar(valor * this.taxaDeJuros/100);
    }
}


class ContaImposto extends Conta {
    private _taxaDeDesconto: number;

    constructor(numero: string, saldo: number, taxaDeDesconto: number) {
        super(numero, saldo);
        this._taxaDeDesconto = taxaDeDesconto;
    }
    
    sacar(valor: number) {
       let valorTotal = valor + valor*this._taxaDeDesconto/100;
       super.sacar(valorTotal);
    }
}


class Banco{
    private _contas: Conta[] = [];

    inserir(conta: Conta){
        let indice: number = this.consultarPorIndice(conta.numero);
        if(indice == -1){
            this._contas.push(conta);
        } else console.log('O número da conta informado já existe, por favor, tente outro.')
    }

    consultar(numero: string): Conta {
        let contaProcurada!: Conta;

        try{
            for (let i = 0; i < this._contas.length; i++) {
                if (this._contas[i].numero == numero) {
                    contaProcurada = this._contas[i];
                }
            }

            if (contaProcurada == null){
                throw new ContaInexistenteError('Essa conta não exite, por favor, tente outra!')
            }

        } catch(e: any){
            if (e instanceof AplicacaoError){
                console.log(e.message);
            }
        }

        return contaProcurada;
    }

    private consultarPorIndice(numero:string){
        let indiceProcurado: number = -1;
        try{
            for(let i = 0; i < this._contas.length; i++){
                if(this._contas[i].numero == numero){
                    indiceProcurado = i;
                }
            }

            if(indiceProcurado == -1){
                throw new ContaInexistenteError('Essa conta não exite, por favor, tente outra!')
            }
        } catch(e: any){
            if (e instanceof AplicacaoError){
                console.log(e.message);
            }
        }

        return indiceProcurado;
    }

    alterar(conta: Conta): void{
        let indice: number = this.consultarPorIndice(conta.numero);
        this._contas[indice] = conta;
    }

    depositar(numero:string, valor:number): void{
        try{
            let indice: number = this.consultarPorIndice(numero);
            this._contas[indice].depositar(valor);
        } catch(e: any){
            if (e instanceof AplicacaoError){
                console.log('erro');
            }
        }
    }

    sacar(numero:string, valor:number): void{
        try{
            let indice: number = this.consultarPorIndice(numero);
            this._contas[indice].sacar(valor);
        } catch(e: any){
            if (e instanceof AplicacaoError){
                console.log('erro');
            }
        }
    }

    excluir(numero:string): void{
        let indice: number = this.consultarPorIndice(numero);
        for(let i = indice; i < this._contas.length; i++){
            this._contas[i] = this._contas[i+1];
        }
        this._contas.pop();
    }

    transferir(numeroDebito:string, numeroCredito:string, valor:number){
        let contaCredito: Conta = this.consultar(numeroCredito);
        let contaDebito: Conta = this.consultar(numeroDebito);
        contaDebito.transferir(contaCredito, valor);
    }

    calcularQuantidadeContas(): number{
        return this._contas.length;
    }

    calcularTotalSaldos(): number{
        let totalSaldo = 0;
        for(let conta of this._contas){
            totalSaldo += conta.saldo;
        }

        return totalSaldo;
    }

    calcularMediaSaldos(): number{
        return this.calcularTotalSaldos() / this.calcularQuantidadeContas()
    }

    renderJuros(numero: string){
        let contaProcurada = this.consultar(numero);

        try{
            if(contaProcurada instanceof Poupanca){
                contaProcurada.renderJuros();
            } else{
                throw new PoupancaInvalidaError('A conta não é uma poupança!');
            }
        } catch(e: any){
            if(e instanceof PoupancaInvalidaError){
                console.log(e.message);                
            }
        }
    }

    listaContas(): string{
        let lista: string = '';
        for(let i: number = 0; i < this._contas.length; i++){
            lista += `Numero: ${this._contas[i].numero} - Saldo: ${this._contas[i].saldo} \n`;
        }

        return lista;
    }

    exibirConta(numero:string): string{
        let conta: string = '';
        try{
            let indice: number = this.consultarPorIndice(numero);
            conta = `Número: ${this._contas[indice].numero} - Saldo: ${this._contas[indice].saldo.toFixed(2)}`

        } catch(e: any){
            if(e instanceof AplicacaoError){
                console.log(e.message);                
            }
        }

        return conta;
    }
}

export {Conta, Banco, Poupanca, ContaImposto}