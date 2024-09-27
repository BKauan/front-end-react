// 1 - Array
/* const lista = [1, 2, 3, 4, 5, 6, 7, 8]

console.log(lista) */

// 2 - Mais sobre array
/* const arr = ['a', 'b', 'c', 'd', 'e']

console.log(arr[0])

console.log(arr[2]) */


// 3 - Propriedades
/* const numbers = [4, 5, 6, 7]

console.log(numbers.length)
console.log(numbers['length'])

const myName = "Bruno"

console.log(myName.length) */

// 4 - Métodos
/* const otherNumbers = [1, 2, 3]

const allNumbers = numbers.concat(otherNumbers)

console.log(allNumbers)

const texto = 'Algum texto'

console.log(texto.toUpperCase())

console.log(texto.indexOf("g")) */

// 5 - Objetos
/* const person = {
    name: "Bruno",
    age: 25,
    job: "dev web"
}

console.log(person)
console.log(person.name.length)
console.log(person.job.toUpperCase()) */

// 6 - Criando e deletando propriedades
/* const car = {
    engine: 2.0,
    brand: 'VW',
    model: 'Tiguan',
    km: 20000
}

console.log(car)

car.doors = 4

console.log(car)

delete car.km

console.log(car) */

// 7 - Mais sobre objetos
/* const obj = {
    a: 'test',
    b: true
}

console.log(obj instanceof Object)

const obj2 = {
    c: []
}

Object.assign(obj2, obj)

console.log(obj2) */

// 8 - Keys & Entries
/* console.log(Object.keys(obj))
console.log(Object.keys(obj2))
console.log(Object.keys(car))

console.log(Object.entries(car)) */

// 9 - Multação(Multability)
/* const a = {
    name: "Bruno"
}

const b = a

console.log(a)
console.log(b)

a.age = 25

console.log(a)
console.log(b)

delete b.age

console.log(a)
console.log(b) */

// 10 = Loop em Arrays
/* const users = ['Bruno', 'Camila', 'Ariel', 'Leonardo']

for(let i = 0; i < users.length; i++){
    console.log(users[i])
} */

// 11 - Push e Pop - Adiciona e remove do fim da lista
/* const array = ['a', 'b', 'c']

array.push('d')

console.log(array)

array.pop()

console.log(array)

const itemRemovido = array.pop()

console.log(itemRemovido)
console.log(array) */


// 12 - Shift e Unshift - Adiciona e remove do inicio da lista
/* const letters = ['a', 'b', 'c']

const letter = letters.shift()

console.log(letter)
console.log(letters)

letters.unshift('a')

console.log(letters) */

// 13 - IndexOf e lastIndexOf
/* const myElements = ['Morango', 'Maçã', 'Abacate', 'Abacaxi', 'Abacate']

console.log(myElements.indexOf('Maçã'))
console.log(myElements.indexOf('Abacate'))

console.log(myElements[2])
console.log(myElements[myElements.indexOf('Abacate')])

console.log(myElements.lastIndexOf('Abacate')) */

// 14 - Slice
/* const mySlice = ['a', 'b', 'c', 'd', 'e', 'f']

const subArray = mySlice.slice(2, 4)

console.log(mySlice)
console.log(subArray)

const subArray2 = mySlice.slice(2, 4 + 1)
console.log(subArray2)

const subArray3 = mySlice.slice(4, 10)
console.log(subArray3)

const subArray4 = mySlice.slice(3)
console.log(subArray4) */

// 15 - Foreach
/* const nums = [1, 2, 3, 4, 5]

nums.forEach((num) => {
    console.log(`O número é ${num}`)
})

const posts = [
    {title: 'Pimeiro post', category: 'PHP'},
    {title: 'Segundo post', category: 'JavaScript'},
    {title: 'Terceiro post', category: 'Python'}
]

posts.forEach((post) => {
    console.log(`Exibindo post: ${post.title}, da categoria: ${post.category}`)
}) */

// 16 - Includes
/* const brands = ['BMW', 'VW', 'Fiat']

console.log(brands.includes('Fiat'))

console.log(brands.includes('KIA'))

if(brands.includes('BMW')) {
    console.log('Existem carros da marca BMW')
} */

// 17 - Reverse
/* const reverseTest = [1, 2, 3, 4, 5]

reverseTest.reverse()

console.log(reverseTest) */

// 18 - Trim
/* const trimTest = "  Testeando \n  "

console.log(trimTest);

console.log(trimTest.trim());

console.log(trimTest.length);

console.log(trimTest.trim().length); */

// 19 - PadStart
/* const testPadStart = "1";

const newNumber =  testPadStart.padStart(4, '1');

console.log(testPadStart);
console.log(newNumber);

const testPadEnd = newNumber.padEnd(10, '0')

console.log(testPadEnd);
 */
// 20 - Split
/* const frase = "O rato roeu a roupa do rei de roma";

const arrayFrase = frase.split(" ");

console.log(arrayFrase); */

// 21 - Join
/* const fraseJoin = arrayFrase.join(" ");

console.log(fraseJoin);

const itensParaCompra = ["Mouse", "Teclado", "Monitor"];

const fraseCompra = `Precisamos comprar: ${itensParaCompra.join(", ")}`

console.log(fraseCompra); */

// 22 - Repeat
/* const palavra = "Testando ";

console.log(palavra.repeat(5)); */

// 23 - Rest operator
/* const somaInfinita = (...args) => {

    let total = 0;

    for (let i = 0; i < args.length; i++) {
        total += args[i];
    }

    return total;

}

console.log(somaInfinita(1, 2, 3));

console.log(somaInfinita(1, 20, 34, 3223, 314, 51234, 2, 434, 54)); */

// 24 - For...of
/* const somaInfinita2 = (...args) => {

    let total = 0;

    for(num of args) {
        total +=num;
    }

    return total;

}

console.log(somaInfinita2(1, 2, 3));

console.log(somaInfinita2(1, 20, 34, 3223, 314, 51234, 2, 434, 54)); */

// 25 - Destructuring em objetos
/* const userDetails = {
    firtName: "BRUNO",
    lastName: "AMARAL",
    job: "Programador"
}

const {firtName, lastName, job} = userDetails;

console.log(firtName, lastName, job);

//Renomear variáveis
const {firtName: primeiroNome} = userDetails;

console.log(primeiroNome);
 */

// 26 - Destructuring em arrays
/* const myList = ["Avião", "Submarino", "Carro"];

const [veiculoA, veiculoB, veiculoC] = myList;

console.log(veiculoA, veiculoB, veiculoC); */

// 27 - JSON
/* const myJson = '{"name": "Bruno", "age": 26, "skills": ["HMTL", "CSS", "Javascript"]}';

console.log(myJson);

// 28 - JSON para objeto e objeto para JSON
const myObject = JSON.parse(myJson);

console.log(myObject);

myObject.isOpenToWork = true;

console.log(myObject);

// Objeto para JSON
const myNewJson = JSON.stringify(myObject);

console.log(myNewJson); */

// JSON invalido
/* const badJson = '{"name": Matheus, "age": 31}';

const myBadJson = JSON.parse(badJson); */