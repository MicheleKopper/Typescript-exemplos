export class Casa {
    // CLASSES = são os nossos moldes
    
    // ATRIBUTOS = propriedades (dá erro inicial por que ele precisa do construtor) para contornar o erro usar uma das alternativas abaixo
    janelas: number = 0 //Definir um valor padrão 0
    largura!: number // ! Afirma que a propriedade não será nula
    altura: number // No tsconfig.json mudar para false: "strictPropertyInitialization"

    //MÉTODOS = funções ou ações
    abrirJanela(): void {
        // Lógica...
        console.log('Abrindo a janela...');
    }

    fecharJanela(parametros: string): void {
        // Lógica...
        console.log('fechando a janela...', parametros);
    }
}