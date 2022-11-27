var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Funcionario0 = /** @class */ (function () {
    function Funcionario0() {
    }
    Funcionario0.prototype.getBonificacao = function () {
        return this.salario * 1.2;
    };
    return Funcionario0;
}()); /* será que todos os que herdarem de Funcionario terão
20% de bonificação? se não, será que todos os programadores terão a preocupação em sobrescrever o método? */
// usamos a palavra reservada abstract para dizer que a classe e os métodos são abstratos
var Funcionario = /** @class */ (function () {
    function Funcionario(salario) {
        this.salario = salario;
    }
    return Funcionario;
}());
// se tentarmos instanciar a classe, ocorrerá um erro: 
//let f: Funcionario = new Funcionario(); - não compila
// estendento uma classe abstrata
var Gerente = /** @class */ (function (_super) {
    __extends(Gerente, _super);
    function Gerente() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Gerente.prototype.getBonificacao = function () {
        return this.salario * 1.4;
    };
    return Gerente;
}(Funcionario));
var g = new Gerente(2000);
console.log(g.getBonificacao());
// diretor compila mesmo não implementando o método?
var Diretor = /** @class */ (function (_super) {
    __extends(Diretor, _super);
    function Diretor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Diretor;
}(Gerente));
var d = new Diretor(1000);
console.log(d.getBonificacao());
// resposta: sim, a classe diretor compila mesmo sem implementar o método; a bonificação vai se de 40%, assim como o gerente
// secretaria continua abstrata?
var Secretaria = /** @class */ (function (_super) {
    __extends(Secretaria, _super);
    function Secretaria() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Secretaria;
}(Funcionario));
;
// SecretariaAdministrativa compila?
var SecretariaAdministrativa = /** @class */ (function (_super) {
    __extends(SecretariaAdministrativa, _super);
    function SecretariaAdministrativa() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SecretariaAdministrativa.prototype.getBonificacao = function () {
        return this.salario * 1.2;
    };
    return SecretariaAdministrativa;
}(Secretaria));
