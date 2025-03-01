const calcularMDC = require('./calcularMDC')

describe('calcularMDC', () => {
  test('deve retornar 6 para (54, 24)', () => {
    expect(calcularMDC(54, 24)).toBe(6)
  })

  test('deve retornar 1 para (17, 13)', () => {
    expect(calcularMDC(17, 13)).toBe(1)
  })

  test('deve retornar 8 para (32, 24)', () => {
    expect(calcularMDC(32, 24)).toBe(8)
  })

  test('deve lidar com números negativos corretamente', () => {
    expect(calcularMDC(-54, -24)).toBe(6)
    expect(calcularMDC(-32, 24)).toBe(8)
  })

  test('deve lidar com zero corretamente', () => {
    expect(calcularMDC(0, 24)).toBe(24)
    expect(calcularMDC(54, 0)).toBe(54)
    expect(calcularMDC(0, 0)).toBe(0)
  })
})
