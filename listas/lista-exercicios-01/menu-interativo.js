/**
 * Exercício 4 - Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada
 */

function menuInterativo() {
    const prompt = require('prompt-sync')();
    let opcao;

    do {
        console.log("----- MENU -----\n");
        console.log("Bem-vindo!");
        console.log("Escolha qual marca de maquiagem você prefere:\n");
        console.log("1 - Face Beautiful");
        console.log("2 - Bruna Tavares");
        console.log("3 - Boca Rosa");
        console.log("4 - Nenhuma das opções");
        console.log("0 - Sair\n");
        opcao = parseInt(prompt("Digite: "));

        switch (opcao) {
            case 1:
                console.log("Você escolheu Face Beautiful\n\n");
                break;
            case 2:
                console.log("Você escolheu Bruna Tavares\n\n");
                break;
            case 3:
                console.log("Você escolheu Boca Rosa\n\n");
                break;
            case 4:
                console.log("Você escolheu nenhuma das opções\n\n");
                break;
            case 0:
                console.log("Muito obrigado por participar!\n\n");
                break;
            default:
                console.log("Opção inválida. Tente novamente\n\n");
        }
    } while (opcao !== 0);
}

menuInterativo();