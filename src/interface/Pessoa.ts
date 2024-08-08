export interface Pessoa {
    nome: string
    passaporte?: number
    email: string
    senha: string
}

// ou, export{Pessoa}
// ou, export default Pessoa - se tiver dafaul e sem {} é possível dar o nome que quiser no arquivo que eu importo, ex: import PessoaInterface from xxxx