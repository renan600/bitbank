class Cliente{
    nome;
    _cpf;
    _rg;

    constructor(nome,cpf,rg){
        this.nome = nome;
        this._cpf = cpf;
        this._rg = rg;
    }
}

module.exports = Cliente