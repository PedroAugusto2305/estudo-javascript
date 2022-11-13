const veiculo1 = prompt('Insira o Nome do veículo: ')
const velocidade1 = parseFloat(prompt('Insira a velocidade do veículo: '))
const veiculo2 = prompt('Insira o Nome do veículo: ')
const velocidade2 = parseFloat(prompt('Insira a velocidade do veículo: '))

if (velocidade1 > velocidade2) {
  alert(`A ${veiculo1} tem velocidade superior à ${veiculo2}`)
} else if (velocidade2 > velocidade1) {
  alert(`A ${veiculo2} tem velocidade superior à ${veiculo1}`)
} else {
  alert('A velocidade dos dois veículos é igual.')
}
