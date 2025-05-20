/**
 * Exercício 8 - Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente
 */

function ordemCrescente(valor1, valor2) {
    if (valor1 < valor2) {
        return `A ordem crescente é: ${valor1}, ${valor2}`;
    } else {
        return `A ordem crescente é: ${valor2}, ${valor1}`;
    }
}

// Testes

console.log(ordemCrescente(10, 11));    // A ordem crescente é: 10, 11
console.log(ordemCrescente(900, 15));   // A ordem crescente é: 15, 900
console.log(ordemCrescente(0, -1));     // A ordem crescente é: -1, 0
