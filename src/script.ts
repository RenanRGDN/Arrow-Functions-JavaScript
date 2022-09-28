import PromptSync = require('prompt-sync');
const prompt = PromptSync();

const calcImc = (peso: number, altura: number) => {
    return peso / Math.pow(altura, 2);
}

const peso = Number(prompt('Digite o seu peso: '));
const altura = Number(prompt('Digite a sua altura: '));

const imc = calcImc(peso, altura);

console.log(`seu IMC é: ${imc.toFixed(0)}`);