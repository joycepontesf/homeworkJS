const calcularMDC = require('./calcularMDC')
const encontrarIndices = require('./indice')
const somaMultiplos = require('./somarMultiplos')

const formMDC = document.getElementById('formMDC')
const resultadoMDC = document.getElementById('resultadoMDC')

const formIndices = document.getElementById('formIndices')
const resultadoIndices = document.getElementById('resultadoIndices')

const formSomaMultiplos = document.getElementById('formSomaMultiplos')
const resultadoSomaMultiplos = document.getElementById('resultadoSomaMultiplos')

formMDC.addEventListener('submit', function(event) {
  event.preventDefault()
  
  const numero1 = parseInt(document.getElementById('numero1').value)
  const numero2 = parseInt(document.getElementById('numero2').value)

  const resultado = calcularMDC(numero1, numero2)
  resultadoMDC.textContent = `O MDC de ${numero1} e ${numero2} é: ${resultado}`
})

formIndices.addEventListener('submit', function(event) {
    event.preventDefault()
  
    const arrayInput = document.getElementById('arrayInput').value
    const array = arrayInput.split(',').map(num => parseInt(num))
  
    const indices = encontrarIndices(array)
    resultadoIndices.textContent = `O índice do maior valor é ${indices.maxIndex} e do menor valor é ${indices.minIndex}`
})

formSomaMultiplos.addEventListener('submit', function(event) {
    event.preventDefault()
  
    const limite = 1000
    const resultado = somaMultiplos(limite)
    resultadoSomaMultiplos.textContent = `A soma dos múltiplos de 5 ou 7 abaixo de 1000 é: ${resultado}`
})