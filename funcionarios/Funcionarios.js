class Funcionarios {
    constructor(nome, cpf, salario) {
        this._nome = nome;
        this._cpf = cpf;
        this._salario = salario;
    }

    autenticar(senha){
        return senha == this._senha;
    }
    cadastrarSenha(senha){
        this._senha = senha;
    }
}

module.exports = Funcionarios;