/**
 * Exercício 15 - Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for
 */

function fibonacci() {
    let a = 0, b = 1;
    console.log(a);
    console.log(b);
    for (let i = 2; i < 10; i++) {
        let c = a + b;
        console.log(c);
        a = b;
        b = c;
    }
}

fibonacci();
