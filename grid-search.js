/* The Grid Search

Complete the gridSearch function in the editor below. It should return YES if the pattern exists in the grid, or NO otherwise.

gridSearch has the following parameter(s):

G: the grid to search, an array of strings
P: the pattern to search for, an array of strings */

// Complete the gridSearch function below.

function gridSearch (grid, pattern) {
  let i = 0
  let j = 0
  let str
  let regexp
  const numOfPatternRows = pattern.length
  let matchArr = []
  let row
  let col
  let matches
  let found = false

  for (i = 0; i < numOfPatternRows; i++) {
    regexp = RegExp(pattern[i], 'g')

    for (j = 0; j < grid.length; j++) {
      str = grid[j]

      while ((matches = regexp.exec(str)) !== null) {
        row = i
        col = regexp.lastIndex

        matchArr.push([row, col])
        console.log(`Found ${regexp} at row ${row} at ${col}.`)
      }
    }
  }

  console.log('matchArr', matchArr)
  let matchCount = 0

  for (i = 0; i < matchArr.length - 1; i++) {
    if (matchArr[i][1] === matchArr[i + 1][1]) {
      matchCount++
      found = matchCount === numOfPatternRows - 1
      if (found) {
        break
      }
    } else {
      matchCount = 0
    }
  }

  var solution = found ? 'YES' : 'NO'

  console.log(solution)
  return solution
}

var test_1 = {
  G: [
    '7283455864',
    '6731158619',
    '8988242643',
    '3830589324',
    '2229505813',
    '5633845374',
    '6473530293',
    '7053106601',
    '0834282956',
    '4607924137'
  ],

  P: ['9505', '3845', '3530']
}

const test_2 = {
  G: [
    '400453592126560',
    '114213133098692',
    '474386082879648',
    '522356951189169',
    '887109450487496',
    '252802633388782',
    '502771484966748',
    '075975207693780',
    '511799789562806',
    '404007454272504',
    '549043809916080',
    '962410809534811',
    '445893523733475',
    '768705303214174',
    '650629270887160'
  ],

  P: ['99', '99']
}

const test_3 = {
  G: ['123412', '561212', '123612', '781234'],

  P: ['12', '34']
}

const test_4 = {
  G: ['123', '456', '789', '781234'],

  P: ['45', '89']
}

const test_5 = {
  G: ['123412', '561212', '123634', '781288'],

  P: ['12', '34']
}

const test_6 = {
  G: [
    '111111111111111', 
    '111111111111111', 
    '111111011111111', 
    '111111111111111', 
    '111111111111111'],

  P: [
    '11111', 
    '11111', 
    '11110']
}
gridSearch(test_6.G, test_6.P)
