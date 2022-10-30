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
