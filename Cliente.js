class Cliente {
    constructor(nome, cpf, rg) {
        this._nome = nome;
        this._cpf = cpf;
        this._rg = rg;
        this._senha;
    }

    autenticar(senha){
        return senha == this._senha;
    }
    cadastrarSenha(senha){
        this._senha = senha;
    }
}

module.exports = Cliente;