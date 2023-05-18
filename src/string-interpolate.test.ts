import stringInterpolate from './string-interpolate'

describe('string interpolate', () => {
  it('interpolates a string with data', () => {
    // Arrange
    const value = 'x {y}'
    const data = { y: 'z' }
    // Act
    const response = stringInterpolate(value, data)
    // Assert
    const asExpected = 'x z'
    expect(response).toBe(asExpected)
  })
  it('interpolates a string with data and a custom regexp', () => {
    // Arrange
    const value = 'x [y]'
    const data = { y: 'z' }
    const regexp = /\[([^[\]]*)]/g
    // Act
    const response = stringInterpolate(value, data, regexp)
    // Assert
    const asExpected = 'x z'
    expect(response).toBe(asExpected)
  })
  it('interpolates a string with data and a custom regexp with multiple matches', () => {
    // Arrange
    const value = 'x [y] [y]'
    const data = { y: 'z' }
    const regexp = /\[([^[\]]*)]/g
    // Act
    const response = stringInterpolate(value, data, regexp)
    // Assert
    const asExpected = 'x z z'
    expect(response).toBe(asExpected)
  })
  it('interpolates a string with data and a custom regexp with multiple matches and multiple data', () => {
    // Arrange
    const value = 'x [y] [y]'
    const data = { y: 'z' }
    const regexp = /\[([^[\]]*)]/g
    // Act
    const response = stringInterpolate(value, data, regexp)
    // Assert
    const asExpected = 'x z z'
    expect(response).toBe(asExpected)
  })
  it('interpolates a string with an index and array data', () => {
    // Arrange
    const value = 'x {0} {1}'
    const data = ['a', 'b']
    // Act
    const response = stringInterpolate(value, data)
    // Assert
    const asExpected = 'x a b'
    expect(response).toBe(asExpected)
  })
})
