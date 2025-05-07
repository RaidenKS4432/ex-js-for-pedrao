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