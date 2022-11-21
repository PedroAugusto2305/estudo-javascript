// const listaDeCompras = ['Açucar', false]
// console.log(listaDeCompras)

// listaDeCompras[0] = 'Arroz'
// listaDeCompras[1] = 'Feijão'
// listaDeCompras[2] = 7
// listaDeCompras[5] = 'Batata'
// listaDeCompras[4] = 'Macarrão'
// console.log(listaDeCompras)

const arr = [
  'Frodo',
  'Sam',
  'Merry',
  'Pippin',
  'Gandalf',
  'Aragorn',
  'Legolas',
  'Gimli'
]
console.log(arr)
// adicionar elementos
// push
let tamanho = arr.push('Boromir')
console.log(arr)
console.log(tamanho)

// unshift
tamanho = arr.unshift('Bilbo')
console.log(arr)
console.log(tamanho)

// Remover Elementos
// pop
let ultimoEelemento = arr.pop()
console.log(arr)
console.log(ultimoEelemento)

// shift
ultimoEelemento = arr.shift()
console.log(arr)
console.log(ultimoEelemento)

// Pesquisar por um Elemento
// includes
const inclui = arr.includes('Gandalf')
console.log(inclui)

// indexof
const indice = arr.indexOf('Gandalf')
console.log(indice)

// Cortar e Concatenar
// slice
const hobbits = arr.slice(0, 4)
const outros = arr.slice(-4)
console.log(arr)
console.log(hobbits)
console.log(outros)

// concat
const sociedade = hobbits.concat(outros, 'Boromir')
console.log(sociedade)

// Substituição dos Elementos
// splice
const elementosRemovidos = sociedade.splice(indice, 1, 'Gandalf, o Cinzento')
console.log(elementosRemovidos)
console.log(sociedade)

// Iterar sobre os Elementos

for (let indice = 0; indice < sociedade.length; indice++) {
  const elemento = sociedade[indice]
  console.log(elemento + ' se encontra na posição ' + indice)
}
