function calcularMDC(numero1, numero2) {
  let a = Math.abs(numero1);
  let b = Math.abs(numero2);
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

const formMDC = document.getElementById('formMDC');
const resultadoMDC = document.getElementById('resultadoMDC');

formMDC.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const numero1 = parseInt(document.getElementById('numero1').value);
  const numero2 = parseInt(document.getElementById('numero2').value);

  const resultado = calcularMDC(numero1, numero2);
  resultadoMDC.textContent = `O MDC de ${numero1} e ${numero2} é: ${resultado}`;
});
