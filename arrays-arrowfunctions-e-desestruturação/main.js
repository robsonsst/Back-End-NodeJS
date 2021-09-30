/*const arr = [1, 2, 3, 4, 5, 8, 9]

const newArr = arr.map(function(item) { //cria  um array com o dobro de cada elemento
    return item * 2;
}

const soma = arr.reduce(function(total, next) //
    soma os elementos {

        return total + next;
    })

const filter = arr.filter(function(item) { //filtra os elementos

    return item % 2 === 0;
})

const find = arr.find(function(item) { //busca o item desejado no array
    return item === 4;
})

const newArr = arr.map(function(item) {
    return item * 2;
})

const newArr = arr.map(item => iten * 2)

const teste = () => {
    return { nome: 'Robson' }
}

function soma(a, b) {
    return a + b;
}

function soma2(a = 1, b = 2) {
    return a + b;
}

console.log(soma2(1, 5))

//DESESTRUTURAÇÃO

const usuario = {
    nome: 'Robson',
    idade: 21,
    endereco: {
        rua: "rua a",
        cidade: 'Jequie'
    }
}

const nome = usuario.nome
const idade = usuario.idade

const {
    nome,
    idade,
    endereco: { cidade }
} = usuario;

console.log(nome)
console.log(idade)
console.log(cidade)

function mostraNome(usuario) {
    console.log(usuario.nome)
}

function mostraNome2({ nome }) {
    console.log(nome)
}

mostraNome(usuario)
mostraNome2(usuario) 


const { nome, ...resto } = usuario

console.log(nome)
console.log(resto)


const arr = [1, 2, 3, 4]
const [...c] = arr

console.log(c)

function soma(a, b, c, d) {
    return a + b + c + d
}

console.log(soma(1, 2, 3, 4))

function soma2(...params) {
    console.log(params)
    return params.reduce((total, next) => total + next);
}

console.log(soma2(1, 2, 3, 4, 5, 6, 7))


const usuario1 = {
    nome: 'Robson',
    idade: 21,
    empresa: 'Uesb'
}

const usuario2 = {...usuario1, nome: 'João' }

console.log(usuario2)

//TEMPLATES
*/
const idade = 28
const nome = 'Robson'

console.log('meu nome é: ' + nome + ' e minha idade é: ' + idade + 'anos')

console.log(`meu nome é: ${nome} e minha idade é: ${idade} anos`)

/*const usuario_short = {
    nome: nome,
    idade: idade,
    empresa: 'Uesb'
}
*/

const usuario_short = {
    nome,
    idade,
    empresa: 'Uesb'
}

console.log(usuario_short)