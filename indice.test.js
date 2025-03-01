const encontrarIndices = require('./encontrarIndices')

describe('encontrarIndices', () => {
  test('deve retornar { maxIndex: 2, minIndex: 3 } para [10, 20, 50, -5]', () => {
    expect(encontrarIndices([10, 20, 50, -5])).toEqual({ maxIndex: 2, minIndex: 3 })
  })

  test('deve retornar { maxIndex: 0, minIndex: 1 } para [7, -1]', () => {
    expect(encontrarIndices([7, -1])).toEqual({ maxIndex: 0, minIndex: 1 })
  })

  test('deve retornar { maxIndex: 3, minIndex: 0 } para [-10, 5, 3, 12]', () => {
    expect(encontrarIndices([-10, 5, 3, 12])).toEqual({ maxIndex: 3, minIndex: 0 })
  })

  test('deve lidar com um array de valores iguais corretamente', () => {
    expect(encontrarIndices([5, 5, 5, 5])).toEqual({ maxIndex: 0, minIndex: 0 })
  })

  test('deve retornar null para um array vazio', () => {
    expect(encontrarIndices([])).toBeNull()
  })
})
