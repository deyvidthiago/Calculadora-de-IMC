const calcular = document.getElementById('calcular')

function imc() {
  const altura = document.getElementById('altura').value
  const peso = document.getElementById('peso').value
  let calculo = (peso / (altura * altura)).toFixed(1)
  const resultado = document.getElementById('resultado')

  let classificacao = ''

  if (calculo <= 18.5) {
    classificacao = 'Você está abaixo do peso!!'
  } else if (calculo <= 24.9) {
    classificacao = 'Você está com o peso ideal :)'
  } else if (calculo <= 29.9) {
    classificacao = 'Você está com Sobrepeso. Cuidado!!'
  } else if (calculo <= 34.9) {
    classificacao = 'Você é Obeso grau I. Lamentável'
  } else if (calculo <= 39.9) {
    classificacao = 'Você é Obeso grau II. :('
  } else if (calculo >= 40.0) {
    classificacao = 'Obeso grau III ou Móbido. Vai acabar morrendo'
  }
  resultado.innerHTML = `Seu Índice de Massa Coporal é ${calculo} ${classificacao}`

  if (altura == '' || peso == '') {
    resultado.innerHTML = 'Preencha todos os dados!!'
  }
}
calcular.addEventListener('click', imc)

const limpar = document.getElementById('limpar')

function limpeza() {
  const altura = document.getElementById('altura')
  const peso = document.getElementById('peso')
  const resultado = document.getElementById('resultado')
  altura.value = ''
  peso.value = ''
  resultado.innerHTML = ''
}
limpar.addEventListener('click', limpeza)
