const vlrMetros = parseFloat(prompt('Digite um valor em metros (m)'))
const chooseOption = prompt(
  'Agora escolha em qual unidade de medida deseja converter:\n1- Milímetro (mm)\n2- Centímetro (cm)\n3- Decímetro (dm)\n4- Decâmetro (dam)\n5- Hectômetro (hm)\n6- quilômetro (km) '
)
let result = 0

switch (chooseOption) {
  case '1':
    result = vlrMetros / 1000
    alert(`O resultado é: ${result}mm`)
    break
  case '2':
    result = vlrMetros / 100
    alert(`O resultado é: ${result}cm`)
    break
  case '3':
    result = vlrMetros / 10
    alert(`O resultado é: ${result}dm`)
    break
  case '4':
    result = vlrMetros / 10
    alert(`O resultado é: ${result}dam`)
    break
  case '5':
    result = vlrMetros / 100
    alert(`O resultado é: ${result}hm`)
    break
  case '6':
    result = vlrMetros / 1000
    alert(`O resultado é: ${result}km`)
    break
  default:
    alert('Opção Inválida!!!!')
    break
}
