/**
 * Exercício 7 - As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
 * forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs compradas, 
 * calcule e escreva o valor total da compra.
*/

function calculaPrecoMacas(quantidade) {
    if (quantidade < 0) {
        return "Quantidade inválida. Tente novamente";
    }

    let precoPorMaca = quantidade < 12 ? 0.30 : 0.25;
    let total = quantidade * precoPorMaca;

    return `O valor total da compra é: R$ ${total.toFixed(2)}`;
}

// Testes

console.log(calculaPrecoMacas(8));     // O valor total da compra é: R$ 2.40
console.log(calculaPrecoMacas(12));    // O valor total da compra é: R$ 3.00
console.log(calculaPrecoMacas(-10));   // Quantidade inválida. Tente novamente

