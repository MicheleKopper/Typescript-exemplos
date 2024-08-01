// ------ TIPOS DE TYPESCRIPT ------

// STRING
const nome: string = "Michele Kopper";

// NUMBERS
const soma: number = 22;

// BOOLEANS
const ativo: boolean = true;

// NULL
const souNull: null = null;

// UNDEFINED
const naoDefinido: undefined = undefined;

// ARRAYS
const numeros: number[] = [2, 34, 1, 0];

const listaMercado: Array<string> = ["Tomate", "Cebola"];

const arrayDinamico: (string | number | boolean)[] = ["Sou string", 1, true, 1]; //Os ( ) são necessários quando temos vários tipos + o [ ]

// OBJECT
const objetoVazio: object = {}; //Não controla os tipos de dados dentro do objeto

const pessoa: object = {
    nome: "Michele Kopper",
    cpf: "1232130-1203",
};

// VOID - Não gera retorno (return)
function printar(): void {
    console.log("Olá mundo!");
}

// RETORNO (RETURN) BOOLEAN - Precisa apresentar o true e false
function maioridade(idade: number): boolean {
    if (idade >= 18) {
      return true;
    }
    return false;
  }

// INTERFACE - nome em PascalCase (1° letra maiúscula), não precisa de vírgula
//Declarando minha interface
interface Pessoa {
    nome: string
    cpf: string
}

// Criando minha variável com o tipo da interface
const michele: Pessoa = {
    nome: "Michele Kopper",
    cpf: "12345-678"
}

// ? torna o item não obrigaório

  