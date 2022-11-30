const cadastroImoveis = []
let opcao = ''

do {
  opcao = prompt(
    'Sistema de cadastramento de imóveis\n' +
      'Imóveis cadastrados no momento: ' +
      cadastroImoveis.length +
      '\nEscolha uma opção:\n1. Cadastrar Imóvel\n2. Exibir Imóveis cadastrados\n3. Sair do Programa'
  )

  switch (opcao) {
    case '1':
      const imovel = {}
      imovel.proprietario = prompt('Informe o nome do proprietário: ')
      imovel.quartos = prompt('Informe a quantidade de quartos: ')
      imovel.banheiros = prompt('Informe a quantidade de banheiros: ')
      imovel.garagem = prompt('Possui garagem? (Sim/Não) ')

      const confirmacao = confirm(
        'Salvar este imóvel?\n' +
          '\nProprietário: ' +
          imovel.proprietario +
          '\nQuartos: ' +
          imovel.quartos +
          '\nBanheiros: ' +
          imovel.banheiros +
          '\nGaragem: ' +
          imovel.garagem
      )
      if (confirmacao) {
        cadastroImoveis.push(imovel)
      }
      break
    case '2':
      for (i = 0; i < cadastroImoveis.length; i++) {
        alert(
          'Imóvel ' +
            (i + 1) +
            '\nProprietário: ' +
            cadastroImoveis[i].proprietario +
            '\nQuartos: ' +
            cadastroImoveis[i].quartos +
            '\nBanheiros: ' +
            cadastroImoveis[i].banheiros +
            '\nPossui garagem? ' +
            cadastroImoveis[i].garagem
        )
      }
      break
    case '3':
      alert('Encerrando Programa...')
      alert('Programa encerrado.')
      break
    default:
      alert('Opção inválida!!!')
      break
  }
} while (opcao !== '3')
