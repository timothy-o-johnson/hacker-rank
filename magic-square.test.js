const magicSquare = require('./magic-square')

describe('isMagicSquare()', () => {
  test(' [ [2,7,6], [9,5,1], [4, 3, 8] ] should return true', () => {
    
    var magicSquare = [[2, 7, 6], [9, 5, 1], [4, 3, 8]]

    expect(magicSquare.isMagicSquare(magicSquare)).toEqual(true)
  })
})
