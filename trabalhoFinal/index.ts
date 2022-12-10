import{AplicacaoError, PublicacaoJaCadastradaError, PublicacaoNaoEncontradaError, ValorInvalidoError} from "./excecoes"

abstract class Publicacao{
    private _id: number;
    private _titulo: string;
    private _autor: string;
    private _resumo: string;
    private _qtdPaginas: number;

    constructor(id:number, titulo:string, autor:string, resumo:string, qtdPaginas:number){
        this._id = id;
        this._titulo = titulo;
        this._autor = autor;
        this._resumo = resumo;
        this._qtdPaginas = qtdPaginas;
        this.validarValor(id); this.validarValor(qtdPaginas);
        this.validarEntrada(titulo); this.validarEntrada(autor); this.validarEntrada(resumo);
    }

    get id(){
        return this._id;
    }

    get titulo(){
        return this._titulo;
    }

    get autor(){
        return this._autor;
    }

    get resumo(){
        return this._resumo;
    }

    private validarValor(valor: number): boolean{
        if (isNaN(valor) || valor < 0){
            throw new ValorInvalidoError(`\nO valor ${valor} não é válido! Por favor, verifique os campos preenchidos.`);
        }
        return true;
    }

    private validarEntrada(valor: string): boolean{
        if(!valor){
            throw new ValorInvalidoError('\nNão são aceitos valores vazios! Por favor, verifique os campos preenchidos.');
        }
        return true;
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


class Biblioteca{
    private _publicacoes: Publicacao[] = [];

    publicar(publicacao: Publicacao){
        try{
            this.consultarPublicacao(publicacao.id);
            throw new PublicacaoJaCadastradaError(`A publicação de id ${publicacao.id} já está cadastrada!`);
        } catch(e:any){
            if(e instanceof PublicacaoJaCadastradaError){
                throw e;
            }
            this._publicacoes.push(publicacao);
        }
    }   

    consultarPublicacao(id: number): Publicacao{
        let publicacaoProcurada!: Publicacao;
        for(let i=0; i<this._publicacoes.length; i++){
            if(this._publicacoes[i].id == id){
                publicacaoProcurada = this._publicacoes[i];
            }
        }

        if(!publicacaoProcurada){
            throw new PublicacaoNaoEncontradaError(`Publicação de id ${id} não encontrada!`)
        }

        return publicacaoProcurada;
    }

   
    consultarPorIndice(id: number): number{
        let indiceProcurado: number = -1;
        for(let i=0; i<this._publicacoes.length; i++){
            if(this._publicacoes[i].id == id){
                indiceProcurado = i;
            }
        }

        if(indiceProcurado == -1){
            throw new PublicacaoNaoEncontradaError(`Publicação de id ${id} não encontrada!`)
        }

        return indiceProcurado;
    }
 
    excluir(id: number){
        let indice: number = this.consultarPorIndice(id);

        for(let i=indice; i<this._publicacoes.length; i++){
            this._publicacoes[i] = this._publicacoes[i+1];
        }
        this._publicacoes.pop();
    }

    listarPublicacoes(): string{
        let lista = '';

        for(let i=0; i<this._publicacoes.length; i++){
            lista = lista + 
            '\nId: ' + this._publicacoes[i].id  + 
            ' - Título: ' + this._publicacoes[i].titulo +
            ' - Autor: ' + this._publicacoes[i]. autor +
            ' - Resumo: ' + this._publicacoes[i].resumo;
        }

        return lista;
    }
}

export{Biblioteca, Publicacao, Livro, Artigo};
