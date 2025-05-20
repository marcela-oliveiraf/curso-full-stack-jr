/**
 * Exercício 3 - Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if
 * 
*/

function classificaNota(nota) {
    if (nota >= 0 && nota < 5) {
        return "Reprovado";
    } else if (nota >= 5 && nota < 6) {
        return "Recuperação";
    } else if (nota >= 7 && nota <= 10) {
        return "Aprovado";
    } else {
        return "Nota inválida";
    }
}

// Testes

console.log(classificaNota(4.8));   // Reprovado
console.log(classificaNota(5));     // Recuperação
console.log(classificaNota(7));     // Aprovado
console.log(classificaNota(8.5));   // Aprovado
console.log(classificaNota(-1));    // Nota inválida