class AplicacaoError extends Error {
    constructor(mensagem: string) {
        super(mensagem);
    }
}

class PublicacaoNaoEncontradaError extends AplicacaoError{
    constructor(mensagem: string) {
        super(mensagem);
    }
}

class PublicacaoJaCadastradaError extends AplicacaoError{
    constructor(mensagem: string) {
        super(mensagem);
    }
}

class ValorInvalidoError extends AplicacaoError{
    constructor(mensagem: string) {
        super(mensagem);
    }
}

class UsuarioNaoEncontradoError extends AplicacaoError{
    constructor(mensagem: string) {
        super(mensagem);
    }
}

class UsuarioJaCadastradoError extends AplicacaoError{
    constructor(mensagem: string) {
        super(mensagem);
    }
}

class AutenticacaoInvalidaError extends AplicacaoError{
    constructor(mensagem: string) {
        super(mensagem);
    }
}

export{AplicacaoError, PublicacaoNaoEncontradaError, PublicacaoJaCadastradaError, ValorInvalidoError, UsuarioNaoEncontradoError, UsuarioJaCadastradoError, AutenticacaoInvalidaError}
