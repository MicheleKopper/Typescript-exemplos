// O type desta forma restringe o setor em apenas 3 tipos
type Setor = "móveis" | "ferramentas" | "eletrônicos"

export type Cliente = {
    nome: string
    telefone: number
    setor: Setor
}