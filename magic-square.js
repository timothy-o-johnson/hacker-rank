/* We define a magic square to be an  n x n  matrix of distinct positive integers from 1 to n^2  where the sum of any row, column, or diagonal of length  is always equal to the same number: the magic constant.

You will be given a 3x3 matrix  of integers in the inclusive range [1, 9].
We can convert any digit a to any other digit b in the range [1, 9] at cost of |a - b|.
Given s, convert it into a magic square at minimal cost. Print this cost on a new line.

Note: The resulting magic square must contain distinct integers in the inclusive range [1, 9].

******** FUNCTION DESCRIPTION **********

Complete the formingMagicSquare function in the editor below.
It should return an integer that represents the minimal total cost of converting the input square to a magic square.

formingMagicSquare has the following parameter(s):

s: a 3 x 3 array of integers
Input Format

Each of the lines contains three space-separated integers of row .

Constraints

*/

function formingMagicSquare (s) {
  // check if magic square

  console.log(s)
}

function isMagicSquare (square) {
  var magicSum = getMagicSum(square)

  return (
    isSquare(square) &&
    doRowsSumToMagicSum(square, magicSum) &&
    doColumnsSumToMagicSum(square, magicSum) &&
    doDiagonalsSumToMagicSum(square, magicSum)
  )
}

function isSquare (square) {
  var n = square.length

  // test if square
  if (!Array.isArray(square)) {
    return false
  }

  for (var i = 0; i < n; i++) {
    var row = square[i]

    if (row.length !== n) {
      return false
    }
  }

  return true
}

function getMagicSum (square) {
  var magicNumber = 0
  var row = square[0]

  row.forEach(el => {
    return (magicNumber += el)
  })

  return magicNumber
}

function doRowsSumToMagicSum (square, magicSum) {
  var i
  var j
  var row
  var sum = 0

  for (i = 0; i < square.length; i++) {
    row = square[i]
    sum = 0
    for (j = 0; j < row.length; j++) {
      sum += row[j]
    }

    if (sum !== magicSum) {
      return false
    }
  }

  // make sure the sum is equal to magic sum
  return sum === magicSum
}

/**
 * returns false if all rows don't contain same number of columns
 * @param {*} square
 * @param {*} magicSum
 */
function doColumnsSumToMagicSum (square, magicSum) {
  var col
  var row
  var sum

  if (!isSquare(square)) {
    return false
  }

  for (col = 0; col < square[0].length; col++) {
    sum = 0
    for (row = 0; row < square.length; row++) {
      sum += square[row][col]
    }
    if (sum !== magicSum) {
      return false
    }
  }
  return sum === magicSum
}

function doDiagonalsSumToMagicSum (square, magicSum) {
  // var topLeft = 0
  // var topRight = square.length - 1
  var pos
  var pos2 = 0
  var diagonal1 = 0
  var diagonal2 = 0

  if (!isSquare(square)) {
    return false
  }
  // topLeft to bottomRight
  for (pos = 0; pos < square[0].length; pos++) {
    diagonal1 += square[pos][pos]
  }

  // topRight to bottomleft
  for (pos = square[0].length - 1; pos > -1; pos--) {
    diagonal2 += square[pos][pos2]
    pos2++
  }

  return diagonal1 === diagonal2 && magicSum === diagonal1
}

function squareHasDuplicatesOrZeros (square) {
  var duplObj = {}
  var val

  for (var row = 0; row < square.length; row++) {
    for (var col = 0; col < square.length; col++) {
      val = square[row][col]
      if (duplObj[val] || val === 0) {
        return true
      } else {
        duplObj[val] = true
      }
    }
  }
  return false
}

function convertNumberToSquare (number) {
  var numArr = []
  number = number.toString()
  var colSize = number.length
  colSize = Math.sqrt(colSize)
  var arrRow = []

  if (Number.isInteger(colSize)) {
    for (var digit = 0; digit < number.length; digit++) {
      arrRow.push(parseInt(number[digit]))
      if (arrRow.length === colSize) {
        numArr.push(arrRow)
        arrRow = []
      }
    }
  } else {
    numArr = -1
  }

  return numArr
}

var magicSum = 15
var testSquare = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
var number = 100000000

console.log('convertNumberToSquare(): ', convertNumberToSquare(number))

module.exports = {
  isMagicSquare,
  isSquare,
  getMagicSum,
  doRowsSumToMagicSum,
  doColumnsSumToMagicSum,
  doDiagonalsSumToMagicSum,
  squareHasDuplicatesOrZeros,
  convertNumberToSquare
}
