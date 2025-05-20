/**
 * Exercício 1 - Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if
 * 
 */

function parOuImpar(numero) {
    if (numero % 2 === 0) {    
        return `${numero} é par`;
    } else {
        return `${numero} é ímpar`;
    }
}

// Testes

console.log(parOuImpar(432));     // 432 é par
console.log(parOuImpar(75545));   // 75545 é ímpar