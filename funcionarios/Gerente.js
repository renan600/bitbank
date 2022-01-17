const Funcionarios = require("./Funcionarios");

class Gerente extends Funcionarios {
    constructor(nome, cpf, salario) {
        super(nome, cpf, salario)
        this._bonificacao = 1.3;
    }
}
module.exports = Gerente;