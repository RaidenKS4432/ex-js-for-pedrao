//  ex 1
// console.log(23 + 4);
// console.log(32 - 9);
// console.log(2 * 4);
// console.log(4 / 2);
// console.log(39 % 2);

// Escreva um código que retorne o maior de dois números. Defina, no começo do seu código, duas variáveis com os valores que serão comparados.
// const number1 = 40;
// const number2 = 799;
// let biggerNumber;
// if (number1 > number2) {
//     biggerNumber = number1;
// } else {
//     biggerNumber = number2;
// }
// console.log('o maior numero é ' + biggerNumber);

// Escreva um código que retorne o maior de três números. Defina, no começo do seu código, três variáveis com os valores que serão comparados.
// const number1 = 20;
// const number2 = 30;
// const number3 = 10;
// let biggerNumber;
// if (number1 > number2 && number1 > number3) {
//     biggerNumber = number1;
// } else if (number2 > number1 && number2 > number3) {
//     biggerNumber = number2;
// } else if (number3 > number1 && number3 > number2) {
//     biggerNumber = number3;
// }
// console.log(' o maior numero é ' + biggerNumber);
// Escreva um código que retorne se um número qualquer é positivo. Defina, no começo do seu código, uma variável com o valor que será comparado.
// const number1 = 2;
// if (number1 > 0) {
//     console.log(' o numero é positivo  ');
// } else {
//     console.log(' o numero não é positivo');
// }
// Escreva um código que retorne se um número qualquer é inteiro. Defina, no começo do seu código, uma variável com o valor que será comparado.
// const number1 = 10.0;
// if (number1 % 1 === 0) {
//     console.log(' o numero e inteiro ');
// } else {
//     console.log(' o numero nao e inteiro');
// }
// Escreva um código que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.
// const angle1 = 60;
// const angle2 = 60;
// const angle3 = 60;
// if (angle1 + angle2 + angle3 === 180) {
//     console.log(' true');
// } else {
//     console.log(' false');
// Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela pode fazer.
// Se a peça passada for inválida, o código deve retornar uma mensagem de erro.
// Desafio extra, escreva um código para funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais. Uma dica é pesquisar uma função que faça uma string ficar com todas as letras minúsculas.
// Exemplo: Bispo -> Diagonais.
// const movimentoPeça = 'rei';
// switch (movimentoPeça) {
// case 'bispo':
//     console.log('move na diagonal');
//     break;
// case 'rei':
//     console.log('move em qualquer direção');
//     break;
// case 'rainha':
//     console.log('pode mover em qualquer direção');
//     break;
// case 'cavalo':
//     console.log('move em L');
//     break;
// case 'torre':
//     console.log('move em vertical ou horizontal');
//     break;
// case 'peao':
//     console.log('move uma casa para frente');
//     break;
// default:
//     console.log(' nao e xadrez e dama');    
// }
// Escreva um código que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, o código deve retornar false. Faça esse exercício utilizando somente um if.
// const number1 = 5;
// const number2 = 6;
// const number3 = 8;
// if (number1 % 2 === 0 || number2 % 2 === 0 || number3 % 2 === 0) {
//     console.log(true);
// } else {
//     console.log(false);
// }
// Escreva um código que recebe um número e retorne true se esse número for primo e false caso não for.
// const limit = 19;
// let isPrimeNumber = true;
// for (let i = 2; i < limit; i += 1) {
//     if (limit % i === 0) {
//         isPrimeNumber = false;
//     }
// }
// console.log(isPrimeNumber);Escreva um código que, dado um salário bruto, calcule o salário líquido a ser recebido.
// 
// Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS (Instituto Nacional do Seguro Social) e o IR (Imposto de Renda).
// ⭐️ A notação para um salário de R$1.500,10, por exemplo, deve ser 1500.10.
// Para as faixas de impostos, use as seguintes referências:
// INSS
// Salário bruto até R$ 1.556,94: alíquota de 8%;
// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%;
// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%;
// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88.
// IR
// Até R$ 1.903,98: isento de imposto de renda;
// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto;
// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto;
// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto;
// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
// O cálculo deve ser o demonstrado a seguir, onde foi considerado um salário bruto de R$3000,00:
// O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para o INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
// Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
// Para calcular o valor do IR, considera-se um salário-base (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, em que a alíquota é de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, tem-se:
// R$ 2.670,00 - salário com INSS já deduzido;
// 7.5% - alíquota de imposto de renda, que representa um desconto de R$ 200,25;
// R$ 142,80 - parcela a ser deduzida do imposto de renda.
// Para obter o valor do imposto de renda, calcula-se: R$ 200,25 (que representa 7,5% de R$ 2.670,00) - R$ 142,80 (dedução do imposto de renda) = R$ 57,45.
// Para obter o salário líquido, calcula-se: R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.
// Resultado: R$ 2.612,55.
// Resultado esperado no console: "Uma pessoa que tem R$3000,00 como salário bruto, após deduções, fica com R$2612,55."
// const salarioBruto1 = 5250;
// let inss;
// if (salarioBruto1 <= 1556.94) {
//     inss = salarioBruto1 * 0.08;
// } else if (salarioBruto1 <= 2594.92) {
//     inss = salarioBruto1 * 0.09;
// } else if (salarioBruto1 <= 5189.82) {
//     inss = salarioBruto1 * 0.11;
// } else {
//     inss = 570.88;
// }
// const salarioBase = salarioBruto1 - inss;
// let ir;
// if (salarioBase <= 1903.99) {
//     ir = 0;
// } else if (salarioBase <= 2826.65) {
//     ir = salarioBase * 0.075 - 142.80;
// } else if (salarioBase <= 3751.05) {
//     ir = salarioBase * 0.015 - 354.80;
// } else if (salarioBase <= 4664.68) {
//     ir = salarioBase * 0.225 - 636.13;
// } else {
//     ir = salarioBase * 0.275 - 869.36;
// }
// const salarioLiquido = salarioBase - ir;
// console.log('uma pessoa que tem R$' + salarioBruto1 + ' como salario bruto, apos deduções, fica com R$' + salarioLiquido.toFixed(2) + '.');
// 
// Considere esse array para realizar os próximos exercícios.
// const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// Percorra o array imprimindo todos os valores contidos nele.
// Some todos os valores contidos no array e imprima o resultado.
// Calcule e imprima a média aritmética dos valores contidos no array.
// Com base no código que acabou de gerar, referente ao cálculo da média aritmética, faça com que:
// caso o valor final seja maior que 20, imprima a mensagem “O valor da média aritmética é maior que 20”;
// caso não seja maior que 20, imprima a mensagem “O valor da média aritmética é menor ou igual a 20”.
// Descubra o maior valor contido no array e imprima-o.
// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”.
const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// for (let i = 0; i < numbers.length; i += 1) {
//     console.log(numbers[i]);
// }
// for (let i = 0; i < numbers.length; i += 1) {
//     console.log(numbers[i] * 2);
// }
// let result = 0;
// for (let i = 0; i < numbers.length; i += 1) {
// result += (numbers[i]);
// }  
// console.log(result);