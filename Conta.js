const Cliente = require("./Cliente.js");

class Conta{
    static totalContas = 0;
    agencia;
    numeroConta;
    _cliente;
    _saldo = 0;

    set cliente(novoCliente){
        if(novoCliente instanceof Cliente){
            this._cliente = novoCliente
        }
    }
    get cliente(){
        return this._cliente;
    }
    get saldo(){
        return this._saldo;
    }
    
    constructor(agencia  ,numeroConta , cliente){
        this.agencia = agencia;
        this.numeroConta = numeroConta;
        this.cliente = cliente;
        Conta.totalContas ++;
    }


    depositar(valor){
        if(valor > 0 ){
            this._saldo += valor
        }
        return valor;
    }
    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor
        }
        return valor;
    }
    transferir(valor , _cliente){
        if(this._saldo >= valor){
            const valorSacado = this.sacar(valor)
            _cliente.depositar(valorSacado)
        }
    }
}

module.exports = Conta