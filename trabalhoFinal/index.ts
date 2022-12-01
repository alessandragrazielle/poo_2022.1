class Usuario{
    private _idUsuario: number;
    private _nome: string;
    private _telefone: number;

    constructor(id:number, nome:string, telefone:number){
        this._idUsuario = id;
        this._nome = nome;
        this._telefone = telefone;
    }
}

class UsuarioRemunerado extends Usuario{
    private _valorPorVisualizacao: number;
    private _caixa: number;

    constructor(id:number, nome:string, telefone:number, valorPorVisualizacao:number, caixa:number){
        super(id, nome, telefone);
        this._valorPorVisualizacao = valorPorVisualizacao;
        this._caixa = caixa;
    }

    sacar(valor:number){
        this._caixa = this._caixa - valor;
    }
}

abstract class Publicacao{
    private _idPublicacao: number;
    private _titulo: string;
    private _autor: string;
    private _resumo: string;
    private _qtdPaginas: number;

    constructor(id:number, titulo:string, autor:string, resumo:string, qtdPaginas:number){
        this._idPublicacao = id;
        this._titulo = titulo;
        this._autor = autor;
        this._resumo = resumo;
        this._qtdPaginas = qtdPaginas;
    }
}

class Livro extends Publicacao{
    private _genero: string;

    constructor(id:number, titulo:string, autor:string, resumo:string, qtdPaginas:number, genero:string){
        super(id, titulo, autor, resumo, qtdPaginas);
        this._genero = genero;
    }
}

class Artigo extends Publicacao{
    private _palavrasChave: string;

    constructor(id:number, titulo:string, autor:string, resumo:string, qtdPaginas:number, palavras:string){
        super(id, titulo, autor, resumo, qtdPaginas);
        this._palavrasChave = palavras;
    }
}
