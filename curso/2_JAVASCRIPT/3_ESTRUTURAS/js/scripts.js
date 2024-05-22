// 1 - Variáveis
let nome = "Bruno";

console.log(nome);

nome = "Bruno Kauan Alves do Amaral";

console.log(nome);

const idade = 24;

console.log(idade);

// idade = 32;

console.log(typeof nome);
console.log(typeof idade);

// 2 - Mais Sobre Variáveis
// let 2idade = "inválido";
// let @idade = "inválido;

let a = 10, b = 20, c = 30;

console.log(a, b, c);

const nomecompleto = "Bruno Kauan Alves do Amaral";

const nomeCompleto = "Camila Santana Lins Bispo";

console.log(nomecompleto);
console.log(nomeCompleto);

let _var = "Ok";
let $var = "Ok";

console.log($var);
console.log(_var);

// 3 - Prompt
/* const age = prompt("Digite a sua idade:")

console.log(`Você tem ${age} anos.`); */

// 4 - Alert
/* alert("Testado"); */

// 5 - Math
console.log(Math.max(5, 2, 1, 10));

console.log(Math.floor(5.14));

console.log(Math.ceil(5.14));

// 6 - Console
console.log("teste");

console.error("Deu erro");

console.warn("Aviso");

// 7 - If
const m = 10;

if (m > 5) {
    console.log("M é maior que 5!")
}

// 8 - Else
const n = 10;

if (n < 5) {
    console.log("N é maior que 5!")
} else {
    console.log("N é menor que 5!")
}

// 9 - Else if
if (1 > 2) {
    console.log("Teste")
} else if (2 > 3) {
    console.log("Teste 2")
} else if (5 > 1) {
    console.log("Agora vai!")
}

// 10 - While
let p = 0

while (p < 5) {
    console.log(`Repetindo: ${p}`)

    p ++
}

// 11 - Do While
let o = 10

do {
    console.log(`Valor de O: ${o}`)

    o--
} while (o > 1)

// 12 - For
for(let t = 0; t < 10; t++) {
    console.log(`Repetindo: ${t}`)
}

// 13 - Break
for(let g = 20; g > 10; g--) {
    console.log(`O valor de G é: ${g}`)

    if(g === 15) {
        console.log(`O valor de G é 15`)
        break
    }
}

// 14 - Continue
for(let s = 1; s < 10; s++) {
    if(s % 2 === 0) {
        console.log(`Número par!`)
        continue
    }

    console.log(s)
}

// 15 - Switch
const job = "Advogado"

switch(job) {
    case "Programador":
        console.log(`Você é um programador`)
        break
    case "Advogado":
        console.log(`Você é um advogado`)
        break
    case "Engenheiro":
        console.log(`Você é um engenheiro`)
        break
    case "Professor":
        console.log(`Você é um professor`)
        break
    default:
        console.log(`A profissão não foi encontrada`)
}