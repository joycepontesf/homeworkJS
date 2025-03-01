const somaMultiplos = require('./somarMultiplos')

describe('somaMultiplos', () => {
  test('deve retornar 0 para limite 1', () => {
    expect(somaMultiplos(1)).toBe(0)
  })

  test('deve retornar 5 para limite 6', () => {
    expect(somaMultiplos(6)).toBe(5)
  })

  test('deve retornar 21 para limite 10', () => {
    expect(somaMultiplos(10)).toBe(21)
  })

  test('deve retornar 63 para limite 20', () => {
    expect(somaMultiplos(20)).toBe(63)
  })

  test('deve retornar 33173 para limite 200', () => {
    expect(somaMultiplos(200)).toBe(33173)
  })

  test('deve lidar corretamente com números negativos', () => {
    expect(somaMultiplos(-10)).toBe(0)
  })
})
