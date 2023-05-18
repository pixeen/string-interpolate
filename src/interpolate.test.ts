import interpolate from './interpolate'

describe('interpolate', () => {
  it('interpolates a string with data', () => {
    // Arrange
    const value = 'x {y}'
    const data = { y: 'z' }
    const regexp = /{([^{}]*)}/g
    // Act
    const response = interpolate(value, data, regexp)
    // Assert
    const asExpected = 'x z'
    expect(response).toBe(asExpected)
  })
  it('interpolates a string with data and a custom regexp', () => {
    // Arrange
    const value = 'x [y]'
    const data = { y: 'z' }
    const regexp = /\[([^[\]]*)\]/g
    // Act
    const response = interpolate(value, data, regexp)
    // Assert
    const asExpected = 'x z'
    expect(response).toBe(asExpected)
  })
  it('interpolates a string with data and a custom regexp with multiple matches', () => {
    // Arrange
    const value = 'x [y] [y]'
    const data = { y: 'z' }
    const regexp = /\[([^[\]]*)\]/g
    // Act
    const response = interpolate(value, data, regexp)
    // Assert
    const asExpected = 'x z z'
    expect(response).toBe(asExpected)
  })
  it('interpolates a string with data and a custom regexp with multiple matches and multiple data', () => {
    // Arrange
    const value = 'x [y] [y]'
    const data = { y: 'z' }
    const regexp = /\[([^[\]]*)\]/g
    // Act
    const response = interpolate(value, data, regexp)
    // Assert
    const asExpected = 'x z z'
    expect(response).toBe(asExpected)
  })
})
