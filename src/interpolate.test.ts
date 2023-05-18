import interpolate from './interpolate'

describe('interpolate', () => {
    it('interpolates a string with data', () => {
        // Arrange
        const value = 'x {y}'
        const data = {y: 'z'}
        const regexp = /{([^{}]*)}/g
        // Act
        const response = interpolate(value, data, regexp)
        // Assert
        const asExpected = 'x z'
        expect(response).toBe(asExpected)
    })
    it('interpolates a string with a number as variable', () => {
        // Arrange
        const value = 'x {1}'
        const data = {1: "1"}
        const regexp = /{([^{}]*)}/g
        // Act
        const response = interpolate(value, data, regexp)
        // Assert
        const asExpected = 'x 1'
        expect(response).toBe(asExpected)
    })
})
