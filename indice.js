function encontrarIndices(arr) {
    if (arr.length === 0) return null
    
    let maxIndex = 0
    let minIndex = 0
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > arr[maxIndex]) maxIndex = i
      if (arr[i] < arr[minIndex]) minIndex = i
    }
  
    return { maxIndex, minIndex }
  }
  
  module.exports = encontrarIndices