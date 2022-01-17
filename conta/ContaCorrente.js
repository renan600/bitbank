const Conta = require("./Conta.js");

class ContaCorrente extends Conta {
    static totalContaCorrente = 0;
    constructor(agencia, cliente) {
        super(agencia, cliente, 0)
        ContaCorrente.totalContaCorrente++
    }
    sacar(valor){
        let taxa = 1.1
        return this._sacar(valor,taxa)
    }
}

module.exports = ContaCorrente;