const namePersonagem1 = prompt('Insira o Nome do personagem: ')
const damagePersonagem1 = parseFloat(
  prompt('Insira o poder de ataque do personagem: ')
)

const namePersonagem2 = prompt('Insira o Nome do segundo personagem: ')
const qtdPontosDeVida = parseFloat(
  prompt('Insira a quantidade de pontos de vida: ')
)
const qtdPontosDeDefesa = parseFloat(
  prompt('Insira a quantidade de Pontos de Defesa do personagem: ')
)
const shield = prompt('Esse personagem possui Escudo? (sim/não): ')
const shielding = shield == 'sim' ? 'Sim' : 'Não'

let damageInflected
let qtdVidaAtualizada
if (damagePersonagem1 > qtdPontosDeDefesa && shielding == 'False') {
  damageInflected = damagePersonagem1 % qtdPontosDeDefesa
  alert(`Dano Infligido: ${damageInflected}`)
} else if (damagePersonagem1 > qtdPontosDeDefesa && shielding == 'True') {
  damageInflected = (damagePersonagem1 % qtdPontosDeDefesa) / 2
  alert(`Dano Infligido: ${damageInflected}`)
} else if (damagePersonagem1 <= qtdPontosDeDefesa) {
  alert('Dano Infligido: 0')
}

qtdVidaAtualizada = qtdPontosDeVida - damageInflected

alert(
  `Dados Personagem 1:\nNickname: ${namePersonagem1}\nPontos de Ataque: ${damagePersonagem1}\nDados Personagem 2:\nNickname: ${namePersonagem2}\nPontos de vida: ${qtdPontosDeVida}\nPontos de defesa: ${qtdPontosDeDefesa}\nPossui Escudo: ${shielding}\nPontos de vida pós batalha: ${qtdVidaAtualizada}`
)
