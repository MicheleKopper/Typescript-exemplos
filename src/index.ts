import { Casa } from "./class/Casa";
import { Cliente } from "./class/Cliente";
import { ContaBancaria, CriarConta } from "./class/ContaBancaria";
import { Pessoa } from "./interface/Pessoa";
// import { Cliente } from "./types/Cliente";

//__________ INTERFACE __________
// Interface possibilita criar moldes para os nossos objetos
const michele: Pessoa = {
    nome: "Michele Kopper",
    passaporte: 123,
    email: "michelekopper@gmail.com",
    senha: "senha123"
}

function criarPessoa(pessoa: Pessoa): void {
    console.log('Criando pessoa...');
    console.log(pessoa);
}

criarPessoa(michele)




// ARQUIVO CLIENTE.TS
function mostrarCliente(cliente: Cliente): void {
    console.log(`O cliente é: ${cliente.nome}`);
    console.log(`O telefone do cliente é: ${cliente.telefone}`);
}

// const cliente = {
//     nome: "Theodoro Kopper",
//     telefone: "123.456"
// }

// const cliente: Cliente = {
//     nome: "Theodoro Kopper",
//     telefone: 123.456,
//     setor: "móveis"
// }

// mostrarCliente(cliente)




// ARQUIVO CASA.TS
console.log('----------------------- Class Casa -----------------------');

//______ CASA 01 ______
const casaUm = new Casa() // Molde 
// New algumaCoisa() = instanciar

// ------> Atributos
casaUm.altura = 6 //Uso o molde e personalizo os valores
casaUm.largura = 15
casaUm.janelas = 10 // Pego a instância da minha casa, acesso a propriedade e atribuo um valor

console.log('Casa 01 --->', casaUm);

// ------> Métodos
casaUm.abrirJanela()
casaUm.fecharJanela('da casa 01')


//______ CASA 02 ______
const casaDois = new Casa()
casaDois.altura = 2
casaDois.largura = 5
casaDois.janelas = 5

console.log('Casa 02 --->', casaDois);

casaDois.abrirJanela()
casaDois.fecharJanela('da casa 02')


// ______ CLIENTE 01 ______
// Utilizando o construtor 
const cliente01 = new Cliente('Cliente 01', 123456, "eletrônicos")
console.log(cliente01);


cliente01.nome = 'Michele Kopper' // pode mudar as infos
console.log(cliente01);

cliente01.mostrarCliente() // Não precisaria de log, podemos apenas chamar a o método




// ARQUIVO CONTABANCARIA.TS
// const conta01 = new ContaBancaria({
//     nome: 'João da Silvassauro',
//     cpf: '123.456',
//     tipoConta: "Corrente",
// })
// console.log(conta01);

// //Pode acessar as propriedades para mudar os valores
// conta01.nome = 'Baby da Silvassauro'
// conta01.tipoConta = 'Poupança'
// console.log(conta01);

// ---> Encapsulamento
const dados: CriarConta = {
    nome: 'João da Silvassauro',
    cpf: '123.456',
    tipoConta: "Corrente",
}
const conta01 = new ContaBancaria(dados)

conta01.mostrarSaldo()

// Agora é possível visualizar o atributo nome através do getter
const nome = conta01.nome
const cpf = conta01.cpf

console.log(nome, cpf);



const cliente03 = {
    nome: conta01.nome,
    cpf: conta01.cpf,
    tipoConta: conta01.tipoConta,
    saldo: conta01.saldo
}

cliente03.saldo = 55
console.log(cliente03);


// Podemos alterar usando setters
// Novo nome
conta01.nome = 'Dino da Silvassauro'

// Novo saldo
conta01.saldo = 10

// Depositar valor
conta01.depositar(500)

console.log(conta01.mostrarConta());


