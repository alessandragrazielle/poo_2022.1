"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaImposto = exports.Poupanca = exports.Banco = exports.Conta = void 0;
const excecoes_1 = require("./excecoes");
class Conta {
    constructor(numero, saldo) {
        this._numero = numero;
        this._saldo = saldo;
    }
    validarvalor(valor) {
        try {
            if (valor <= 0 || valor == 0) {
                throw new excecoes_1.ValorInvalidoError('O valor digitado não é válido!');
            }
        }
        catch (e) {
            if (e instanceof excecoes_1.AplicacaoError) {
                console.log(e.message);
                return -1;
            }
        }
    }
    sacar(valor) {
        try {
            if (this._saldo < valor) {
                throw new excecoes_1.SaldoInsuficienteError('O saldo é insuficiente!');
            }
            else if (this.validarvalor(valor) != -1) {
                this._saldo = this._saldo - valor;
            }
        }
        catch (e) {
            if (e instanceof excecoes_1.AplicacaoError) {
                console.log(e.message);
            }
        }
    }
    depositar(valor) {
        if (this.validarvalor(valor) != -1) {
            this._saldo = this._saldo + valor;
        }
    }
    transferir(contaDestino, valor) {
        this.sacar(valor);
        contaDestino.depositar(valor);
    }
    get numero() {
        return this._numero;
    }
    get saldo() {
        return this._saldo;
    }
}
exports.Conta = Conta;
class Poupanca extends Conta {
    constructor(numero, saldo, taxaDeJuros) {
        super(numero, saldo);
        this._taxaDeJuros = taxaDeJuros;
    }
    get taxaDeJuros() {
        return this._taxaDeJuros;
    }
    renderJuros() {
        let valor = this.saldo;
        this.depositar(valor * this.taxaDeJuros / 100);
    }
}
exports.Poupanca = Poupanca;
class ContaImposto extends Conta {
    constructor(numero, saldo, taxaDeDesconto) {
        super(numero, saldo);
        this._taxaDeDesconto = taxaDeDesconto;
    }
    sacar(valor) {
        let valorTotal = valor + valor * this._taxaDeDesconto / 100;
        super.sacar(valorTotal);
    }
}
exports.ContaImposto = ContaImposto;
class Banco {
    constructor() {
        this._contas = [];
    }
    inserir(conta) {
        try {
            this.consultar(conta.numero);
            throw new excecoes_1.ContaJaCadastradaError('Conta já cadastrada');
        }
        catch (e) {
            if (e instanceof excecoes_1.ContaJaCadastradaError) {
                throw e;
            }
            this._contas.push(conta);
        }
    }
    consultar(numero) {
        let contaProcurada;
        try {
            for (let i = 0; i < this._contas.length; i++) {
                if (this._contas[i].numero == numero) {
                    contaProcurada = this._contas[i];
                }
            }
            if (!contaProcurada) {
                throw new excecoes_1.ContaInexistenteError('Essa conta não exite, por favor, tente outra!');
            }
        }
        catch (e) {
            if (e instanceof excecoes_1.AplicacaoError) {
                console.log(e.message);
            }
        }
        return contaProcurada;
    }
    consultarPorIndice(numero) {
        let indiceProcurado = -1;
        try {
            for (let i = 0; i < this._contas.length; i++) {
                if (this._contas[i].numero == numero) {
                    indiceProcurado = i;
                }
            }
            if (indiceProcurado == -1) {
                throw new excecoes_1.ContaInexistenteError('Essa conta não exite, por favor, tente outra!');
            }
        }
        catch (e) {
            if (e instanceof excecoes_1.AplicacaoError) {
                console.log(e.message);
            }
        }
        return indiceProcurado;
    }
    alterar(conta) {
        let indice = this.consultarPorIndice(conta.numero);
        this._contas[indice] = conta;
    }
    depositar(numero, valor) {
        try {
            let indice = this.consultarPorIndice(numero);
            this._contas[indice].depositar(valor);
        }
        catch (e) {
            if (e instanceof excecoes_1.AplicacaoError) {
                console.log('erro');
            }
        }
    }
    sacar(numero, valor) {
        try {
            let indice = this.consultarPorIndice(numero);
            this._contas[indice].sacar(valor);
        }
        catch (e) {
            if (e instanceof excecoes_1.AplicacaoError) {
                console.log(e.message);
            }
        }
    }
    excluir(numero) {
        let indice = this.consultarPorIndice(numero);
        for (let i = indice; i < this._contas.length; i++) {
            this._contas[i] = this._contas[i + 1];
        }
        this._contas.pop();
    }
    transferir(numeroDebito, numeroCredito, valor) {
        let contaCredito = this.consultar(numeroCredito);
        let contaDebito = this.consultar(numeroDebito);
        contaDebito.transferir(contaCredito, valor);
    }
    calcularQuantidadeContas() {
        return this._contas.length;
    }
    calcularTotalSaldos() {
        let totalSaldo = 0;
        for (let conta of this._contas) {
            totalSaldo += conta.saldo;
        }
        return totalSaldo;
    }
    calcularMediaSaldos() {
        return this.calcularTotalSaldos() / this.calcularQuantidadeContas();
    }
    renderJuros(numero) {
        let contaProcurada = this.consultar(numero);
        try {
            if (!(contaProcurada instanceof Poupanca)) {
                throw new excecoes_1.PoupancaInvalidaError('A conta não é uma poupança!');
            }
            contaProcurada.renderJuros();
        }
        catch (e) {
            if (e instanceof excecoes_1.PoupancaInvalidaError) {
                console.log(e.message);
            }
        }
    }
    listaContas() {
        let lista = '';
        for (let i = 0; i < this._contas.length; i++) {
            lista += `Numero: ${this._contas[i].numero} - Saldo: ${this._contas[i].saldo} \n`;
        }
        return lista;
    }
    exibirConta(numero) {
        let conta = '';
        try {
            let indice = this.consultarPorIndice(numero);
            conta = `Número: ${this._contas[indice].numero} - Saldo: ${this._contas[indice].saldo.toFixed(2)}`;
        }
        catch (e) {
            if (e instanceof excecoes_1.AplicacaoError) {
                console.log(e.message);
            }
        }
        return conta;
    }
}
exports.Banco = Banco;
