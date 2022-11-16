let saldo = parseFloat(prompt('Informe o saldo inicial: '))
let opcao = ''

do {
  opcao = prompt(
    'Saldo Disponível: R$ ' +
      saldo +
      '\n1. Adicionar dinheiro' +
      '\n2. Remover dinheiro' +
      '\n3. Sair.'
  )

  switch (opcao) {
    case '1':
      saldo += parseFloat(prompt('Informe o valor a ser adicionado:'))
      break
    case '2':
      saldo -= parseFloat(prompt('Informe o valor que deseja subtrair:'))
      break
    case '3':
      alert('Saindo...')
      break
    default:
      alert('Opção inválida!')
  }
} while (opcao !== '3')
