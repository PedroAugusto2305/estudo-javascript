let opcao = ''

do {
  opcao = prompt(
    'Sistema de calculo geometrico' +
      '\n1. Calcular área do triângulo\n2. Calcular área do retângulo\n3. Calcular área do quadrado\n4. Calcular área do trapézio\n5. Calcular área do círculo\n6. Sair'
  )

  switch (opcao) {
    case '1':
      function triangleArea(base, altura) {
        let area = (base * altura) / 2
        return alert('A área do triângulo é: ' + area)
      }
      var base = parseFloat(prompt('Informe a base do triângulo'))
      var altura = parseFloat(prompt('Informe a altura do triângulo'))
      triangleArea(base, altura)
      break
    case '2':
      function rectangleArea(base, altura) {
        let area = base * altura
        return alert('A área do retângulo é: ' + area)
      }
      var base = parseFloat(prompt('Informe a base do retângulo'))
      var altura = parseFloat(prompt('Informe a altura do retângulo'))
      rectangleArea(base, altura)
      break
    case '3':
      function squareArea(ladoA, ladoB) {
        let area = ladoA * ladoB
        return alert('A área do quadrado é: ' + area)
      }
      var ladoA = parseFloat(prompt('Informe a base do quadro'))
      var ladoB = parseFloat(prompt('Informe a altura do quadro'))
      rectangleArea(ladoA, ladoB)
      break
    case '4':
      function trapezeArea(baseMaior, baseMenor, alturaTrapezio) {
        let area = (baseMaior + baseMenor) * (alturaTrapezio / 2)
        return alert('A área do trapézio é: ' + area)
      }
      var baseMaior = parseFloat(prompt('Informe a base maior do trapézio'))
      var baseMenor = parseFloat(prompt('Informe a base menor do trapézio'))
      var alturaTrapezio = parseFloat(prompt('Informe a altura do trapézio'))
      trapezeArea(baseMaior, baseMenor, alturaTrapezio)
      break
    case '5':
      function circleArea(raio) {
        let area = raio * raio * 3.14
        return alert('A área do circulo é: ' + area)
      }
      var raio = parseFloat(prompt('Informe o raio do circulo'))

      circleArea(raio)
      break
    case '6':
      alert('Encerrando programa....')
      break
    default:
      altura('Opção inválida!!!')
  }
} while (opcao !== '6')
