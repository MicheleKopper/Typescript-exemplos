import { log } from "console"

type Setor = "móveis" | "ferramentas" | "eletrônicos"

export class Cliente {
    // Atributos
    nome: string
    telefone: number
    setor: Setor

    // Construtor - 
    constructor(nomeQualquer: string, phone: number, setor: Setor) {
        this.nome = nomeQualquer
        this.telefone = phone
        this.setor = setor
    }

    // Métodos
    mostrarCliente(): void {
        console.log('mostrarCliente()');

        console.log(this);//This contém tudo o que tem na classe
    }
}