import hexToRgb from './hexToRgb'

const mockHex = '#ffffff'
const mockHexShort = '#fff'

describe('hexToRgb util function', () => {
  const solidWhite = 'rgba(255, 255, 255, 1)'
  const transparent = 'rgba(255, 255, 255, 0)'

  describe('when 6 digits hex is passed', () => {
    it('should return solid white', () => {
      expect(hexToRgb(mockHex)).toEqual(solidWhite)
    })
    it('should return transparent', () => {
      expect(hexToRgb(mockHex, 0)).toEqual(transparent)
    })
  })

  describe('when 3 digits hex is passed', () => {
    it('should return solid white', () => {
      expect(hexToRgb(mockHexShort)).toEqual(solidWhite)
    })
    it('should return transparent', () => {
      expect(hexToRgb(mockHexShort, 0)).toEqual(transparent)
    })
  })
})
