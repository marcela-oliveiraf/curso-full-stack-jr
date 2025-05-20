/**
 * Exercício 5 - Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
 * determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else
 */

function calculaIMC() {
    const prompt = require('prompt-sync')();

    let peso = parseFloat(prompt("Digite seu peso (em kg): "));
    let altura = parseFloat(prompt("Digite sua altura (em metros): "));

    if (peso <= 0 || altura <= 0) {
        console.log("Valores Inválidos. Tente Novamente.");
        return;
    }

    let imc = peso / (altura * altura);
    console.log(`Seu IMC é: ${imc.toFixed(2)}`);

    if (imc < 18.5) {
        console.log("Magreza");
    } else if (imc >= 18.5 && imc < 24.9) {
        console.log("Peso normal");
    } else if (imc >= 25 && imc < 29.9) {
        console.log("Sobrepeso");
    } else if (imc >= 30 && imc < 39.9) {
        console.log("Obesidade");
    } else {
        console.log("Obesidade grave");
    }
}

calculaIMC();