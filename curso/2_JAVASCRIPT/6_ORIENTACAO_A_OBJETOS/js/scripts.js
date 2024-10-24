// 1 - Métodos
/* const animal = {
    nome: "Akin",
    latir: function(){
        console.log("Au au");
    }
}

console.log(animal.nome);

animal.latir(); */

// 2 - Aprofundando Métodos
/* const pessoa = {

    nome: "Bruno",

    getNome: function () {
        return this.nome;
    },

    setNome: function (novoNome) {
        this.nome = novoNome;
    },

};

console.log(pessoa.getNome());

console.log(pessoa.nome);

pessoa.setNome("Camila");

console.log(pessoa.getNome());

console.log(pessoa.nome); */

// 3 - Prototype
/* const text = "sfdnodi"

console.log(Object.getPrototypeOf(text));

const bool = true;

console.log(Object.getPrototypeOf(bool));

const arr = [];

console.log(Object.getPrototypeOf(arr));

console.log(arr.length); */

// 4 - Mais sobre prototype
/* const myObject = {

    a: 'b'

};

console.log(Object.getPrototypeOf(myObject));

console.log(Object.getPrototypeOf(myObject) === Object.prototype);

const mySecondObject = Object.create(myObject);

console.log(mySecondObject);

console.log(mySecondObject.a);

console.log(Object.getPrototypeOf(mySecondObject) === myObject); */

// 5 - Classes básicas
/* const cachorro = {

    raca: null,
    patas: 4

}

const daschhund = Object.create(cachorro);

daschhund.raca = "Daschhund";

console.log(daschhund);

console.log(daschhund.patas); */

// 6 - Funções como classe - Função construtora
/* function criarCachorro(nome, raca) {

    const cachorro = Object.create({})

    cachorro.nome = nome;
    cachorro.raca = raca;

    return cachorro;

}

const akin = criarCachorro("Akin", "Daschhund");

console.log(akin); */
 
// 7 - Funções como classes
/* function Cachorro(nome, raca) {
    this.nome = nome
    this.raca = raca
}

const akin = new Cachorro("Akin", "Daschhund");

console.log(akin); */

// 8 - Métodos na funão constutora
/* Cachorro.prototype.latir = function () {

    console.log("Au au!");

};

console.log(Cachorro);

console.log(Cachorro.prototype);

akin.latir(); */

// 9 - Classes es6
/* class CachorroClasse {
    constructor(nome, raca) {
        this.nome = nome;
        this.raca = raca;
    }
}

const kinzao = new CachorroClasse("Akin", "Daschund");

console.log(kinzao);

console.log(Object.getPrototypeOf(kinzao)) */

// 10 - Mais sobre classes
/* class Caminhao {
    constructor(eixos, cor) {
        this.eixos = eixos;
        this.cor = cor;
    }

    descreverCaminhao() {
        console.log(`Este caminhão tem ${this.eixos} eixos e é da cor ${this.cor}`);
    }
}

const scania = new Caminhao(6, "Vermelha");

console.log(scania);

scania.descreverCaminhao();

Caminhao.motor = 4; //Isso não funciona

const c2 = new Caminhao(3, "Preto");

console.log(c2);

console.log(c2.motor);

Caminhao.prototype.motor = 4.0; //Agora funciona, porém não é utilizado

const c3 = new Caminhao(5,"Azul");

console.log(c3.motor); */

// 11 - Override
/* class Humano {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

const bruno = new Humano("Bruno", 26);

console.log(bruno);

Humano.prototype.idade = "Não informada";

console.log(bruno.idade);

console.log(Humano.prototype.idade); */

// 12 - Symbol
/* class Aviao {
    constructor(marca, turbinas) {
        this.marca = marca;
        this.turbinas = turbinas;
    }
}

const asas = Symbol();

Aviao.prototype[asas] = 2;

const boieng = new Aviao("Boieng", 10);

console.log(boieng);

console.log(boieng[asas]); */

// 13 - Getter e setter
/* class Post {
    constructor(titulo, descricao, tags) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.tags = tags;
    }

    get exibirTitulo() {
        return this.titulo;
    }

    set adicionarTags(tags) {
        const tagArray = tags.split(', ');
        this.tags = tagArray
    }
}

const myPost = new Post("Meu primeiro Post", "Este post fala sobre meu primeiro post aqui no blog");

console.log(myPost);

console.log(myPost.exibirTitulo);

myPost.adicionarTags = "Programação, javascript, js"

console.log(myPost); */

// 14 - Herança
class Mamifero {
    constructor(patas) {
        this.patas = patas;
    }
} 

class Lobo extends Mamifero {
    constructor(patas, nome) {
        super(patas, patas);
        this.nome = nome;
    }
}

const shark = new Lobo(4, "Shark");

console.log(shark);

console.log(shark.patas);

// 15 - Instanceof
console.log(shark instanceof Lobo);

console.log(Lobo instanceof Mamifero);