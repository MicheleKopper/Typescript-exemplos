console.log('Olá, mundo!');

import { Pessoa } from "./interface/Pessoa";
import { Cliente } from "./types/Cliente";

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

const cliente: Cliente = {
    nome: "Theodoro Kopper",
    telefone: 123.456,
    setor: "móveis"
}

mostrarCliente(cliente)