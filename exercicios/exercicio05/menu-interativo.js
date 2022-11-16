let option = ''

do {
  option = prompt(
    'Escolha qual tarefa deseja realizar: \n1- \n2- \n3- \n4- \n5- Sair do Programa'
  )
  switch (option) {
    case '1':
      alert('Você escolheu a opção nº 1')
      break
    case '2':
      alert('Você escolheu a opção nº 2')
      break
    case '3':
      alert('Você escolheu a opção nº 3')
      break
    case '4':
      alert('Você escolheu a opção nº 4')
      break
    case '5':
      alert('Encerrando Programa...')
      alert('Programa finalizado!')
      break
    default:
      alert('Opção inválida!!')
  }
} while (option !== '5')
