function encontrarIndices(arr) {
    if (arr.length === 0) return null;
    
    let maxIndex = 0;
    let minIndex = 0;
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > arr[maxIndex]) maxIndex = i;
      if (arr[i] < arr[minIndex]) minIndex = i;
    }
  
    return { maxIndex, minIndex };
  }
  
  const formIndices = document.getElementById('formIndices');
  const resultadoIndices = document.getElementById('resultadoIndices');
  
  formIndices.addEventListener('submit', function(event) {
    event.preventDefault();
  
    const arrayInput = document.getElementById('arrayInput').value;
    const array = arrayInput.split(',').map(num => parseInt(num));
  
    const indices = encontrarIndices(array);
    resultadoIndices.textContent = `O índice do maior valor é ${indices.maxIndex} e do menor valor é ${indices.minIndex}`;
  });
  