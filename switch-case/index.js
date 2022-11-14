const resultado = prompt('Escolha uma alternativa:\na)\nb)\nc)')

switch (resultado) {
  case 'a':
    alert('Caso 1')
    break
  case 'b':
    alert('Caso 2')
    break
  case 'c':
    alert('Caso 3')
    break
  default:
    alert('Finalizando...')
}
