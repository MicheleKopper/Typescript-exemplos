import { log } from "console";
import { Animal } from "./Animal";

// Extends serve para que a classe Leão herde todas as infos de Animal (herença)
export class Leao extends Animal {

    private _pelagem: string

    constructor(
        nome: string,
        especie: string,
        cor: string,
        idade: number,
        peso: number,
        altura: number,
        pelagem: string
    ) {
        // Super responsável por chamar o construtor da classe pai (arquivo Animal > constructor)
        super(nome, especie, cor, idade, peso, altura)
        this._pelagem = pelagem
    }

    public alterarIdade(novaIdade: number): void {
        this.idade = novaIdade
    }

    //POLIMORFISMO - mesmo nome que herdou do pai (Animal), mas com comportamento (lógica) diferente particular dele
   public emitirSom(): void {
       console.log('Brooooooooowwwwwwwwwwwww');
   }

   public comer(): string {
       console.log('Comendo macarrão...');
       return 'Comendo macarrão...'
   }


}