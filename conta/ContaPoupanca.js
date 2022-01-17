const Conta = require("./Conta.js");

class ContaPoupanca extends Conta {
    static totalContaPoupanca = 0;
    constructor(agencia, cliente, saldoInicial) {
        super(agencia, cliente, saldoInicial)
        ContaPoupanca.totalContaPoupanca++
    }
    sacar(valor){
        let taxa = 1.01
        return this._sacar(valor,taxa)
    }
}
module.exports = ContaPoupanca;