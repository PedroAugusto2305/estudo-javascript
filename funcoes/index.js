function dobro(x) {
  alert('O dobro de ' + x + ' é ' + x * 2)
}

// dobro(20)
// dobro()

function dizerOla(nome = 'mundo') {
  alert('Olá, ' + nome + '!')
}

// dizerOla('Pedro')
// dizerOla()

function soma(a, b) {
  alert('O resultado da soma é ' + (a + b))
}

// soma(7, 2)
// soma(3, 1)

function criarUsuario(nome, email, senha, tipo = 'Admin') {
  const usuario = {
    nome, // mesmo que nome: nome
    email,
    senha,
    tipo
  }
  console.log(usuario)
}

// criarUsuario('Pedro', 'p.augusto_23@outlook.com', '12345')

function muitosParametros(nome, telefone, endereco, aniversario, email, senha) {
  //...
}

muitosParametros(
  'Nome',
  'telefone',
  'endereço',
  'aniversario',
  'email',
  'senha'
)

function objetoComoParametro(usuario) {
  const dadosDoUsuario = {
    nome: '',
    telefone: '',
    endereco: '',
    aniversario: '',
    email: '',
    senha: ''
  }
}

// Retorno de funções ------------------------------------------------------------------------

function calcularMedia(a, b) {
  const media = (a + b) / 2
  return media
}

const resultado = calcularMedia(3, 4)

// console.log(resultado)

function criaProduto(nome, preco) {
  const produto = {
    nome, //nome: nome
    preco, // preco: preco
    estoque: 1
  }
  return produto
}

// console.log(criaProduto('Notebook Intel core i3 8GB', 2500))

function areaRetangular(base, altura) {
  return base * altura
}

function areaQuadrada(lado) {
  return areaRetangular(lado, lado)
}

// console.log(areaQuadrada(9))

function ola() {
  let texto = 'Olá Mundo!'
  return texto
  texto = 'Tchau'
  console.log(texto)
}

// console.log(ola())

function maioridade(idade) {
  if (idade >= 18) {
    return 'Maior de Idade'
  } else {
    return 'Menor de Idade'
  }
}

// console.log(maioridade(29))
// console.log(maioridade(15))

// Escopo de função --------------------------------------------------------------------------

let pokemon = 'Charmander'

function evoluir() {
  pokemon = 'Charmeleon'
}

// console.log(pokemon)
// evoluir()
// console.log(pokemon)

function criarAnimal() {
  let animal = 'Gato'
}

// criarAnimal()
// console.log(animal)

function avaliarNota(nota) {
  if (nota > 60) {
    var aprovado = true
    let situacao = 'Aprovado'
  } else {
    var aprovado = false
    let situacao = 'Reprovado'
  }

  console.log(nota)
  console.log(aprovado)
  console.log(situacao)
}

// avaliarNota(83)
// avaliarNota(49)

function olaMundo() {
  var texto = 'Olá Mundo!'
}

// console.log(texto)

console.log(nome)
console.log(sobrenome)

var nome = 'Pedro'
let sobrenome = 'Bueno'

console.log(nome)
console.log(sobrenome)
