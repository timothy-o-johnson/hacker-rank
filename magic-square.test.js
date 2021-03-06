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

describe('doColumnsSumToMagicSum()', () => {
  test('should return true for magicSum = 15 and testSquare = [[2, 7, 3], [5, 3, 9], [8, 5, 3]]', () => {
    var magicSum = 15
    var testSquare = [[2, 7, 3], [5, 3, 9], [8, 5, 3]]
    expect(magicSquare.doColumnsSumToMagicSum(testSquare, magicSum)).toEqual(true)
  })

  test('should return false for magicSum = 14 and testSquare = [[2, 7, 3], [5, 3, 9], [8, 5, 3]]', () => {
    var magicSum = 14
    var testSquare = [[2, 7, 3], [5, 3, 9], [8, 5, 3]]
    expect(magicSquare.doColumnsSumToMagicSum(testSquare, magicSum)).toEqual(false)
  })

  test('should return true for magicSum = 7 and testSquare = [[2, 4], [5, 3]]', () => {
    var magicSum = 7
    var testSquare = [[2, 4], [5, 3]]
    expect(magicSquare.doColumnsSumToMagicSum(testSquare, magicSum)).toEqual(true)
  })

  test('should return false for magicSum = 8 and testSquare = [[2, 4], [5, 3]]', () => {
    var magicSum = 8
    var testSquare = [[2, 4], [5, 3]]
    expect(magicSquare.doColumnsSumToMagicSum(testSquare, magicSum)).toEqual(false)
  })

  test('should return false for magicSum = 14 and testSquare = [[2, 7, 3], [5, 3, 9], [8, 5, 3]]', () => {
    var magicSum = 15
    var testSquare = [[2, 7, 3], [5, 3, 9], [8, 5, 1]]
    expect(magicSquare.doColumnsSumToMagicSum(testSquare, magicSum)).toEqual(false)
  })
})

describe('doDiagonalsSumToMagicSum()', () => {
  test('should return true for magicSum = 15 and testSquare = [[2, 7, 6], [9, 5, 1], [4, 3, 8]]', () => {
    var magicSum = 15
    var testSquare = [[2, 7, 6], [9, 5, 1], [4, 3, 8]]
    expect(magicSquare.doDiagonalsSumToMagicSum(testSquare, magicSum)).toEqual(true)
  })

  test('should return false for magicSum = 15 and testSquare = [[2, 7, 6], [9, 5, 1], [4, 3, 3]]', () => {
    var magicSum = 15
    var testSquare = [[2, 7, 6], [9, 5, 1], [4, 3, 3]]
    expect(magicSquare.doDiagonalsSumToMagicSum(testSquare, magicSum)).toEqual(false)
  })

  test('should return false for magicSum = 15 and testSquare = [[2, 7, 6], [9, 5, 1], [4, 3, 3]]', () => {
    var magicSum = 14
    var testSquare = [[2, 7, 6], [9, 5, 1], [4, 3, 8]]
    expect(magicSquare.doDiagonalsSumToMagicSum(testSquare, magicSum)).toEqual(false)
  })

  test('should return true for magicSum = 9 and testSquare = [[2, 7], [7, 2]]', () => {
    var magicSum = 9
    var testSquare = [[2, 7], [2, 7]]
    expect(magicSquare.doDiagonalsSumToMagicSum(testSquare, magicSum)).toEqual(true)
  })

  test('should return true for magicSum = 9 and testSquare = [[2, 7], [7, 2]]', () => {
    var magicSum = 8
    var testSquare = [[2, 2], [2, 2], [2, 2], [2, 2]]
    expect(magicSquare.doDiagonalsSumToMagicSum(testSquare, magicSum)).toEqual(false)
  })

  test('should return true for magicSum = 9 and testSquare = [[2, 7], [7, 2]]', () => {
    var magicSum = 8
    var testSquare = [[2, 2, 2, 2], [2, 2, 2, 2], [2, 2, 2, 2], [2, 2, 2, 2]]
    expect(magicSquare.doDiagonalsSumToMagicSum(testSquare, magicSum)).toEqual(true)
  })
})

describe('squareHasDuplicatesOrZeros()', () => {
  test('should return false for testSquare = [[2, 7, 6], [9, 5, 1], [4, 3, 8]]', () => {
    var testSquare = [[2, 7, 6], [9, 5, 1], [4, 3, 8]]
    expect(magicSquare.squareHasDuplicatesOrZeros(testSquare)).toEqual(false)
  })

  test('should return true for testSquare = [[0, 7, 6], [9, 5, 1], [4, 3, 8]]', () => {
    var testSquare = [[0, 7, 6], [9, 5, 1], [4, 3, 8]]
    expect(magicSquare.squareHasDuplicatesOrZeros(testSquare)).toEqual(true)
  })

  test('should return true for testSquare = [[2, 7, 6], [9, 5, 1], [4, 8, 8]]', () => {
    var testSquare = [[0, 7, 6], [9, 5, 1], [4, 8, 8]]
    expect(magicSquare.squareHasDuplicatesOrZeros(testSquare)).toEqual(true)
  })
})

describe('convertNumberToSquare()', () => {
  test('should return -1 for number = 123', () => {
    var number = 123
    expect(magicSquare.convertNumberToSquare(number)).toEqual(-1)
  })

  test('should return -1 for number = 1234', () => {
    var number = 1234
    var expectedArr = [[1, 2], [3, 4]]
    expect(magicSquare.convertNumberToSquare(number)).toEqual(expect.arrayContaining(expectedArr))
  })

  test('should return -1 for number = 123456', () => {
    var number = 123456
    expect(magicSquare.convertNumberToSquare(number)).toEqual(-1)
  })

  test('should return [[1, 2, 3], [4, 5, 6], [7, 8, 9]] for number = 123456789', () => {
    var number = 123456789
    var expectedArr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
    expect(magicSquare.convertNumberToSquare(number)).toEqual(expect.arrayContaining(expectedArr))
  })
})

describe('numberHasDuplicatesOrZeros()', () => {
  test('should return false for number = 123', () => {
    var number = 123
    expect(magicSquare.numberHasDuplicatesOrZeros(number)).toEqual(false)
  })

  test('should return true for number = 1233', () => {
    var number = 1233
    expect(magicSquare.numberHasDuplicatesOrZeros(number)).toEqual(true)
  })

  test('should return true for number = 1203', () => {
    var number = 1203
    expect(magicSquare.numberHasDuplicatesOrZeros(number)).toEqual(true)
  })

  test('should return false for number = 276951438', () => {
    var number = 276951438
    expect(magicSquare.numberHasDuplicatesOrZeros(number)).toEqual(false)
  })
})

describe('getStartingNumbers()', () => {
  test('should return startingNumber = 123456789 for square = [[0, 7, 6], [9, 5, 1], [4, 3, 8]]', () => {
    var square = [[0, 7, 6], [9, 5, 1], [4, 3, 8]]
    expect(magicSquare.getStartingNumbers(square).startingNumber).toEqual(123456789)
  })

  test('should return startingNumber = 1234 for square = [[1, 2], [3, 4]]', () => {
    var square = [[1, 2], [3, 4]]
    expect(magicSquare.getStartingNumbers(square).startingNumber).toEqual(1234)
  })

  test('should return 123456789 for square = [[0, 7, 6], [9, 5, 1], [4, 3, 8]]', () => {
    var square = [[0, 7, 6], [9, 5, 1], [4, 3, 8]]
    expect(magicSquare.getStartingNumbers(square).endingNumber).toEqual(999999999)
  })

  test('should return 1234 for square = [[1, 2], [3, 4]]', () => {
    var square = [[1, 2], [3, 4]]
    expect(magicSquare.getStartingNumbers(square).endingNumber).toEqual(9999)
  })
})

describe('convertSquareToNumber()', () => {
  test('should return  176951438 for square = [[1, 7, 6], [9, 5, 1], [4, 3, 8]]', () => {
    var square = [[1, 7, 6], [9, 5, 1], [4, 3, 8]]
    expect(magicSquare.convertSquareToNumber(square)).toEqual(176951438)
  })

})

describe('formingMagicSquare()', () => {
  test('should return  1 for square = square = [[4,9,2], [3,5,7], [8,1,5]]', () => {
    var square = [[4,9,2], [3,5,7], [8,1,5]]
    expect(magicSquare.formingMagicSquare(square)).toEqual(1)
  })

  test('should return  4 for square = square = [[4,9,2], [3,5,7], [8,1,5]]', () => {
    var square = [[4,8,2], [4,5,7], [6,1,6]]
    expect(magicSquare.formingMagicSquare(square)).toEqual(4)
  })

})


