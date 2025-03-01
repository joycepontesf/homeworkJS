function calcularMDC(numero1, numero2) {
  let a = Math.abs(numero1)
  let b = Math.abs(numero2)
  while (b !== 0) {
    let temp = b
    b = a % b
    a = temp
  }
  return a
}

module.exports = calcularMDC