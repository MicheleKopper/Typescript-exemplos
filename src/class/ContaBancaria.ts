type tipoConta = 'Corrente' | 'Poupança'

export interface CriarConta {
    nome: string
    cpf: string
    tipoConta: tipoConta
    saldo?: number
}

// Toda a classe pede para inicializar o atributo, pode ser com valores padrão ou construtor
// export class ContaBancaria {

//     // __________________ ATRIBUTOS __________________
//     nome: string
//     cpf: string
//     tipoConta: tipoConta
//     saldo: number

//     // Pode passar parâmetro por parâmetro dentro, ou dizer que é do tipo interface (CriarConta)
//     constructor(parametro: CriarConta) {
//         this.nome = parametro.nome
//         this.cpf = parametro.cpf
//         this.tipoConta = parametro.tipoConta
//         this.saldo = parametro.saldo || 0 // Utiliza o parâmetro saldo se tiver, OU, coloca 0
//         // OU | = criando tipos
//         // OU || = validação + atribuição
//     }

//     // __________________ MÉTODOS __________________
//     mostrarSaldo(){
//         console.log(`Seu saldo é de R$ ${this.saldo}`);

//     }
// }

// ENCAPSULAMENTO
/** 
 * Public = público (defaul)
 * Protected = dentro da classe e quem herda
 * Private = somente dentro da classe, usar _
*/

export class ContaBancaria {
    private _nome: string
    private _cpf: string
    private _tipoConta: tipoConta
    private _saldo: number

    // getter e seter ficam acima do construtor
    // get torna público, é possível visualizar (leitura) o atributo, mas não alterar
    // getter precisa retornar algo
    public get nome(): string {
        return this._nome
    }

    public get cpf(): string {
        return this._cpf
    }

    public get tipoConta(): tipoConta {
        return this._tipoConta
    }

    public get saldo(): number {
        return this._saldo
    }

    // Setter serve para alterar atributos, possível criar regras (validações), precisa receber um valor (parâmetro)
    public set nome(novoNome: string) {
        if (novoNome.length >= 3) {
            this._nome = novoNome
        } else {
            console.log('Opa, para alterar precisa ter no mínimo 3 caracteres...');
        }
    }

    public set saldo(novoSaldo: number) {
        if (novoSaldo < this._saldo) {
            console.log('Para sobrescrever o saldo, ele precisa ser maior que o atual');
            return
        }

        this._saldo = novoSaldo
    }

    public depositar(valor: number): void {
        if (valor <= 0) {
            console.log('O valor precisa ser maior que 0');
            return
        }

        this._saldo += valor
        this.mostrarSaldo()
    }

    constructor(parametro: CriarConta) {
        this._nome = parametro.nome
        this._cpf = parametro.cpf
        this._tipoConta = parametro.tipoConta
        this._saldo = parametro.saldo || 0
    }

    public mostrarSaldo() {
        console.log(`Seu saldo é de R$ ${this._saldo}`);

    }

    public mostrarConta() {
        return {
            nome: this._nome,
            cpf: this._cpf,
            tipoConta: this._tipoConta,
            saldo: this._saldo
        }
    }
}
