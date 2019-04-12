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
  var size = square.length
  var i
  var j
  var sum = 0
  var magicSum = getMagicSum(square)
  var row
  // doRowsSumToMagicSum

  for (i = 0; i < size; i++) {
    row = square[i]

    for (j = 0; j < size; j++) {
      sum += row[j]
    }

    if (sum !== magicSum) {
      return false
    }
    sum = 0
  }

  // test down
  // test diagnol

  return true
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

module.exports = { isMagicSquare, isSquare, getMagicSum, doRowsSumToMagicSum }
