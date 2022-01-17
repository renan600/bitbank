const Cliente = require("./Cliente.js");
const ContaCorrente = require("./conta/ContaCorrente.js");
const ContaPoupanca = require("./conta/ContaPoupanca.js");
const ContaSalario = require("./conta/ContaSalarios.js");
const Diretor = require("./funcionarios/Diretor.js");
const Gerente = require("./funcionarios/Gerente.js");
const sistemaAutenticacao = require("./sistemaAutenticacao.js")

const cliente1 = new Cliente("Pedro", 54896587445, 456987123)
const cliente2 = new Cliente("Rodrigo", 45698712359, 456895245)
const gerente = new Gerente("Luis", 54789658965 , 3500)
const diretor = new Diretor("Edivaldo", 45896525696 , 5800)

gerente.cadastrarSenha("Teste123")
diretor.cadastrarSenha("Teste321")
cliente1.cadastrarSenha("cliente1")
cliente2.cadastrarSenha('cliente2')

const contaCorrente1 = new ContaCorrente(1001, cliente1)
const contaCorrente2 = new ContaCorrente(1010, cliente2)
const contaPoupanca1 = new ContaPoupanca(1001, cliente1, 500)
const contaPoupanca2 = new ContaPoupanca(1010, cliente2, 500)
const contaSalario1 = new ContaSalario(458, cliente1)
const contaSalario2 = new ContaSalario(458, cliente2)





const gerenteEstaLogado = sistemaAutenticacao.login(gerente,"Teste123")
const diretorEstaLogado = sistemaAutenticacao.login(diretor,"Teste321")
const cliente1EstaLogado = sistemaAutenticacao.login(cliente1 , "cliente1")
const cliente2EstaLogado = sistemaAutenticacao.login(cliente2 , "cliente2")

console.log(contaCorrente1)
console.log(contaCorrente2)
console.log(gerente)
console.log(diretor)


