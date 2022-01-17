const Cliente = require("../Cliente.js");

class Conta {
    constructor(agencia, cliente, saldo) {
        if (this.constructor == Conta) {
            throw new Error(".....")
        }
        this._agencia = agencia;
        this._cliente = cliente;
        this._saldo = saldo;
    }
    set cliente(novoCliente) {
        if (novoCliente instanceof Cliente) {
            this._cliente = novoCliente;
        }
    }
    get cliente() {
        return this._cliente;
    }
    get saldo() {
        return this._saldo;
    }
    depositar(valor) {
        if (valor > 0) {
            this._saldo += valor;
        }
        return valor;
    }
    sacar(valor) {
        throw new Error('.....')
    }
    _sacar(valor, taxa) {
        let valorSaque = taxa * valor
        if (this._saldo >= valorSaque) {
            this._saldo -= valorSaque
            return valorSaque
        }
        return 0;
    }
    transferir(valor, cliente) {
        if(this._saldo >= valor){
            let valorSacado = this.sacar(valor)
            cliente.depositar(valorSacado)
        }
    }
}

module.exports = Conta