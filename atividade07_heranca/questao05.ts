class Produto{
    private _id: number;
    private _descricao: string;
    private _qtdEstoque: number;
    private _valorUnitario: number;

    constructor(id:number, descricao:string, qtdEstoque:number, valorUnitario:number){
        this._id = id;
        this._descricao = descricao;
        this._qtdEstoque = qtdEstoque;
        this._valorUnitario = valorUnitario;
    }

    get qtdEstoque(){
        return this._qtdEstoque;
    }

    repor(quantidade:number){
        return this._qtdEstoque = this._qtdEstoque + quantidade;
    }

    darBaixa(quantidade:number){
        return this._qtdEstoque = this._qtdEstoque - quantidade;
    }
}

class ProdutoPerecivel extends Produto{
    private _dataValidade: Date;

    constructor(id:number, descricao:string, qtdEstoque:number, valorUnitario:number, data:Date){
        super(id, descricao, qtdEstoque, valorUnitario);
        this._dataValidade = data;
    }

    get dataValidade(){
        return this._dataValidade;
    }

    estaValido(){
        let dataAtual: Date = new Date();

        if(this._dataValidade >= dataAtual){
            return 'O produto está válido!'
        } else{
           return 'O produto está fora da validade!';
        }
    }
}

let arroz: Produto = new Produto(12, '...', 56, 9);
arroz.repor(10);
console.log(arroz.qtdEstoque);
arroz.darBaixa(36);
console.log(arroz.qtdEstoque);


let uva: ProdutoPerecivel = new ProdutoPerecivel(7, '...', 60, 10, new Date('2023-01-12'));
console.log(uva.estaValido());