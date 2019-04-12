const magicSquare = require('./magic-square')

describe('isMagicSquare()', () => {
  test(' [ [2,7,6], [9,5,1], [4, 3, 8] ] should return true', () => {
    var testSquare = [[2, 7, 6], [9, 5, 1], [4, 3, 8]]
    var dog

    expect(magicSquare.isMagicSquare(magicSquare)).toEqual(true)
  })
})

describe('isSquare()', () => {
  test('return false if square is not an array', () => {
    var testSquare = ''
    expect(magicSquare.isSquare(testSquare)).toEqual(false)
  })

  test('return false if square is not an n x n array', () => {
    var testSquare = [[2, 7, 6], [9, 5, 1]]
    expect(magicSquare.isSquare(testSquare)).toEqual(false)
  })

  test('return true if square is an n x n array', () => {
    var testSquare = [[2, 7, 6], [9, 5, 1], [4, 3, 8]]
    expect(magicSquare.isSquare(testSquare)).toEqual(false)
  })
})
