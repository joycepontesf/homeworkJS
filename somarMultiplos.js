function somaMultiplos(limite) {
    let soma = 0
    for (let i = 1; i < limite; i++) {
      if (i % 5 === 0 || i % 7 === 0) {
        soma += i
      }
    }
    return soma
  }
  
  module.exports = somaMultiplos;
