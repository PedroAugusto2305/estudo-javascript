const numero = parseFloat(
  prompt('Informe o número que você deseja calcular a taubada:')
)

let resultado = ''

for (i = 1; i <= 20; i++) {
  resultado += '-> ' + numero + ' * ' + i + ' = ' + numero * i + '\n'
}

alert('Resultado da tabuada de ' + numero + ':\n\n' + resultado)
