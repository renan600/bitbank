const Funcionarios = require("./Funcionarios.js");

class Diretor extends Funcionarios {
    constructor(nome, cpf, salario) {
        super(nome, cpf, salario)
        this._bonificacao = 2.0;
    }
}
module.exports = Diretor;