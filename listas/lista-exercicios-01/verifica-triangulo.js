/**
 * Exercício 6 - Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
 * formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo: Isósceles, escaleno ou equilátero.
 *
 */

function verificaTriangulo(a, b, c) {

    if (a <= 0 || b <= 0 || c <= 0) {
        return "Valores inválidos. Os lados devem ser maiores que zero";
    }

    if (a + b > c && a + c > b && b + c > a) {
        if (a === b && b === c) {
            return "Triângulo equilátero";
        } else if (a === b || a === c || b === c) {
            return "Triângulo isósceles";
        } else {
            return "Triângulo escaleno";
        }
    } else {
        return "Os valores não formam um triângulo";
    }
}

// Testes

console.log(verificaTriangulo(3, 4, 5));    // Triângulo escaleno
console.log(verificaTriangulo(9, 9, 9));    // Triângulo equilátero
console.log(verificaTriangulo(7, 4, 7));    // Triângulo isósceles
console.log(verificaTriangulo(1, 2, 3));    // Os valores não formam um triângulo
console.log(verificaTriangulo(0, 0, 0));    // Valores inválidos. Os lados devem ser maiores que zero