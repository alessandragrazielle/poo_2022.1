import prompt from "prompt-sync";
import {Biblioteca, Publicacao, Livro, Artigo} from "./index";
import {AplicacaoError, ValorInvalidoError} from "./excecoes";

let input = prompt();
let b: Biblioteca = new Biblioteca;

let opcao: string = '';


function publicar(){
    console.log('\nInserir uma publicação');
    let idStr: string = input('Digite o número de id da publicação: ');
    let publicacao!: Publicacao;

    let opcao: string = input('Você deseja publicar um livro ou artigo? (a/l) ').toLowerCase();
    let titulo: string = input('Título: ');
    let autor: string = input('Autor: ');
    let resumo: string = input('Resumo: ');
    let qtdPaginasStr: string = input('Quantidade de páginas: ');

    let id: number = parseInt(idStr);
    let qtdPaginas: number = parseInt(qtdPaginasStr);

    if(opcao == 'a'){
        let palavrasChave: string = input('Palavras chave: ')
        publicacao = new Artigo(id, titulo, autor, resumo, qtdPaginas, palavrasChave);
    } else if(opcao == 'l'){
        let genero: string = input('Gênero: ');
        publicacao = new Livro(id, titulo, autor, resumo, qtdPaginas, genero);
    }

    b.publicar(publicacao);

    try{
        if(opcao == 'a'){
            console.log('\nArtigo publicado com sucesso!!');
        } if(opcao == 'l'){
            console.log('\nLivro publicado com sucesso!!');
        } if(opcao!='a' && opcao!='l'){
            throw new ValorInvalidoError(`\nO valor "${opcao}" não é válido! Por favor, verifique os campos preenchidos.`);
        }
    } catch(e: any){
        if(e instanceof AplicacaoError){
            console.log(e.message);
        }
    }
    
}

function consultar(){
    console.log('\nConsultar uma publicação');
    let idStr: string = input('Id da publicação que deseja consultar: ');
    let id: number = parseInt(idStr);
    let publicacao: Publicacao = b.consultarPublicacao(id);
    exibirPublicacao(id);
}

function excluir(){
    console.log('\nExcluir publicação');
    let idStr: string = input('Id da publicação que deseja excluir: ');
    let id: number = parseInt(idStr);
    b.excluir(id);
}

function listar(){
   console.log(b.listarPublicacoes());
}

function exibirPublicacao(id:number){
    console.log(`Título: ${b.consultarPublicacao(id).titulo}` +
    `Autor: ${b.consultarPublicacao(id).autor}` +
    `Resumo: ${b.consultarPublicacao(id).resumo}`);
}


do{
    try{
        console.log('\nSeja bem vindo!');
        console.log('1 - Publicar    2 - Consultar Publicação    3 - Excluir Publicação\n' +
        '4 - Listar Publicações    0 - Sair');
        
        opcao = input('\nDigite uma opção: ');
        switch (opcao) {
            case "1":
                publicar();
                break
            case "2":
                consultar();
                break
            case "3":
                excluir();
                break;
            case "4":
                listar();
                break;
        }
    } catch(e: any){
        if(e instanceof AplicacaoError) {
            console.log(e.message);
        } else {
            console.log("Erro não esperado, contate o administrador!");
        }
    }
    input('\nOperação finalizada. Pressione <enter>');
} while(opcao != "0")