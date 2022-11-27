"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const banco_1 = require("./banco");
let input = (0, prompt_sync_1.default)();
let b = new banco_1.Banco();
//carregarDeArquivo();
let opcao = '';
do {
    console.log('\nBem vindo!! \nDigite uma opção:');
    console.log('1 - Cadastrar       2 - Consultar saldo       3 - Sacar\n' +
        '4 - Depositar       5 - Excluir               6 - Transferir\n' +
        '7 - Render juros    8 - Listar contas         9 - Sair\n');
    opcao = input('Opção: ');
    switch (opcao) {
        case "1":
            inserir();
            break;
        case "2":
            consultar();
            break;
        case "3":
            sacar();
            break;
        case "4":
            depositar();
            break;
        case "5":
            excluir();
            break;
        case "6":
            transferir();
            break;
        case "7":
            renderJuros();
            break;
        case "8":
            listarContas();
            break;
    }
    input('Operação finalizada! Pressione <enter>');
} while (opcao != '9');
console.log('Aplicação encerrada!');
function inserir() {
    console.log('\nCadastrar conta');
    let numero = input('Digite o número da conta: ');
    let conta;
    let op = input('Você deseja criar uma conta, poupança ou conta imposto? c/p/i: ').toLowerCase();
    if (op == 'c') {
        conta = new banco_1.Conta(numero, 0);
    }
    else if (op == 'p') {
        conta = new banco_1.Poupanca(numero, 0, 0.5);
    }
    else if (op == 'i') {
        conta = new banco_1.ContaImposto(numero, 0, 0.38);
    }
    b.inserir(conta);
}
function consultar() {
    console.log('\nConsultar conta');
    let numero = input('Digite o número da conta: ');
    let conta = b.consultar(numero);
    console.log(b.exibirConta(numero));
}
function sacar() {
    console.log('\nSacar');
    let numero = input('Digite o número da conta: ');
    let valorStr = input('Digite o valor do saque: ');
    let valor = parseFloat(valorStr);
    b.sacar(numero, valor);
    console.log(b.exibirConta(numero));
}
function depositar() {
    console.log('\nDepositar');
    let numero = input('Digite o número da conta: ');
    let valorStr = input('Digite o valor do depósito: ');
    let valor = parseFloat(valorStr);
    b.depositar(numero, valor);
    console.log(b.exibirConta(numero));
}
function excluir() {
    console.log('\nExcluir conta');
    let numero = input('Digite o número da conta: ');
    b.excluir(numero);
}
function transferir() {
    console.log('\nTransferir');
    let numeroDebito = input('Digite o número da conta de origem: ');
    let numeroCredito = input('Digite o número da conta de destino: ');
    let valorStr = input('digite o valor do depósito: ');
    let valor = parseFloat(valorStr);
    b.transferir(numeroDebito, numeroCredito, valor);
    console.log(b.exibirConta(numeroDebito));
    console.log(b.exibirConta(numeroCredito));
}
function renderJuros() {
    console.log('\nRender juros');
    let numero = input('Digite o número da poupança: ');
    b.renderJuros(numero);
    console.log(b.exibirConta(numero));
}
function listarContas() {
    console.log('\nContas do banco');
    console.log(b.listaContas());
}
function carregarDeArquivo() {
    let LineReaderSync = require("line-reader-sync");
    let lrs = new LineReaderSync("./contas.txt");
    console.log("Iniciando leitura de arquivo");
    while (true) {
        let linha = lrs.readline();
        if (linha != null) {
            let array = linha.split(";");
            let tipo = array[0];
            let numero = array[1];
            let saldo = parseFloat(array[2]);
            let conta;
            if (tipo == 'C') {
                conta = new banco_1.Conta(numero, saldo);
            }
            else if (tipo == 'P') {
                let taxaDeJuros = parseFloat(array[3]);
                conta = new banco_1.Poupanca(numero, saldo, taxaDeJuros);
            }
            else if (tipo == 'CI') {
                let taxaDeDesconto = parseFloat(array[3]);
                conta = new banco_1.ContaImposto(numero, saldo, taxaDeDesconto);
            }
            b.inserir(conta);
            console.log('Conta lida: ' + conta.numero);
        }
        else {
            console.log("fim do arquivo");
            break;
        }
    }
}
