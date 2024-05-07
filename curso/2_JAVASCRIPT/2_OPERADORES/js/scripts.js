/* // 1 - Number
console.log(typeof 2);
console.log(typeof 5.14);
console.log(typeof -124);

// 2 - Operções Aritiméticas
console.log(38+4);
console.log(3-5);
console.log(39/2);
console.log(50*4);

// 3 - Special Numbers
console.log(typeof Infinity);
console.log(typeof -Infinity);
console.log(12 * "asd"); //NaN - Not a number
console.log(typeof NaN);

// 4 - Strings
console.log("Algum Texto");
console.log('Outro texto');
console.log('13');
console.log(typeof "Algum Texto");
console.log(typeof 'Outro texto');
console.log(typeof '13');

// 5 - Símbolos Especiais em String
console.log("Testando a quebra de linha \nOutra linha");
console.log("Espaçamento do \ttab")

// 6 - Concatenação
console.log("Oi," + " tudo " + "bem?");

// 7 - Interpolação - Template Strings
console.log(`A soma de 2 + 2 é: ${2+2}`);

// 8 - Booleans
console.log(true);
console.log(5>20);
console.log(30>10);

// 9 - Comparações
console.log(`5 <= 5 - ${5 <= 5}`);
console.log(`5 < 5 - ${5 < 5}`);
console.log(`5 == 5 - ${5 == 5}`);
console.log(`5 != 5 - ${5 != 5}`);

// 10 - Idêntico
console.log(`"5" == 5 - ${"5" == 5}`);
console.log(`"5" === 5 - ${"5" === 5}`);
console.log(`"5" != 5 - ${"5" != 5}`);
console.log(`"5" !== 5 - ${"5" !== 5}`); */

// 11 - Operadores Lógicos
var A = false;                         
var B = false;

console.log(`A = ` + A);
console.log(`B = ` + B);

console.log(`A && B = ${A && B}`);
console.log(`A || B = ${A || B}`);
console.log(`!A = ${!A}`);
console.log(`!B = ${!B}`);

console.log("-------------------------------");

var A = false;
var B = true;

console.log(`A = ` + A);
console.log(`B = ` + B);

console.log(`A && B = ${A && B}`);
console.log(`A || B = ${A || B}`);
console.log(`!A = ${!A}`);
console.log(`!B = ${!B}`);

console.log("-------------------------------");

var A = true;
var B = false;

console.log(`A = ` + A);
console.log(`B = ` + B);

console.log(`A && B = ${A && B}`);
console.log(`A || B = ${A || B}`);
console.log(`!A = ${!A}`);
console.log(`!B = ${!B}`);

console.log("-------------------------------");

var A = true;
var B = true;

console.log(`A = ` + A);
console.log(`B = ` + B);

console.log(`A && B = ${A && B}`);
console.log(`A || B = ${A || B}`);
console.log(`!A = ${!A}`);
console.log(`!B = ${!B}`);

// 12 - Empty Values
console.log(typeof null, typeof undefined);
console.log(null == undefined);
console.log(null === undefined);
console.log(null == false);
console.log(false == undefined);

// 13 - Mudança de Tipos
console.log(5 * null);
console.log("teste" * "algo");
console.log("10" + 1);
console.log("10" - 1);