// Abstrair uma classe animal
// Atributos: nome, espécie, cor, idade, peso, altura
// Métodos: emitirSim, comer, dormir


export class Animal {
    // private _nome: string
    // private _especie: string
    // private _cor: string
    // private _idade: number
    // private _peso: number
    // private _altura: number

    protected nome: string
    protected especie: string
    protected cor: string
    protected idade: number
    protected peso: number
    protected altura: number

    constructor(nome: string, especie: string, cor: string, idade: number, peso: number, altura: number) {
        this.nome = nome
        this.especie = especie
        this.cor = cor
        this.idade = idade
        this.peso = peso
        this.altura = altura
    }

    public emitirSom(): void {
        console.log('Emitindo som..');

    }

    public comer(): string {
        console.log('Comendo...');
        return ''
    }

    public dormir(): void {
        console.log('Dormindo...');

    }
}

