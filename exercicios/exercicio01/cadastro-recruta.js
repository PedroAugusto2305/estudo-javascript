// Cadastro de Recrutas

const firstName = prompt('Informe o primeiro nome do recruta:')
const lastName = prompt('Informe o segundo nome do recruta:')
const study = prompt('Informe a área de estudo do recruta:')
const bornAge = prompt('Informe o ano de nascimento do recruta:')

alert(
  `Nome: ${firstName} ${lastName}\nCampo de estudo: ${study}\nIdade: ${
    2022 - bornAge
  } anos.`
)
