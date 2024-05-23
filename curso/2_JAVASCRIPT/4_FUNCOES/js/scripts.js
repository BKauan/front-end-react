// Criando uma função
function minhaFuncao(){
    console.log("Testando")
}

minhaFuncao()

const minhaFuncaoEmVariavel = function(){
    console.log("Testando função em variavel")
}

minhaFuncaoEmVariavel()

function funcaoComParametro(txt) {
    console.log(`Imprimindo: ${txt}`)
}

funcaoComParametro("Imprimindo algo")

// 2 - Return
const a = 10
const b = 20
const c = 30
const d = 40

function soma(n1, n2) {
    return n1 + n2
}

const resultado = soma(a, b)

console.log(resultado)
console.log(soma(c, d))

// 3 - Escopo de função
let y = 10

console.log(`Y dentro da função é ${y}`)

function testandoEscopo(){
    let y = 20
    console.log(`Y dentro da função é ${y}`)
}

testandoEscopo()

y = 15

console.log(`Y dentro da função é ${y}`)

testandoEscopo()

// 4 - Escopo aninhado(Nested Scopes)
let m = 10

function escopoAninhado(){
    let m = 20

    if(true){
        let m = 30

        if(true) {
            let m = 40

            console.log(m)
        }
        console.log(m)
    }
    console.log(m)
}

escopoAninhado()

console.log(m)

// 5 - Arrow function
const testeArrow = () => {
    console.log("Esta é uma arrow function")
}

testeArrow()

const parOuImpar = (n) => {
    if(n%2 === 0){
        console.log(`${n} é par`)
        return
    }

    console.log(`${n} é impar`)
}

parOuImpar(5)

parOuImpar(10)

// 6 - Arrow function resumida
const raizQuadrada = (x) => {
    return Math.sqrt(x)
}

console.log(raizQuadrada(16))

const raizQuadrada2 = (x) => Math.sqrt(x)

console.log(raizQuadrada(144))

// 7 - Parametro opcional
const multipication = function(m, n){
    if(n === undefined){
        return m*2
    } else {
        return m*n
    }
}

console.log(multipication(5))
console.log(multipication(4,2))

const greeting = (name) => {
    if(!name){
        console.log("Olá")
        return
    }

    console.log(`Olá ${name}`)
}

greeting()

greeting('Bruno')

// 8 -  Parametro Default
const customGreeeting = (name, greet = "Olá") => {
    return `${greet}, ${name}`
}

console.log(customGreeeting("Bruno"))
console.log(customGreeeting("Camila", "Bom dia"))

const repeatText = (text, repeat = 2) => {
    for (let i = 0; i < repeat; i++){
        console.log(text)
    }
}

repeatText('testando')
repeatText('Repetindo 5 vezes', 5)

// 9 - Closure
function someFunction(){
    let txt = 'Alguma coisa'

    function display(){
        console.log(txt)
    }

    display()
}

someFunction()

// 10 - Mais sobre Closure
const multipicationClosure = (n) => {
    return (m) => {
        return n*m
    }
}

const c1 = multipicationClosure(5)
const c2 = multipicationClosure(10)

console.log(c1)
console.log(c2)

console.log(c1(5))
console.log(c2(10))

// 11 - Recursão
const untilTen = (n, m) => {
    if(n<10) {
        console.log('A função parou de executar!')
    } else {
        const x = n - m 

        console.log(x)

        untilTen(x, m)
    }

}

untilTen(100, 7)

function factorial(x){
    if(x === 0){
        return 1
    } else {
        return x * factorial(x - 1)
    }
}

const num = 6

const result = factorial(num)

console.log(`O fatorial de ${num} é ${result}`)