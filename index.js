let Cliente = require('./Cliente.js')
let Conta = require('./Conta.js')



const cliente1 = new Cliente("Pedro stenfild" , 092476652903 , 107569543)
const cliente2 = new Cliente("Estefany Aguiar " , 026475459632 , 148569523)

const conta1 =new Conta(1001 , 965233 , cliente1)
const conta2 =new Conta(1001 , 569854 , cliente2)


/*Transferência*/

conta1.depositar(1000)
conta2.depositar(1000)
conta1.sacar(500)
conta2.sacar(500)
conta1.transferir(250,conta2)
conta2.transferir(500,conta1)

console.log(conta1)
console.log('\n')
console.log(conta2)

console.log(Conta.totalContas)
