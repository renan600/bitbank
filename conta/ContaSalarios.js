const Conta = require("./Conta.js");

class ContaSalario extends Conta {
    static totalContaSalario = 0;
    constructor(agencia, cliente) {
        super(agencia, cliente, 0)
        ContaSalario.totalContaSalario++
    }
    saque(valor){
        let taxa = 1.02
        return this._sacar(valor,taxa)
    }
}

module.exports = ContaSalario;