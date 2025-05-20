/**
 * Exercício 14 - Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while
 */

const prompt = require('prompt-sync')();

function calculaFatorial() {
    let numero = parseInt(prompt("Digite um número inteiro: "));
    let fatorial = 1;

    if (numero < 0) {
        console.log("Fatorial não existe");
        return;
    }

    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }

    console.log(`O fatorial de ${numero} é: ${fatorial}`);
}

calculaFatorial();