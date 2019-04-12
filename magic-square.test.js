const magicSquare = require('./magic-square')

/* global test describe expect*/

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

  test('return true if square is an 3 x 3 array', () => {
    var testSquare = [[2, 7, 6], [9, 5, 1], [4, 3, 8]]
    expect(magicSquare.isSquare(testSquare)).toEqual(true)
  })

  test('return true if square is an 4 x 4 array', () => {
    var testSquare = [[2, 7, 6, 4], [9, 5, 1, 4], [9, 5, 1, 4], [4, 3, 2, 8]]
    expect(magicSquare.isSquare(testSquare)).toEqual(true)
  })

  test('return false if square is an 4 x 3 array', () => {
    var testSquare = [[2, 7, 6, 4], [9, 5, 1, 4], [9, 5, 1, 4]]
    expect(magicSquare.isSquare(testSquare)).toEqual(false)
  })
})
