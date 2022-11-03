/* Erros mais comuns:
1. Desconsiderar operação;
2. Exibir mensagem de erro;
3. Retornar um código de erro;*/
// exemplos: um método que calcula a media de um aluno nao pode receber notas abaixo de 0 ou acima de 10
var Aluno = /** @class */ (function () {
    function Aluno(n, n1, n2) {
        this.nome = n;
        this.n1 = n1;
        this.n2 = n2;
    }
    // 1. desconsiderando uma operação:
    Aluno.prototype.calculoMedia1 = function () {
        var media;
        if (this.n1 >= 0 && this.n2 >= 0 && this.n1 <= 10 && this.n2 <= 10) {
            media = (this.n1 + this.n2) / 2;
            return media;
        }
    };
    // 2. exibir mensagem de erro:
    Aluno.prototype.calculoMedia2 = function () {
        var media;
        if (this.n1 >= 0 && this.n2 >= 0 && this.n1 <= 10 && this.n2 <= 10) {
            media = (this.n1 + this.n2) / 2;
            console.log(media);
        }
        else {
            console.log('A nota inserida nao eh valida!');
        }
    };
    return Aluno;
}());
var a1 = new Aluno('Joao', 10, -10);
a1.calculoMedia1();
a1.calculoMedia2();
//console.log();
