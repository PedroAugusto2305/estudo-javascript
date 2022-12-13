function somar(a, b) {
  return a + b
}

const operacao = somar

console.log(operacao(3, 5))

// funções anonimas não possuem nome
const subtrair = function (a, b) {
  return a - b
}

console.log(subtrair(23, 5))
