const magicSquare = require('./magic-square')

/* global test describe expect */

describe('isMagicSquare()', () => {
  test(' [ [2,7,6], [9,5,1], [4, 3, 8] ] should should return true', () => {
    var testSquare = [[2, 7, 6], [9, 5, 1], [4, 3, 8]]

    expect(magicSquare.isMagicSquare(testSquare)).toEqual(true)
  })
})

describe('isSquare()', () => {
  test('should return false if square is not an array', () => {
    var testSquare = ''
    expect(magicSquare.isSquare(testSquare)).toEqual(false)
  })

  test('should return false if square is not an n x n array', () => {
    var testSquare = [[2, 7, 6], [9, 5, 1]]
    expect(magicSquare.isSquare(testSquare)).toEqual(false)
  })

  test('should return true if square is an 3 x 3 array', () => {
    var testSquare = [[2, 7, 6], [9, 5, 1], [4, 3, 8]]
    expect(magicSquare.isSquare(testSquare)).toEqual(true)
  })

  test('should return true if square is an 4 x 4 array', () => {
    var testSquare = [[2, 7, 6, 4], [9, 5, 1, 4], [9, 5, 1, 4], [4, 3, 2, 8]]
    expect(magicSquare.isSquare(testSquare)).toEqual(true)
  })

  test('should return false if square is an 4 x 3 array', () => {
    var testSquare = [[2, 7, 6, 4], [9, 5, 1, 4], [9, 5, 1, 4]]
    expect(magicSquare.isSquare(testSquare)).toEqual(false)
  })
})

describe('getMagicSum()', () => {
  test('should return sum of first row of 4x4 array ', () => {
    var testSquare = [[2, 7, 6, 4], [9, 5, 1, 4], [9, 5, 1, 4]]
    expect(magicSquare.getMagicSum(testSquare)).toEqual(19)
  })

  test('should return sum of first row of 3x3 array', () => {
    var testSquare = [[2, 7, 6], [9, 5, 1]]
    expect(magicSquare.getMagicSum(testSquare)).toEqual(15)
  })
})

describe('doRowsSumToMagicSum()', () => {
  test('should return true for magicSum = 19 and testSquare = [[2, 7, 6, 4], [9, 5, 1, 4], [8, 6, 1, 4], [3, 11, 1, 4]]', () => {
    var magicSum = 19
    var testSquare = [[2, 7, 6, 4], [9, 5, 1, 4], [8, 6, 1, 4], [3, 11, 1, 4]]
    expect(magicSquare.doRowsSumToMagicSum(testSquare, magicSum)).toEqual(true)
  })

  test('should return true for magicSum = 19 and testSquare = [[2, 7, 6, 4], [9, 5, 1, 4], [8, 6, 1, 4]]', () => {
    var magicSum = 19
    var testSquare = [[2, 7, 6, 4], [9, 5, 1, 4], [8, 6, 1, 4]]
    expect(magicSquare.doRowsSumToMagicSum(testSquare, magicSum)).toEqual(true)
  })

  test('should return false for magicSum = 19 and testSquare = [[2, 7], [3, 6]]', () => {
    var magicSum = 19
    var testSquare = [[2, 7], [3, 6]]
    expect(magicSquare.doRowsSumToMagicSum(testSquare, magicSum)).toEqual(false)
  })

  test('should return true for magicSum = 9 and testSquare = [[2, 7], [3, 6]]', () => {
    var magicSum = 9
    var testSquare = [[2, 7], [3, 6]]
    expect(magicSquare.doRowsSumToMagicSum(testSquare, magicSum)).toEqual(true)
  })

  test('should return true for magicSum = 8 and testSquare = [[2, 7], [3, 6]]', () => {
    var magicSum = 8
    var testSquare = [[2, 7], [3, 6]]
    expect(magicSquare.doRowsSumToMagicSum(testSquare, magicSum)).toEqual(false)
  })
})
