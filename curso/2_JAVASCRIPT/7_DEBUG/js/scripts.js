// 1 - strict
/* "use strict"; */

//opa = "teste"; //A variavel não funciona, tem que criar com o const

/* const opa = "teste"; */

// 2 - console.log
/* let a = 1;
let b = 2;

if (a==1){
    a = b+2;
}

console.log("a=",a);

for (let i = 0; i < b; i++) {
    a = a + 2;
    console.log("a=",a);
}

if (a > 5) {
    a = 25;
}

console.log("a=",a);
 */
// 3 - Debugger
/* let c = 1;
let d = 2;

if (c==1){
    c = d+2;
}

debugger;

for (let i = 0; i < d; i++) {
    c = c + 2;
}

console.log("executou o loop");

debugger;

if (c > 5) {
    c = 25
}
 */

// 4 - Tratamento de dados
 function checkNumber(n) {
    const result = Number(n);

    if (Number.isNaN(result)) {
        console.log("Valor incorreto!");
        return;
    }

    console.log("Valor correto!");
    return result;
}

checkNumber(5);
checkNumber("6");
checkNumber({});
checkNumber("lalala");

// 5 - Exceptions
/* let x = 10;

if(x != 11) {
    throw new Error("O valor de x n pode ser diferente de 11");
}*/

// 6 - Try catch
/* try {
    const soma = x + y;
} catch (error) {
    console.log(`Erro no programa: ${error.message}`);
} */

// 7 - Finally
try {
    const value = checkNumber("1");

    if (!value) {
        throw new Error("Valores inválidos");
    }
} catch (error) {
    console.log(`Erro no programa: ${error.message}`);
} finally {
    console.log("O código foi executado");
}

// 8 - Assertion
function checkArray(arr) {

    if (arr.length === 0) {
        throw new Error("O array está vazio");
    } else {
        console.log(`O array tem ${arr.length} elementos`);
    }

}

/* checkArray([]); */

checkArray(["1", "2", "3"]);