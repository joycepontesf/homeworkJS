function somaMultiplos(limite) {
    let soma = 0;
    for (let i = 1; i < limite; i++) {
      if (i % 5 === 0 || i % 7 === 0) {
        soma += i;
      }
    }
    return soma;
  }
  
  const formSomaMultiplos = document.getElementById('formSomaMultiplos');
  const resultadoSomaMultiplos = document.getElementById('resultadoSomaMultiplos');
  
  formSomaMultiplos.addEventListener('submit', function(event) {
    event.preventDefault();
  
    const limite = 1000;
    const resultado = somaMultiplos(limite);
    resultadoSomaMultiplos.textContent = `A soma dos múltiplos de 5 ou 7 abaixo de 1000 é: ${resultado}`;
  });
  