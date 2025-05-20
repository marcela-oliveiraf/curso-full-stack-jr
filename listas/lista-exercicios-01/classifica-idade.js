/**
 * Exercício 2 - Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso) 
 * com base no valor fornecido, utilizando uma estrutura de controle if-else
 */

function classificaIdade(idade) { 
    if (idade >= 0 && idade <= 11) {
        return "Criança";
    } else if (idade >= 12 && idade <= 17) {
        return "Adolescente";
    } else if (idade >= 18 && idade <= 64) {
        return "Adulto";
    } else if (idade >= 65) {
        return "Idoso";
    } else {
        return "Idade inválida";
    }
}

// Testes

console.log(classificaIdade(11));    // Criança
console.log(classificaIdade(14));    // Adolescente
console.log(classificaIdade(20));    // Adulto
console.log(classificaIdade(78));    // Idoso
console.log(classificaIdade(-10));   // Idade inválida
