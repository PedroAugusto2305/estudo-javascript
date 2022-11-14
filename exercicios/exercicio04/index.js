const nome = prompt('Turista Informe seu nome: ')
let viagem = prompt('Você já visitou alguma cidade?(sim/não) ')
let nomeCidades = ''
let qtdCidades = 0

while (viagem === 'sim') {
  let cidade = prompt('Qual é o nome da cidade visitada?')
  nomeCidades += ' - ' + cidade + '\n'
  qtdCidades++
  viagem = prompt('Você visitou alguma outra cidade? (sim/não)')
}

alert(
  'Turista: ' +
    nome +
    '\nQuantidade de cidades visitadas: ' +
    qtdCidades +
    '\nCidades visitadas:\n' +
    nomeCidades
)
